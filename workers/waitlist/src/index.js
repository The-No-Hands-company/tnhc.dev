// Waitlist API for tnhc.dev.
//
// Replaces backend/server.py's waitlist routes with a Cloudflare Worker + D1,
// so signups keep working when the Nexus node is down. Same contract as the
// FastAPI version, so the frontend form needs no changes:
//
//   POST /api/waitlist            {email, name?, node?} -> entry | 409/422 {detail}
//   GET  /api/waitlist/count      -> {count}
//   GET  /api/admin/signups       Bearer ADMIN_API_TOKEN, ?limit&offset -> {total, limit, offset, entries}
//
// The Worker is mounted on tnhc.dev/api/waitlist* and tnhc.dev/api/admin/*
// routes; everything else on tnhc.dev stays on Cloudflare Pages.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL = 254;
const MAX_FIELD = 200;

const SCHEMA = `CREATE TABLE IF NOT EXISTS waitlist (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  node TEXT,
  created_at TEXT NOT NULL
)`;

let schemaReady = false;

async function ensureSchema(db) {
  if (schemaReady) return;
  await db.prepare(SCHEMA).run();
  schemaReady = true;
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

const detail = (status, message) => json({ detail: message }, status);

function optionalField(value) {
  if (value == null) return null;
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (trimmed.length > MAX_FIELD) return undefined;
  return trimmed || null;
}

async function joinWaitlist(request, env) {
  let input;
  try {
    input = await request.json();
  } catch {
    return detail(422, "Request body must be JSON.");
  }

  const email = typeof input?.email === "string" ? input.email.trim().toLowerCase() : "";
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) {
    return detail(422, "Enter a valid email address.");
  }
  const name = optionalField(input.name);
  const node = optionalField(input.node);
  if (name === undefined || node === undefined) {
    return detail(422, `Name and node must be text up to ${MAX_FIELD} characters.`);
  }

  const entry = {
    id: crypto.randomUUID(),
    email,
    name,
    node,
    created_at: new Date().toISOString(),
  };

  const result = await env.DB.prepare(
    "INSERT INTO waitlist (id, email, name, node, created_at) VALUES (?, ?, ?, ?, ?) ON CONFLICT(email) DO NOTHING",
  )
    .bind(entry.id, entry.email, entry.name, entry.node, entry.created_at)
    .run();

  if (result.meta.changes === 0) {
    return detail(409, "This email is already on the waitlist.");
  }
  return json(entry);
}

async function waitlistCount(env) {
  const row = await env.DB.prepare("SELECT COUNT(*) AS count FROM waitlist").first();
  return json({ count: row.count });
}

async function tokensMatch(given, expected) {
  const encoder = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(given)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ]);
  return crypto.subtle.timingSafeEqual(a, b);
}

async function adminSignups(request, env, url) {
  if (!env.ADMIN_API_TOKEN) {
    return detail(503, "Admin API not configured (ADMIN_API_TOKEN unset).");
  }
  const auth = request.headers.get("authorization") || "";
  if (!auth.toLowerCase().startsWith("bearer ")) {
    return detail(401, "Missing bearer token.");
  }
  if (!(await tokensMatch(auth.slice(7).trim(), env.ADMIN_API_TOKEN))) {
    return detail(403, "Invalid admin token.");
  }

  const limit = Number(url.searchParams.get("limit") ?? 100);
  const offset = Number(url.searchParams.get("offset") ?? 0);
  if (!Number.isInteger(limit) || limit < 1 || limit > 1000 || !Number.isInteger(offset) || offset < 0) {
    return detail(422, "limit must be 1-1000 and offset must be 0 or more.");
  }

  const [{ results }, total] = await Promise.all([
    env.DB.prepare("SELECT id, email, name, node, created_at FROM waitlist ORDER BY created_at DESC LIMIT ? OFFSET ?")
      .bind(limit, offset)
      .all(),
    env.DB.prepare("SELECT COUNT(*) AS count FROM waitlist").first("count"),
  ]);
  return json({ total, limit, offset, entries: results });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "");
    const route = `${request.method} ${path}`;

    try {
      await ensureSchema(env.DB);
      switch (route) {
        case "POST /api/waitlist":
          return await joinWaitlist(request, env);
        case "GET /api/waitlist/count":
          return await waitlistCount(env);
        case "GET /api/admin/signups":
          return await adminSignups(request, env, url);
      }
      if (["/api/waitlist", "/api/waitlist/count", "/api/admin/signups"].includes(path)) {
        return detail(405, "Method not allowed.");
      }
      return detail(404, "Not found.");
    } catch (err) {
      console.error("waitlist error", err);
      return detail(500, "Something went wrong. Try again.");
    }
  },
};
