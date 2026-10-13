#!/usr/bin/env bash
# Fails if tnhc.dev would go out without its security headers, or with a policy
# that lets scripts run from anywhere but the site itself. Cloudflare Pages
# serves frontend/public/_headers (copied into the build) on every response.
set -euo pipefail
cd "$(dirname "$0")/.."
fail=0; bad(){ echo "FAIL: $*"; fail=1; }
H=frontend/public/_headers
[ -f "$H" ] || { echo "FAIL: $H is missing"; exit 1; }
for header in Content-Security-Policy Strict-Transport-Security X-Frame-Options \
  X-Content-Type-Options Referrer-Policy Permissions-Policy; do
  grep -q "^  $header: " "$H" || bad "$header is not set"
done
csp=$(sed -n 's/^  Content-Security-Policy: //p' "$H")
[[ "$csp" == *"script-src 'self';"* ]] || bad "scripts must come from the site only"
[[ "$csp" != *"unsafe-eval"* ]] || bad "unsafe-eval is not allowed"
[[ "$csp" == *"frame-ancestors 'none'"* ]] || bad "the site must not be framed"
[[ "$csp" == *"object-src 'none'"* ]] || bad "plugins must be off"
# Every host the site's code fetches from must be allowed, or that feature breaks.
for host in $(grep -rhoE 'https://[a-z0-9.-]+' frontend/src/components/site/PrivacyCheckBox.jsx | sort -u); do
  [[ "$csp" == *"$host"* ]] || bad "connect-src does not allow $host, which the privacy box fetches"
done
[ "$fail" = 0 ] && echo PASS || exit 1
