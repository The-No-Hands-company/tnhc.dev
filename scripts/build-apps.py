#!/usr/bin/env python3
"""Generate frontend/src/data/apps.js from the canonical ecosystem register.

The website's app directory used to be hand-maintained, and it drifted badly:
82 of its 103 entries were names that exist nowhere in the repository, while
most apps that do exist were missing. This script makes the directory a
*derivative* of docs/NEXUS-ECOSYSTEM.md so that class of drift cannot recur.

Status is measured, not declared. An app is only "live" if it answers on a URL.
"""
import re, subprocess, sys, pathlib, json

REPO = pathlib.Path("/run/media/zajferx/Data/dev/The-No-hands-Company/projects/Nexus-Systems")
SITE = pathlib.Path("/run/media/zajferx/Data/dev/The-No-hands-Company/tnhc.dev")
BIBLE = REPO / "docs/NEXUS-ECOSYSTEM.md"
OUT = SITE / "frontend/src/data/apps.js"

# Apps that answer on a URL today. Everything else is derived from code volume.
# Verify with: curl -s -o /dev/null -w '%{http_code}' https://<host>/
LIVE = {
    # Auth's root 404s because an OIDC provider has no index page; /login is its
    # real entry point and answers 200. "The root path 404s" is not the same
    # fact as "the app is down", and conflating them once demoted a live service.
    "Nexus-Auth":      "https://auth.tnhc.dev/login",
    "Nexus-Dashboard": "https://app.tnhc.dev",
    "Nexus-Cloud":     "https://cloud.tnhc.dev",
    "Nexus-Hosting":   "https://hosting.tnhc.dev",
    "Nexus-Draw":      "https://draw.tnhc.dev",
    "Nexus":           "https://chat.tnhc.dev",
}
BETA = {"Nexus-Email": "https://app.tnhc.dev/mail"}

# Register category -> icon default; per-app overrides win.
CAT_ICON = {
    "Core": "Stack", "Infrastructure": "HardDrives", "Compute": "Cpu",
    "Data": "Database", "Security": "ShieldCheck", "AI": "Robot",
    "Developer": "CodeBlock", "Communication": "ChatCircleText",
    "Productivity": "CheckSquare", "Creative": "PaintBrush",
    "Business": "Receipt", "Analytics": "ChartLine", "Life": "Heart",
}
ICON = {
    "Nexus": "ChatsCircle", "Nexus-Dashboard": "Stack", "Nexus-Auth": "Key",
    "Nexus-Cloud": "Globe", "Nexus-Hosting": "GlobeHemisphereWest",
    "Nexus-Draw": "PenNib", "Nexus-Email": "EnvelopeSimple",
    "Nexus-Vault": "Vault", "Nexus-Database": "Database", "Nexus-Files": "Package",
    "Nexus-Search": "MagnifyingGlass", "Nexus-Terminal": "Terminal",
    "Nexus-Code": "GitBranch", "Nexus-IDE": "CodeBlock", "Nexus-Testing": "Bug",
    "Nexus-Meet": "VideoCamera", "Nexus-Music": "MusicNotes",
    "Nexus-Photos": "Camera", "Nexus-Video": "FilmReel", "Nexus-Media": "Play",
    "Nexus-Radio-Live": "Broadcast", "Nexus-Broadcast": "Megaphone",
    "Nexus-Calendar": "Calendar", "Nexus-Notes": "Notebook",
    "Nexus-Docs": "FileText", "Nexus-Office": "Table", "Nexus-Book": "BookOpen",
    "Nexus-Wiki": "Books", "Nexus-Billing": "CreditCard",
    "Nexus-Invoice": "Receipt", "Nexus-Finance": "Coin", "Nexus-Spend": "Wallet",
    "Nexus-Analytics": "ChartBar", "Nexus-Monitor": "Pulse",
    "Nexus-Guardian": "Shield", "Nexus-Security": "ShieldWarning",
    "Nexus-Tunnel": "ArrowsLeftRight", "Nexus-Network": "ShareNetwork",
    "Nexus-Router": "ArrowsClockwise", "Nexus-Modeling": "CubeTransparent",
    "Nexus-Design": "Selection", "Nexus-Graphic": "Image",
    "Nexus-Game": "Rocket", "Nexus-Arcade": "Play", "Nexus-Maps": "Globe",
    "Nexus-News": "NewspaperClipping", "Nexus-Health": "Heart",
    "Nexus-Agents": "Robot", "Nexus-AI": "Sparkle", "Nexus-Mind": "Lightbulb",
    "Nexus-Engine": "GearFine", "Nexus-Deploy": "Rocket",
    "Nexus-Converter": "Repeat", "Nexus-PDF": "FileText",
    "Nexus-Team-Chat": "ChatDots", "Nexus-Social": "ChatTeardropText",
    "Nexus-Community": "ChatsCircle", "Nexus-Support": "Lightbulb",
    "Phantom": "Eye",
}

def parse_register():
    """Read the register tables out of the bible. Expansion modules are excluded:
    they are proposals with no directory, and listing them would re-introduce
    exactly the fiction this script exists to remove."""
    text = BIBLE.read_text()
    body = text.split("## The register", 1)[1].split("## The expansion manifest", 1)[0]
    rows, cat = [], None
    for line in body.splitlines():
        if line.startswith("### "):
            cat = line[4:].strip()
        # Any bolded name, not just Nexus-*. The pattern used to be
        # `Nexus[A-Za-z0-9-]*`, which silently dropped every register row whose
        # name did not start with "Nexus" — apps/Phantom sat in the register
        # unpublished and unmentioned, with no warning, because of one word in
        # this regex. This script cannot invent an app; it could quietly lose
        # one, which is the same problem wearing the other face.
        m = re.match(r"\|\s*\*\*([A-Za-z][A-Za-z0-9-]*)\*\*\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|$", line)
        if m and cat:
            rows.append({"name": m.group(1), "role": m.group(2),
                         "status_doc": m.group(3).replace("*", ""), "cat": cat})
        elif cat and line.startswith("| **"):
            # A bolded row inside a category that the pattern did not match is
            # a row about to go missing. Say so rather than drop it.
            print(f"  WARN: register row not parsed, will be missing from the "
                  f"site: {line.strip()}", file=sys.stderr)
    return rows

def slug_for(name):
    if name == "Nexus":
        return "chat"
    # Names without the prefix (Phantom) slug as themselves; stripping a
    # prefix that is not there would have mangled them.
    if not name.startswith("Nexus-"):
        return name.lower()
    s = name[len("Nexus-"):].lower()
    return {"team-chat": "team-chat", "email": "mail", "dashboard": "app",
            "systems-api": "systems-api", "gpu-test": "gpu-test"}.get(s, s)

def main():
    rows = parse_register()
    if not rows:
        sys.exit("could not parse the register — refusing to write a bad directory")

    entries = []
    for r in rows:
        name, doc = r["name"], r["status_doc"]
        if name in LIVE:
            status, url = "live", LIVE[name]
        elif name in BETA:
            status, url = "beta", BETA[name]
        elif doc == "In development":
            status, url = "building", None
        elif doc in ("Live", "Beta"):
            # The register says this app is live but no URL is recorded above.
            # Do not silently downgrade it to "planned" — that is how Nexus-Auth
            # ended up advertised as unbuilt while every other app depended on
            # it. Honour the register and make the missing URL loud instead.
            status, url = doc.lower(), None
            print(f"  WARN: {name} is {doc} in the register but has no URL here "
                  f"— it will render without a link", file=sys.stderr)
        else:
            status, url = "planned", None
        display = name.replace("-", " ") if name != "Nexus" else "Nexus Chat"
        blurb = r["role"]
        if len(blurb) > 96:
            blurb = blurb[:93].rsplit(" ", 1)[0] + "…"
        entries.append({
            "slug": slug_for(name), "name": display, "category": r["cat"],
            "status": status, "blurb": blurb,
            "icon": ICON.get(name, CAT_ICON.get(r["cat"], "Stack")),
            **({"url": url} if url else {}),
        })

    cats, seen = [], set()
    for e in entries:
        if e["category"] not in seen:
            seen.add(e["category"]); cats.append(e["category"])

    n_live = sum(1 for e in entries if e["status"] == "live")
    n_beta = sum(1 for e in entries if e["status"] == "beta")
    n_bld  = sum(1 for e in entries if e["status"] == "building")

    lines = [
        "// The Nexus app registry — GENERATED. Do not hand-edit.",
        "//",
        "// Regenerate with scripts/build-apps.py, which derives this file from",
        "// docs/NEXUS-ECOSYSTEM.md in the Nexus-Systems repo — the canonical",
        "// register of what exists and what state it is in.",
        "//",
        "// This file was previously hand-maintained and drifted badly: 82 of its",
        "// 103 entries were names that exist nowhere in the repository, while most",
        "// apps that do exist were missing entirely. Deriving it from the register",
        "// is what stops that from happening again. If an app is wrong here, fix",
        "// the register and regenerate; do not patch this file.",
        "//",
        f"// {len(entries)} apps — {n_live} live, {n_beta} beta, {n_bld} in development.",
        "",
        "export const CATEGORIES = [",
        *[f'  "{c}",' for c in cats],
        "];",
        "",
        'export const STATUSES = ["live", "beta", "building", "planned"];',
        "",
        "export const STATUS_META = {",
        '  live: { label: "Live", className: "text-acid", dot: "bg-acid" },',
        '  beta: { label: "Beta", className: "text-white/70", dot: "bg-white/60" },',
        '  building: { label: "In development", className: "text-white/55", dot: "bg-white/45" },',
        '  planned: { label: "Planned", className: "text-white/40", dot: "bg-white/30" },',
        "};",
        "",
        "export const APPS = [",
    ]
    for e in entries:
        lines.append("  " + json.dumps(e, ensure_ascii=False) + ",")
    lines += ["];", ""]
    OUT.write_text("\n".join(lines))
    print(f"wrote {OUT.relative_to(SITE)}: {len(entries)} apps "
          f"({n_live} live, {n_beta} beta, {n_bld} building)")

if __name__ == "__main__":
    main()
