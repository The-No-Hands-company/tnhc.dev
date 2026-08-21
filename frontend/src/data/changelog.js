// Generated from the Nexus-Systems commit history — do not hand-edit.
//
// Regenerate with scripts/build-changelog.sh
// Only substantive types appear (feat, fix, perf, geom, harden, scene,
// sim): a changelog full of lockfile bumps and CI tweaks
// teaches a reader to stop reading it, and this one is meant to be read.
//
// 991 entries, newest first.

export const CHANGELOG = [
  {
    "sha": "0e9c93c",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "terminal",
    "title": "Close integration regression"
  },
  {
    "sha": "c9576b5",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "dashboard",
    "title": "The notification bell in the shell header"
  },
  {
    "sha": "6e51e62",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "terminal",
    "title": "Integrate shell view in production"
  },
  {
    "sha": "5f08265",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "dashboard",
    "title": "Proxy notifications so the shell can read them"
  },
  {
    "sha": "7f8f45d",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "dashboard",
    "title": "Harden terminal UI lifecycle"
  },
  {
    "sha": "ad75aa0",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "dashboard",
    "title": "Build multi-tab terminal view"
  },
  {
    "sha": "ddb81a8",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "dashboard",
    "title": "Add terminal session controller"
  },
  {
    "sha": "f85b366",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "dashboard",
    "title": "Relay terminal websocket"
  },
  {
    "sha": "063eb3e",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "dashboard",
    "title": "Add admin terminal entry"
  },
  {
    "sha": "2d95fc3",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "terminal",
    "title": "Restrict host shells to admins"
  },
  {
    "sha": "0015d0c",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "dashboard",
    "title": "Finish cloud console polish"
  },
  {
    "sha": "f99882a",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "terminal",
    "title": "A real shell on the host, and the guards in front of it"
  },
  {
    "sha": "f742ee6",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "shell",
    "title": "Actually add the home link this time, and show who is signed in"
  },
  {
    "sha": "d495f8e",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "dashboard",
    "title": "Use the design tokens that exist, not the ones that look right"
  },
  {
    "sha": "8c893c4",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "dashboard",
    "title": "Rebuild the front door, and stop a test that could file real issues"
  },
  {
    "sha": "80bbc53",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "dashboard",
    "title": "Report issues from inside the shell, and a way back home"
  },
  {
    "sha": "0fa09f7",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "proxy",
    "title": "Api.tnhc.dev redirects to the API directory"
  },
  {
    "sha": "c3b9e75",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "tests",
    "title": "Stop the suite fighting the live service for a port and a database"
  },
  {
    "sha": "5e41e10",
    "date": "2026-08-20",
    "kind": "fix",
    "area": "shell",
    "title": "Give the front door the same chrome as everywhere else"
  },
  {
    "sha": "9cafc93",
    "date": "2026-08-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Let the shell frame it, and bump the now-buildable submodule"
  },
  {
    "sha": "485c19c",
    "date": "2026-08-19",
    "kind": "fix",
    "area": "cloud",
    "title": "Name this node instead of reporting that none exist"
  },
  {
    "sha": "76f4ae8",
    "date": "2026-08-19",
    "kind": "fix",
    "area": "shell",
    "title": "Let shell-native pages scroll"
  },
  {
    "sha": "4c33bed",
    "date": "2026-08-19",
    "kind": "fix",
    "area": "cloud",
    "title": "Lead with reachable tools, not heartbeats"
  },
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
    "area": "core",
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
    "area": "core",
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
    "area": "nexus-modeling",
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
    "area": "core",
    "title": "Scripting and automation layer v0"
  },
  {
    "sha": "c8ca9fa",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "core",
    "title": "Advanced rendering track \u2014 Gaussian Splatting + temporal accumulation"
  },
  {
    "sha": "c69c67a",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "core",
    "title": "Simulation interfaces v0"
  },
  {
    "sha": "c46141c",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "core",
    "title": "Procedural and evaluation graph"
  },
  {
    "sha": "3c80d9e",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "core",
    "title": "Animation and rigging core v0"
  },
  {
    "sha": "3e27ffd",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "core",
    "title": "Asset and pipeline core"
  },
  {
    "sha": "8e39848",
    "date": "2026-05-09",
    "kind": "feat",
    "area": "core",
    "title": "Modeling workflow slice 1 geometry ops"
  },
  {
    "sha": "183426d",
    "date": "2026-08-15",
    "kind": "fix",
    "area": "chat",
    "title": "Stop double-posting on send, and stop losing history on reload"
  },
  {
    "sha": "329193f",
    "date": "2026-08-14",
    "kind": "fix",
    "area": "chat",
    "title": "Channels can be created, and existing ones actually show"
  },
  {
    "sha": "0922b42",
    "date": "2026-08-14",
    "kind": "feat",
    "area": "web",
    "title": "Render Chat in the ecosystem palette"
  },
  {
    "sha": "a8c86bd",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "web",
    "title": "Vendor ecosystem design tokens for the palette drift guard"
  },
  {
    "sha": "72c9422",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "api",
    "title": "Stop emitting a contradicting X-Frame-Options, fix frame-ancestors"
  },
  {
    "sha": "c186a03",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "chat",
    "title": "Honour the shell's embed flag"
  },
  {
    "sha": "54df9a3",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "web",
    "title": "Say why sign-in failed instead of a bare dead end"
  },
  {
    "sha": "c7fc53c",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "clients",
    "title": "Desktop, admin and mobile sign in to the ecosystem"
  },
  {
    "sha": "0053df3",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "web",
    "title": "Stop sending a credential the client no longer has"
  },
  {
    "sha": "dc91fc9",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "web",
    "title": "Stop asking a stale localStorage value which server we talk to"
  },
  {
    "sha": "08ad700",
    "date": "2026-08-12",
    "kind": "feat",
    "area": "chat",
    "title": "Delete the local login in favour of ecosystem SSO"
  },
  {
    "sha": "c6fd771",
    "date": "2026-08-12",
    "kind": "feat",
    "area": "chat",
    "title": "Authenticate from the ecosystem identity header"
  },
  {
    "sha": "54f68f1",
    "date": "2026-08-12",
    "kind": "feat",
    "area": "chat",
    "title": "Verify ecosystem identity tokens against Auth's JWKS"
  },
  {
    "sha": "994a0c9",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "server",
    "title": "Bind to loopback so the proxy is the only way in"
  },
  {
    "sha": "6918b2b",
    "date": "2026-08-11",
    "kind": "fix",
    "area": "chat",
    "title": "Let the server actually start, in both lite and full mode"
  },
  {
    "sha": "7b44fe9",
    "date": "2026-08-10",
    "kind": "fix",
    "area": "chat",
    "title": "Make the workspace compile and its test suite pass"
  },
  {
    "sha": "600bad6",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "nexus-db",
    "title": "Let lite mode start, and stop tracking the secret it writes"
  },
  {
    "sha": "49289ca",
    "date": "2026-08-08",
    "kind": "fix",
    "area": "nexus-db",
    "title": "Skip migration reconciliation on a fresh database"
  },
  {
    "sha": "c31c1cc",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "chat",
    "title": "Phantom message signing \u2014 Dilithium-5 signatures on messages"
  },
  {
    "sha": "4422e43",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "chat",
    "title": "Phantom DB migration + repository for Nexus"
  },
  {
    "sha": "667aa9b",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "chat",
    "title": "Phantom identity API endpoint for Nexus users"
  },
  {
    "sha": "97b66b0",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "chat",
    "title": "Phantom Protocol E2EE identity layer for Nexus users"
  },
  {
    "sha": "38b93cc",
    "date": "2026-04-12",
    "kind": "feat",
    "area": "chat",
    "title": "Update api routes, db migrations, and web config"
  },
  {
    "sha": "48bf240",
    "date": "2026-04-11",
    "kind": "fix",
    "area": "chat",
    "title": "Allow iframe embedding from Nexus Cloud portal"
  },
  {
    "sha": "2d172ce",
    "date": "2026-04-11",
    "kind": "feat",
    "area": "cloud",
    "title": "Register with Nexus Cloud on startup + 30s heartbeat"
  },
  {
    "sha": "53c45a7",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "chat",
    "title": "Add NetworkHealth component to admin Overview page"
  },
  {
    "sha": "89e0c2c",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "chat",
    "title": "Implement mobile UI components with server integration"
  },
  {
    "sha": "405631c",
    "date": "2026-04-06",
    "kind": "fix",
    "area": "mobile",
    "title": "Add missing api methods, store settings, and fix undefined variable"
  },
  {
    "sha": "760b51f",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "mobile",
    "title": "Rewrite api.ts \u2014 methods were outside the class"
  },
  {
    "sha": "6a25be3",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "mobile",
    "title": "Align Kotlin to 1.9.24 to match @react-native/gradle-plugin"
  },
  {
    "sha": "49c36bf",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "mobile",
    "title": "Add plain 'apk' build script with no colon"
  },
  {
    "sha": "181e075",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "mobile",
    "title": "Add standalone APK build scripts"
  },
  {
    "sha": "ef4b1f1",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "mobile",
    "title": "Fix broken import in RegisterScreen"
  },
  {
    "sha": "a3856d1",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "mobile",
    "title": "Add expo-asset dependency"
  },
  {
    "sha": "9f3eead",
    "date": "2026-04-05",
    "kind": "feat",
    "area": "mobile",
    "title": "Complete UI components - VoiceCall, Settings, ThreadView, SearchScreen"
  },
  {
    "sha": "5926df4",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Use rand::rng() for sample_iter compatibility"
  },
  {
    "sha": "3292f78",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Use Alphanumeric.sample_iter(&mut rng) for rand 0.9"
  },
  {
    "sha": "948036d",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Use &mut rng for sample_iter in rand 0.9"
  },
  {
    "sha": "90fc96e",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Use _ip variable correctly"
  },
  {
    "sha": "57392cd",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Prefix unused variables with underscore"
  },
  {
    "sha": "14138b0",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Add Alphanumeric and Distribution to top-level imports in two_fa.rs"
  },
  {
    "sha": "0836b22",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Add Rng trait for rand 0.9 sample_iter"
  },
  {
    "sha": "bef72ad",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Use as_affine() on PublicKey for ECDH"
  },
  {
    "sha": "7c9220a",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Add Distribution trait imports for sample_iter and fix to_affine for diffie_hellman"
  },
  {
    "sha": "b80178c",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Fix diffie_hellman and sample_iter compilation errors"
  },
  {
    "sha": "f6f2ef3",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Fix diffie_hellman and sample_iter compilation errors"
  },
  {
    "sha": "336a5ad",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Fix argon2 error conversion in users.rs"
  },
  {
    "sha": "39d8d64",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Fix user_id parsing order in 2FA verify"
  },
  {
    "sha": "70030b0",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Remove non-existent USER_AGENT import from relationships"
  },
  {
    "sha": "2945efa",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Fix HeaderMap imports and compilation errors in relationships and two_fa"
  },
  {
    "sha": "ec20da8",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Complete HeaderMap import fixes for all API routes"
  },
  {
    "sha": "ed2b152",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "HeaderMap import fixes"
  },
  {
    "sha": "5eb1f24",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Fix HeaderMap imports and auth variable names in calendar"
  },
  {
    "sha": "474dbe1",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Add missing headers and fix imports in voice routes"
  },
  {
    "sha": "25cd6cd",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Add missing headers parameter to moderation functions"
  },
  {
    "sha": "cdb8201",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Add missing imports and params for rate limiting"
  },
  {
    "sha": "2617d99",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Compilation fixes for audit log and email crypto - Fix IpAddr type issue in audit_log.rs - Fix ambiguous trait method in email_crypto.rs"
  },
  {
    "sha": "c09fba1",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chat",
    "title": "Remove duplicate url dependency in Cargo.toml"
  },
  {
    "sha": "59060a5",
    "date": "2026-04-05",
    "kind": "fix",
    "area": "chatview",
    "title": "Wire onOpenProfile prop and UserProfileCard popup"
  },
  {
    "sha": "59d4a78",
    "date": "2026-03-10",
    "kind": "fix",
    "area": "chat",
    "title": "Runtime issues in Phases 20-24 \u2014 SQL conflicts, HTTP methods, route paths, FK constraints"
  },
  {
    "sha": "2472299",
    "date": "2026-03-09",
    "kind": "feat",
    "area": "chat",
    "title": "Implement Phases 20-24 \u2014 scalability, AI intelligence, voice collab, growth, sustainability"
  },
  {
    "sha": "4c59353",
    "date": "2026-03-09",
    "kind": "feat",
    "area": "chat",
    "title": "Phase 16 \u2014 Advanced Collaboration & Productivity (v1.5)"
  },
  {
    "sha": "e7a0787",
    "date": "2026-03-09",
    "kind": "feat",
    "area": "chat",
    "title": "Phase 15-04 Creator Monetization & 15-05 Server Discovery"
  },
  {
    "sha": "9c4f133",
    "date": "2026-03-08",
    "kind": "feat",
    "area": "chat",
    "title": "Email service, friendly errors, session persistence, invite URLs, roadmap update"
  },
  {
    "sha": "afbd901",
    "date": "2026-03-06",
    "kind": "fix",
    "area": "config",
    "title": "Make redis config optional with Default so server starts without Redis"
  },
  {
    "sha": "b1a555c",
    "date": "2026-03-06",
    "kind": "fix",
    "area": "docker",
    "title": "Add 'serve' subcommand to ENTRYPOINT"
  },
  {
    "sha": "b91cd60",
    "date": "2026-03-06",
    "kind": "fix",
    "area": "docker",
    "title": "Use rust:bookworm (correct tag) for glibc 2.36 compatibility"
  },
  {
    "sha": "d3cdb99",
    "date": "2026-03-06",
    "kind": "fix",
    "area": "docker",
    "title": "Use bookworm builder to fix glibc mismatch, narrow dep cache to --bin nexus"
  },
  {
    "sha": "75cfb06",
    "date": "2026-03-06",
    "kind": "fix",
    "area": "docker",
    "title": "Add cmake/clang/go for aws-lc-sys, limit CARGO_BUILD_JOBS=2, add desktop stub"
  },
  {
    "sha": "ecc606f",
    "date": "2026-03-06",
    "kind": "fix",
    "area": "docker",
    "title": "Use rust:latest \u2014 deps require 1.91+ (aws-sdk)"
  },
  {
    "sha": "7ef3c79",
    "date": "2026-03-06",
    "kind": "fix",
    "area": "docker",
    "title": "Bump Rust to 1.85 for edition2024 support"
  },
  {
    "sha": "74244a2",
    "date": "2026-03-06",
    "kind": "fix",
    "area": "deploy",
    "title": "Dockerfile path is ../Dockerfile relative to deploy/ dir"
  },
  {
    "sha": "2425d66",
    "date": "2026-03-06",
    "kind": "fix",
    "area": "config",
    "title": "12-factor DATABASE_URL/REDIS_URL, correct NEXUS__ prefix, disable search default"
  },
  {
    "sha": "e893cf0",
    "date": "2026-03-05",
    "kind": "fix",
    "area": "chat",
    "title": "Fix migrations: resolve duplicate version 00007 collision"
  },
  {
    "sha": "901f5f0",
    "date": "2026-03-05",
    "kind": "fix",
    "area": "federation",
    "title": "Full S2S correctness pass"
  },
  {
    "sha": "034fd76",
    "date": "2026-03-05",
    "kind": "feat",
    "area": "desktop",
    "title": "Federated server & room browser"
  },
  {
    "sha": "c654c76",
    "date": "2026-03-04",
    "kind": "feat",
    "area": "desktop",
    "title": "Wire RELATIONSHIP_UPDATE gateway event to FriendsPanel"
  },
  {
    "sha": "a590991",
    "date": "2026-03-04",
    "kind": "feat",
    "area": "federation",
    "title": "Inbound sig verification + gateway push + Caddy TLS"
  },
  {
    "sha": "b719777",
    "date": "2026-03-04",
    "kind": "fix",
    "area": "federation",
    "title": "HTTP fallback in discovery + port in well-known m.server"
  },
  {
    "sha": "154bd7e",
    "date": "2026-03-04",
    "kind": "feat",
    "area": "federation",
    "title": "Cross-server friend requests via username@server"
  },
  {
    "sha": "0867e9e",
    "date": "2026-03-04",
    "kind": "fix",
    "area": "desktop",
    "title": "Parse API error JSON to show friendly message in friends panel"
  },
  {
    "sha": "d4618c3",
    "date": "2026-03-04",
    "kind": "feat",
    "area": "desktop",
    "title": "Add friends/relationships/DMs/user-search Tauri commands"
  },
  {
    "sha": "22257b6",
    "date": "2026-03-03",
    "kind": "fix",
    "area": "desktop",
    "title": "Auto-refresh access token every 10 min to prevent 401 expiry"
  },
  {
    "sha": "4a70a00",
    "date": "2026-03-03",
    "kind": "fix",
    "area": "db",
    "title": "Cast UUID/JSONB/TIMESTAMPTZ columns to text in bots repo"
  },
  {
    "sha": "84a2f14",
    "date": "2026-03-03",
    "kind": "fix",
    "area": "db",
    "title": "Cast UUID/TIMESTAMPTZ columns to ::text in emoji, attachment, thread repos"
  },
  {
    "sha": "eccc3db",
    "date": "2026-03-02",
    "kind": "fix",
    "area": "desktop",
    "title": "Add missing Tauri commands for delete/update server, invites, leave, transfer"
  },
  {
    "sha": "460729f",
    "date": "2026-03-02",
    "kind": "fix",
    "area": "federation",
    "title": "Use $N placeholders instead of ? for PostgreSQL AnyPool compatibility"
  },
  {
    "sha": "4433bfd",
    "date": "2026-03-02",
    "kind": "fix",
    "area": "desktop",
    "title": "Replace invalid Parameters<typeof getState()...> with direct ServerEvent cast"
  },
  {
    "sha": "ac6853f",
    "date": "2026-03-02",
    "kind": "fix",
    "area": "windows",
    "title": "Pass 'serve' subcommand to nexus in nexus-start.ps1"
  },
  {
    "sha": "69c88a7",
    "date": "2026-03-02",
    "kind": "fix",
    "area": "windows",
    "title": "PS1 ASCII-only + UTF-8 BOM + CRLF to fix Unicode corruption"
  },
  {
    "sha": "a9208e1",
    "date": "2026-03-02",
    "kind": "fix",
    "area": "chat",
    "title": "Resolve all compile errors and migration issues; smoke test passing"
  },
  {
    "sha": "f5c3c3d",
    "date": "2026-02-28",
    "kind": "feat",
    "area": "chat",
    "title": "Phase 8.5 complete \u2014 federation UX, admin peering dashboard, identity management"
  },
  {
    "sha": "bf32baa",
    "date": "2026-02-27",
    "kind": "feat",
    "area": "chat",
    "title": "Phase 15 complete \u2014 user badges, server supporter tiers, canvas document channels"
  },
  {
    "sha": "2102dbc",
    "date": "2026-02-27",
    "kind": "feat",
    "area": "chat",
    "title": "Phase 14 complete \u2014 message forwarding, server events, sticker packs, inline bot suggestions, stream topic threading"
  },
  {
    "sha": "b52ce03",
    "date": "2026-02-27",
    "kind": "feat",
    "area": "chat",
    "title": "Phase 13 complete \u2014 PollCard, scheduled send, bookmarks, drafts, note-to-self, disappearing timer, status expiry"
  },
  {
    "sha": "74d6a41",
    "date": "2026-02-27",
    "kind": "feat",
    "area": "chat",
    "title": "Phase 13 \u2014 polls, scheduled messages, bookmarks, drafts, disappearing messages, note-to-self, status expiry"
  },
  {
    "sha": "3d097d1",
    "date": "2026-02-27",
    "kind": "feat",
    "area": "chat",
    "title": "Phase 12 \u2014 forum channels, stage instances, announcement crosspost, group DM management"
  },
  {
    "sha": "8bf8dfc",
    "date": "2026-02-27",
    "kind": "feat",
    "area": "chat",
    "title": "Complete protocol layer and fix all runtime bugs"
  },
  {
    "sha": "2afc529",
    "date": "2026-02-25",
    "kind": "feat",
    "area": "chat",
    "title": "Implement Settings sub-pages, bot token scheme, and Matrix bridge"
  },
  {
    "sha": "6184b70",
    "date": "2026-02-25",
    "kind": "feat",
    "area": "lite",
    "title": "Phase 9.5 \u2014 zero-infra single-binary mode"
  },
  {
    "sha": "748fd74",
    "date": "2026-02-24",
    "kind": "feat",
    "area": "chat",
    "title": "Friends system, member list, user profiles, presence fix"
  },
  {
    "sha": "60825b9",
    "date": "2026-02-21",
    "kind": "fix",
    "area": "chat",
    "title": "Guard Tauri-only APIs behind isTauri() for browser dev mode"
  },
  {
    "sha": "6cd9fe8",
    "date": "2026-02-20",
    "kind": "fix",
    "area": "chat",
    "title": "Resolve remaining AnyPool compile errors in gateway and federation"
  },
  {
    "sha": "ce6aed7",
    "date": "2026-02-20",
    "kind": "feat",
    "area": "chat",
    "title": "Add lite mode (single-binary SQLite) for self-hosting"
  },
  {
    "sha": "110b827",
    "date": "2026-02-19",
    "kind": "feat",
    "area": "chat",
    "title": "Implement post-login functionality"
  },
  {
    "sha": "f5db79f",
    "date": "2026-02-19",
    "kind": "fix",
    "area": "chat",
    "title": "Resolve all local dev startup issues"
  },
  {
    "sha": "6cea1de",
    "date": "2026-02-19",
    "kind": "feat",
    "area": "chat",
    "title": "Launch \u2014 deployment infra, security hardening, benchmarks, governance"
  },
  {
    "sha": "22dc08a",
    "date": "2026-02-19",
    "kind": "feat",
    "area": "chat",
    "title": "Wire FederationClient + implement all federation stubs"
  },
  {
    "sha": "eb00bbb",
    "date": "2026-02-19",
    "kind": "feat",
    "area": "chat",
    "title": "Directory DB queries \u2014 servers, rooms, search, resolve"
  },
  {
    "sha": "11b6cdf",
    "date": "2026-02-19",
    "kind": "feat",
    "area": "chat",
    "title": "Federated identity \u2014 MXID resolution + user profile endpoint"
  },
  {
    "sha": "355ea38",
    "date": "2026-02-19",
    "kind": "feat",
    "area": "chat",
    "title": "PDU signature verification + persistence in receive_transaction"
  },
  {
    "sha": "2f0872e",
    "date": "2026-02-19",
    "kind": "feat",
    "area": "chat",
    "title": "Load federation signing key from DB on startup"
  },
  {
    "sha": "3b22256",
    "date": "2026-02-18",
    "kind": "feat",
    "area": "chat",
    "title": "Federation protocol \u2014 S2S, directory, Matrix bridge stub"
  },
  {
    "sha": "bd2e185",
    "date": "2026-02-18",
    "kind": "feat",
    "area": "chat",
    "title": "Client plugin system and custom theme API"
  },
  {
    "sha": "b3f0e86",
    "date": "2026-02-18",
    "kind": "feat",
    "area": "chat",
    "title": "Add Python and Rust bot SDKs"
  },
  {
    "sha": "b80c66e",
    "date": "2026-02-18",
    "kind": "fix",
    "area": "desktop",
    "title": "Remove invalid plugins.store empty-object config"
  },
  {
    "sha": "af05be8",
    "date": "2026-02-18",
    "kind": "feat",
    "area": "chat",
    "title": "Add TypeScript bot SDK (@nexus/sdk)"
  },
  {
    "sha": "6a4cb89",
    "date": "2026-02-18",
    "kind": "feat",
    "area": "chat",
    "title": "Extensibility \u2014 bot API, webhooks, slash commands, plugins/themes"
  },
  {
    "sha": "2c8f615",
    "date": "2026-02-18",
    "kind": "feat",
    "area": "chat",
    "title": "V0.6 Desktop Client \u2014 Tauri 2 shell, system tray, PTT hotkey, overlay, auto-update, React frontend"
  },
  {
    "sha": "4e49eeb",
    "date": "2026-02-18",
    "kind": "feat",
    "area": "chat",
    "title": "V0.5 Encryption \u2014 Signal Protocol key infra, E2EE channels/DMs, device verification, safety numbers"
  },
  {
    "sha": "d2133dd",
    "date": "2026-02-18",
    "kind": "feat",
    "area": "chat",
    "title": "V0.4 Rich Features \u2014 file uploads (MinIO), threads, MeiliSearch, custom emoji, enhanced presence"
  },
  {
    "sha": "fbd5af6",
    "date": "2026-02-18",
    "kind": "feat",
    "area": "chat",
    "title": "Voice/WebRTC SFU \u2014 signaling, state management, str0m integration"
  },
  {
    "sha": "10cf865",
    "date": "2026-02-18",
    "kind": "feat",
    "area": "chat",
    "title": "Chat MVP \u2014 messages, reactions, DMs, read states, real-time events"
  },
  {
    "sha": "94c19da",
    "date": "2026-02-18",
    "kind": "feat",
    "area": "chat",
    "title": "Initial Nexus scaffold \u2014 privacy-first Discord alternative"
  },
  {
    "sha": "dca48a5",
    "date": "2026-07-10",
    "kind": "feat",
    "area": "ai",
    "title": "Agent pattern updates + CC pattern tests"
  },
  {
    "sha": "34034cd",
    "date": "2026-07-02",
    "kind": "fix",
    "area": "ai",
    "title": "Remove run_command from DESTRUCTIVE_ACTIONS \u2014 stops blocking compile/build"
  },
  {
    "sha": "4af6e70",
    "date": "2026-07-02",
    "kind": "fix",
    "area": "ai",
    "title": "Remove strict-mode instruction from system prompt when no-guess is off"
  },
  {
    "sha": "17b45a9",
    "date": "2026-07-02",
    "kind": "fix",
    "area": "ai",
    "title": "Change strict mode defaults from strict\u2192balanced permanently"
  },
  {
    "sha": "2884441",
    "date": "2026-07-02",
    "kind": "fix",
    "area": "ai",
    "title": "Move Copy/Export to conversation footer (bottom of messages)"
  },
  {
    "sha": "20b37c0",
    "date": "2026-07-02",
    "kind": "feat",
    "area": "ai",
    "title": "Conversation-level Copy + Export MD buttons"
  },
  {
    "sha": "d3f63bf",
    "date": "2026-07-01",
    "kind": "fix",
    "area": "ai",
    "title": "Add scrollbar to Settings modal (max-height 85vh, overflow-y: auto)"
  },
  {
    "sha": "746c537",
    "date": "2026-07-01",
    "kind": "perf",
    "area": "ai",
    "title": "Default to reasoning models \u2014 deepseek-reasoner + nvidia nemotron"
  },
  {
    "sha": "8765774",
    "date": "2026-07-01",
    "kind": "perf",
    "area": "ai",
    "title": "Prioritize providers with configured API keys over free/keyless"
  },
  {
    "sha": "be750dc",
    "date": "2026-07-01",
    "kind": "fix",
    "area": "ai",
    "title": "Clean provider key UI \u2014 dropdown + single input instead of 44 stacked fields"
  },
  {
    "sha": "f7075a6",
    "date": "2026-07-01",
    "kind": "fix",
    "area": "ai",
    "title": "Make populateProviderKeys synchronous \u2014 no await, no async, no fetch"
  },
  {
    "sha": "7ae23d2",
    "date": "2026-07-01",
    "kind": "fix",
    "area": "ai",
    "title": "_call_timeout \u2192 _race_timeout variable scope in racing code"
  },
  {
    "sha": "89d1f40",
    "date": "2026-07-01",
    "kind": "fix",
    "area": "ai",
    "title": "Preload provider keys during page init so inputs show immediately"
  },
  {
    "sha": "568a852",
    "date": "2026-07-01",
    "kind": "perf",
    "area": "ai",
    "title": "Aggressive provider routing optimization \u2014 no more dead air"
  },
  {
    "sha": "878f7d2",
    "date": "2026-06-29",
    "kind": "feat",
    "area": "ai",
    "title": "Wire run_agent_task() into loop implement phase for real code generation"
  },
  {
    "sha": "aaf04fb",
    "date": "2026-06-29",
    "kind": "fix",
    "area": "ai",
    "title": "All nostack test counts updated for 32 skills"
  },
  {
    "sha": "a6d7f1f",
    "date": "2026-06-29",
    "kind": "fix",
    "area": "ai",
    "title": "Update nostack test counts for 32 skills, fix loop QA type comparison"
  },
  {
    "sha": "1e628e8",
    "date": "2026-06-29",
    "kind": "feat",
    "area": "ai",
    "title": "Proper 7-phase loop engineering with multi-agent orchestration"
  },
  {
    "sha": "b95cc8d",
    "date": "2026-06-29",
    "kind": "feat",
    "area": "ai",
    "title": "Rewrite autonomous loop as in-process Python engine"
  },
  {
    "sha": "ab06527",
    "date": "2026-06-29",
    "kind": "feat",
    "area": "ai",
    "title": "Autonomous loop engineering system for Nexus AI"
  },
  {
    "sha": "3c8bd4a",
    "date": "2026-06-28",
    "kind": "fix",
    "area": "ai",
    "title": "PopulateProviderKeys now fetches providers if cache empty"
  },
  {
    "sha": "9469958",
    "date": "2026-06-28",
    "kind": "feat",
    "area": "ai",
    "title": "Provider API key management in UI + backend"
  },
  {
    "sha": "98c94c1",
    "date": "2026-06-28",
    "kind": "fix",
    "area": "ai",
    "title": "Shutdown exemption for /nostack/health + classify in web SPA"
  },
  {
    "sha": "f01efa0",
    "date": "2026-06-28",
    "kind": "fix",
    "area": "ai",
    "title": "Add project root to PYTHONPATH in main.py"
  },
  {
    "sha": "820e3fe",
    "date": "2026-06-27",
    "kind": "feat",
    "area": "ai",
    "title": "Nostack Go SDK + skill suggestions in main web UI"
  },
  {
    "sha": "a1561a9",
    "date": "2026-06-27",
    "kind": "feat",
    "area": "ai",
    "title": "Add nostack methods to TypeScript SDK"
  },
  {
    "sha": "65ab7f0",
    "date": "2026-06-27",
    "kind": "feat",
    "area": "ai",
    "title": "Add nostack methods to Python SDK (sync + async clients)"
  },
  {
    "sha": "4b54a81",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "WebSocket + SSE streaming for nostack skills, Makefile nostack targets"
  },
  {
    "sha": "1be7646",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "Nostack health endpoint + enhanced CLI with suggestions"
  },
  {
    "sha": "0640c6b",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "Skill classification endpoint \u2014 recommend skills from task description"
  },
  {
    "sha": "9355751",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "Sprint error handling + 16 new tests"
  },
  {
    "sha": "2159c38",
    "date": "2026-06-26",
    "kind": "fix",
    "area": "ai",
    "title": "Remove duplicate PWA meta tags, add missing sections to skills"
  },
  {
    "sha": "03cf404",
    "date": "2026-06-26",
    "kind": "fix",
    "area": "ai",
    "title": "XSS hardening and input validation in nostack.js"
  },
  {
    "sha": "e63800e",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "Nostack panel in main web UI + fix deprecation warning"
  },
  {
    "sha": "ec04ce1",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "Desktop app built-in UI + fix 2 xfailed tests"
  },
  {
    "sha": "12679b2",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "Sprint state system, templates, npm deps updated"
  },
  {
    "sha": "e29c020",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "Add nostack test suite + skills panel to web SPA"
  },
  {
    "sha": "4cbe47b",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "Track mobile, desktop, vscode-extension in git; add nostack to all apps"
  },
  {
    "sha": "fe6fa50",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "Nostack integration across all apps + mobile app rewrite"
  },
  {
    "sha": "3ab1199",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "Add nostack API endpoints + fix lazy imports and DB warnings"
  },
  {
    "sha": "fe708d0",
    "date": "2026-06-26",
    "kind": "feat",
    "area": "ai",
    "title": "Add nostack \u2014 31 specialist skills for Nexus AI virtual engineering team"
  },
  {
    "sha": "651cdf2",
    "date": "2026-04-29",
    "kind": "feat",
    "area": "ui+tests",
    "title": "Integrate retained panel/test deltas from sync branch"
  },
  {
    "sha": "d06da1a",
    "date": "2026-04-28",
    "kind": "feat",
    "area": "ai",
    "title": "Ship federation, creative jobs, eval persistence, and live trace hardening"
  },
  {
    "sha": "221ef80",
    "date": "2026-04-26",
    "kind": "feat",
    "area": "ui+safety",
    "title": "Adopt structured chat thread and relax strict write_file gate"
  },
  {
    "sha": "2c5672d",
    "date": "2026-04-26",
    "kind": "feat",
    "area": "ui",
    "title": "Grouped activity trace sections with per-section counts"
  },
  {
    "sha": "b74f0d5",
    "date": "2026-04-26",
    "kind": "feat",
    "area": "ui",
    "title": "Add collapsible live activity trace for agent execution"
  },
  {
    "sha": "0d50b4b",
    "date": "2026-04-25",
    "kind": "fix",
    "area": "ui+perf",
    "title": "Collapse tool steps, hide diagnostic noise, reduce LLM timeout"
  },
  {
    "sha": "be6bdd4",
    "date": "2026-04-25",
    "kind": "feat",
    "area": "agent",
    "title": "Native LLM tool-calling replaces custom JSON dispatch loop"
  },
  {
    "sha": "7d7558c",
    "date": "2026-04-24",
    "kind": "fix",
    "area": "ai",
    "title": "Resolve GitHub repo analysis flow \u2014 end-to-end working"
  },
  {
    "sha": "eb9643a",
    "date": "2026-04-24",
    "kind": "fix",
    "area": "ai",
    "title": "Read_file/list_files must bypass dispatch_builtin to use session workdir"
  },
  {
    "sha": "064bd2a",
    "date": "2026-04-24",
    "kind": "fix",
    "area": "ai",
    "title": "Expose relative read_file prefix in clone result and tighten repo workflow"
  },
  {
    "sha": "b00728e",
    "date": "2026-04-24",
    "kind": "fix",
    "area": "ai",
    "title": "Correct broken provider configs and improve error routing"
  },
  {
    "sha": "94a7a9a",
    "date": "2026-04-24",
    "kind": "fix",
    "area": "ai",
    "title": "Strip injected memory/KG from client history and fix chat title pollution"
  },
  {
    "sha": "6081e20",
    "date": "2026-04-24",
    "kind": "fix",
    "area": "ai",
    "title": "Stop list_files/read_file loops and improve GitHub repo path handling"
  },
  {
    "sha": "0fa02d7",
    "date": "2026-04-24",
    "kind": "fix",
    "area": "ai",
    "title": "Reduce warmup demotion window and add admin provider reset endpoint"
  },
  {
    "sha": "520f238",
    "date": "2026-04-24",
    "kind": "fix",
    "area": "ai",
    "title": "Remove all hardcoded AI responses; add bypass history endpoint and badge timestamp"
  },
  {
    "sha": "52aac8e",
    "date": "2026-04-23",
    "kind": "fix",
    "area": "ai",
    "title": "Agent always produces final answer + GitHub repo workflow"
  },
  {
    "sha": "5926698",
    "date": "2026-04-23",
    "kind": "feat",
    "area": "ai",
    "title": "Live Trace panel, Task History panel, Swarm SSE upgrade"
  },
  {
    "sha": "d3f65d7",
    "date": "2026-04-23",
    "kind": "feat",
    "area": "ai",
    "title": "Harden conversation fallback diagnostics"
  },
  {
    "sha": "2421c1d",
    "date": "2026-04-23",
    "kind": "feat",
    "area": "ai",
    "title": "Public launch UX hardening \u2014 onboarding, state persistence, error messaging, trust surfaces"
  },
  {
    "sha": "32c680c",
    "date": "2026-04-23",
    "kind": "feat",
    "area": "ai",
    "title": "Deliver hardening wave, RLHF persistence, and nightly test stability"
  },
  {
    "sha": "3d65d41",
    "date": "2026-04-21",
    "kind": "feat",
    "area": "ai",
    "title": "Commit remaining staged changes from sec26 and platform gap work"
  },
  {
    "sha": "f291d94",
    "date": "2026-04-21",
    "kind": "feat",
    "area": "bench+sdk",
    "title": "Dataset-backed benchmark runners, artifact export, and release-grade SDK packaging"
  },
  {
    "sha": "015e585",
    "date": "2026-04-21",
    "kind": "feat",
    "area": "ai",
    "title": "Close section 26 platform gaps"
  },
  {
    "sha": "65ba0ad",
    "date": "2026-04-21",
    "kind": "feat",
    "area": "ai",
    "title": "Implement 42 of 68 Section 26 production-readiness gap items"
  },
  {
    "sha": "e9a581e",
    "date": "2026-04-21",
    "kind": "feat",
    "area": "ai",
    "title": "Production-grade implementation of 11 downgraded features"
  },
  {
    "sha": "a83bf48",
    "date": "2026-04-20",
    "kind": "feat",
    "area": "ai",
    "title": "Implement benchmark harness, SDK improvements, deployment profiles, and compliance expansion"
  },
  {
    "sha": "8ab745d",
    "date": "2026-04-20",
    "kind": "fix",
    "area": "ai",
    "title": "Fix frontend bootstrap stability and scanner-safe tests"
  },
  {
    "sha": "cb86248",
    "date": "2026-04-20",
    "kind": "feat",
    "area": "ui",
    "title": "Add public benchmark leaderboard panel"
  },
  {
    "sha": "cf810f4",
    "date": "2026-04-20",
    "kind": "fix",
    "area": "deps",
    "title": "Replace py_webauthn with webauthn 2.7.1"
  },
  {
    "sha": "9c0064a",
    "date": "2026-04-20",
    "kind": "feat",
    "area": "ai",
    "title": "Complete contract hardening and workspace routes expansion"
  },
  {
    "sha": "ded34e5",
    "date": "2026-04-18",
    "kind": "feat",
    "area": "tools",
    "title": "Implement sections 6.1-6.7 \u2014 schema registry, audit log, rate limiting, scheduler retry, route fixes"
  },
  {
    "sha": "2eec08a",
    "date": "2026-04-18",
    "kind": "feat",
    "area": "ai",
    "title": "Complete all 10 partial feature gaps \u2192 promote to [x]"
  },
  {
    "sha": "72f523a",
    "date": "2026-04-18",
    "kind": "feat",
    "area": "ai",
    "title": "Add infra reliability modules and update feature inventory"
  },
  {
    "sha": "0714c17",
    "date": "2026-04-18",
    "kind": "fix",
    "area": "startup",
    "title": "Initialize DB schema before state preload"
  },
  {
    "sha": "e5ffd68",
    "date": "2026-04-18",
    "kind": "feat",
    "area": "rag",
    "title": "Harden section-5 pipeline and document intelligence"
  },
  {
    "sha": "4f5517b",
    "date": "2026-04-18",
    "kind": "fix",
    "area": "ai",
    "title": "NAI-API-CONTRACT-00081 Part 6 - Fix test assertions and add 503 handler for provider exhaustion"
  },
  {
    "sha": "2a4031e",
    "date": "2026-04-18",
    "kind": "feat",
    "area": "ai",
    "title": "NAI-API-CONTRACT-00081 Part 6 - Budget-aware provider routing implementation"
  },
  {
    "sha": "f01b24d",
    "date": "2026-04-18",
    "kind": "feat",
    "area": "agent+intelligence",
    "title": "Implement Section 3 agent loop and core intelligence"
  },
  {
    "sha": "d258d7e",
    "date": "2026-04-18",
    "kind": "feat",
    "area": "routing+api",
    "title": "Implement Section 2 provider routing and OpenAI API surface"
  },
  {
    "sha": "b119fae",
    "date": "2026-04-18",
    "kind": "feat",
    "area": "infra",
    "title": "Complete Section 1 foundational infrastructure \u2014 K8s, Helm, Gunicorn, Alembic, OAuth, API keys, quota scheduler"
  },
  {
    "sha": "a705bcf",
    "date": "2026-04-18",
    "kind": "feat",
    "area": "foundation",
    "title": "Implement Section 1 foundational infrastructure"
  },
  {
    "sha": "15025d3",
    "date": "2026-04-15",
    "kind": "feat",
    "area": "api",
    "title": "Add usage accounting for v1 chat completions"
  },
  {
    "sha": "90e46df",
    "date": "2026-04-15",
    "kind": "feat",
    "area": "api",
    "title": "Add v1 model retrieval endpoint"
  },
  {
    "sha": "72422f6",
    "date": "2026-04-15",
    "kind": "feat",
    "area": "api",
    "title": "Support token-array input for v1 embeddings"
  },
  {
    "sha": "454b75d",
    "date": "2026-04-15",
    "kind": "feat",
    "area": "api",
    "title": "Add embeddings usage parity in v1 responses"
  },
  {
    "sha": "b1e7f11",
    "date": "2026-04-15",
    "kind": "feat",
    "area": "api",
    "title": "Add structured outputs and beta hardening updates"
  },
  {
    "sha": "25e624b",
    "date": "2026-04-14",
    "kind": "feat",
    "area": "reasoning",
    "title": "Add debate + hypothesis loops and adaptive routing"
  },
  {
    "sha": "a35aae6",
    "date": "2026-04-14",
    "kind": "feat",
    "area": "ai",
    "title": "Phase 4&3 roadmap \u2014 diff viewer, self-improvement loop, document understanding"
  },
  {
    "sha": "4da5eb0",
    "date": "2026-04-14",
    "kind": "feat",
    "area": "ai",
    "title": "Generator-critic research loop with citation confidence scoring"
  },
  {
    "sha": "3e8b515",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "ui",
    "title": "Add Phase A architecture panel for snapshots and version browsing"
  },
  {
    "sha": "d0eadd6",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "safety+architecture",
    "title": "Scanner UI, severity audit filter, and versioned hierarchy registry"
  },
  {
    "sha": "6886ba8",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "architecture",
    "title": "Add AI-system hierarchy scaffold and endpoint"
  },
  {
    "sha": "cc1c6ab",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "safety",
    "title": "Add prompt-injection scan endpoint"
  },
  {
    "sha": "b9431bd",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "safety",
    "title": "Add event_type filtering to safety audit API"
  },
  {
    "sha": "817f726",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "safety",
    "title": "Server-side session_id filtering on audit API"
  },
  {
    "sha": "48fe376",
    "date": "2026-04-13",
    "kind": "fix",
    "area": "safety",
    "title": "Complete audit coverage and stabilize SprintC test"
  },
  {
    "sha": "0fd31c1",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "safety",
    "title": "Add session badge state and audit events"
  },
  {
    "sha": "1a105d8",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "safety",
    "title": "Safety policy profiles, runtime API, and frontend settings UI"
  },
  {
    "sha": "e590a83",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "flow",
    "title": "Reduce tool-loop thrashing and honor clone destination hints"
  },
  {
    "sha": "a2f510b",
    "date": "2026-04-13",
    "kind": "fix",
    "area": "deploy",
    "title": "Use py3.14-compatible youtube-transcript-api and split optional RAG deps"
  },
  {
    "sha": "5b24726",
    "date": "2026-04-13",
    "kind": "fix",
    "area": "deploy",
    "title": "Start uvicorn when running main.py"
  },
  {
    "sha": "c0533b1",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "ai",
    "title": "Sprint J \u2014 knowledge graph, execution trace replay, ensemble toggle"
  },
  {
    "sha": "1d85a3b",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "ai",
    "title": "Sprint I \u2014 autonomous scheduler, command palette, and PII scrubber (158 tests)"
  },
  {
    "sha": "a0f9c1b",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "ai",
    "title": "Sprint H \u2014 vision routing, diff viewer, DB schema introspection, Swarm View (150 tests)"
  },
  {
    "sha": "561e80d",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "ai",
    "title": "Sprint G \u2014 simulate tool (swarm prediction), agent marketplace, agent-to-agent bus (128 tests)"
  },
  {
    "sha": "19a2c9e",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "ai",
    "title": "Sprint D+E \u2014 GoT, consensus, LLM compression, benchmark, vector filtering, feedback, SSE token/confidence/trace (71 tests)"
  },
  {
    "sha": "aceff22",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "ai",
    "title": "Sprint A/B/C \u2014 src/ layout refactor, OpenAI-compat API, guardrails, ensemble mode, self-critique loop, MoE routing, token counter, memory pruning (40 tests)"
  },
  {
    "sha": "313af6c",
    "date": "2026-04-12",
    "kind": "feat",
    "area": "ai",
    "title": "Update auth flow, memory handling, and ui roadmap"
  },
  {
    "sha": "3d26fd8",
    "date": "2026-04-11",
    "kind": "feat",
    "area": "ai",
    "title": "Allow iframe embedding from Nexus Cloud portal"
  },
  {
    "sha": "15bc1ac",
    "date": "2026-04-11",
    "kind": "feat",
    "area": "cloud",
    "title": "Register with Nexus Cloud on startup + 30s heartbeat"
  },
  {
    "sha": "19f94fa",
    "date": "2026-04-11",
    "kind": "feat",
    "area": "ai",
    "title": "Port VersaAI RAG, autonomy, model routing + transparent process-tree streaming"
  },
  {
    "sha": "12e4d4d",
    "date": "2026-04-09",
    "kind": "feat",
    "area": "ai",
    "title": "Phase 2 persistent context windows (#11)"
  },
  {
    "sha": "96af47e",
    "date": "2026-04-09",
    "kind": "feat",
    "area": "ai",
    "title": "Phase 1 Super Intelligence Layer (#10)"
  },
  {
    "sha": "d0ee575",
    "date": "2026-04-09",
    "kind": "feat",
    "area": "ai",
    "title": "Multi-user auth (JWT), webhook triggers, and MCP server support (#7)"
  },
  {
    "sha": "1ecb039",
    "date": "2026-04-09",
    "kind": "feat",
    "area": "ai",
    "title": "Nexus Prime Cloud architect persona + nexus_status tool (#6)"
  },
  {
    "sha": "2105b35",
    "date": "2026-04-09",
    "kind": "feat",
    "area": "ai",
    "title": "Docker Compose with Ollama + full Nexus AI deployment stack (#5)"
  },
  {
    "sha": "e035758",
    "date": "2026-04-09",
    "kind": "feat",
    "area": "ai",
    "title": "Add Ollama provider with glm-5.1:cloud support (#3)"
  },
  {
    "sha": "0a1fef2",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "ai",
    "title": "Replace git subprocess with GitHub Contents API for clone+push"
  },
  {
    "sha": "f15fe64",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "ai",
    "title": "Deduplicate repeated tool steps in UI"
  },
  {
    "sha": "9063246",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "ai",
    "title": "Broken JS crashing entire page \u2014 send/UI completely non-functional"
  },
  {
    "sha": "3216d5d",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "ai",
    "title": "Broken JS crashing entire page + header overflow menu"
  },
  {
    "sha": "b659ad2",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "ai",
    "title": "Bust SW cache serving old page with rogue install prompt"
  },
  {
    "sha": "09fe966",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "ai",
    "title": "Double render, install banner always visible, plan step numbers"
  },
  {
    "sha": "744a6b8",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "ai",
    "title": "Install banner, rate-limit toast, graceful exhaustion"
  },
  {
    "sha": "124d5c8",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "ai",
    "title": "Agent asks for GitHub username/org before creating repos + free-text clarify inputs"
  },
  {
    "sha": "da0925f",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "ai",
    "title": "Write_file parse failures, plan numbering, enforce push after build"
  },
  {
    "sha": "8000475",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "ai",
    "title": "Sandbox protection, create_repo, rate limiting, cost tracking, confidence, DB tool"
  },
  {
    "sha": "a2d929c",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "ai",
    "title": "Replace all stale function names crashing startup"
  },
  {
    "sha": "189f4b6",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "ai",
    "title": "Remove nonexistent init_pins_table() call crashing startup"
  },
  {
    "sha": "983c068",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "ai",
    "title": "Usage dashboard, provider health, reactions, spreadsheet, API caller, page reader, sub-agent"
  },
  {
    "sha": "7f41423",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "ai",
    "title": "Search, pins, shortcuts, token counter, theme, YouTube, PDF, diff, auto-retry, compression"
  },
  {
    "sha": "608024c",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "ai",
    "title": "Search, pin, theme, shortcuts, token counter, YouTube, PDF, diff, persona editor, auto-retry, long-context"
  },
  {
    "sha": "357e646",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "ai",
    "title": "Projects, artifacts panel, edit/retry, TTS, custom instructions, memory panel, source cards"
  },
  {
    "sha": "b8ef811",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "ai",
    "title": "GitHub Gist persistence \u2014 DB survives redeploys without a volume"
  },
  {
    "sha": "f406e4a",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "ai",
    "title": "SQLite persistence + split ROADMAP.md"
  },
  {
    "sha": "db2d772",
    "date": "2026-03-27",
    "kind": "feat",
    "area": "ai",
    "title": "Dynamic repos, sandboxed exec, artifacts, 7 new tools"
  },
  {
    "sha": "e035e7d",
    "date": "2026-03-27",
    "kind": "feat",
    "area": "ai",
    "title": "Clarify + plan actions for structured complex task handling"
  },
  {
    "sha": "6e6f554",
    "date": "2026-03-27",
    "kind": "fix",
    "area": "ai",
    "title": "Restore requirements.txt after rogue agent overwrote it"
  },
  {
    "sha": "9e71d0c",
    "date": "2026-03-27",
    "kind": "feat",
    "area": "ai",
    "title": "Streaming stop button, agent memory, voice input, export+share"
  },
  {
    "sha": "43690ad",
    "date": "2026-03-27",
    "kind": "feat",
    "area": "ai",
    "title": "Initial API registry implementation with tests and documentation"
  },
  {
    "sha": "ea3c50e",
    "date": "2026-03-27",
    "kind": "feat",
    "area": "ai",
    "title": "Task complexity router \u2014 smart provider selection per task"
  },
  {
    "sha": "6561833",
    "date": "2026-03-27",
    "kind": "fix",
    "area": "ai",
    "title": "Bypass LLM entirely for GitHub clone tasks"
  },
  {
    "sha": "4e6af2b",
    "date": "2026-03-27",
    "kind": "fix",
    "area": "ai",
    "title": "Extract and inject GitHub URLs so LLM can't substitute placeholders"
  },
  {
    "sha": "fff5503",
    "date": "2026-03-27",
    "kind": "fix",
    "area": "ai",
    "title": "Agent acts immediately instead of asking unnecessary questions"
  },
  {
    "sha": "6f6f031",
    "date": "2026-03-27",
    "kind": "fix",
    "area": "ai",
    "title": "Simplify Dockerfile to unblock Railway deployment"
  },
  {
    "sha": "63e26ff",
    "date": "2026-03-27",
    "kind": "feat",
    "area": "ai",
    "title": "History sidebar, settings panel, code viewer, agent thinking"
  },
  {
    "sha": "2864025",
    "date": "2026-03-27",
    "kind": "fix",
    "area": "ai",
    "title": "Bypass LLM for time queries + smarter rate-limit handling"
  },
  {
    "sha": "2bd4f15",
    "date": "2026-03-27",
    "kind": "fix",
    "area": "ai",
    "title": "Add get_time tool for timezone/time queries"
  },
  {
    "sha": "5e4eeb8",
    "date": "2026-03-27",
    "kind": "fix",
    "area": "ai",
    "title": "Handle plain-text LLM responses + don't exhaust providers on parse errors"
  },
  {
    "sha": "4214c1c",
    "date": "2026-03-27",
    "kind": "fix",
    "area": "ai",
    "title": "DOM hierarchy crash on send"
  },
  {
    "sha": "d965488",
    "date": "2026-03-27",
    "kind": "feat",
    "area": "ai",
    "title": "Streaming, web search, file upload, mobile UI"
  },
  {
    "sha": "a2c984b",
    "date": "2026-03-27",
    "kind": "feat",
    "area": "ai",
    "title": "Auto-fallback across providers on rate limit"
  },
  {
    "sha": "b2db317",
    "date": "2026-03-27",
    "kind": "feat",
    "area": "ai",
    "title": "Add 9 free LLM providers from awesome-free-llm-apis"
  },
  {
    "sha": "db41723",
    "date": "2026-03-27",
    "kind": "feat",
    "area": "ai",
    "title": "Multi-turn sessions, agent loop, Claude provider, new chat UI"
  },
  {
    "sha": "453bf27",
    "date": "2026-08-14",
    "kind": "feat",
    "area": "cloud",
    "title": "Retire the frontend, return a JSON service pointer"
  },
  {
    "sha": "df8ae2c",
    "date": "2026-08-14",
    "kind": "feat",
    "area": "dashboard",
    "title": "Serve the vendored design tokens and adopt the palette"
  },
  {
    "sha": "efafc0c",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "public",
    "title": "Vendor ecosystem design tokens for the palette drift guard"
  },
  {
    "sha": "240917a",
    "date": "2026-08-13",
    "kind": "feat",
    "area": "cloud",
    "title": "Frame the console in the shell, and only in the shell"
  },
  {
    "sha": "8fb5dc0",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "registry",
    "title": "Persist requiresAuth, and drop the login form from the portal"
  },
  {
    "sha": "8783fe6",
    "date": "2026-08-12",
    "kind": "feat",
    "area": "routes",
    "title": "Give the login gate a switch it never had"
  },
  {
    "sha": "70733fc",
    "date": "2026-08-12",
    "kind": "fix",
    "area": "cloud",
    "title": "Bind to loopback instead of every interface"
  },
  {
    "sha": "967ef50",
    "date": "2026-08-10",
    "kind": "feat",
    "area": "dns",
    "title": "Publish hostnames as proxied CNAMEs to the tunnel, with dynamic zone lookup"
  },
  {
    "sha": "9792882",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "storage",
    "title": "Stop serving shared-pool credentials to anonymous callers"
  },
  {
    "sha": "ac2d68e",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "portal",
    "title": "Open apps at their public URL, and stop advertising revoked ones"
  },
  {
    "sha": "bf998b9",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "systems-api",
    "title": "Bound the tool history so the registry store stops growing"
  },
  {
    "sha": "84cb120",
    "date": "2026-08-09",
    "kind": "feat",
    "area": "cloud",
    "title": "Stop owning identity \u2014 Nexus-Auth authenticates the ecosystem"
  },
  {
    "sha": "5a88e96",
    "date": "2026-08-08",
    "kind": "fix",
    "area": "cloud",
    "title": "An unconfigured database no longer crashes the control plane"
  },
  {
    "sha": "e9adcde",
    "date": "2026-08-08",
    "kind": "fix",
    "area": "cloud",
    "title": "Stop publishing backend addresses to anonymous callers"
  },
  {
    "sha": "4db6277",
    "date": "2026-08-08",
    "kind": "feat",
    "area": "cloud",
    "title": "Sovereign DNS, user auth, S3 storage, topology data \u2014 and gate the routing table"
  },
  {
    "sha": "ad57ad6",
    "date": "2026-04-26",
    "kind": "feat",
    "area": "ui+safety",
    "title": "Adopt structured chat thread and relax strict write_file gate"
  },
  {
    "sha": "30e1dab",
    "date": "2026-04-11",
    "kind": "feat",
    "area": "cloud",
    "title": "Harden public address contract"
  },
  {
    "sha": "5d915c1",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "cloud",
    "title": "Add public/status.html \u2014 node status + network health"
  },
  {
    "sha": "c3f6385",
    "date": "2026-04-23",
    "kind": "fix",
    "area": "computer",
    "title": "Move useMemo above auth guard early returns \u2014 complete hooks-before-returns fix"
  },
  {
    "sha": "83883f1",
    "date": "2026-04-23",
    "kind": "fix",
    "area": "computer",
    "title": "Rules of Hooks violation \u2014 move all hooks before early auth returns"
  },
  {
    "sha": "af8a0a8",
    "date": "2026-04-23",
    "kind": "fix",
    "area": "computer",
    "title": "Add error boundary \u2014 shows crash details instead of black screen"
  },
  {
    "sha": "fffc562",
    "date": "2026-04-23",
    "kind": "fix",
    "area": "computer",
    "title": "Default WORKSPACE_DIR to ~/nexus-workspace instead of /workspace (no root required)"
  },
  {
    "sha": "f455a22",
    "date": "2026-04-23",
    "kind": "fix",
    "area": "computer",
    "title": "Remove @xterm/addon-web-links (no stable version exists), fix Terminal.jsx import"
  },
  {
    "sha": "a565bd5",
    "date": "2026-04-23",
    "kind": "feat",
    "area": "computer",
    "title": "Full zo.computer feature parity + more"
  },
  {
    "sha": "7968568",
    "date": "2026-04-23",
    "kind": "feat",
    "area": "computer",
    "title": "Nexus AI integration, auth, terminal, cleanup"
  },
  {
    "sha": "cdca6bc",
    "date": "2026-04-12",
    "kind": "feat",
    "area": "computer",
    "title": "Update backend agent deps and frontend styles"
  },
  {
    "sha": "321a299",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "computer",
    "title": "Wire NetworkPanel into App.jsx left column"
  },
  {
    "sha": "cfbcdcc",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "computer",
    "title": "Add NetworkPanel component for federation health"
  },
  {
    "sha": "d269d3b",
    "date": "2026-04-05",
    "kind": "feat",
    "area": "computer",
    "title": "Phase 1 \u2014 Nexus.computer initial build"
  },
  {
    "sha": "a78cdb6",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "web",
    "title": "Drop the login form, use the ecosystem session"
  },
  {
    "sha": "0b14e4c",
    "date": "2026-08-09",
    "kind": "feat",
    "area": "deploy",
    "title": "Send unauthenticated browsers to the ecosystem sign-in page"
  },
  {
    "sha": "e952662",
    "date": "2026-08-09",
    "kind": "feat",
    "area": "deploy",
    "title": "Authenticate against Nexus-Auth instead of a private user table"
  },
  {
    "sha": "4a21f66",
    "date": "2026-08-08",
    "kind": "fix",
    "area": "deploy",
    "title": "Default the data root to a path the running user can write"
  },
  {
    "sha": "cfe8e27",
    "date": "2026-04-12",
    "kind": "feat",
    "area": "deploy",
    "title": "Update deploy service and web styling"
  },
  {
    "sha": "176ca9e",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "deploy",
    "title": "Add Nexus Network health widget to sidebar"
  },
  {
    "sha": "0e22f7c",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "deploy",
    "title": "Build cancel, .env import, notify webhooks, auto-deploy toggle, search"
  },
  {
    "sha": "13b91db",
    "date": "2026-04-06",
    "kind": "fix",
    "area": "deploy",
    "title": "Fix+feat: SSE auth, process leak, volumes, resource limits, stats, restart"
  },
  {
    "sha": "09598d0",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "deploy",
    "title": "Container log streaming, SSE status feed, custom domains, image pruning"
  },
  {
    "sha": "6ada1ad",
    "date": "2026-04-06",
    "kind": "fix",
    "area": "deploy",
    "title": "Fix+feat: write queue, build lock, port support, docker-compose overhaul"
  },
  {
    "sha": "7c6cb45",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "deploy",
    "title": "Rollback, status sync, webhook panel, activity feed, per-project secrets"
  },
  {
    "sha": "f81e9bf",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "deploy",
    "title": "Real build engine, WebSocket log streaming, full dashboard"
  },
  {
    "sha": "d16ab76",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "notifications",
    "title": "Say so when an event reaches nobody"
  },
  {
    "sha": "b401ffd",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "notifications",
    "title": "Make the suite runnable, and the test event testable"
  },
  {
    "sha": "a5380ad",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "notifications",
    "title": "Tell people what the system is doing"
  },
  {
    "sha": "971f45a",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "api",
    "title": "Serve the OpenAPI description, and measure what it leaves out"
  },
  {
    "sha": "51ee2d0",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "hosting",
    "title": "Honour the shell's embed flag, and stop the deploy gate no one can pass"
  },
  {
    "sha": "6521c77",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "compose",
    "title": "Stop the migrate service turning every rebuild into an outage"
  },
  {
    "sha": "34e8523",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "build",
    "title": "Make the image actually typecheck, and stop /api-docs 404ing"
  },
  {
    "sha": "8646f98",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "types",
    "title": "Clear all 60 type errors and make the build enforce them"
  },
  {
    "sha": "d95d255",
    "date": "2026-08-21",
    "kind": "fix",
    "area": "nodes",
    "title": "Created_by must be text \u2014 the enrolment migration would have failed"
  },
  {
    "sha": "eae35e6",
    "date": "2026-08-21",
    "kind": "feat",
    "area": "nodes",
    "title": "Enrol nodes by proof of possession, stop minting their keys"
  },
  {
    "sha": "6f8819b",
    "date": "2026-08-20",
    "kind": "fix",
    "area": "api",
    "title": "Stop publishing owner and operator email addresses"
  },
  {
    "sha": "57a289a",
    "date": "2026-08-20",
    "kind": "fix",
    "area": "dashboard",
    "title": "Put `user` back in scope"
  },
  {
    "sha": "5314229",
    "date": "2026-08-20",
    "kind": "fix",
    "area": "api",
    "title": "Do not answer file requests with the SPA shell"
  },
  {
    "sha": "a251aa7",
    "date": "2026-08-20",
    "kind": "fix",
    "area": "api",
    "title": "Actually serve the hosting dashboard"
  },
  {
    "sha": "0d94a80",
    "date": "2026-08-19",
    "kind": "fix",
    "area": "api",
    "title": "Let the ecosystem shell frame this app"
  },
  {
    "sha": "026a410",
    "date": "2026-08-14",
    "kind": "fix",
    "area": "cli",
    "title": "Make nh actually run, and actually build"
  },
  {
    "sha": "01abdea",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "proxy",
    "title": "Make low_resource and geo_routing_enabled real flags"
  },
  {
    "sha": "4986899",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "compose",
    "title": "Republish MinIO on 9010 \u2014 storage.tnhc.dev depends on it"
  },
  {
    "sha": "a3e6623",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "compose",
    "title": "Stop publishing redis/minio host ports that the root infra stack already owns"
  },
  {
    "sha": "8c59ecd",
    "date": "2026-08-13",
    "kind": "fix",
    "area": "proxy",
    "title": "Add configurable frame-ancestors CSP to every framable response"
  },
  {
    "sha": "9e69dc1",
    "date": "2026-08-10",
    "kind": "fix",
    "area": "deploy",
    "title": "Supersede the previous active deployment"
  },
  {
    "sha": "a2c47db",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "storage",
    "title": "Stream object bodies that arrive as a Node Readable"
  },
  {
    "sha": "0f74280",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "storage",
    "title": "Sign upload URLs against an endpoint clients can reach"
  },
  {
    "sha": "955308f",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "hosting",
    "title": "The deploy path works \u2014 schema drift, a bad call, and three type mismatches"
  },
  {
    "sha": "b3764dc",
    "date": "2026-08-09",
    "kind": "feat",
    "area": "auth",
    "title": "Authenticate against the ecosystem's OIDC provider"
  },
  {
    "sha": "1148dc4",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "deploy",
    "title": "The stack now starts \u2014 migrations, API and proxy all come up"
  },
  {
    "sha": "7b9c5c2",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "hosting",
    "title": "Make the frontend and CLI build \u2014 they never have"
  },
  {
    "sha": "17dcb5c",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "nexus-proxy",
    "title": "Make the crate build \u2014 it never has"
  },
  {
    "sha": "7bef34c",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "compose",
    "title": "Restore the network name every service references"
  },
  {
    "sha": "534c5cc",
    "date": "2026-08-08",
    "kind": "feat",
    "area": "hosting",
    "title": "Docker deploys, consolidated schema \u2014 and make the migration actually apply"
  },
  {
    "sha": "4b00031",
    "date": "2026-04-12",
    "kind": "feat",
    "area": "hosting",
    "title": "Update api server routing, auth, and db migration tooling"
  },
  {
    "sha": "1fe9f05",
    "date": "2026-04-11",
    "kind": "feat",
    "area": "cloud",
    "title": "Register with Nexus Cloud on startup + 30s heartbeat"
  },
  {
    "sha": "60c9d80",
    "date": "2026-04-11",
    "kind": "feat",
    "area": "hosting",
    "title": "Document cloud address contract"
  },
  {
    "sha": "54ab00e",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "hosting",
    "title": "Add Nexus Ecosystem + Network Health sections to landing page"
  },
  {
    "sha": "31e0ea9",
    "date": "2026-03-29",
    "kind": "feat",
    "area": "hosting",
    "title": "Auto-create bucket on startup, production compose, setup script (Step 3)"
  },
  {
    "sha": "773b3d1",
    "date": "2026-03-29",
    "kind": "feat",
    "area": "hosting",
    "title": "New landing page \u2014 honest, self-contained, no fake stats"
  },
  {
    "sha": "a011bec",
    "date": "2026-03-29",
    "kind": "feat",
    "area": "hosting",
    "title": "New Nexus Hosting landing page"
  },
  {
    "sha": "4bbc920",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "hosting",
    "title": "Wire all remaining gaps \u2014 ban enforcement, suspension, CLI storage, tests, docs"
  },
  {
    "sha": "8fb1fe2",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "hosting",
    "title": "Content scanner, email enforcement, node trust UI, user admin controls, OpenAPI, README"
  },
  {
    "sha": "5b5bf9f",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "hosting",
    "title": "Remove all paid tiers \u2014 FedHost is always free; implement remaining features"
  },
  {
    "sha": "8ca2f6b",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "hosting",
    "title": "Email verification, per-user quotas, IP bans, abuse reports (Categories 1+3)"
  },
  {
    "sha": "50fe200",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "rust",
    "title": "Base64 0.22 API, missing hmac dep, redis 0.25 pubsub API"
  },
  {
    "sha": "b8fcbd6",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "hosting",
    "title": "Caddyfile dual routing, docker-compose proxy service, SPA routing UI + schema"
  },
  {
    "sha": "f1732f2",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "rust",
    "title": "Complete all 9 TODOs \u2014 fedhost-proxy fully functional"
  },
  {
    "sha": "dad2404",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "rust",
    "title": "Implement TODOs 2-6 in fedhost-proxy crate"
  },
  {
    "sha": "c8a6b37",
    "date": "2026-03-28",
    "kind": "feat",
    "area": "hosting",
    "title": "Fh teams CLI, richer scaffolds, Rust storage.rs implemented"
  },
  {
    "sha": "cfee817",
    "date": "2026-03-28",
    "kind": "fix",
    "area": "hosting",
    "title": "Fix+feat: TS production errors, password gate, unit tests, CLI domains, prometheus, load tests"
  },
  {
    "sha": "83fea30",
    "date": "2026-03-21",
    "kind": "feat",
    "area": "hosting",
    "title": "SiteSettings tabs, Admin user/site management, diff UI, clone/transfer, Grafana dashboards"
  },
  {
    "sha": "f13fc12",
    "date": "2026-03-21",
    "kind": "fix",
    "area": "hosting",
    "title": "Usage dashboard auth, mobile polish, federation blocklist hardening"
  },
  {
    "sha": "b7d55e6",
    "date": "2026-03-21",
    "kind": "feat",
    "area": "hosting",
    "title": "Blocklist UI, admin processes tab, git webhook guide, OpenAPI blocklist"
  },
  {
    "sha": "53325dd",
    "date": "2026-03-21",
    "kind": "feat",
    "area": "hosting",
    "title": "FEDERATED_STATIC_ONLY, federation blocklist, Indonesia-first i18n"
  },
  {
    "sha": "7a2714f",
    "date": "2026-03-21",
    "kind": "feat",
    "area": "hosting",
    "title": "LOW_RESOURCE mode + fedhost-proxy Rust crate skeleton"
  },
  {
    "sha": "c7ff639",
    "date": "2026-03-21",
    "kind": "fix",
    "area": "hosting",
    "title": "2FA login blocker, OpenAPI complete, webhook delivery UI, runtime panel generalized"
  },
  {
    "sha": "4377c13",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "NLPL dynamic site hosting \u2014 process manager, frontend panel, examples"
  },
  {
    "sha": "0b75a27",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Load test suite, updated ROADMAP + HONEST_ASSESSMENT to reflect resolved issues"
  },
  {
    "sha": "658ed76",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Redis rate limiting, migration runner, storage migration complete, maintenance mode, activity feed"
  },
  {
    "sha": "dbb1cc7",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Token scopes UI, scope tests, fh create completion, OpenAPI 1.0.0"
  },
  {
    "sha": "de60790",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Fh create templates, Admin tabs wired, scope enforcement, deploy.ts fix"
  },
  {
    "sha": "b4d5eb3",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Admin audit log + site health tabs, webhook CRUD cleanup"
  },
  {
    "sha": "07fb5ff",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Admin audit log + site health tabs, webhook CRUD cleanup"
  },
  {
    "sha": "34d6c00",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Smart caching, ETags, sitemap/robots auto-gen, clone API, deploy progress bar, analytics sparkline"
  },
  {
    "sha": "35e6efd",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Smart Cache-Control headers, webhooks schema"
  },
  {
    "sha": "374e457",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Unlock message, personal dashboard, fh watch, deployment diff tests, fh status sites"
  },
  {
    "sha": "be2a565",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Deployment diff API, SiteDetail quick-links, unlock_message column"
  },
  {
    "sha": "30ac14a",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Invitation accept page, account settings, live build logs, Grafana dashboard, Caddy override, upload retry"
  },
  {
    "sha": "db7b626",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Fix+feat: deploy environment, webhook delivery log, SSE analytics, ROADMAP"
  },
  {
    "sha": "120a80c",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Fix+feat: git webhook, migrations, OpenAPI 0.9.0, unit tests, docker-compose, CLI README"
  },
  {
    "sha": "394a8bf",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Fix+feat: brute-force protection, data retention, webhooks retry, FTS, SSE, shell completion, fh env"
  },
  {
    "sha": "a3f217e",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Fix+feat: comprehensive improvements across every feature"
  },
  {
    "sha": "2cef2d0",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Form backend, build pipeline, 2FA, site transfer, bulk export/import, staging UI"
  },
  {
    "sha": "bd7f716",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Email system, invitations, staging environments, usage dashboard"
  },
  {
    "sha": "ebf3a2c",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Redirect rules, custom headers, site health monitoring, quota enforcement, settings page"
  },
  {
    "sha": "b341f08",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Unit tests (5 suites), FEDERATION.md protocol spec, OpenAPI 0.8.0"
  },
  {
    "sha": "ec8f02b",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Analytics auth, deployment pagination, orphan cleanup, CLI logout/whoami/streaming"
  },
  {
    "sha": "ebaed71",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "DNS-01 ACME challenge, gossip correctness note, TLS docs, npm publish guide"
  },
  {
    "sha": "74a815d",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Remove all Replit dependencies; implement ACME TLS, audit log, dedup, Prometheus, Redis sessions"
  },
  {
    "sha": "1d7ba2a",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Redis rate limiting, sync retry queue, migrate.ts, i18n HTTP backend, health checks"
  },
  {
    "sha": "c666310",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Storage abstraction, migrations, LRU cache, RBAC, HMAC cookies, health monitor"
  },
  {
    "sha": "d3739f1",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "React lazy loading, site preview modal, fh init, production checklist"
  },
  {
    "sha": "8ee211c",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "I18n across all pages, security E2E tests, npm publish workflow, complete .env.example"
  },
  {
    "sha": "508112e",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Critical security hardening, geographic routing, conflict resolution, full rate limiting"
  },
  {
    "sha": "820ee5d",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "I18n (Bahasa Indonesia), Node Marketplace, TLS/ACME, API docs page, CLI npm publish"
  },
  {
    "sha": "8dff0fb",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "Webhooks, Playwright E2E suite, fh analytics/status, CHANGELOG 0.7.0"
  },
  {
    "sha": "e1c3598",
    "date": "2026-03-20",
    "kind": "feat",
    "area": "hosting",
    "title": "CI pipeline, full OpenAPI 0.7.0 spec, updated API docs"
  },
  {
    "sha": "ad2ea2a",
    "date": "2026-03-20",
    "kind": "fix",
    "area": "hosting",
    "title": "Analytics button in MySites, fh rollback command, bootstrap registry, workspace config"
  },
  {
    "sha": "44ef9fd",
    "date": "2026-03-19",
    "kind": "feat",
    "area": "hosting",
    "title": "Federation sync pull, rollback, preview, onboarding, GitHub Actions, migrations, CLAUDE.md"
  },
  {
    "sha": "ea389b3",
    "date": "2026-03-19",
    "kind": "feat",
    "area": "hosting",
    "title": "Phase 6 \u2014 analytics, access control, CLI, Docker, gossip discovery, admin dashboard"
  },
  {
    "sha": "b9f0a12",
    "date": "2026-08-08",
    "kind": "fix",
    "area": "network",
    "title": "Bump better-sqlite3 to ^12.9.0 so it builds on modern Node"
  },
  {
    "sha": "a2fe256",
    "date": "2026-04-12",
    "kind": "feat",
    "area": "network",
    "title": "Update network dashboard and server behavior"
  },
  {
    "sha": "72c0320",
    "date": "2026-04-11",
    "kind": "feat",
    "area": "network",
    "title": "Document net cloud contract"
  },
  {
    "sha": "d0b3b29",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "network",
    "title": "Add embeddable widget.js for any Nexus product"
  },
  {
    "sha": "27f7d99",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "network",
    "title": "Initial scaffold \u2014 Nexus Network federation dashboard"
  },
  {
    "sha": "fa544c2",
    "date": "2026-08-09",
    "kind": "feat",
    "area": "vault",
    "title": "Send unauthenticated browsers to the ecosystem sign-in page"
  },
  {
    "sha": "1ebe348",
    "date": "2026-08-09",
    "kind": "feat",
    "area": "vault",
    "title": "Accept Nexus-Auth sessions, keeping service tokens for machines"
  },
  {
    "sha": "56cce74",
    "date": "2026-08-08",
    "kind": "fix",
    "area": "vault",
    "title": "Load .env at startup so Vault can actually start"
  },
  {
    "sha": "76b4fe9",
    "date": "2026-08-08",
    "kind": "feat",
    "area": "vault",
    "title": "Backup module, key-route rework, express handler typing"
  },
  {
    "sha": "1000c28",
    "date": "2026-04-22",
    "kind": "fix",
    "area": "vault",
    "title": "Serve dashboard assets in local builds"
  },
  {
    "sha": "af5c9dc",
    "date": "2026-04-22",
    "kind": "fix",
    "area": "vault",
    "title": "Run vault as native ESM on supported runtime"
  },
  {
    "sha": "11a5f95",
    "date": "2026-04-22",
    "kind": "feat",
    "area": "vault",
    "title": "Production readiness improvements"
  },
  {
    "sha": "e7e7793",
    "date": "2026-04-17",
    "kind": "feat",
    "area": "vault",
    "title": "Value/tags/metadata input limits, deleted-entry history, GET /deleted, POST /:name/undelete, search type+category filters"
  },
  {
    "sha": "f25d29f",
    "date": "2026-04-16",
    "kind": "feat",
    "area": "vault",
    "title": "Add stats and restore endpoints with delete archiving"
  },
  {
    "sha": "21bbad8",
    "date": "2026-04-16",
    "kind": "feat",
    "area": "vault",
    "title": "Expiry enforcement, secret versioning, pagination, getAll is_active fix"
  },
  {
    "sha": "ecb470a",
    "date": "2026-04-16",
    "kind": "feat",
    "area": "ops",
    "title": "Structured logging with redaction, db maintenance, restore drill"
  },
  {
    "sha": "f856df0",
    "date": "2026-04-16",
    "kind": "feat",
    "area": "observability",
    "title": "Add request-id propagation and http metrics"
  },
  {
    "sha": "27ace71",
    "date": "2026-04-16",
    "kind": "feat",
    "area": "ops",
    "title": "Add token rotation, backup encryption, and metrics endpoint"
  },
  {
    "sha": "83bdc56",
    "date": "2026-04-16",
    "kind": "feat",
    "area": "vault",
    "title": "Add maintenance safety controls and ops/config route tests"
  },
  {
    "sha": "d711963",
    "date": "2026-04-16",
    "kind": "feat",
    "area": "vault",
    "title": "Production hardening, ops APIs, siem export, and smoke runbook"
  },
  {
    "sha": "fb41431",
    "date": "2026-04-12",
    "kind": "feat",
    "area": "vault",
    "title": "Update vault config, db handling, and public ui"
  },
  {
    "sha": "8a7b16d",
    "date": "2026-04-11",
    "kind": "feat",
    "area": "vault",
    "title": "Add cloud contract routes and tests"
  },
  {
    "sha": "c6f42cc",
    "date": "2026-04-11",
    "kind": "feat",
    "area": "vault",
    "title": "Expand vault cloud contract"
  },
  {
    "sha": "69679d4",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "vault",
    "title": "Add Nexus Network health widget to sidebar"
  },
  {
    "sha": "6cc7c62",
    "date": "2026-04-06",
    "kind": "feat",
    "area": "vault",
    "title": "Initial commit \u2014 DevVault v0.1.0"
  },
  {
    "sha": "92070d2",
    "date": "2026-08-20",
    "kind": "fix",
    "area": "phantom",
    "title": "Make the workspace build, and fix the fifteen bugs that hid behind it"
  },
  {
    "sha": "97ffc9b",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "phantom",
    "title": "Oblivious routing wired into phantom-node \u2014 FHE forwarder processes packets"
  },
  {
    "sha": "2f16902",
    "date": "2026-06-15",
    "kind": "feat",
    "area": "phantom",
    "title": "Phantom node packet send/receive \u2014 connect_and_send, bincode wire format"
  },
  {
    "sha": "1930cda",
    "date": "2026-06-15",
    "kind": "fix",
    "area": "phantom",
    "title": "Make pq.rs struct fields public, add from_bytes for all types"
  },
  {
    "sha": "08f4643",
    "date": "2026-06-15",
    "kind": "fix",
    "area": "phantom",
    "title": "Phantom-node compiles and runs \u2014 two nodes verified"
  },
  {
    "sha": "2d314c0",
    "date": "2026-06-14",
    "kind": "fix",
    "area": "phantom",
    "title": "Phantom-networking compiles (libp2p 0.53 API fixes)"
  },
  {
    "sha": "2e71af1",
    "date": "2026-06-14",
    "kind": "feat",
    "area": "phantom",
    "title": "Networking, node daemon, RLN nullifiers, cover traffic"
  },
  {
    "sha": "bb69055",
    "date": "2026-04-12",
    "kind": "feat",
    "area": "phantom",
    "title": "Improve phantom simulation network and node behavior"
  },
  {
    "sha": "c510f35",
    "date": "2026-02-21",
    "kind": "feat",
    "area": "phantom",
    "title": "FHE key reuse optimization - 100-1000x speedup for simulations"
  },
  {
    "sha": "94eed25",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "ecosystem-internal-testsuit",
    "title": "Point Nexus-Porter at dhts/ecosystem-porter"
  },
  {
    "sha": "6469cb8",
    "date": "2026-08-09",
    "kind": "fix",
    "area": "ecosystem-internal-testsuit",
    "title": "Resolve repo paths from the checkout instead of /home/workspace"
  },
  {
    "sha": "59f9de5",
    "date": "2026-08-08",
    "kind": "feat",
    "area": "nit",
    "title": "Register Nexusclaw, Nexus-Forge and Nexus-Porter; add --version and --parallel"
  },
  {
    "sha": "01a8db1",
    "date": "2026-04-13",
    "kind": "feat",
    "area": "ecosystem-internal-testsuit",
    "title": "Add uiFingerprint module and fingerprint CLI command"
  },
  {
    "sha": "da7df1f",
    "date": "2026-04-12",
    "kind": "feat",
    "area": "ecosystem-internal-testsuit",
    "title": "Add audit dashboard updates and project refresh"
  },
  {
    "sha": "3654867",
    "date": "2026-04-11",
    "kind": "fix",
    "area": "ecosystem-internal-testsuit",
    "title": "Auto-install deps before running tests + DATABASE_URL for Hosting"
  },
  {
    "sha": "06b5757",
    "date": "2026-04-11",
    "kind": "feat",
    "area": "ecosystem-internal-testsuit",
    "title": "Add nit automation runner"
  }
];

export const CHANGELOG_AREAS = ["agent", "agent+intelligence", "ai", "animation", "api", "app", "architecture", "auth", "bench+sdk", "brep", "build", "chat", "chatview", "cli", "clients", "cloud", "cloud-views", "compose", "computer", "config", "core", "dashboard", "db", "deploy", "deps", "design", "desktop", "did-client", "did-mapper", "dns", "docker", "docs", "draw", "ecosystem-internal-testsuit", "email", "extrude", "federation", "flow", "foundation", "foundation-sweep", "gate", "geometry", "graph", "hem", "hosting", "infra", "inset", "lite", "mail", "mobile", "network", "nexus-auth", "nexus-db", "nexus-modeling", "nexus-proxy", "nit", "nodes", "notifications", "observability", "ops", "phantom", "portal", "proxy", "public", "rag", "reasoning", "registry", "render", "routes", "routing", "routing+api", "rust", "safety", "safety+architecture", "security", "server", "shell", "signup", "sim", "startup", "storage", "systems-api", "terminal", "tests", "tolerance", "tools", "types", "ui", "ui+perf", "ui+safety", "ui+tests", "vault", "vulkan", "web", "windows"];
