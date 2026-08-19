"""Turn `git log` output into the site's changelog data file.

Only substantive types land here. A changelog carrying "chore: bump lockfile"
teaches a reader to stop reading it, and this one is meant to be read.

Input is `sha \x1f date \x1f subject`, optionally followed by `\x1f app` when
the commit came from a submodule. Most of the ecosystem's real work lives in
submodules — Chat, Cloud, Hosting, Vault and the rest — and reading only the
outer repository showed "chore: bump submodule" while the change itself, which
is the thing anyone would want to read about, never appeared.
"""
import collections
import json
import re
import sys

# Types that represent a real change to what the software does. `geom`,
# `harden`, `scene` and `sim` are the modeling kernel's own prefixes and are
# every bit as much a shipped change as a `feat` — excluding them under-
# reported the kernel's work by roughly a hundred commits.
KEEP = ("feat", "fix", "perf", "geom", "harden", "scene", "sim")
# Changes that are real commits but say nothing to somebody outside the project.
SKIP_WORDS = ("lockfile", "typo", "whitespace", "formatting", "rename", "wip")


# Scopes that name a release train rather than a part of the system. Several
# repositories use the scope for sprints and versions — feat(month7),
# fix(v0.8/08-03), feat(sprint4) — which is fine for them and useless here: the
# site turns areas into filter buttons, and "month7" tells a reader nothing
# about what the change touched.
_NOT_AN_AREA = re.compile(
    r"^(v?\d|month\d|sprint|sec\d|[A-Z]\d+$|.*/)", re.IGNORECASE
)


def area(subject: str, app: str = "") -> str:
    """Where the change happened.

    A commit's own scope wins when it is meaningful. Otherwise the submodule it
    came from is a better answer than "core", which would file every app's
    unscoped commits under one meaningless heading.
    """
    m = re.match(r"^\w+\(([^)]+)\)", subject)
    if m:
        scope = m.group(1).split(",")[0].strip()
        # Normalised: scopes arrive as "Chat View" and "chat" from different
        # repositories, and two spellings of one area make two buttons.
        scope = scope.lower().replace(" ", "-")
        if scope and not _NOT_AN_AREA.match(scope):
            return scope
    return app or "core"


def title(subject: str) -> str:
    t = re.sub(r"^\w+(\([^)]*\))?:\s*", "", subject).strip()
    return t[0].upper() + t[1:] if t else t


def main() -> None:
    rows = [l.split("\x1f") for l in sys.stdin.read().split("\n") if l.strip()]
    entries = []
    seen: set[str] = set()
    for row in rows:
        sha, date, subject = row[0], row[1], row[2]
        app = row[3] if len(row) > 3 else ""
        # A submodule bump and the commit it points at are the same change
        # described twice; and two submodules can share a commit if one was
        # ever forked from the other. First occurrence wins.
        if sha[:7] in seen:
            continue
        kind = re.match(r"^(\w+)", subject)
        if not kind or kind.group(1) not in KEEP:
            continue
        if any(w in subject.lower() for w in SKIP_WORDS):
            continue
        seen.add(sha[:7])
        entries.append(
            {
                "sha": sha[:7],
                "date": date,
                "kind": kind.group(1),
                "area": area(subject, app),
                "title": title(subject),
            }
        )

    print("// Generated from the Nexus-Systems commit history — do not hand-edit.")
    print("//")
    print("// Regenerate with scripts/build-changelog.sh")
    print("// Only substantive types appear (feat, fix, perf, geom, harden, scene,")
    print("// sim): a changelog full of lockfile bumps and CI tweaks")
    print("// teaches a reader to stop reading it, and this one is meant to be read.")
    print("//")
    print(f"// {len(entries)} entries, newest first.")
    print()
    print("export const CHANGELOG = " + json.dumps(entries, indent=2) + ";")
    print()
    print("export const CHANGELOG_AREAS = " + json.dumps(sorted({e["area"] for e in entries})) + ";")


if __name__ == "__main__":
    main()
