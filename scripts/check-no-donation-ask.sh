#!/usr/bin/env bash
# The Charter says we never ask for donations: the only mention allowed is the
# plain footer link. Dated blog posts are history and stay.
set -euo pipefail
cd "$(dirname "$0")/.."
hits=$(grep -rniE 'support the build|paypal' frontend/src --include=*.jsx --include=*.js \
  | grep -v 'frontend/src/data/' | grep -v 'components/site/SiteFooterLinks.jsx' || true)
[ -z "$hits" ] && echo PASS || { echo "FAIL: donation asks remain:"; echo "$hits"; exit 1; }
