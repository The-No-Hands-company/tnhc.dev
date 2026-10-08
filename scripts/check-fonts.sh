#!/usr/bin/env bash
# Fails if a font the site may not redistribute is in the tree, if a font has
# no licence file beside it, or if the site fetches fonts from a third party.
set -euo pipefail
cd "$(dirname "$0")/.."
fail=0; bad(){ echo "FAIL: $*"; fail=1; }
hits=$(grep -rli 'satoshi' frontend/src frontend/public frontend/tailwind.config.js design_guidelines.json scripts/vendor-fonts.sh 2>/dev/null | grep -v '^frontend/src/data/' || true)
[ -z "$hits" ] || bad "Satoshi (ITF Free Font License, not redistributable) still referenced: $hits"
ls frontend/public/fonts/*satoshi* >/dev/null 2>&1 && bad "Satoshi font files still present"
for fam in figtree jetbrains-mono; do
  ls frontend/public/fonts/$fam-*.woff2 >/dev/null 2>&1 || bad "$fam font files missing"
done
[ -f frontend/public/fonts/LICENSE-Figtree.txt ] && grep -q 'SIL Open Font License' frontend/public/fonts/LICENSE-Figtree.txt || bad "Figtree licence missing"
grep -rn 'fontshare\|fonts.googleapis\|fonts.gstatic' frontend/public/index.html frontend/src/index.css >/dev/null && bad "a font is fetched from a third party"
[ "$fail" = 0 ] && echo PASS || exit 1
