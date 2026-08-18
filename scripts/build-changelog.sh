#!/usr/bin/env bash
#
# Regenerate the public changelog from the Nexus-Systems commit history.
#
# The site's changelog is generated, never hand-written, so it cannot drift from
# what the code actually does — a hand-maintained changelog is a second source
# of truth that is wrong the first time somebody forgets to update it.
#
# Usage:  scripts/build-changelog.sh [path-to-nexus-systems-repo]
set -euo pipefail

REPO="${1:-../projects/Nexus-Systems}"
OUT="frontend/src/data/changelog.js"

if [ ! -d "$REPO/.git" ]; then
    echo "Not a git repository: $REPO" >&2
    echo "Pass the path to the Nexus-Systems checkout as the first argument." >&2
    exit 1
fi

git -C "$REPO" log --pretty=format:'%H%x1f%ad%x1f%s' --date=short -600 \
  | python3 "$(dirname "$0")/build-changelog.py" > "$OUT"

echo "Wrote $OUT ($(grep -c '"sha"' "$OUT") entries)"
