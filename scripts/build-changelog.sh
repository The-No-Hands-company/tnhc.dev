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

POSTS_OUT="frontend/src/data/commitPosts.js"

# The terse edition: one scannable line per change.
git -C "$REPO" log --pretty=format:'%H%x1f%ad%x1f%s' --date=short -600 \
  | python3 "$(dirname "$0")/build-changelog.py" > "$OUT"

# The long-form edition: commits whose message actually explains something.
# Both come from the same history, so the two views cannot contradict.
git -C "$REPO" log --pretty=format:'%H%x1f%ad%x1f%s%x1f%b%x1e' --date=short -400 \
  | python3 "$(dirname "$0")/build-commit-posts.py" > "$POSTS_OUT"

echo "Wrote $OUT ($(grep -c '"sha"' "$OUT") entries)"
echo "Wrote $POSTS_OUT ($(grep -c '"slug"' "$POSTS_OUT") posts)"
