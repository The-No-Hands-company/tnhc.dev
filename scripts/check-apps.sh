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
# Any of these means the app answered. 401/403 count: the app is up and
# enforcing auth, which is not an outage.
answered() { case "$1" in 200|301|302|401|403) return 0 ;; *) return 1 ;; esac; }

probe() {
    # `< /dev/null` matters: without it curl inherits the loop's stdin and eats
    # the remaining lines, so only the last app ever gets checked.
    curl -s -o /dev/null -w '%{http_code}' --max-time 15 "$1" < /dev/null 2>/dev/null
}

while read -r slug status url; do
    [ -z "${url:-}" ] && continue
    code=$(probe "$url")
    if ! answered "$code"; then
        # One failure is not an outage. This check ran while the machine was
        # saturated by its own filesystem scan and reported two healthy apps as
        # BROKEN — a monitor that cries wolf under local load teaches you to
        # ignore it, which is worse than not checking at all. Retry once, after
        # a pause, before saying anything alarming.
        sleep 3
        code=$(probe "$url")
    fi
    if answered "$code"; then
        printf "  ok       %-12s %s (%s)\n" "$slug" "$url" "$code"
    elif [ "$code" = "000" ]; then
        # No HTTP response at all, twice. Could still be this machine rather
        # than the app, so it is reported as unreachable-from-here, not as the
        # app being broken.
        printf "  UNREACHABLE %-9s %s — no response from this host (twice)\n" "$slug" "$url"
        problems=1
    else
        printf "  BROKEN   %-12s %s (%s) — claimed %s but answers with an error\n" "$slug" "$url" "$code" "$status"
        problems=1
    fi
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
    # One traversal, not one per app. Running `find` separately for each of the
    # 112 app directories took roughly four minutes on this volume — long enough
    # that a loop pass felt hung. A single pass, tallied per directory, does the
    # same work in about a second.
    #
    # -prune, not -not -path. The filter form excludes node_modules from find's
    # OUTPUT but still walks every file inside it — across 112 apps that is the
    # difference between seconds and minutes, and it is why a loop pass looked
    # hung even after the per-app finds were collapsed into one traversal.
    done < <(find "$REPO/apps" \
                \( -name node_modules -o -name target -o -name dist -o -name .git \) -prune -o \
                -type f \( -name '*.rs' -o -name '*.ts' -o -name '*.tsx' -o -name '*.py' \
                           -o -name '*.go' -o -name '*.jsx' \) -print 2>/dev/null \
             | sed "s#^$REPO/apps/##" | cut -d/ -f1 | grep '^Nexus-' | sort | uniq -c)
    [ "$drift" = "0" ] && echo "  ok       no app is understated on the site"
fi

echo "──────────────────────────────────────────────────────"
[ "$problems" = "0" ] && echo "APPS: all clear" || echo "APPS: attention needed"
exit $problems
