"""Turn `git log` output into the site's changelog data file.

Only `feat` and `fix` land here. A changelog carrying "chore: bump lockfile"
teaches a reader to stop reading it, and this one is meant to be read.
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


def area(subject: str) -> str:
    m = re.match(r"^\w+\(([^)]+)\)", subject)
    return (m.group(1) if m else "core").split(",")[0].strip()


def title(subject: str) -> str:
    t = re.sub(r"^\w+(\([^)]*\))?:\s*", "", subject).strip()
    return t[0].upper() + t[1:] if t else t


def main() -> None:
    rows = [l.split("\x1f") for l in sys.stdin.read().split("\n") if l.strip()]
    entries = []
    for sha, date, subject in rows:
        kind = re.match(r"^(\w+)", subject)
        if not kind or kind.group(1) not in KEEP:
            continue
        if any(w in subject.lower() for w in SKIP_WORDS):
            continue
        entries.append(
            {
                "sha": sha[:7],
                "date": date,
                "kind": kind.group(1),
                "area": area(subject),
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
