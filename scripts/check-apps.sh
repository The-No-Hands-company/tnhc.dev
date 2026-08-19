#!/usr/bin/env bash
#
# App reality check — the half of the Webmaster's job that git cannot answer.
#
# Regenerating apps.js keeps the site matching the *register*. This checks the
# register against the *world*: apps claimed live must still answer, apps that
# gained real code should stop being called placeholders, and apps that appear
# in the repo must appear in the register.
#
# Exits 0 when everything agrees, 1 when something needs a human decision.
set -uo pipefail
cd "$(dirname "$0")/.."

REPO="${1:-../projects/Nexus-Systems}"
APPS=frontend/src/data/apps.js
BIBLE="$REPO/docs/NEXUS-ECOSYSTEM.md"
problems=0

echo "── liveness ──────────────────────────────────────────"
# Every app the site calls live or beta must answer. A 404 here is the exact
# failure that once put 71 dead apps on the front page.
python3 - "$APPS" <<'PY' > /tmp/nx-live.txt
import re, sys
src = open(sys.argv[1]).read()
for m in re.finditer(r'\{[^}]*?"slug":\s*"([^"]+)"[^}]*?"status":\s*"(live|beta)"[^}]*?"url":\s*"([^"]+)"[^}]*?\}', src):
    print(m.group(1), m.group(2), m.group(3))
PY
while read -r slug status url; do
    [ -z "${url:-}" ] && continue
    # `< /dev/null` matters: without it curl inherits the loop's stdin and eats
    # the remaining lines, so only the last app ever gets checked.
    code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "$url" < /dev/null 2>/dev/null)
    case "$code" in
        200|302|301|401|403) printf "  ok       %-12s %s (%s)\n" "$slug" "$url" "$code" ;;
        *) printf "  BROKEN   %-12s %s (%s) — claimed %s but does not answer\n" "$slug" "$url" "$code" "$status"; problems=1 ;;
    esac
done < /tmp/nx-live.txt

echo "── register vs repository ────────────────────────────"
if [ -f "$BIBLE" ]; then
    ls -d "$REPO"/apps/Nexus-*/ 2>/dev/null | sed 's#.*/apps/##;s#/##' | sort > /tmp/nx-disk.txt
    grep -oP '^\| \*\*\K(Nexus-[A-Za-z0-9-]+)(?=\*\*)' "$BIBLE" | sort -u > /tmp/nx-reg.txt
    # Expansion-manifest modules are proposals with no directory; they are listed
    # in the bible but must not be expected on disk.
    missing=$(comm -13 /tmp/nx-reg.txt /tmp/nx-disk.txt)
    if [ -n "$missing" ]; then
        echo "  NEW APPS in the repo but absent from the register:"
        echo "$missing" | sed 's/^/    /'
        echo "    -> add them to docs/NEXUS-ECOSYSTEM.md, then regenerate"
        problems=1
    else
        echo "  ok       every app on disk is in the register"
    fi
else
    echo "  SKIP     register not found at $BIBLE"; problems=1
fi

echo "── status drift ──────────────────────────────────────"
# An app that grew past the six-file scaffold floor is no longer a placeholder.
if [ -d "$REPO/apps" ]; then
    drift=0
    while read -r count name; do
        [ "$count" -le 6 ] && continue
        slug=$(echo "${name#Nexus-}" | tr 'A-Z' 'a-z')
        # Match status on the SAME entry. `grep -A2` spilled into neighbouring
        # apps and reported drift for entries that were already correct.
        if grep -q "\"slug\": \"$slug\"" "$APPS" 2>/dev/null; then
            if grep -o "{\"slug\": \"$slug\"[^}]*}" "$APPS" 2>/dev/null | grep -q '"status": "planned"'; then
                echo "  DRIFT    $name has real code but the site calls it planned"
                drift=1; problems=1
            fi
        fi
    done < <(for d in "$REPO"/apps/Nexus-*/; do
                n=$(basename "$d")
                c=$(find "$d" -type f \( -name '*.rs' -o -name '*.ts' -o -name '*.tsx' -o -name '*.py' -o -name '*.go' -o -name '*.jsx' \) \
                    -not -path '*/node_modules/*' -not -path '*/target/*' -not -path '*/dist/*' 2>/dev/null | wc -l)
                echo "$c $n"
             done)
    [ "$drift" = "0" ] && echo "  ok       no app is understated on the site"
fi

echo "──────────────────────────────────────────────────────"
[ "$problems" = "0" ] && echo "APPS: all clear" || echo "APPS: attention needed"
exit $problems
