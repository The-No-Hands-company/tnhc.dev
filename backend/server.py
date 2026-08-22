from fastapi import FastAPI, APIRouter, HTTPException, Header, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import asyncio


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend config (optional — guarded so a missing key never breaks signup)
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
ADMIN_EMAIL = os.environ.get("ADMIN_EMAIL", "")
NOTIFY_FROM = os.environ.get("NOTIFY_FROM", "TNHC Kernel <kernel@tnhc.dev>")
ADMIN_API_TOKEN = os.environ.get("ADMIN_API_TOKEN", "")
if RESEND_API_KEY:
    try:
        import resend as _resend
        _resend.api_key = RESEND_API_KEY
        resend_client = _resend
    except ImportError:
        logging.getLogger(__name__).warning("resend sdk not installed — email notifications disabled")
        resend_client = None
else:
    resend_client = None

# Create the main app without a prefix
app = FastAPI(title="The No Hands Company API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")
admin_router = APIRouter(prefix="/api/admin")


def _verify_admin(authorization: Optional[str]) -> None:
    """Validate the bearer token against ADMIN_API_TOKEN env var."""
    if not ADMIN_API_TOKEN:
        raise HTTPException(status_code=503, detail="Admin API not configured (ADMIN_API_TOKEN unset).")
    if not authorization or not authorization.lower().startswith("bearer "):
        raise HTTPException(status_code=401, detail="Missing bearer token.")
    token = authorization.split(" ", 1)[1].strip()
    if token != ADMIN_API_TOKEN:
        raise HTTPException(status_code=403, detail="Invalid admin token.")


def _send_signup_notification(entry_email: str, entry_node: Optional[str], entry_id: str) -> None:
    """Send admin a notification email about a new waitlist signup.

    Runs in the background and MUST NOT raise — a Resend failure must not break
    the signup flow. Uses resend's blocking SDK inside a thread via asyncio.
    """
    if not resend_client or not ADMIN_EMAIL:
        return
    subject = "New waitlist signup // TNHC kernel"
    body = (
        "A new operator joined the Nexus waitlist.\n\n"
        f"  email : {entry_email}\n"
        f"  node  : {entry_node or '—'}\n"
        f"  id    : {entry_id}\n\n"
        "— kernel // no hands on the keyboard"
    )
    try:
        resend_client.Emails.send({
            "from": NOTIFY_FROM,
            "to": [ADMIN_EMAIL],
            "subject": subject,
            "text": body,
        })
    except Exception as exc:  # noqa: BLE001 — we want every failure logged, never raised
        logging.getLogger(__name__).warning("Resend notification failed: %s", exc)



# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class WaitlistCreate(BaseModel):
    email: EmailStr
    name: Optional[str] = None
    node: Optional[str] = None  # optional: user's self-hosted node domain


class WaitlistEntry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    name: Optional[str] = None
    node: Optional[str] = None
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "The No Hands Company // kernel online"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/waitlist", response_model=WaitlistEntry)
async def join_waitlist(input: WaitlistCreate):
    email = input.email.lower().strip()
    existing = await db.waitlist.find_one({"email": email}, {"_id": 0})
    if existing:
        raise HTTPException(status_code=409, detail="This email is already on the waitlist.")
    entry = WaitlistEntry(email=email, name=input.name, node=input.node)
    await db.waitlist.insert_one(entry.model_dump())
    # Fire-and-forget admin notification — non-blocking, errors silenced
    loop = asyncio.get_event_loop()
    loop.run_in_executor(None, _send_signup_notification, email, input.node, entry.id)
    return entry


@api_router.get("/waitlist/count")
async def waitlist_count():
    count = await db.waitlist.count_documents({})
    return {"count": count}


# ---------- Admin ----------
@admin_router.get("/signups")
async def admin_signups(
    authorization: Optional[str] = Header(None),
    limit: int = Query(100, ge=1, le=1000),
    offset: int = Query(0, ge=0),
):
    """List waitlist signups (admin-only, bearer token via ADMIN_API_TOKEN)."""
    _verify_admin(authorization)
    cursor = (
        db.waitlist.find({}, {"_id": 0})
        .sort("created_at", -1)
        .skip(offset)
        .limit(limit)
    )
    entries = await cursor.to_list(limit)
    total = await db.waitlist.count_documents({})
    return {"total": total, "limit": limit, "offset": offset, "entries": entries}


# Include the routers in the main app
app.include_router(api_router)
app.include_router(admin_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
