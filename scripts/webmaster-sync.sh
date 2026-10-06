#!/usr/bin/env bash
#
# Nexus Systems Webmaster — keep tnhc.dev in sync with what actually exists.
#
# The website drifted badly once already: it advertised 73 apps as live while 71
# of them 404'd, and its directory listed 82 app names that exist nowhere in the
# repository. Both happened because the site's content was hand-maintained
# alongside the truth instead of derived from it. This script derives it.
#
# It regenerates every generated file, reports what changed, and exits non-zero
# only on real failure — "nothing changed" is a success, and the common case.
#
# Usage: scripts/webmaster-sync.sh [path-to-nexus-systems-repo]
#        scripts/webmaster-sync.sh --check   # report drift, change nothing
set -uo pipefail

cd "$(dirname "$0")/.."
REPO="${1:-../projects/Nexus-Systems}"
CHECK=0
[ "${1:-}" = "--check" ] && { CHECK=1; REPO="../projects/Nexus-Systems"; }

GEN=(frontend/src/data/changelog.js frontend/src/data/commitPosts.js frontend/src/data/apps.js frontend/src/data/apis.js frontend/src/data/charter.js frontend/src/data/phantomStatus.js)

if [ ! -d "$REPO/.git" ]; then
    echo "FAIL: not a git repository: $REPO" >&2
    exit 1
fi

# Work from the current upstream, not a stale local checkout — otherwise the
# site reports yesterday's commits and looks healthy doing it.
git -C "$REPO" fetch --quiet origin 2>/dev/null || echo "WARN: could not fetch $REPO; using local history"

before=$(md5sum "${GEN[@]}" 2>/dev/null || true)

bash scripts/build-changelog.sh "$REPO" >/dev/null || { echo "FAIL: changelog generation" >&2; exit 1; }
python3 scripts/build-apps.py     >/dev/null || { echo "FAIL: app directory generation" >&2; exit 1; }
python3 scripts/build-apis.py     >/dev/null || { echo "FAIL: API directory generation" >&2; exit 1; }
HANDBOOK="${HANDBOOK:-../handbook}"
[ -d "$HANDBOOK/.git" ] || git clone --quiet https://github.com/The-No-Hands-company/handbook.git "$HANDBOOK"
git -C "$HANDBOOK" pull --quiet --ff-only origin main || echo "WARN: could not update handbook; using local copy"
python3 scripts/build-markdown-page.py --repo "$HANDBOOK" --file charter.md \
    --out frontend/src/data/charter.js --export CHARTER \
    --source https://github.com/The-No-Hands-company/handbook/blob/main/charter.md \
    || { echo "FAIL: charter generation" >&2; exit 1; }
python3 scripts/build-markdown-page.py --repo "$REPO/apps/Phantom" --file STATUS.md \
    --out frontend/src/data/phantomStatus.js --export PHANTOM_STATUS \
    --source https://github.com/The-No-Hands-company/Phantom/blob/main/STATUS.md \
    || { echo "FAIL: Phantom status generation" >&2; exit 1; }

after=$(md5sum "${GEN[@]}" 2>/dev/null || true)

entries=$(grep -c '"sha"' frontend/src/data/changelog.js   2>/dev/null || echo 0)
posts=$(grep   -c '"sha"' frontend/src/data/commitPosts.js 2>/dev/null || echo 0)
apps=$(grep    -c '"slug"' frontend/src/data/apps.js       2>/dev/null || echo 0)
head=$(git -C "$REPO" log -1 --format='%h %s' 2>/dev/null)

# The apps are half the job and git cannot answer for them: a live app can go
# down without a single commit landing, and a new app can appear in the repo
# without the site ever hearing about it.
echo
bash scripts/check-apps.sh "$REPO" || echo "NOTE: app check reported problems (above) — these need a decision, not a regeneration"
echo

echo "upstream HEAD : $head"
echo "changelog     : $entries entries"
echo "blog posts    : $posts"
echo "app directory : $apps apps"

if [ "$before" = "$after" ]; then
    echo "STATUS: in sync — nothing to publish"
    exit 0
fi

echo "STATUS: DRIFT — generated content changed"
git --no-pager diff --stat -- "${GEN[@]}"

if [ "$CHECK" = "1" ]; then
    echo "(--check: restoring, publishing nothing)"
    git checkout -- "${GEN[@]}" 2>/dev/null
    exit 0
fi

echo "Run a build and commit to publish. This script does not push on its own —"
echo "publishing is a deliberate act, and an unattended push of a broken build is"
echo "worse than a stale site."
