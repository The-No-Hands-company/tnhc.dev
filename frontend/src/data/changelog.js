// Generated from the Nexus-Systems commit history — do not hand-edit.
//
// Regenerate with scripts/build-changelog.sh
// Only substantive types appear (feat, fix, perf, geom, harden, scene,
// sim): a changelog full of lockfile bumps and CI tweaks
// teaches a reader to stop reading it, and this one is meant to be read.
//
// 520 entries, newest first.

export const CHANGELOG = [
  {
    "sha": "672c021",
    "date": "2026-08-19",
    "kind": "fix",
    "area": "shell",
    "title": "Survive a bundle newer than the server, and give biome a config"
  },
  {
    "sha": "9b1bff1",
    "date": "2026-08-19",
    "kind": "feat",
    "area": "shell",
    "title": "One URL scheme \u2014 the path names the app, not how it is delivered"
  },
  {
    "sha": "00c4ab4",
    "date": "2026-08-19",
    "kind": "feat",
    "area": "shell",
    "title": "Show Nexus Mail in the app launcher and grid"
  },
  {
    "sha": "64d0427",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "mail",
    "title": "Send attachments, and reply from the reader"
  },
  {
    "sha": "224c26d",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "mail",
    "title": "Conversations, attachment downloads, and safe HTML"
  },
  {
    "sha": "057f467",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "email",
    "title": "IMAP4rev1, so ordinary mail clients can use a Nexus mailbox"
  },
  {
    "sha": "f558604",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "email",
    "title": "The SMTP daemon, and deploy.sh starts it"
  },
  {
    "sha": "60e4f05",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "email",
    "title": "Authenticate inbound mail at the SMTP door"
  },
  {
    "sha": "94a0c98",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "email",
    "title": "SPF evaluation and DMARC alignment"
  },
  {
    "sha": "b9ef62e",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "email",
    "title": "DKIM signing and verification"
  },
  {
    "sha": "40a6b18",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "email",
    "title": "SMTP outbound \u2014 MX resolution, delivery client, and the worker"
  },
  {
    "sha": "844a354",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "email",
    "title": "SMTP inbound \u2014 the session, the listener, and the relay policy"
  },
  {
    "sha": "bc660f1",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "mail",
    "title": "Webmail in the shell"
  },
  {
    "sha": "4d94119",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "email",
    "title": "Search, and the HTTP API the webmail will consume"
  },
  {
    "sha": "7648899",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "email",
    "title": "Internal and federated delivery"
  },
  {
    "sha": "53d4ddc",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "email",
    "title": "RFC 5322 and MIME \u2014 parsing and generation"
  },
  {
    "sha": "0c1967b",
    "date": "2026-08-18",
    "kind": "feat",
    "area": "email",
    "title": "The mail store and identity model"
  },
  {
    "sha": "50f2eec",
    "date": "2026-08-15",
    "kind": "fix",
    "area": "proxy",
    "title": "Forward the client's scheme, not the tunnel hop's"
  },
  {
    "sha": "2b4eccd",
    "date": "2026-08-14",
    "kind": "fix",
    "area": "tests",
    "title": "Clear remaining verification failures"
  },
  {
    "sha": "fb75b4b",
    "date": "2026-08-14",
    "kind": "fix",
    "area": "auth",
    "title": "Preserve public URLs through OIDC redirects"
  },
  {
    "sha": "1ac1b24",
    "date": "2026-08-14",
    "kind": "fix",
    "area": "chat",
    "title": "Channels can be created, and existing ones actually show"
  },
  {
    "sha": "bd021be",
    "date": "2026-08-14",
    "kind": "fix",
    "area": "cloud-views",
    "title": "Read the fields Cloud actually returns"
  },
  {
    "sha": "4c3be15",
    "date": "2026-08-14",
    "kind": "feat",
    "area": "dashboard",
    "title": "Point the launcher at /cloud; retire Cloud's own frontend"
  },
  {
    "sha": "63f09d4",
    "date": "2026-08-14",
    "kind": "fix",
    "area": "cloud-views",
    "title": "Drop the users view, and never render [object Object]"
  },
  {
    "sha": "7519b29",
    "date": "2026-08-14",
    "kind": "feat",
    "area": "dashboard",
    "title": "Port Cloud's users/federation/identity/API views into the shell"
  },
  {
    "sha": "95abd6f",
    "date": "2026-08-14",
    "kind": "feat",
    "area": "dashboard",
    "title": "Port Cloud's overview + tools views into the shell"
  },
  {
    "sha": "0845a06",
    "date": "2026-08-14",
    "kind": "fix",
    "area": "dashboard",
    "title": "Allow-list lookup must be own-property only"
  },
  {
    "sha": "d52a5c3",
    "date": "2026-08-14",
    "kind": "feat",
    "area": "dashboard",
    "title": "Allow-listed proxy for Cloud's control-plane API"
  },
  {
    "sha": "50a47c5",
    "date": "2026-08-14",
    "kind": "feat",
    "area": "shell",
    "title": "Give account and admin the ecosystem chrome"
  },
  {
    "sha": "63bf5ee",
    "date": "2026-08-14",
    "kind": "fix",
    "area": "hosting",
    "title": "Make the nh CLI actually run and build"
  },
  {
    "sha": "eb0d6f5",
    "date": "2026-08-14",
    "kind": "fix",
    "area": "shell",
    "title": "Actually render the shell in the ecosystem palette"
  },
  {
    "sha": "2240f37",
    "date": "2026-08-14",
    "kind": "feat",
    "area": "cloud",
    "title": "Bump Nexus-Cloud pointer \u2014 dashboard adopts the design tokens"
  },
  {
    "sha": "09a8820",
    "date": "2026-08-14",
    "kind": "feat",
    "area": "chat",
    "title": "Render Chat in the ecosystem palette"
  },
  {
    "sha": "b358434",
    "date": "2026-08-14",
    "kind": "feat",
    "area": "draw",
    "title": "Adopt ecosystem design tokens via zinc-scale alias"
  },
  {
    "sha": "a2d2fae",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "design",
    "title": "Vendor script + drift guard for Chat and Cloud token copies"
  },
  {
    "sha": "5c4ae28",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "chat",
    "title": "Pointer bump \u2014 resolve the contradicting frame headers on the API"
  },
  {
    "sha": "4aff020",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "hosting",
    "title": "Pointer bump \u2014 clap flag fix unblocks nexus-proxy cargo test"
  },
  {
    "sha": "a011215",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "dashboard",
    "title": "Regenerate design tokens before dev, not just build"
  },
  {
    "sha": "7c9b9c0",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "draw",
    "title": "Compact TopBar when embedded, not hidden"
  },
  {
    "sha": "e6b6796",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "dashboard",
    "title": "Close the shell's own clickjacking hole"
  },
  {
    "sha": "fddb077",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "cloud",
    "title": "Frame the console in the shell, and only in the shell"
  },
  {
    "sha": "d370401",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "chat",
    "title": "Embed-aware notification prompt"
  },
  {
    "sha": "68a0498",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "draw",
    "title": "Honour the shell's embed flag"
  },
  {
    "sha": "4e403d9",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "hosting",
    "title": "Republish MinIO on 9010 so storage.tnhc.dev serves again"
  },
  {
    "sha": "7131ffe",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "draw",
    "title": "Serve frame-ancestors CSP from the actual public path (nexus-proxy)"
  },
  {
    "sha": "1c9a683",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "security",
    "title": "Correct framing headers on the embeddable apps"
  },
  {
    "sha": "df644c3",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "shell",
    "title": "Distinguish loading/failed app list from a genuinely unknown app"
  },
  {
    "sha": "9271341",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "shell",
    "title": "Route /a/:appId through the shell"
  },
  {
    "sha": "32c789e",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "shell",
    "title": "Mount apps in a frame"
  },
  {
    "sha": "15dfb20",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "shell",
    "title": "The app launcher"
  },
  {
    "sha": "5fce9ff",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "shell",
    "title": "Sidebar is a complementary landmark, test scopes assertion"
  },
  {
    "sha": "dfab898",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "shell",
    "title": "The three regions"
  },
  {
    "sha": "c75d43b",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "core",
    "title": "Untrack the TypeScript build cache"
  },
  {
    "sha": "fa5f722",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "dashboard",
    "title": "Adopt the ecosystem design tokens"
  },
  {
    "sha": "ef1ddd9",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "design",
    "title": "Unit-correct token values and real Tailwind v4 namespaces"
  },
  {
    "sha": "9ff2d86",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "design",
    "title": "The token file and its generator"
  },
  {
    "sha": "59f1104",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "design",
    "title": "Flatten nested tokens into CSS custom properties"
  },
  {
    "sha": "d6ab886",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "dashboard",
    "title": "One tile per destination"
  },
  {
    "sha": "50c2441",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "routing",
    "title": "Close the hosting bypass, and gate draw"
  },
  {
    "sha": "e89363b",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "proxy",
    "title": "Stop labelling decompressed bodies as compressed"
  },
  {
    "sha": "92f781c",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "gate",
    "title": "One stale cookie must not shadow a valid session"
  },
  {
    "sha": "9f81a0c",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "core",
    "title": "Real crypto everywhere it is used, and stop showing signed-in people login forms"
  },
  {
    "sha": "2bc3335",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "phantom",
    "title": "Real post-quantum crypto for Draw via bun:ffi"
  },
  {
    "sha": "6dfb427",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "auth",
    "title": "Signing in with no return address no longer looks like failure"
  },
  {
    "sha": "b3ea571",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "phantom",
    "title": "Stop the SDK claiming cryptography it is not doing"
  },
  {
    "sha": "f40ab9a",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "clients",
    "title": "Desktop, admin and mobile on ecosystem SSO"
  },
  {
    "sha": "44ddcc6",
    "date": "2026-08-12",
    "kind": "feat",
    "area": "proxy",
    "title": "Relay WebSockets, so chat updates live again"
  },
  {
    "sha": "d7cf4de",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "web",
    "title": "Chat client talks to its own origin, not a stale stored one"
  },
  {
    "sha": "5044ad8",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "auth",
    "title": "Keep the return address at sign-in, and give the apex a front door"
  },
  {
    "sha": "d225219",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "gate",
    "title": "Harden the login gate, and switch it on for chat"
  },
  {
    "sha": "3d555ac",
    "date": "2026-08-12",
    "kind": "feat",
    "area": "chat",
    "title": "Ecosystem SSO cutover (phase 4, task 4)"
  },
  {
    "sha": "8715559",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "gate",
    "title": "Keep the return address when sending someone to sign in"
  },
  {
    "sha": "75afe95",
    "date": "2026-08-12",
    "kind": "feat",
    "area": "chat",
    "title": "Ecosystem identity middleware and provisioning (SSO phase 4, task 3)"
  },
  {
    "sha": "a199e43",
    "date": "2026-08-12",
    "kind": "feat",
    "area": "chat",
    "title": "Identity token verification (SSO phase 4, task 2)"
  },
  {
    "sha": "4a563c1",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "security",
    "title": "Bind every service to loopback so the proxy is the only way in"
  },
  {
    "sha": "4a3e331",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "deploy",
    "title": "Run the Draw backend, and stop nexus-chat's env from leaking"
  },
  {
    "sha": "dde636b",
    "date": "2026-08-12",
    "kind": "feat",
    "area": "core",
    "title": "Connector hit-testing"
  },
  {
    "sha": "77fa167",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "dashboard",
    "title": "Heartbeat to Cloud, and make deploy.sh idempotent"
  },
  {
    "sha": "7d49998",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "nexus-auth",
    "title": "Include phantom_did claim in ID token\\n\\nCo-authored-by: Implementer <implementer@example.com>"
  },
  {
    "sha": "17ce68f",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "signup",
    "title": "Add backfill-dids job"
  },
  {
    "sha": "d25e7b7",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "nexus-auth",
    "title": "Add link-did endpoint and verifier"
  },
  {
    "sha": "a3ce756",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "did-mapper",
    "title": "Scaffold in-memory DID Mapper"
  },
  {
    "sha": "10e6a7d",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "did-client",
    "title": "Add phantom DID client"
  },
  {
    "sha": "0211733",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "dashboard",
    "title": "Heartbeat to Cloud, and make deploy.sh idempotent"
  },
  {
    "sha": "9b0f8b6",
    "date": "2026-08-12",
    "kind": "feat",
    "area": "deploy",
    "title": "Bring the dashboard up at app.tnhc.dev"
  },
  {
    "sha": "20bd6e0",
    "date": "2026-08-12",
    "kind": "feat",
    "area": "dashboard",
    "title": "Operator admin panel"
  },
  {
    "sha": "5bdbd60",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "dashboard",
    "title": "Account page \u2014 password, recovery codes, sessions"
  },
  {
    "sha": "5e0652e",
    "date": "2026-08-11",
    "kind": "fix",
    "area": "auth",
    "title": "Let users change their own password, and enforce the length rule"
  },
  {
    "sha": "e88329b",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "dashboard",
    "title": "App grid, and a root route that knows who you are"
  },
  {
    "sha": "c2ba1d5",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "core",
    "title": "Connector routing geometry"
  },
  {
    "sha": "7376ad5",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "core",
    "title": "Add connector element type"
  },
  {
    "sha": "7cca4ee",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "dashboard",
    "title": "Request-access and claim pages"
  },
  {
    "sha": "84485e1",
    "date": "2026-08-11",
    "kind": "fix",
    "area": "dashboard",
    "title": "Explain an unbuilt SPA instead of serving nothing"
  },
  {
    "sha": "6bbe11e",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "dashboard",
    "title": "Serve the SPA and proxy auth onto one origin"
  },
  {
    "sha": "7988600",
    "date": "2026-08-11",
    "kind": "fix",
    "area": "core",
    "title": "Mark the pre-commit secret scanner executable in the index"
  },
  {
    "sha": "eef8959",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "dashboard",
    "title": "Build the app grid from Cloud's registry"
  },
  {
    "sha": "7c7ee55",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "proxy",
    "title": "Login gate with audience-scoped identity forwarding"
  },
  {
    "sha": "b9ffbf1",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "proxy",
    "title": "Carry a requiresAuth policy on each route"
  },
  {
    "sha": "45a1a94",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "auth",
    "title": "Exchange a session for an audience-scoped identity token"
  },
  {
    "sha": "3dcaf7e",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "auth",
    "title": "Identity token claim set"
  },
  {
    "sha": "db13d92",
    "date": "2026-08-11",
    "kind": "fix",
    "area": "deploy",
    "title": "Detach services with setsid so they survive their launcher"
  },
  {
    "sha": "b8d0886",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "auth",
    "title": "Exchange a session for an audience-scoped identity token"
  },
  {
    "sha": "39df5c4",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "auth",
    "title": "Identity token claim set"
  },
  {
    "sha": "4a84ca8",
    "date": "2026-08-11",
    "kind": "fix",
    "area": "deploy",
    "title": "Detach services with setsid so they survive their launcher"
  },
  {
    "sha": "26debf2",
    "date": "2026-08-11",
    "kind": "fix",
    "area": "draw",
    "title": "Black screen on HTTPS \u2014 use wss + guard collab WebSocket"
  },
  {
    "sha": "f53a704",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "draw",
    "title": "AI generation panel with apply-to-canvas"
  },
  {
    "sha": "9834851",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "draw",
    "title": "AI generation panel with apply-to-canvas"
  },
  {
    "sha": "69bedde",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "nexus-auth",
    "title": "Include phantom_did claim in ID token\\n\\nCo-authored-by: Implementer <implementer@example.com>"
  },
  {
    "sha": "b8cee5a",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "signup",
    "title": "Add backfill-dids job"
  },
  {
    "sha": "c3470a2",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "nexus-auth",
    "title": "Add link-did endpoint and verifier"
  },
  {
    "sha": "8795782",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "nexus-auth",
    "title": "Add phantom_did column and did_metadata\\n\\nCo-authored-by: superpowers <superpowers@example.com>"
  },
  {
    "sha": "60307ae",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "did-mapper",
    "title": "Scaffold in-memory DID Mapper"
  },
  {
    "sha": "5076640",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "did-client",
    "title": "Add phantom DID client"
  },
  {
    "sha": "3bf9274",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "draw",
    "title": "AI diagram generation endpoint tests + frontend helper"
  },
  {
    "sha": "1b15096",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "draw",
    "title": "Deterministic diagram synthesizer"
  },
  {
    "sha": "9ada47d",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "draw",
    "title": "Collaborative binding + live presence pill"
  },
  {
    "sha": "527c533",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "draw",
    "title": "Yjs collaboration and AI helpers (work in progress)"
  },
  {
    "sha": "cef0544",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "auth",
    "title": "HTTP routes for the account lifecycle"
  },
  {
    "sha": "c09877e",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "auth",
    "title": "Failure-counting rate limiter for code endpoints"
  },
  {
    "sha": "5299eee",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "auth",
    "title": "Operator-minted invite codes"
  },
  {
    "sha": "6f27926",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "auth",
    "title": "Single-use recovery codes issued at claim time"
  },
  {
    "sha": "bab5db4",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "auth",
    "title": "Claim an approved account with a one-time code"
  },
  {
    "sha": "4c6b4be",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "auth",
    "title": "Public access requests with one-time claim codes"
  },
  {
    "sha": "932e62e",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "auth",
    "title": "Account status state machine replaces the disabled flag"
  },
  {
    "sha": "8c7b596",
    "date": "2026-08-11",
    "kind": "fix",
    "area": "auth",
    "title": "Drop the undefined phantom.stop(); switch user PATCH to status"
  },
  {
    "sha": "71d1088",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "draw",
    "title": "Yjs reconcile helpers for collaborative elements"
  },
  {
    "sha": "a4d58c5",
    "date": "2026-08-11",
    "kind": "fix",
    "area": "core",
    "title": "Await onNew in BoardPanel.create to fix race condition"
  },
  {
    "sha": "373f54c",
    "date": "2026-08-11",
    "kind": "fix",
    "area": "A4",
    "title": "Fix duplicate createBoard, boot flow precedence, switchBoard refresh, error handling"
  },
  {
    "sha": "9a215ab",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "draw",
    "title": "Board panel, board switching, server boot flow"
  },
  {
    "sha": "ccd7698",
    "date": "2026-08-11",
    "kind": "fix",
    "area": "A3",
    "title": "Add loadDoc(ServerBoard) overload + consistent error handling in api.ts"
  },
  {
    "sha": "7d5ac21",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "deploy",
    "title": "Bring nexus-chat up with the rest of the stack"
  },
  {
    "sha": "d8bdb2f",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "deploy",
    "title": "Serve chat.tnhc.dev from nexus-chat"
  },
  {
    "sha": "7b8df2c",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "draw",
    "title": "Frontend server API client + active-board tracking"
  },
  {
    "sha": "97d7008",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "draw",
    "title": "PATCH/DELETE board routes"
  },
  {
    "sha": "58afb7f",
    "date": "2026-08-11",
    "kind": "feat",
    "area": "draw",
    "title": "SQLite board metadata columns, meta PATCH, delete"
  },
  {
    "sha": "8d1e4de",
    "date": "2026-08-10",
    "kind": "fix",
    "area": "draw",
    "title": "Drop the fake fill/zoom tools and give the eraser a real hotkey"
  },
  {
    "sha": "2330e7c",
    "date": "2026-08-10",
    "kind": "fix",
    "area": "draw",
    "title": "Restore saved elements on reload and debounce autosave"
  },
  {
    "sha": "596dc82",
    "date": "2026-08-10",
    "kind": "fix",
    "area": "draw",
    "title": "Stop resize handles responding on locked/hidden elements"
  },
  {
    "sha": "1f31f6e",
    "date": "2026-08-10",
    "kind": "feat",
    "area": "draw",
    "title": "Toolbar cleanup and keyboard shortcuts overlay"
  },
  {
    "sha": "ff5040b",
    "date": "2026-08-10",
    "kind": "feat",
    "area": "draw",
    "title": "LocalStorage persistence with boot loader and autosave"
  },
  {
    "sha": "65f1935",
    "date": "2026-08-10",
    "kind": "feat",
    "area": "draw",
    "title": "Export board as PNG and SVG from top bar"
  },
  {
    "sha": "d16cd3e",
    "date": "2026-08-10",
    "kind": "feat",
    "area": "draw",
    "title": "Properties panel edits full style incl. per-element sketch toggle"
  },
  {
    "sha": "c9b6b40",
    "date": "2026-08-10",
    "kind": "feat",
    "area": "draw",
    "title": "Select, move, resize, rotate, clipboard, shortcuts"
  },
  {
    "sha": "e2a3fd0",
    "date": "2026-08-10",
    "kind": "feat",
    "area": "draw",
    "title": "Tool controller creates every shape type"
  },
  {
    "sha": "887e5d0",
    "date": "2026-08-10",
    "kind": "feat",
    "area": "draw",
    "title": "Canvas 2D renderer with clean + sketch + freehand"
  },
  {
    "sha": "717a3c2",
    "date": "2026-08-10",
    "kind": "feat",
    "area": "draw",
    "title": "Pure geometry + hit-testing"
  },
  {
    "sha": "113f6d4",
    "date": "2026-08-10",
    "kind": "feat",
    "area": "draw",
    "title": "Element/style model, per-element styleMode, vitest setup"
  },
  {
    "sha": "321d08c",
    "date": "2026-08-09",
    "kind": "feat",
    "area": "proxy",
    "title": "Route the *.tnhc.dev wildcard to Nexus-Hosting sites"
  },
  {
    "sha": "c767622",
    "date": "2026-08-09",
    "kind": "feat",
    "area": "auth",
    "title": "Implement OpenID Connect \u2014 authorization code flow with PKCE"
  },
  {
    "sha": "5d23bf0",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "graph",
    "title": "Edge ordering check failed on any graph with ten or more edges"
  },
  {
    "sha": "3c9302e",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "nexus-db",
    "title": "Drop bincode \u2014 it was declared but never used"
  },
  {
    "sha": "d1a2568",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "deps",
    "title": "Clear the real advisories, and stop informational ones failing the build"
  },
  {
    "sha": "80b0890",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "core",
    "title": "Repair three apps that could not start, and a health check that never matched"
  },
  {
    "sha": "77eda14",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "deploy",
    "title": "Pin Team-Chat's base URL so it stops publishing a dead hostname"
  },
  {
    "sha": "1dd1cd0",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "deploy",
    "title": "Stop deploying production on an unrecognised argument"
  },
  {
    "sha": "d449457",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "auth",
    "title": "Move sign-in to auth.tnhc.dev \u2014 the apex is the marketing site"
  },
  {
    "sha": "1ac26ba",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "proxy",
    "title": "Relay redirects and rebuild forwarded headers; serve the apex"
  },
  {
    "sha": "49a3ee2",
    "date": "2026-08-09",
    "kind": "feat",
    "area": "auth",
    "title": "Apex sign-in page with validated redirect-back"
  },
  {
    "sha": "87360ee",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "auth",
    "title": "Stop publishing the signing key \u2014 sign service tokens with RS256"
  },
  {
    "sha": "ad5eff3",
    "date": "2026-08-09",
    "kind": "feat",
    "area": "auth",
    "title": "Issue a shared session cookie so one login covers the ecosystem"
  },
  {
    "sha": "413dd13",
    "date": "2026-08-08",
    "kind": "feat",
    "area": "deploy",
    "title": "On-demand TLS gated by Cloud's tls-ask endpoint"
  },
  {
    "sha": "435988a",
    "date": "2026-08-08",
    "kind": "fix",
    "area": "deploy",
    "title": "Dynamic proxy routing never resolved an upstream"
  },
  {
    "sha": "f8d270c",
    "date": "2026-08-02",
    "kind": "feat",
    "area": "geometry",
    "title": "Cut a face along a polyline \u2014 the seam a traced quartic produces"
  },
  {
    "sha": "f8a53b3",
    "date": "2026-08-02",
    "kind": "fix",
    "area": "geometry",
    "title": "TrimBoolean returned zero-area bowties \u2014 found by sweeping for  assertions that cannot fail"
  },
  {
    "sha": "3dd9f0c",
    "date": "2026-08-02",
    "kind": "fix",
    "area": "geometry",
    "title": "The NURBS surface intersector, behind a test that could not fail"
  },
  {
    "sha": "a6191fe",
    "date": "2026-08-02",
    "kind": "feat",
    "area": "geometry",
    "title": "Trace the quartic surface intersections the analytic table cannot express"
  },
  {
    "sha": "bb6408f",
    "date": "2026-08-02",
    "kind": "feat",
    "area": "geometry",
    "title": "Say WHY a boolean returned nothing \u2014 and the answer reorders the roadmap"
  },
  {
    "sha": "8c4a983",
    "date": "2026-08-02",
    "kind": "fix",
    "area": "geometry",
    "title": "The cone was missing from the surface-intersection table, silently"
  },
  {
    "sha": "c23ca15",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "A cut line may cross a boundary more than twice"
  },
  {
    "sha": "5c473d2",
    "date": "2026-08-01",
    "kind": "feat",
    "area": "geometry",
    "title": "A cut whose line runs through a hole"
  },
  {
    "sha": "3044f28",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "Splitting a face gave its holes to the wrong piece"
  },
  {
    "sha": "2c89cf1",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "Planar faces were fanned too \u2014 the last of the tessellator's litter"
  },
  {
    "sha": "c428d87",
    "date": "2026-08-01",
    "kind": "perf",
    "area": "geometry",
    "title": "Cache classifyPoint's tessellation, keyed on the body itself"
  },
  {
    "sha": "68b9a74",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "The sphere, with a lattice anchored to the surface not the face"
  },
  {
    "sha": "14cafdf",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "ToMesh fanned every curved face and so never refined one"
  },
  {
    "sha": "bb3486d",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "The analytic integrator \u2014 a hole, a fan, and a boundary it jumped across"
  },
  {
    "sha": "195a309",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "The 3D tetrahedralizer under-filled its own convex hull"
  },
  {
    "sha": "312e532",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "NURBS refinement \u2014 a crash, a no-op, and a rational curve that moved"
  },
  {
    "sha": "4a6c846",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "A sphere parametrised about an axis its grid did not use"
  },
  {
    "sha": "1d48371",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "A convex hull that was neither closed, wound, nor convex"
  },
  {
    "sha": "5a21883",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "Curved patches integrated inside-out \u2014 read orientation from the ring"
  },
  {
    "sha": "8cce7ba",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "A Boolean's result as an operand \u2014 coincident CURVED faces read as Outside"
  },
  {
    "sha": "25a9765",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "A cone's base was a ring of chords under faces claiming an exact cone"
  },
  {
    "sha": "861d047",
    "date": "2026-08-01",
    "kind": "fix",
    "area": "geometry",
    "title": "A face drawn twice \u2014 split a pinched loop before triangulating it"
  },
  {
    "sha": "fa8a23b",
    "date": "2026-07-31",
    "kind": "fix",
    "area": "geometry",
    "title": "The fan apex was decided by the last bit of a tied coordinate"
  },
  {
    "sha": "20ec249",
    "date": "2026-07-31",
    "kind": "fix",
    "area": "geometry",
    "title": "The last place a sample point could be off its own face"
  },
  {
    "sha": "d8aff1e",
    "date": "2026-07-31",
    "kind": "feat",
    "area": "geometry",
    "title": "A ball on a rod, and a sample point never on its own face"
  },
  {
    "sha": "358aae5",
    "date": "2026-07-31",
    "kind": "feat",
    "area": "geometry",
    "title": "Cylinders side by side, and the cap that would not cut"
  },
  {
    "sha": "b1350ab",
    "date": "2026-07-31",
    "kind": "feat",
    "area": "geometry",
    "title": "A cone can be combined with something"
  },
  {
    "sha": "f5d8510",
    "date": "2026-07-31",
    "kind": "fix",
    "area": "geometry",
    "title": "A face may have more than one hole"
  },
  {
    "sha": "2b24f63",
    "date": "2026-07-31",
    "kind": "fix",
    "area": "geometry",
    "title": "The face's bounding box vetoes a wrong containment verdict"
  },
  {
    "sha": "459f869",
    "date": "2026-07-31",
    "kind": "feat",
    "area": "app",
    "title": "The editor can reach the analytic B-rep"
  },
  {
    "sha": "6e4999e",
    "date": "2026-07-31",
    "kind": "fix",
    "area": "geometry",
    "title": "A face's sample point needs clearance, not just membership"
  },
  {
    "sha": "73cea71",
    "date": "2026-07-31",
    "kind": "fix",
    "area": "geometry",
    "title": "A seam crossing that lands on a vertex must still count"
  },
  {
    "sha": "11a87ab",
    "date": "2026-07-31",
    "kind": "fix",
    "area": "geometry",
    "title": "The fan apex decided how much space a curved patch enclosed"
  },
  {
    "sha": "84a1e42",
    "date": "2026-07-31",
    "kind": "feat",
    "area": "geometry",
    "title": "A circle may cross a face's boundary more than twice"
  },
  {
    "sha": "3a0d009",
    "date": "2026-07-31",
    "kind": "fix",
    "area": "geometry",
    "title": "The imprint could pick the arc going the long way round"
  },
  {
    "sha": "062f069",
    "date": "2026-07-31",
    "kind": "fix",
    "area": "geometry",
    "title": "The seam radius was rounded to float between two doubles"
  },
  {
    "sha": "1bb3700",
    "date": "2026-07-31",
    "kind": "feat",
    "area": "geometry",
    "title": "A sphere can take a seam \u2014 and the seam closes into a ring"
  },
  {
    "sha": "7cd81f9",
    "date": "2026-07-30",
    "kind": "fix",
    "area": "docs",
    "title": "The loose weld band is a modeling scale, not a float workaround"
  },
  {
    "sha": "47f0658",
    "date": "2026-07-30",
    "kind": "fix",
    "area": "geometry",
    "title": "Lift the B-rep's precision ceiling \u2014 the last floats were in the helpers"
  },
  {
    "sha": "6a7f31e",
    "date": "2026-07-30",
    "kind": "feat",
    "area": "geometry",
    "title": "The B-rep's construction math is double too \u2014 primitives, parameters, crossings"
  },
  {
    "sha": "62afe21",
    "date": "2026-07-30",
    "kind": "feat",
    "area": "geometry",
    "title": "The analytic B-rep is double precision"
  },
  {
    "sha": "0fff130",
    "date": "2026-07-30",
    "kind": "fix",
    "area": "geometry",
    "title": "A boolean must carry its operands' reversal, not just impose its own"
  },
  {
    "sha": "80ca43b",
    "date": "2026-07-30",
    "kind": "fix",
    "area": "geometry",
    "title": "A reversed CURVED face can now say so \u2014 FaceDef::reversed"
  },
  {
    "sha": "fe2d4db",
    "date": "2026-07-30",
    "kind": "fix",
    "area": "geometry",
    "title": "Honour imprintCurve's kInvalid contract; stop the ear-clipper dropping its remnant"
  },
  {
    "sha": "d0637b9",
    "date": "2026-07-30",
    "kind": "feat",
    "area": "geometry",
    "title": "Phase 6 curved boolean \u2014 the shared vertical seam; offset cylinder sews"
  },
  {
    "sha": "a73fa98",
    "date": "2026-07-30",
    "kind": "feat",
    "area": "geometry",
    "title": "Phase 5 curved boolean \u2014 the offset cylinder's arc-bite seam"
  },
  {
    "sha": "74bce16",
    "date": "2026-07-30",
    "kind": "fix",
    "area": "build",
    "title": "IEEE-754 semantics -- -ffast-math was silently de-exacting the exact predicates"
  },
  {
    "sha": "14882a2",
    "date": "2026-07-30",
    "kind": "feat",
    "area": "geometry",
    "title": "Phase 4e curved boolean \u2014 an imprint segments a face, it does not open it"
  },
  {
    "sha": "88a1ce5",
    "date": "2026-07-29",
    "kind": "fix",
    "area": "geometry",
    "title": "Phase 4d curved boolean \u2014 accept a latitude crossing at an edge endpoint"
  },
  {
    "sha": "2bfe842",
    "date": "2026-07-29",
    "kind": "fix",
    "area": "geometry",
    "title": "Phase 4c curved boolean \u2014 classify a face by its material, not its outline"
  },
  {
    "sha": "e59d33d",
    "date": "2026-07-29",
    "kind": "feat",
    "area": "geometry",
    "title": "Phase 4b curved boolean \u2014 carry face inner loops through the sew"
  },
  {
    "sha": "af917d0",
    "date": "2026-07-29",
    "kind": "feat",
    "area": "geometry",
    "title": "Phase 4a curved boolean \u2014 share the seam ring between operands"
  },
  {
    "sha": "27b1db9",
    "date": "2026-07-29",
    "kind": "feat",
    "area": "geometry",
    "title": "Phase 3 curved boolean \u2014 wire Circle seams into the imprint driver"
  },
  {
    "sha": "4213946",
    "date": "2026-07-29",
    "kind": "feat",
    "area": "geometry",
    "title": "Phase 2 curved boolean \u2014 imprint a circle onto a cylindrical face"
  },
  {
    "sha": "f70c3d8",
    "date": "2026-07-29",
    "kind": "fix",
    "area": "geometry",
    "title": "Phase 1 curved boolean \u2014 carry arc geometry across the sew"
  },
  {
    "sha": "6b904b8",
    "date": "2026-07-28",
    "kind": "fix",
    "area": "geometry",
    "title": "Circle imprint no longer drops legitimate near-corner arc bites"
  },
  {
    "sha": "b515c09",
    "date": "2026-07-28",
    "kind": "fix",
    "area": "geometry",
    "title": "B-rep union watertight \u2014 splitEdge no longer manufactures mismatched seam vertices"
  },
  {
    "sha": "7d8da66",
    "date": "2026-07-25",
    "kind": "fix",
    "area": "geometry",
    "title": "Drop duplicate coplanar faces in booleanToBody so overlaps stop bailing to empty"
  },
  {
    "sha": "c0a1312",
    "date": "2026-07-25",
    "kind": "fix",
    "area": "animation",
    "title": "Three real bugs in VideoEditor (UB split, ripple, transition div0)"
  },
  {
    "sha": "4f0bb29",
    "date": "2026-07-25",
    "kind": "fix",
    "area": "geometry",
    "title": "Close the mesh-boolean class-1 seam leak (3x-tolerance seam weld)"
  },
  {
    "sha": "59bb0f0",
    "date": "2026-07-25",
    "kind": "feat",
    "area": "geometry",
    "title": "Exact inSphere predicate; TetDelaunay3D uses it for the cavity test"
  },
  {
    "sha": "e9e37cf",
    "date": "2026-07-25",
    "kind": "fix",
    "area": "geometry",
    "title": "EdgeSlide/MeshVertexMerge were broken dead code, never even built"
  },
  {
    "sha": "43999b1",
    "date": "2026-07-25",
    "kind": "fix",
    "area": "geometry",
    "title": "SectionTool/ProfileTool emitted every cross-section point twice"
  },
  {
    "sha": "8c8b1f7",
    "date": "2026-07-25",
    "kind": "fix",
    "area": "render",
    "title": "Normalize the quaternion in sanitizeTransform before building the matrix"
  },
  {
    "sha": "bf491a9",
    "date": "2026-07-24",
    "kind": "fix",
    "area": "render",
    "title": "Transform::toMatrix composed T*S*R instead of T*R*S"
  },
  {
    "sha": "8a5e6a6",
    "date": "2026-07-24",
    "kind": "fix",
    "area": "geometry",
    "title": "Decimator discarded partial work and miscounted faces"
  },
  {
    "sha": "09c91a6",
    "date": "2026-07-24",
    "kind": "fix",
    "area": "geometry",
    "title": "NurbsSurface partials had the same defect as the curve \u2014 wrong above degree 1"
  },
  {
    "sha": "1d3c168",
    "date": "2026-07-24",
    "kind": "fix",
    "area": "geometry",
    "title": "NurbsCurve::derivative was wrong for every curve above degree 1"
  },
  {
    "sha": "10db195",
    "date": "2026-07-24",
    "kind": "feat",
    "area": "geometry",
    "title": "Exact planar faces via Green's theorem \u2014 analytic B-rep is now fully exact"
  },
  {
    "sha": "d59dc9c",
    "date": "2026-07-24",
    "kind": "feat",
    "area": "geometry",
    "title": "Exact analytic surface area; share the parametric integrator"
  },
  {
    "sha": "bf9a3ed",
    "date": "2026-07-24",
    "kind": "feat",
    "area": "geometry",
    "title": "Exact analytic mass properties for the sphere too, robustly"
  },
  {
    "sha": "1479fb1",
    "date": "2026-07-23",
    "kind": "feat",
    "area": "geometry",
    "title": "Exact analytic mass properties for cylinder and cone faces"
  },
  {
    "sha": "d7a1f14",
    "date": "2026-07-23",
    "kind": "feat",
    "area": "geometry",
    "title": "A real Cone surface, and the check that catches a face lying about itself"
  },
  {
    "sha": "7728d43",
    "date": "2026-07-23",
    "kind": "fix",
    "area": "geometry",
    "title": "Mesh inertia tensor was wrong, and removes the workaround it forced"
  },
  {
    "sha": "e210b8e",
    "date": "2026-07-23",
    "kind": "fix",
    "area": "geometry",
    "title": "Repair the topology validator, and the winding bug it uncovered"
  },
  {
    "sha": "609c953",
    "date": "2026-07-23",
    "kind": "fix",
    "area": "geometry",
    "title": "Ambient occlusion never saw an occluder \u2014 shadow-ray bias"
  },
  {
    "sha": "60ef194",
    "date": "2026-07-23",
    "kind": "fix",
    "area": "geometry",
    "title": "The random source returned [0, 0.000488] instead of [0, 1)"
  },
  {
    "sha": "d530713",
    "date": "2026-07-23",
    "kind": "perf",
    "area": "geometry",
    "title": "Broad-phase the cut, and make the vertex weld near-linear"
  },
  {
    "sha": "c61a30c",
    "date": "2026-07-23",
    "kind": "fix",
    "area": "geometry",
    "title": "Repair MeshBVH \u2014 it was returning wrong answers and not accelerating"
  },
  {
    "sha": "1724ce5",
    "date": "2026-07-23",
    "kind": "fix",
    "area": "geometry",
    "title": "Drop cap sub-triangles \u2014 closes the extreme-density seam residual"
  },
  {
    "sha": "07f83dd",
    "date": "2026-07-23",
    "kind": "fix",
    "area": "geometry",
    "title": "Stop the vertex weld being all-or-nothing"
  },
  {
    "sha": "e919f54",
    "date": "2026-07-22",
    "kind": "fix",
    "area": "geometry",
    "title": "Classify boolean faces without a probe offset \u2014 closes seam class 2"
  },
  {
    "sha": "043d2ce",
    "date": "2026-07-22",
    "kind": "fix",
    "area": "geometry",
    "title": "Make the exact predicates actually exact"
  },
  {
    "sha": "f1af781",
    "date": "2026-07-22",
    "kind": "harden",
    "area": "geometry",
    "title": "Scale-adaptive tolerances across the curve ops (Phase T)"
  },
  {
    "sha": "10a0ad9",
    "date": "2026-07-22",
    "kind": "fix",
    "area": "geometry",
    "title": "Size the Bowyer-Watson super-triangle to the input's thinness"
  },
  {
    "sha": "886a4a1",
    "date": "2026-07-21",
    "kind": "fix",
    "area": "geometry",
    "title": "Harden CDT constraint recovery to Sloan's ordered rule"
  },
  {
    "sha": "ec738c8",
    "date": "2026-07-21",
    "kind": "fix",
    "area": "geometry",
    "title": "Robust CDT constraint enforcement halves mesh-boolean leaks"
  },
  {
    "sha": "0c2a423",
    "date": "2026-07-21",
    "kind": "fix",
    "area": "geometry",
    "title": "Resolve VoxelGrid double-definition + voxelize non-finite guard"
  },
  {
    "sha": "89a3f50",
    "date": "2026-07-21",
    "kind": "harden",
    "area": "geometry",
    "title": "Complete non-finite rejection \u2014 decimate + remesh (Phase R)"
  },
  {
    "sha": "0013263",
    "date": "2026-07-21",
    "kind": "harden",
    "area": "geometry",
    "title": "Bound the B-rep Boolean's imprint \u2014 near-tangent no longer hangs"
  },
  {
    "sha": "ea38a6b",
    "date": "2026-07-19",
    "kind": "harden",
    "area": "geometry",
    "title": "Non-finite rejection across the mesh-processing surface (Phase R)"
  },
  {
    "sha": "2ddfbf6",
    "date": "2026-07-19",
    "kind": "harden",
    "area": "geometry",
    "title": "Malformed-input fuzz battery + fix non-finite leak in weld/repair"
  },
  {
    "sha": "ebcc792",
    "date": "2026-07-19",
    "kind": "harden",
    "area": "geometry",
    "title": "Scale-invariant triangle degeneracy (Phase T) \u2014 fixes small-model boolean"
  },
  {
    "sha": "2f53dce",
    "date": "2026-07-19",
    "kind": "harden",
    "area": "geometry",
    "title": "Fix insertEdgeLoop heap corruption + full HEM liveness sweep (Phase R)"
  },
  {
    "sha": "eb50682",
    "date": "2026-07-19",
    "kind": "harden",
    "area": "geometry",
    "title": "Scale-aware boolean seam weld (Phase T) \u2014 fixes large-model leak"
  },
  {
    "sha": "4240ab3",
    "date": "2026-07-19",
    "kind": "harden",
    "area": "geometry",
    "title": "Seeded invariant fuzz harness (Phase F) + fix HEM dead-edge corruption it found"
  },
  {
    "sha": "85ccc5c",
    "date": "2026-07-19",
    "kind": "harden",
    "area": "geometry",
    "title": "Winding-independent mesh-CSG classification + residual diagnosis"
  },
  {
    "sha": "263ec59",
    "date": "2026-07-19",
    "kind": "harden",
    "area": "geometry",
    "title": "Mesh-CSG coplanar seam rebuild \u2014 108\u219230 leaks, coplanar box booleans now watertight"
  },
  {
    "sha": "734f212",
    "date": "2026-07-19",
    "kind": "harden",
    "area": "geometry",
    "title": "Make the mesh-CSG point-in-solid classification exact (SoS)"
  },
  {
    "sha": "31bbe00",
    "date": "2026-07-19",
    "kind": "fix",
    "area": "brep",
    "title": "BooleanToBody watertight-or-empty invariant + near-degenerate torture battery"
  },
  {
    "sha": "7e75bea",
    "date": "2026-07-18",
    "kind": "feat",
    "area": "brep",
    "title": "SoS capstone COMPLETE \u2014 classifyPoint is now fully exact"
  },
  {
    "sha": "78a8f75",
    "date": "2026-07-18",
    "kind": "feat",
    "area": "brep",
    "title": "SoS step 2 \u2014 exact degeneracy-free segment-vs-triangle crossing"
  },
  {
    "sha": "94b3978",
    "date": "2026-07-18",
    "kind": "feat",
    "area": "brep",
    "title": "SoS step 1 \u2014 exact never-ambiguous point-vs-plane side (pointPlaneSideSoS)"
  },
  {
    "sha": "d63681f",
    "date": "2026-07-18",
    "kind": "feat",
    "area": "brep",
    "title": "Twisted extrude / twisted prism (twistExtrude)"
  },
  {
    "sha": "0673d00",
    "date": "2026-07-18",
    "kind": "feat",
    "area": "brep",
    "title": "Open box shell / tray (makeOpenBox) \u2014 the open-surface path"
  },
  {
    "sha": "a460892",
    "date": "2026-07-18",
    "kind": "feat",
    "area": "brep",
    "title": "Pyramid / cone primitive (makePyramid)"
  },
  {
    "sha": "1196ddc",
    "date": "2026-07-18",
    "kind": "feat",
    "area": "brep",
    "title": "Axis-touching partial revolve \u2014 cylindrical/cone sector (pie slice)"
  },
  {
    "sha": "4833e43",
    "date": "2026-07-18",
    "kind": "feat",
    "area": "brep",
    "title": "Tube / pipe primitive (makeTube) \u2014 direct annular extrude"
  },
  {
    "sha": "6c77e1a",
    "date": "2026-07-18",
    "kind": "feat",
    "area": "brep",
    "title": "Hollow / shell op (hollowBox) via boolean difference"
  },
  {
    "sha": "474c7e5",
    "date": "2026-07-18",
    "kind": "feat",
    "area": "brep",
    "title": "Loft / ruled solid between two profiles (loftProfiles)"
  },
  {
    "sha": "596016e",
    "date": "2026-07-18",
    "kind": "feat",
    "area": "brep",
    "title": "Partial revolve \u2014 a capped arc solid (revolveProfilePartial)"
  },
  {
    "sha": "50c0987",
    "date": "2026-07-17",
    "kind": "feat",
    "area": "brep",
    "title": "Exact plane-cylinder perpendicularity in SSI"
  },
  {
    "sha": "ca08eea",
    "date": "2026-07-17",
    "kind": "feat",
    "area": "brep",
    "title": "Exact plane-plane parallel classification in SSI"
  },
  {
    "sha": "693f9e3",
    "date": "2026-07-17",
    "kind": "feat",
    "area": "brep",
    "title": "Exact in-plane straddle wired into imprint's Line crossing"
  },
  {
    "sha": "6c1be56",
    "date": "2026-07-17",
    "kind": "feat",
    "area": "brep",
    "title": "Exact segment-vs-triangle predicate (segmentCrossesTriangleExact)"
  },
  {
    "sha": "90db897",
    "date": "2026-07-17",
    "kind": "feat",
    "area": "brep",
    "title": "Exact-arithmetic point-vs-plane predicate (facePlaneSide via orient3D)"
  },
  {
    "sha": "e6aa6f7",
    "date": "2026-07-17",
    "kind": "feat",
    "area": "brep",
    "title": "Interior trim-loop holes on NURBS faces (parameter-space holes)"
  },
  {
    "sha": "665fb79",
    "date": "2026-07-17",
    "kind": "feat",
    "area": "brep",
    "title": "Curved (polyline) pcurves \u2014 curved NURBS trim boundaries"
  },
  {
    "sha": "018b12b",
    "date": "2026-07-17",
    "kind": "feat",
    "area": "brep",
    "title": "Trimmed-NURBS tessellation \u2014 toMesh walks the pcurve trim region"
  },
  {
    "sha": "3924497",
    "date": "2026-07-17",
    "kind": "feat",
    "area": "brep",
    "title": "NURBS-trimmed faces \u2014 parameter-space trim curves (pcurves)"
  },
  {
    "sha": "8f17587",
    "date": "2026-07-17",
    "kind": "feat",
    "area": "brep",
    "title": "2-body Boolean feature \u2014 parametric CSG tree in the feature stack"
  },
  {
    "sha": "40701ad",
    "date": "2026-07-17",
    "kind": "geom",
    "area": "brep",
    "title": "Feature-stack serialization (non-destructive save/load)"
  },
  {
    "sha": "5e80b2a",
    "date": "2026-07-17",
    "kind": "geom",
    "area": "brep",
    "title": "Non-destructive B-rep feature/modifier stack"
  },
  {
    "sha": "e5dbe3b",
    "date": "2026-07-17",
    "kind": "geom",
    "area": "brep",
    "title": "Fillet a box edge (rounded bevel via boolean)"
  },
  {
    "sha": "01668e3",
    "date": "2026-07-17",
    "kind": "geom",
    "area": "brep",
    "title": "Chamfer a box edge (flat bevel via boolean)"
  },
  {
    "sha": "fbb9052",
    "date": "2026-07-17",
    "kind": "geom",
    "area": "brep",
    "title": "Boolean never-corrupt invariant (reject non-manifold sews)"
  },
  {
    "sha": "0a3a27b",
    "date": "2026-07-16",
    "kind": "geom",
    "area": "brep",
    "title": "AABB broad-phase for the boolean imprint (~190x on curved solids)"
  },
  {
    "sha": "142f400",
    "date": "2026-07-16",
    "kind": "geom",
    "area": "brep",
    "title": "Faceted sphere + faceted sphere booleans"
  },
  {
    "sha": "93aff1d",
    "date": "2026-07-16",
    "kind": "geom",
    "area": "brep",
    "title": "Boolean performance \u2014 full-pass imprint fixpoint (no rescans)"
  },
  {
    "sha": "475b005",
    "date": "2026-07-16",
    "kind": "geom",
    "area": "brep",
    "title": "Faceted curved-solid booleans via all-planar prisms"
  },
  {
    "sha": "d22ff11",
    "date": "2026-07-16",
    "kind": "geom",
    "area": "brep",
    "title": "Body::surfaceArea + document the faceted-curved-boolean gap"
  },
  {
    "sha": "eed92f3",
    "date": "2026-07-16",
    "kind": "geom",
    "area": "brep",
    "title": "Axis-touching (filled) revolve \u2014 solids of revolution with poles"
  },
  {
    "sha": "32a3f5d",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Revolve a profile into a solid of revolution"
  },
  {
    "sha": "162fd5a",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Extrude a planar profile to a prism solid"
  },
  {
    "sha": "aecc515",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Analytic Body mass properties (volume/centroid/inertia)"
  },
  {
    "sha": "4421000",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Inner-loop (hole) support + fully-interior circle imprint"
  },
  {
    "sha": "30f87a6",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Circle imprint on a coplanar face (curved-boolean track)"
  },
  {
    "sha": "8508b39",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Versioned analytic B-rep serialization (save/load)"
  },
  {
    "sha": "abe874c",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Coincident-face handling for aligned-solid booleans"
  },
  {
    "sha": "73242c1",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Collinear-edge cleanup + simplify (minimal B-rep)"
  },
  {
    "sha": "b26889a",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Coplanar face-merge cleanup (undo boolean over-segmentation)"
  },
  {
    "sha": "061f461",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Sew boolean result into an analytic Body (booleans compose)"
  },
  {
    "sha": "41fd278",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "B-rep boolean \u2014 select + emit (the keystone)"
  },
  {
    "sha": "4fe5101",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Mutual imprint of two solids (boolean segmentation step)"
  },
  {
    "sha": "93b5759",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Consistent affine transform of an analytic body"
  },
  {
    "sha": "be6010d",
    "date": "2026-07-15",
    "kind": "geom",
    "area": "brep",
    "title": "Classify a face against another solid (boolean keep/discard)"
  },
  {
    "sha": "536d9cb",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Point-in-solid classification (boolean classify step)"
  },
  {
    "sha": "fda124c",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Imprint a Line intersection curve onto a planar face"
  },
  {
    "sha": "243928d",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Analytic surface-surface intersection (boolean prerequisite)"
  },
  {
    "sha": "720f0fe",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Sphere edges as Circle arcs \u2014 exact analytic sphere tessellation"
  },
  {
    "sha": "ecf61b1",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Watertight curved tessellation + true Circle-arc cylinder edges"
  },
  {
    "sha": "5f141c5",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Removal Euler operator mergeFaces (kill-edge-face)"
  },
  {
    "sha": "88a07f2",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Removal Euler operator joinEdges (kill-edge-vertex)"
  },
  {
    "sha": "b9e89bd",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Entity liveness / tombstoning (prerequisite for removal ops)"
  },
  {
    "sha": "9ce8028",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Second B-rep Euler operator \u2014 splitFace (make-edge-face)"
  },
  {
    "sha": "6f7aff1",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "First B-rep Euler operator \u2014 splitEdge (make-edge-vertex)"
  },
  {
    "sha": "27a37cc",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Wire NURBS surfaces into analytic B-rep faces"
  },
  {
    "sha": "00811aa",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Geometric-consistency validator checkGeometry()"
  },
  {
    "sha": "e1d5d79",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Analytic UV sphere primitive (integrity-proven)"
  },
  {
    "sha": "4148ec4",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Analytic cylinder + cone primitives (integrity-proven)"
  },
  {
    "sha": "e88f8b8",
    "date": "2026-07-14",
    "kind": "geom",
    "area": "brep",
    "title": "Analytic B-rep foundation \u2014 data model + integrity validator + box"
  },
  {
    "sha": "e5e81fc",
    "date": "2026-07-13",
    "kind": "geom",
    "area": "foundation-sweep",
    "title": "Manifold/degenerate enforcement \u2014 verify + lock in"
  },
  {
    "sha": "6075a4d",
    "date": "2026-07-13",
    "kind": "geom",
    "area": "extrude",
    "title": "Route ExtrudeOperation (keep=false) through the half-edge core"
  },
  {
    "sha": "a2a2b6f",
    "date": "2026-07-13",
    "kind": "geom",
    "area": "foundation-sweep",
    "title": "Close stable-element-ID gap (EdgeBridge, ModifierStack)"
  },
  {
    "sha": "442c04d",
    "date": "2026-07-13",
    "kind": "geom",
    "area": "foundation-sweep",
    "title": "Audit robustness; canonical isFinite + fast-math guard"
  },
  {
    "sha": "8c42f6b",
    "date": "2026-07-13",
    "kind": "geom",
    "area": "inset",
    "title": "Route InsetFacesOperation through the hardened half-edge core"
  },
  {
    "sha": "2d8874d",
    "date": "2026-07-13",
    "kind": "geom",
    "area": "hem",
    "title": "Add HEM-native insetFace primitive (edit-op migration begins)"
  },
  {
    "sha": "b313b1a",
    "date": "2026-07-13",
    "kind": "geom",
    "area": "hem",
    "title": "Fix insertEdgeLoop \u2014 all 6/6 half-edge local ops now integrity-clean"
  },
  {
    "sha": "3dd896b",
    "date": "2026-07-13",
    "kind": "geom",
    "area": "hem",
    "title": "Fix extrudeFaces wall topology (5/6 local ops now clean)"
  },
  {
    "sha": "f27fe31",
    "date": "2026-07-13",
    "kind": "geom",
    "area": "hem",
    "title": "Fix connectVertices topology corruption (4/6 local ops now clean)"
  },
  {
    "sha": "9515799",
    "date": "2026-07-12",
    "kind": "geom",
    "area": "hem",
    "title": "Fix pokeFace topology corruption (3/6 local ops now clean)"
  },
  {
    "sha": "2b21dd6",
    "date": "2026-07-12",
    "kind": "geom",
    "area": "hem",
    "title": "Fix insertEdgeVertex topology corruption; audit HEM local ops"
  },
  {
    "sha": "1cc2eb6",
    "date": "2026-07-12",
    "kind": "geom",
    "area": "hem",
    "title": "Round-trip full vertex attributes (tangents + skinning)"
  },
  {
    "sha": "d10e9e4",
    "date": "2026-07-12",
    "kind": "geom",
    "area": "tolerance",
    "title": "Add central scale/unit-aware Tolerance module + migrate weld/merge"
  },
  {
    "sha": "0ea63f8",
    "date": "2026-07-12",
    "kind": "geom",
    "area": "hem",
    "title": "Validate Euler operators \u2014 add checkIntegrity(), fix collapse & split"
  },
  {
    "sha": "4045baf",
    "date": "2026-07-12",
    "kind": "feat",
    "area": "geometry",
    "title": "BooleanOperation now uses the robust CSG pipeline (iter 5, done)"
  },
  {
    "sha": "7a167cd",
    "date": "2026-07-11",
    "kind": "feat",
    "area": "geometry",
    "title": "Robust mesh boolean pipeline \u2014 classify+assemble+stitch (iter 4)"
  },
  {
    "sha": "4a0e403",
    "date": "2026-07-11",
    "kind": "feat",
    "area": "geometry",
    "title": "Whole-mesh cut along intersection curve \u2014 boolean iter 3"
  },
  {
    "sha": "48097bb",
    "date": "2026-07-11",
    "kind": "fix",
    "area": "geometry",
    "title": "Repair broken CDT + per-triangle retriangulation (boolean iter 2)"
  },
  {
    "sha": "442ffe6",
    "date": "2026-07-11",
    "kind": "feat",
    "area": "geometry",
    "title": "Exact tri-tri intersection SEGMENT \u2014 robust-boolean foundation (iter 1)"
  },
  {
    "sha": "939d0b1",
    "date": "2026-07-11",
    "kind": "feat",
    "area": "geometry",
    "title": "ModifierStack serialization \u2014 save/IO round-trip (L5 iter 3)"
  },
  {
    "sha": "25fe59c",
    "date": "2026-07-11",
    "kind": "feat",
    "area": "geometry",
    "title": "ModifierStack \u2014 Array + Displace modifiers + result caching (L5 iter 2)"
  },
  {
    "sha": "bdade0f",
    "date": "2026-07-11",
    "kind": "feat",
    "area": "geometry",
    "title": "Non-destructive ModifierStack \u2014 parity L5 (keystone), iter 1"
  },
  {
    "sha": "c9f80e1",
    "date": "2026-07-11",
    "kind": "fix",
    "area": "app",
    "title": "Render the ImGui editor UI in the window"
  },
  {
    "sha": "2681a10",
    "date": "2026-07-11",
    "kind": "fix",
    "area": "app",
    "title": "Create a real window surface for on-screen Vulkan present"
  },
  {
    "sha": "cff502d",
    "date": "2026-07-11",
    "kind": "feat",
    "area": "geometry",
    "title": "Hand-rolled USD .usda mesh import + export \u2014 parity L13 (P1)"
  },
  {
    "sha": "71afe66",
    "date": "2026-07-11",
    "kind": "feat",
    "area": "app",
    "title": "Wire editor File menu import/export through MeshIO \u2014 parity L13"
  },
  {
    "sha": "017f6fb",
    "date": "2026-07-11",
    "kind": "feat",
    "area": "geometry",
    "title": "Hand-rolled glTF 2.0 import + export \u2014 parity L13, increment 3"
  },
  {
    "sha": "6aea6b0",
    "date": "2026-07-10",
    "kind": "feat",
    "area": "geometry",
    "title": "PLY import (ASCII + binary-LE) \u2014 parity L13, increment 2"
  },
  {
    "sha": "03e1eaf",
    "date": "2026-07-10",
    "kind": "feat",
    "area": "geometry",
    "title": "OBJ import + STL import/export (parity L13, increment 1)"
  },
  {
    "sha": "c6c8c68",
    "date": "2026-07-10",
    "kind": "feat",
    "area": "core",
    "title": "Modeling editor + agent/debug subsystems; C++26 & API-freeze fixes"
  },
  {
    "sha": "548601a",
    "date": "2026-07-09",
    "kind": "feat",
    "area": "core",
    "title": "Implement Nexus Router \u2014 central orchestration engine for entire ecosystem"
  },
  {
    "sha": "9f4135d",
    "date": "2026-07-01",
    "kind": "fix",
    "area": "core",
    "title": "Modeler selection, multi-select, gizmo, grid, undo, and transform improvements"
  },
  {
    "sha": "4fd32f2",
    "date": "2026-06-28",
    "kind": "fix",
    "area": "core",
    "title": "SetHeightCommand undo now checks m_executed for consistency with other commands"
  },
  {
    "sha": "5acd0f7",
    "date": "2026-06-27",
    "kind": "fix",
    "area": "core",
    "title": "BlendNetwork degenerate face removal now actually applies the keep filter to the mesh"
  },
  {
    "sha": "2e83c6e",
    "date": "2026-06-27",
    "kind": "fix",
    "area": "core",
    "title": "CadDocument undo/redo now rollback on failure, preserving stack integrity"
  },
  {
    "sha": "3f81b7b",
    "date": "2026-06-27",
    "kind": "fix",
    "area": "core",
    "title": "Handle appendMesh failures in MeshProcessing and CadAssembly instead of discarding"
  },
  {
    "sha": "1ff0a99",
    "date": "2026-06-27",
    "kind": "feat",
    "area": "core",
    "title": "SurfaceIntegration \u2014 add centroid and moment of inertia computation"
  },
  {
    "sha": "754bf1d",
    "date": "2026-06-27",
    "kind": "fix",
    "area": "core",
    "title": "Revert neural renderer changes that used non-existent API on TextureHandle/UpscalerInput"
  },
  {
    "sha": "48d8f01",
    "date": "2026-06-27",
    "kind": "fix",
    "area": "core",
    "title": "Handle BooleanOperation and appendMesh failures instead of silently discarding"
  },
  {
    "sha": "e29c2af",
    "date": "2026-06-27",
    "kind": "fix",
    "area": "core",
    "title": "SurfaceBlending domainV bug, SolidOperations splitBodyBySurface/extractMidSurface implementations"
  },
  {
    "sha": "6f7fd59",
    "date": "2026-06-27",
    "kind": "fix",
    "area": "core",
    "title": "SetSuppressed actually hides/shows features, replace 7 redundant loops in ConstraintGraph::analyzeDegreesOfFreedom with size() calls"
  },
  {
    "sha": "d860a80",
    "date": "2026-06-27",
    "kind": "feat",
    "area": "core",
    "title": "Deepen XeSS plugin with frame tracking, implement CadSelection pickFacesInRect with face centroid AABB test"
  },
  {
    "sha": "bb4d2f6",
    "date": "2026-06-27",
    "kind": "fix",
    "area": "core",
    "title": "Hardening \u2014 bone index bounds check, division-by-zero guard, integer overflow fix, denormal epsilon, BVH stack overflow release guard, boolean triangle bounds check"
  },
  {
    "sha": "58ce3a3",
    "date": "2026-06-27",
    "kind": "feat",
    "area": "core",
    "title": "Deep implementations across 20+ modules \u2014 CAD surfacing, morph targets, direct modeling, NURBS refinement, mesh booleans, simulation coupling, neural rendering, material PBR, grooming, brush system, video editor, GPU allocator, parametric samples, profile/section tools, reflection capture"
  },
  {
    "sha": "a83441b",
    "date": "2026-06-17",
    "kind": "feat",
    "area": "core",
    "title": "VBO rendering + per-feature display modes + MSAA + NURBS sketch curves"
  },
  {
    "sha": "d083038",
    "date": "2026-06-17",
    "kind": "feat",
    "area": "core",
    "title": "7 rounds of hardening + features (R2-R13)"
  },
  {
    "sha": "8d67fe7",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Production deployment for nexussystems.vexr.dev"
  },
  {
    "sha": "87acd1a",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Information schema, STRING_AGG"
  },
  {
    "sha": "ea0fb3b",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Math functions, EXTRACT, CREATE SCHEMA"
  },
  {
    "sha": "e629303",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Session commands, NOW(), CONCAT, TRIM"
  },
  {
    "sha": "6d6b020",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "PARTITION BY + LAG/LEAD window functions"
  },
  {
    "sha": "cf25217",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "VALUES clause, VACUUM no-op"
  },
  {
    "sha": "edc147a",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Window Functions \u2014 ROW_NUMBER, RANK, DENSE_RANK"
  },
  {
    "sha": "7cb081f",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "IS DISTINCT FROM, NULL-safe ORDER BY"
  },
  {
    "sha": "6293349",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Prepared statement parameter binding, string functions"
  },
  {
    "sha": "17c8460",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "CREATE INDEX SQL, DROP TABLE CASCADE, SET/SHOW"
  },
  {
    "sha": "5d0520e",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "EXPLAIN ANALYZE, \\d table, better error codes"
  },
  {
    "sha": "1a81d56",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "CREATE TABLE AS SELECT, enhanced pg_catalog"
  },
  {
    "sha": "b3e940e",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "UPSERT (ON CONFLICT DO UPDATE), ALTER COLUMN TYPE"
  },
  {
    "sha": "587ac77",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "AND/OR/NOT in WHERE, INTERSECT, EXCEPT"
  },
  {
    "sha": "1b9732b",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "UNION, ILIKE, DROP VIEW"
  },
  {
    "sha": "c1843c6",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Session nextval/currval, CASE WHEN, COALESCE"
  },
  {
    "sha": "33a39bd",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "INSERT RETURNING, TIMESTAMP type, FK CASCADE DELETE"
  },
  {
    "sha": "f128494",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Authentication, transaction state machine, subqueries"
  },
  {
    "sha": "085bb1e",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "WAL logging for UPDATE/DELETE/TRUNCATE \u2014 crash recovery"
  },
  {
    "sha": "39bb691",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Index utilization in query planning (Index Scan)"
  },
  {
    "sha": "82d3380",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Proper ROLLBACK \u2014 undo all columnar changes"
  },
  {
    "sha": "448afdc",
    "date": "2026-06-16",
    "kind": "fix",
    "area": "core",
    "title": "Repair 3 pre-existing test failures \u2014 74/74 passing"
  },
  {
    "sha": "88d905d",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Multi-column ORDER BY, INSERT with columns, CHECK constraints"
  },
  {
    "sha": "09c677d",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "IS NULL, LIKE, IN, BETWEEN, OFFSET \u2014 WHERE predicate system"
  },
  {
    "sha": "4a3c311",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "Nexus-Modeling",
    "title": "Full DCC modeling workflow with 13 modes, UI panels, and interactive tools"
  },
  {
    "sha": "b767010",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "DROP TABLE, DROP INDEX, DISTINCT SELECT"
  },
  {
    "sha": "e519dc6",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "Proper UPDATE/DELETE with WHERE + INNER/LEFT JOIN"
  },
  {
    "sha": "f3394c7",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "ALTER TABLE ADD/DROP COLUMN + GROUP BY aggregation"
  },
  {
    "sha": "95b62cc",
    "date": "2026-06-16",
    "kind": "feat",
    "area": "core",
    "title": "UNIQUE constraint + TRUNCATE TABLE"
  },
  {
    "sha": "bb0f492",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Views \u2014 CREATE VIEW / DROP VIEW with stored query execution"
  },
  {
    "sha": "4dce962",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Foreign Keys \u2014 REFERENCES constraint with validation"
  },
  {
    "sha": "7f3b22a",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Sequences & SERIAL \u2014 auto-incrementing primary keys"
  },
  {
    "sha": "f16c0af",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Column Constraints \u2014 NOT NULL + DEFAULT validation"
  },
  {
    "sha": "cfb6080",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Pg_catalog \u2014 real schema introspection from internal catalog"
  },
  {
    "sha": "d14bb40",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "EXPLAIN \u2014 query execution plan visibility"
  },
  {
    "sha": "1bf5f05",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Prepared statements \u2014 Parse/Bind/Execute protocol support"
  },
  {
    "sha": "093702b",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "HNSW Vector Index \u2014 approximate nearest neighbor for AI embeddings"
  },
  {
    "sha": "5f2e480",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "JSON/Document support \u2014 JSONB type, -> and ->> operators"
  },
  {
    "sha": "6cb0807",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Full-text search \u2014 GIN inverted index with TF-IDF ranking"
  },
  {
    "sha": "7c1256f",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "UPDATE and DELETE \u2014 CRUD completeness"
  },
  {
    "sha": "7ef8adb",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "SELECT returns real data \u2014 columnar store wired to query executor"
  },
  {
    "sha": "26e38e3",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Persistent storage \u2014 data survives across psql connections"
  },
  {
    "sha": "b97087f",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Columnar Analytics \u2014 GROUP BY, aggregates, columnar scans"
  },
  {
    "sha": "662474f",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "ACID Transactions \u2014 BEGIN/COMMIT/ROLLBACK with WAL durability"
  },
  {
    "sha": "c97e7d4",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Secondary indexes \u2014 B-Tree indexes on any column"
  },
  {
    "sha": "4a9b068",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "SQL parser + query executor \u2014 psql queries reach the engine"
  },
  {
    "sha": "9a5d0ab",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Delta-Main Bridge \u2014 polymorphic storage virtualization"
  },
  {
    "sha": "3b45295",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "LSM-Tree engine + Row format + Storage layer"
  },
  {
    "sha": "ca4284c",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "PostgreSQL wire protocol \u2014 psql can connect to Nexus-Database"
  },
  {
    "sha": "928ded1",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Nexus Database Engine \u2014 B-Tree, Buffer Pool, WAL, Page Manager"
  },
  {
    "sha": "f41f6e8",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Nexus-Wiki \u2014 Wikipedia features: [[links]], TOC, diffs, talk, auth"
  },
  {
    "sha": "154cce9",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Nexus-Wiki \u2014 Wikipedia-like knowledge platform fully built"
  },
  {
    "sha": "5b53d90",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Ghost generates React frontends + graphics engine consolidated"
  },
  {
    "sha": "932cb0f",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "18 new apps via Ghost \u2014 Commerce, Community, Docs, Editor, Inventory, Invoice, Jobs, Journal, Knowledge, Logistics, Maps, News, Publishing, Recipes, Remote, Reporter, Reservations, Schedule"
  },
  {
    "sha": "ee2db27",
    "date": "2026-06-15",
    "kind": "fix",
    "area": "core",
    "title": "CI \u2014 replace bun install with npm, symlink from Cloud"
  },
  {
    "sha": "f9aeb69",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "CI pipeline + README with badge"
  },
  {
    "sha": "7ba3a80",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Phantom 5-hop oblivious routing demo + wired forwarder"
  },
  {
    "sha": "2ec4ad5",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "QUICKSTART.md + preflight check \u2014 fresh clone to running in 5 commands"
  },
  {
    "sha": "3a7bf9c",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Phantom DB migration + docker preflight check"
  },
  {
    "sha": "89bbd21",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Capstone demo \u2014 Cloud + Phantom + Discovery + Pipeline in one command"
  },
  {
    "sha": "8f7e45d",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Phantom E2EE bridge compiles \u2014 Alice\u2192Bob PQ verified"
  },
  {
    "sha": "0f65fec",
    "date": "2026-06-15",
    "kind": "fix",
    "area": "core",
    "title": "Smoke test \u2014 add 5-retry health check, support 'ok':true format"
  },
  {
    "sha": "73b96c8",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "core",
    "title": "Nexus-Phantom Bridge \u2014 E2EE architecture for chat"
  },
  {
    "sha": "3dcafba",
    "date": "2026-06-14",
    "kind": "feat",
    "area": "core",
    "title": "Contract validation at 71/71 \u2014 every app payload passes Cloud"
  },
  {
    "sha": "32c07eb",
    "date": "2026-06-14",
    "kind": "feat",
    "area": "core",
    "title": "One-command demo \u2014 proves Cloud + Phantom + discovery + pipeline"
  },
  {
    "sha": "6f53a04",
    "date": "2026-06-14",
    "kind": "feat",
    "area": "core",
    "title": "Mass Phantom + Discovery binding to 70+ Bun apps"
  },
  {
    "sha": "b4627c6",
    "date": "2026-06-14",
    "kind": "feat",
    "area": "core",
    "title": "Nexus Discovery, Phantom SDK integration, visualizer rebuild, scaffold apps"
  },
  {
    "sha": "f6ae214",
    "date": "2026-06-14",
    "kind": "feat",
    "area": "core",
    "title": "Nexus Discovery \u2014 service mesh via Cloud topology"
  },
  {
    "sha": "023652c",
    "date": "2026-06-14",
    "kind": "feat",
    "area": "core",
    "title": "Phantom SDK integration module + Nexus-Graphic reference binding"
  },
  {
    "sha": "b349b48",
    "date": "2026-06-14",
    "kind": "feat",
    "area": "core",
    "title": "Phantom SDK \u2014 post-quantum identity layer for all Nexus apps"
  },
  {
    "sha": "19b4840",
    "date": "2026-06-14",
    "kind": "feat",
    "area": "core",
    "title": "Ghost framework, shell apps, federation, cleanup"
  },
  {
    "sha": "e4f3e44",
    "date": "2026-06-14",
    "kind": "feat",
    "area": "core",
    "title": "Ecosystem integration \u2014 cloud registration, cross-app comms, CI, deployment, docs"
  },
  {
    "sha": "a4dd3a2",
    "date": "2026-05-28",
    "kind": "sim",
    "area": "core",
    "title": "Distance constraints (rod / rope / pendulum joints)"
  },
  {
    "sha": "dc1f6ae",
    "date": "2026-05-28",
    "kind": "sim",
    "area": "core",
    "title": "Warm-started box-box solver for stable stacking"
  },
  {
    "sha": "9d8fbdf",
    "date": "2026-05-26",
    "kind": "sim",
    "area": "core",
    "title": "Box-box (OBB) collision via SAT + vertex-incidence manifold"
  },
  {
    "sha": "ad196bd",
    "date": "2026-05-26",
    "kind": "sim",
    "area": "core",
    "title": "Oriented-box (OBB) colliders \u2014 box vs plane and box vs round"
  },
  {
    "sha": "e66512d",
    "date": "2026-05-26",
    "kind": "sim",
    "area": "core",
    "title": "Capsule colliders via unified contact resolution"
  },
  {
    "sha": "45d4dac",
    "date": "2026-05-26",
    "kind": "sim",
    "area": "core",
    "title": "Rolling friction via angular coupling at contacts"
  },
  {
    "sha": "0182061",
    "date": "2026-05-26",
    "kind": "sim",
    "area": "core",
    "title": "Coulomb friction (tangential impulse) at ground and body contacts"
  },
  {
    "sha": "f687acd",
    "date": "2026-05-26",
    "kind": "sim",
    "area": "core",
    "title": "Iterated contact solver for stable stacking"
  },
  {
    "sha": "4cf5f69",
    "date": "2026-05-26",
    "kind": "sim",
    "area": "core",
    "title": "Sweep-and-prune broadphase for body-body collision"
  },
  {
    "sha": "f318fbf",
    "date": "2026-05-26",
    "kind": "sim",
    "area": "core",
    "title": "Sphere-vs-sphere body-body collision with restitution"
  },
  {
    "sha": "b47c640",
    "date": "2026-05-26",
    "kind": "sim",
    "area": "core",
    "title": "Sphere-vs-ground-plane collision with restitution"
  },
  {
    "sha": "a28c891",
    "date": "2026-05-24",
    "kind": "feat",
    "area": "vulkan",
    "title": "Multi-set pipeline layouts; deferred composite is hardware-complete"
  },
  {
    "sha": "4e5ac65",
    "date": "2026-05-24",
    "kind": "feat",
    "area": "render",
    "title": "Publish composite descriptor-set-layout contract; bind from it"
  },
  {
    "sha": "21be204",
    "date": "2026-05-24",
    "kind": "feat",
    "area": "vulkan",
    "title": "Descriptor set layouts for graphics/compute/mesh pipelines"
  },
  {
    "sha": "4990b53",
    "date": "2026-05-24",
    "kind": "feat",
    "area": "vulkan",
    "title": "RT descriptor binding + buffer readback; full dispatch test"
  },
  {
    "sha": "81d87fe",
    "date": "2026-05-24",
    "kind": "feat",
    "area": "vulkan",
    "title": "RT bring-up shaders + hardware-gated dispatch test"
  },
  {
    "sha": "7c63c7e",
    "date": "2026-05-24",
    "kind": "feat",
    "area": "vulkan",
    "title": "Build and bind ray-tracing shader binding table for traceRays"
  },
  {
    "sha": "e790952",
    "date": "2026-05-24",
    "kind": "feat",
    "area": "sim",
    "title": "Anisotropic inertia tensor via angular-momentum integration"
  },
  {
    "sha": "372c1fb",
    "date": "2026-05-24",
    "kind": "feat",
    "area": "sim",
    "title": "Linear and angular velocity damping for rigid bodies"
  },
  {
    "sha": "7816671",
    "date": "2026-05-23",
    "kind": "feat",
    "area": "render",
    "title": "Merge ray-traced output into the composite color"
  },
  {
    "sha": "3bf48e0",
    "date": "2026-05-23",
    "kind": "feat",
    "area": "sim",
    "title": "Fixed-timestep simulation driver with render interpolation"
  },
  {
    "sha": "51bb58d",
    "date": "2026-05-23",
    "kind": "feat",
    "area": "sim",
    "title": "Rigid-body angular dynamics and rotation coupling"
  },
  {
    "sha": "87c7957",
    "date": "2026-05-23",
    "kind": "feat",
    "area": "core",
    "title": "Month-13 RT stub pass and simulation/scenegraph coupling"
  },
  {
    "sha": "066f3ee",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Validate package manifest alias and dependency fields"
  },
  {
    "sha": "8fa8286",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject duplicate scene package entry paths"
  },
  {
    "sha": "ddfe947",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Sanitize geometry, scene transforms, and text-import floats"
  },
  {
    "sha": "6892e86",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Sanitize non-finite ModelingShell inputs"
  },
  {
    "sha": "0c16d4e",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite AutomationScript numeric args"
  },
  {
    "sha": "cd71ca4",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite floats in NodeScene reconstruction inputs"
  },
  {
    "sha": "30c691b",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite ScalarF32 payload in EvalGraph::setNodeOutputPayload"
  },
  {
    "sha": "dad4968",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject invalid TemporalAccumulator config at entry"
  },
  {
    "sha": "1c813cf",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Stabilize frustum extraction for singular matrices"
  },
  {
    "sha": "166cb4f",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject invalid sample solver config at entry"
  },
  {
    "sha": "51b46cf",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite mesh primitive dimensions"
  },
  {
    "sha": "1128c34",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite camera lookAt vectors"
  },
  {
    "sha": "a3aeca7",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite parametric sample dimensions"
  },
  {
    "sha": "490425a",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite mesh export attributes"
  },
  {
    "sha": "d39d63f",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject degenerate camera projection parameters"
  },
  {
    "sha": "758c7f9",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite mesh import scalars"
  },
  {
    "sha": "882629d",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite parametric serialization payloads"
  },
  {
    "sha": "1f4545d",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite parametric convergence epsilon"
  },
  {
    "sha": "abd359e",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Guard animation state graph play and tick entry inputs"
  },
  {
    "sha": "d9b76bf",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject invalid animation clip timing setters"
  },
  {
    "sha": "9bd7eda",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject malformed rigid-body rollback snapshots"
  },
  {
    "sha": "41717d6",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject invalid rigid body descriptors and forces"
  },
  {
    "sha": "57b8582",
    "date": "2026-05-20",
    "kind": "harden",
    "area": "core",
    "title": "Reject invalid fluid particle descriptors at insertion"
  },
  {
    "sha": "c20bc5c",
    "date": "2026-05-19",
    "kind": "harden",
    "area": "core",
    "title": "Reject malformed fluid rollback snapshots"
  },
  {
    "sha": "85ffb25",
    "date": "2026-05-19",
    "kind": "harden",
    "area": "core",
    "title": "Reject malformed cloth rollback snapshots"
  },
  {
    "sha": "3c902d6",
    "date": "2026-05-19",
    "kind": "harden",
    "area": "core",
    "title": "Reject invalid cloth node descriptors at insertion"
  },
  {
    "sha": "00d8b7d",
    "date": "2026-05-19",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite cloth edge parameters"
  },
  {
    "sha": "9fa2976",
    "date": "2026-05-19",
    "kind": "harden",
    "area": "core",
    "title": "Reject invalid pressure stiffness in FluidSolver"
  },
  {
    "sha": "2384ce7",
    "date": "2026-05-19",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite Camera parameters"
  },
  {
    "sha": "af89211",
    "date": "2026-05-19",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite point coordinates in ConstraintGraph"
  },
  {
    "sha": "a915fe7",
    "date": "2026-05-19",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite SimulationCore runtime state"
  },
  {
    "sha": "505447e",
    "date": "2026-05-19",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite clip start time in AnimationCore"
  },
  {
    "sha": "43b2e9f",
    "date": "2026-05-19",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite timing inputs in AnimationCore"
  },
  {
    "sha": "9c546b3",
    "date": "2026-05-19",
    "kind": "harden",
    "area": "core",
    "title": "Reject non-finite/negative targetDistance in ConstraintGraph"
  },
  {
    "sha": "2469e6a",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add typed reconstruction stats summary snapshot"
  },
  {
    "sha": "3f04c9d",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add deterministic reconstruction stats summary API"
  },
  {
    "sha": "aa5be23",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add typed reconstruction assessment stats"
  },
  {
    "sha": "74224db",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add deterministic reconstruction summary batch API"
  },
  {
    "sha": "e64ccfd",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add deterministic batch reconstruction assessments"
  },
  {
    "sha": "ae7552c",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add typed reconstruction assessment snapshot"
  },
  {
    "sha": "7e13d7b",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add configurable default reconstruction thresholds"
  },
  {
    "sha": "8f2d7da",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add typed reconstruction threshold bundle"
  },
  {
    "sha": "a05591f",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add threshold-configurable reconstruction summary"
  },
  {
    "sha": "686eb98",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add typed reconstruction quality state helper"
  },
  {
    "sha": "a52ece1",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add deterministic reconstruction quality summary helper"
  },
  {
    "sha": "c95cf5c",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add reconstruction alpha-pass convenience helpers"
  },
  {
    "sha": "469a5f3",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add reconstruction diagnostic convenience API"
  },
  {
    "sha": "d17f215",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add NodeScene parent/child hierarchy with path resolution"
  },
  {
    "sha": "c173348",
    "date": "2026-05-09",
    "kind": "scene",
    "area": "core",
    "title": "Add NodeScene layer over EvalGraph with named nodes and typed asset API"
  },
  {
    "sha": "a8baaa8",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "month11",
    "title": "Scripting and automation layer v0"
  },
  {
    "sha": "c8ca9fa",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "month10",
    "title": "Advanced rendering track \u2014 Gaussian Splatting + temporal accumulation"
  },
  {
    "sha": "c69c67a",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "month9",
    "title": "Simulation interfaces v0"
  },
  {
    "sha": "c46141c",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "month8",
    "title": "Procedural and evaluation graph"
  },
  {
    "sha": "3c80d9e",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "month7",
    "title": "Animation and rigging core v0"
  },
  {
    "sha": "3e27ffd",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "month6",
    "title": "Asset and pipeline core"
  },
  {
    "sha": "8e39848",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "month5",
    "title": "Modeling workflow slice 1 geometry ops"
  }
];

export const CHANGELOG_AREAS = ["A3", "A4", "Nexus-Modeling", "animation", "app", "auth", "brep", "build", "chat", "clients", "cloud", "cloud-views", "core", "dashboard", "deploy", "deps", "design", "did-client", "did-mapper", "docs", "draw", "email", "extrude", "foundation-sweep", "gate", "geometry", "graph", "hem", "hosting", "inset", "mail", "month10", "month11", "month5", "month6", "month7", "month8", "month9", "nexus-auth", "nexus-db", "phantom", "proxy", "render", "routing", "security", "shell", "signup", "sim", "tests", "tolerance", "vulkan", "web"];
