"""Turn substantial commits into blog posts.

The changelog and the blog answer different questions. The changelog is "what
changed", one scannable line each. This is "why", and the commit bodies in this
project already contain that — the reasoning, the trade-offs, and the bugs found
along the way — so the blog is generated rather than written twice.

Only commits with a real body become posts. A one-line commit makes a terrible
blog post, and padding it out would mean inventing prose the commit never said.
"""
import json
import re
import sys

# A body shorter than this is a note, not an article.
MIN_BODY = 240
KEEP = ("feat", "fix", "docs", "refactor", "perf")


def slugify(text: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s[:60].rstrip("-")


def area_of(subject: str) -> str:
    m = re.match(r"^\w+\(([^)]+)\)", subject)
    return (m.group(1) if m else "core").split(",")[0].strip()


def title_of(subject: str) -> str:
    t = re.sub(r"^\w+(\([^)]*\))?:\s*", "", subject).strip()
    return t[0].upper() + t[1:] if t else t


# Hosts that appear in commit prose but are not part of this project and never
# resolved publicly: scratch probes and a domain used before tnhc.dev was
# registered. A commit message is an engineering note, but the blog is a public
# page, and printing an address that goes nowhere invites someone to try it.
# The surrounding sentence is kept; only the dead address is generalised.
DEAD_HOSTS = {
    "https://echo.tnhc.dev/probe": "a scratch test route",
    "echo.tnhc.dev/probe": "a scratch test route",
    "echo.tnhc.dev": "a scratch test host",
}


def scrub(text: str) -> str:
    """Replace references to hosts that do not exist in this project."""
    for dead, replacement in DEAD_HOSTS.items():
        text = text.replace(dead, replacement)
    return text


def to_blocks(body: str):
    """Commit body -> the content blocks the blog renderer already understands."""
    blocks = []
    bullets = []

    def flush():
        if bullets:
            blocks.append({"type": "list", "items": bullets.copy()})
            bullets.clear()

    for para in re.split(r"\n\s*\n", body.strip()):
        para = para.strip()
        if not para:
            continue
        # Trailers are metadata, not prose.
        if re.match(r"^(Co-Authored-By|Signed-off-by|Refs?):", para, re.I):
            continue

        lines = [l.strip() for l in para.split("\n")]
        if all(l.startswith(("- ", "* ")) for l in lines if l):
            bullets.extend(re.sub(r"^[-*]\s*", "", l) for l in lines if l)
            continue
        flush()

        # A short line that ends without punctuation reads as a heading, which
        # is how these commit bodies are actually written.
        joined = " ".join(lines)
        if len(joined) < 70 and not joined.endswith((".", ":", "?", "!")):
            blocks.append({"type": "h", "text": scrub(joined.strip("*"))})
        else:
            blocks.append({"type": "p", "text": scrub(joined)})
    flush()
    return blocks


def main() -> None:
    raw = sys.stdin.read()
    posts = []
    seen = set()

    for chunk in raw.split("\x1e"):
        if not chunk.strip():
            continue
        parts = chunk.split("\x1f")
        if len(parts) < 4:
            continue
        sha, date, subject, body = parts[0].strip(), parts[1], parts[2], parts[3]
        # Optional 5th field: the submodule a commit came from. Most of the
        # ecosystem's work lives in submodules, and reading only the outer
        # repository published "chore: bump submodule" while the reasoning
        # worth reading stayed invisible.
        app = parts[4].strip() if len(parts) > 4 else ""

        kind = re.match(r"^(\w+)", subject)
        if not kind or kind.group(1) not in KEEP:
            continue
        body = body.strip()
        if len(body) < MIN_BODY:
            continue

        title = title_of(subject)
        slug = slugify(title) or sha[:7]
        if slug in seen:
            slug = f"{slug}-{sha[:7]}"
        seen.add(slug)

        blocks = to_blocks(body)
        words = sum(len(b.get("text", "").split()) for b in blocks)
        words += sum(len(" ".join(b.get("items", [])).split()) for b in blocks)

        # The first paragraph is the excerpt: commit bodies lead with the point.
        first = next((b["text"] for b in blocks if b["type"] == "p"), title)

        posts.append({
            "slug": slug,
            "title": title,
            "date": date,
            "author": "The Kernel",
            "readTime": f"{max(1, round(words / 200))} min",
            "tags": [t for t in [kind.group(1), area_of(subject), app] if t],
            "category": "Commit",
            "excerpt": scrub(first[:220]),
            "sha": sha[:7],
            "content": blocks,
        })

    print("// Generated from the Nexus-Systems commit history — do not hand-edit.")
    print("//")
    print("// Regenerate with scripts/build-changelog.sh")
    print("//")
    print("// Every commit whose message actually explains something becomes a post.")
    print("// The changelog answers 'what changed'; these answer 'why', and the")
    print("// reasoning already exists in the commit rather than being written twice.")
    print("//")
    print(f"// {len(posts)} posts, newest first.")
    print()
    print("export const COMMIT_POSTS = " + json.dumps(posts, indent=2) + ";")


if __name__ == "__main__":
    main()
