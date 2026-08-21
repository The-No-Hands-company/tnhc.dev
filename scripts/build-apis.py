#!/usr/bin/env python3
"""Generate the API directory from the register plus live probes.

Two rules, both learned the hard way in this repo:

1. Names and statuses come from docs/NEXUS-ECOSYSTEM.md, the same register the
   apps directory is built from. Nothing is typed in twice.

2. Every endpoint listed here is *probed at build time*. If it does not answer,
   it is recorded as unreachable rather than published as though it works. A
   documentation page that lists endpoints nobody verified is exactly the kind
   of confident fiction this project keeps finding in its own docs.

Run via scripts/webmaster-sync.sh, which regenerates and rebuilds together.
"""
import json
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BIBLE = ROOT.parent / "projects" / "Nexus-Systems" / "docs" / "NEXUS-ECOSYSTEM.md"
OUT = ROOT / "frontend" / "src" / "data" / "apis.js"

TIMEOUT = 12

# The API surfaces this project actually exposes. Base URLs and auth are facts
# about deployed services, not derivable from the register, so they live here —
# but every `probe` below is checked against the running system, so a wrong
# entry shows up as unreachable instead of becoming a false promise.
SURFACES = [
    {
        "app": "Nexus-Hosting", "slug": "hosting",
        "base": "https://hosting.tnhc.dev/api",
        "auth": "Public reads. Writes need `Authorization: Bearer fh_<token>` "
                "with a read/write/deploy/admin scope, or a browser session.",
        "spec": "lib/api-spec/openapi.yaml in the Nexus-Hosting repo — not served over HTTP.",
        "probes": [
            ("GET", "/sites", "Every site this node hosts."),
            ("GET", "/nodes", "Federation peers this node knows."),
            ("GET", "/nodes/1", "One node by id."),
        ],
    },
    {
        "app": "Nexus-Cloud", "slug": "cloud",
        "base": "https://cloud.tnhc.dev/api/v1",
        "auth": "Public reads. Registration and policy writes need an operator key.",
        "spec": None,
        "probes": [
            ("GET", "/tools", "Registry of every app Cloud knows about."),
            ("GET", "/topology", "What each app exposes and consumes."),
        ],
    },
    {
        "app": "Nexus-Dashboard", "slug": "app",
        "base": "https://app.tnhc.dev/api",
        "auth": "Public read. The shell uses this to build the app grid.",
        "spec": None,
        "probes": [
            ("GET", "/apps", "The app directory the shell renders."),
        ],
    },
    {
        "app": "Nexus-Auth", "slug": "auth",
        "base": "https://auth.tnhc.dev",
        "auth": "OpenID Connect. Start at the discovery document.",
        "spec": None,
        "probes": [
            ("GET", "/.well-known/openid-configuration", "OIDC discovery — endpoints, scopes, algorithms."),
        ],
    },
    {
        "app": "Nexus", "slug": "chat",
        "base": "https://chat.tnhc.dev/api/v1",
        "auth": "Session required. Unauthenticated requests redirect to auth.tnhc.dev.",
        "spec": None,
        "probes": [("GET", "/health", "Service health.")],
    },
    {
        "app": "Nexus-Draw", "slug": "draw",
        "base": "https://draw.tnhc.dev/api/v1/draw",
        "auth": "Session required. Unauthenticated requests redirect to auth.tnhc.dev.",
        "spec": None,
        "probes": [("GET", "/boards", "Boards visible to the signed-in user.")],
    },
]


def register_status():
    """Map app name -> status, straight from the register."""
    if not BIBLE.exists():
        sys.exit(f"register not found at {BIBLE} — refusing to write a directory it cannot back up")
    body = BIBLE.read_text().split("## The register", 1)[1].split("## The expansion manifest", 1)[0]
    out = {}
    for line in body.splitlines():
        m = re.match(r"\|\s*\*\*([A-Za-z][A-Za-z0-9-]*)\*\*\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|$", line)
        if m:
            out[m.group(1)] = {"role": m.group(2), "status": m.group(3).replace("*", "")}
    return out


def probe(url):
    """Return (status, content_type). Never raises — an unreachable endpoint is data."""
    req = urllib.request.Request(url, method="GET", headers={"User-Agent": "tnhc-api-docs-builder"})
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            return r.status, (r.headers.get("Content-Type") or "").split(";")[0]
    except urllib.error.HTTPError as e:
        return e.code, (e.headers.get("Content-Type") or "").split(";")[0] if e.headers else ""
    except Exception:
        return 0, ""


def main():
    reg = register_status()
    entries, unreachable = [], 0

    for s in SURFACES:
        info = reg.get(s["app"])
        if not info:
            print(f"  WARN: {s['app']} is not in the register — skipping rather than "
                  f"publishing an API for an app the bible does not list", file=sys.stderr)
            continue

        endpoints = []
        for method, path, desc in s["probes"]:
            code, ctype = probe(s["base"] + path)
            # 2xx answered; 3xx means it exists but wants a session; 401/403 the
            # same. Anything else is not something to advertise.
            reachable = code and (code < 400 or code in (401, 403))
            if not reachable:
                unreachable += 1
                print(f"  WARN: {s['base']}{path} answered {code or 'nothing'} — "
                      f"listed as unreachable", file=sys.stderr)
            endpoints.append({
                "method": method, "path": path, "desc": desc,
                "status": code, "contentType": ctype, "reachable": bool(reachable),
            })

        entries.append({
            "app": s["app"], "slug": s["slug"], "name": s["app"].replace("Nexus-", "Nexus "),
            "role": info["role"], "registerStatus": info["status"],
            "base": s["base"], "auth": s["auth"], "spec": s["spec"],
            "endpoints": endpoints,
        })

    if not entries:
        sys.exit("no API surfaces resolved — refusing to write an empty directory")

    header = (
        "// Generated by scripts/build-apis.py — do not hand-edit.\n"
        "//\n"
        "// App names, roles and statuses come from docs/NEXUS-ECOSYSTEM.md. Every\n"
        "// endpoint below was probed at build time; `reachable: false` means it did\n"
        "// not answer and the page says so rather than pretending otherwise.\n"
        f"//\n// {len(entries)} API surfaces, "
        f"{sum(len(e['endpoints']) for e in entries)} endpoints, "
        f"{unreachable} unreachable at build time.\n\n"
    )
    OUT.write_text(header + "export const APIS = " + json.dumps(entries, indent=2) + ";\n")
    print(f"wrote {OUT.relative_to(ROOT)}: {len(entries)} surfaces, "
          f"{sum(len(e['endpoints']) for e in entries)} endpoints, {unreachable} unreachable")


if __name__ == "__main__":
    main()
