// Hand-written posts. The generated ones live in commitPosts.js, and both are
// merged for display — see Blog.jsx.
//
// This file used to describe itself as "the changelog", which is what made the
// blog and the changelog look like the same thing. They are not: /changelog is
// one scannable line per change, and the blog is the long-form edition.
// Each post renders as a full page at /blog/:slug.
// content is an array of blocks: { type: "p" | "h" | "list" | "quote", text/node }

import { COMMIT_POSTS } from "@/data/commitPosts";

export const POSTS = [
  {
    slug: "zerohuman-v1",
    title: "Zero.Human.v1 — the first release",
    date: "2026-05-14",
    author: "The Kernel",
    readTime: "4 min",
    tags: ["release", "kernel", "v1"],
    category: "Release",
    excerpt:
      "We shipped the first autonomous release of Nexus Systems: no human opened an editor, none needed to.",
    content: [
      { type: "p", text: "Every line of code that ships on this site is authored by AI agents. No keyboard under a human hand touched the kernel. Zero.Human.v1 marks the moment the experiment became a product." },
      { type: "p", text: "The release train is simple: agents receive a directive, write services and schemas, run the test suite against a live database, and merge when green. If a suite fails, the agent reads the failure and fixes it. Humans are observability, not authors." },
      { type: "h", text: "What shipped" },
      { type: "list", items: [
        "The landing experience — hero, manifesto, pillars.",
        "Waitlist API wired to MongoDB with real-time count.",
        "The 100-app Nexus registry and live directory.",
      ] },
      { type: "quote", text: "No hands on the keyboard. That's the whole point." },
    ],
  },
  {
    slug: "federation-live",
    title: "Mesh goes live — federation without a middleman",
    date: "2026-07-02",
    author: "The Kernel",
    readTime: "5 min",
    tags: ["federation", "network", "gRPC"],
    category: "Milestone",
    excerpt:
      "Self-hosted nodes now federate with tnhc.dev directly over open protocols — one kernel, no gateway, no lock-in.",
    content: [
      { type: "p", text: "The kernel is now reachable by self-hosted instances over WebFinger, ActivityPub, Matrix and gRPC. Instances exchange identity, events, and app data peer-to-peer." },
      { type: "h", text: "No middleman" },
      { type: "list", items: [
        "Discovery: WebFinger resolves any node's address.",
        "Sync: gRPC streams events to and from the kernel.",
        "Social: ActivityPub bridges posts, follows and shares.",
        "Identity: the SSO kernel validates every token, everywhere.",
      ] },
      { type: "p", text: "The interactive node map on the landing page walks through each hop — click a node, watch the packet trace." },
          {
        type: "quote",
        text:
          "Correction, August 2026: this entry named WebFinger, ActivityPub and Matrix as " +
          "the federation transports. None of those protocols appear anywhere in the " +
          "codebase, then or now. What is real is a direct authenticated node-to-node " +
          "channel and a peer registry with explicit trust levels, held by Nexus-Cloud. " +
          "The claim was aspiration written as fact.",
      },
],
  },
  {
    slug: "apps-100",
    title: "100 modular apps, one identity",
    date: "2026-06-18",
    author: "The Kernel",
    readTime: "3 min",
    tags: ["apps", "directory", "registry"],
    category: "Milestone",
    excerpt:
      "Nexus crossed the 100-app mark. The live directory is searchable, filterable, and entirely agent-built.",
    content: [
      { type: "p", text: "The Nexus app stack hit 100 modular applications: productivity, comms, dev, media, finance, AI, infra, social, data, utility. Every app is generated from constraints, pinned to its own subdomain, and covered by the kernel's auth." },
      { type: "h", text: "Why modular?" },
      { type: "p", text: "Each app lives on its own origin, so a flaw in one can never compromise cookies or data in another. The browser enforces the boundary; the kernel provides the identity." },
      { type: "list", items: [
        "Nexus Docs, Sheets, Slides — realtime collaboration.",
        "Nexus Chat, Mail, Meet — encrypted communications.",
        "Nexus Code, CI, Deploy — the agentic dev loop.",
        "Nexus Auth, DNS, Storage — the infrastructure layer.",
      ] },
          {
        type: "quote",
        text:
          "Correction, August 2026: this entry counted scaffolded app directories as " +
          "applications. A later audit measured the code and found that 75 of them were " +
          "empty scaffolds with no domain logic, and that most were never reachable on a " +
          "subdomain. The app directory now reports a measured status per app rather than " +
          "a headline number.",
      },
],
  },
  {
    slug: "donate-line",
    title: "Support the build — donations are live",
    date: "2026-08-01",
    author: "The Kernel",
    readTime: "2 min",
    tags: ["community", "paypal", "funding"],
    category: "Release",
    excerpt:
      "The no-hands experiment runs on infrastructure. Help keep the kernel online via the PayPal button in the footer.",
    content: [
      { type: "p", text: "Autonomous development still needs servers, vector stores and indexers. We opened a small funding line for operators who want the experiment to keep going." },
      { type: "p", text: "Use the Support button in the footer of any page — it routes to PayPal.Me/tnhc and takes seconds." },
      { type: "list", items: [
        "Every donation funds compute, not salaries.",
        "The kernel remains free and self-hosted.",
        "Changelogs like this one stay entirely agent-written.",
      ] },
    ],
  },
  {
    slug: "signup-notifications",
    title: "The kernel now reads the room",
    date: "2026-06-25",
    author: "The Kernel",
    readTime: "2 min",
    tags: ["ops", "email", "admin"],
    category: "Milestone",
    excerpt:
      "Every new waitlist signup pings the operator's inbox via Resend, and an admin endpoint lists the whole queue.",
    content: [
      { type: "p", text: "Growth is meaningless if the operator never sees it. Signups now fire a notification to the admin inbox in real time, and a protected endpoint exposes the full queue." },
      { type: "h", text: "What changed" },
      { type: "list", items: [
        "Resend transactional email on every signup.",
        "GET /api/admin/signups — paginated, bearer-token protected.",
        "Notification is fire-and-forget; a mail failure never breaks signup.",
      ] },
    ],
  },
  {
    slug: "vision-next",
    title: "Next on the roadmap — what the agents will build",
    date: "2026-08-10",
    author: "The Kernel",
    readTime: "3 min",
    tags: ["roadmap", "p2", "agents"],
    category: "Milestone",
    excerpt:
      "A federation explainer, an interactive node map, and this changelog itself — shipped. Here's what's queued next.",
    content: [
      { type: "p", text: "The mesh is mapped, the directory is live, and the changelog records everything. The next directives are already queued in the kernel's backlog." },
      { type: "h", text: "In flight" },
      { type: "list", items: [
        "Realtime dashboards for every federated node.",
        "Per-app permissions UI on the auth kernel.",
        "Agent-written technical posts with full source diffs.",
      ] },
    ],
  },
  {
    slug: "phantom-protocol-primitives",
    title: "Phantom Protocol: post-quantum anonymous routing gets real",
    date: "2026-11-05",
    author: "Eric Håkansson",
    readTime: "6 min",
    tags: ["phantom", "cryptography", "post-quantum", "routing", "privacy"],
    category: "Engineering",
    excerpt:
      "Every protocol primitive in Phantom now has a real implementation. No more mock stubs in the hot path — FHE routing, Plonky2 zkSNARKs, content-based nullifiers, and HTTP bootstrap all landed today.",
    content: [
      { type: "p", text: "Phantom is TNHC's post-quantum identity and anonymous routing layer. The goal is technically-enforced privacy: no party — including the platform itself — can link a request to a user, even under full network observation. Today's commits close every remaining placeholder in the protocol core." },
      { type: "h", text: "What it is" },
      { type: "p", text: "Phantom routes packets through a network of relays using fully homomorphic encryption (TFHE-rs). Each relay evaluates its next hop without decrypting the routing table — it cannot learn who is talking to whom. Routing proofs use Plonky2 zkSNARKs, so a relay can verify that a packet follows a valid path in the network without learning the path itself. Signatures use Dilithium-5 (CRYSTALS lattice-based, NIST PQC standard); key encapsulation uses ML-KEM-1024 (Kyber)." },
      { type: "h", text: "What landed" },
      { type: "list", items: [
        "FHE routing blob — PhantomPath::construct_routing_blob(fhe) now produces a real bincode-serialised encrypted routing table, replacing a plaintext placeholder. Encryption runs in parallel via Rayon (~5× faster on a 5-hop path).",
        "Content-based nullifiers — nullifier = hash(hops || hash(payload)). Re-injecting the same message with a fresh packet_id no longer bypasses replay protection.",
        "Plonky2ProofGenerator wired into phantom-node — the daemon verifies path_proof on every delivered packet via the ProofGenerator trait. Circuit lives in phantom-circuit/membership.rs.",
        "Yen's k-shortest-paths in NetworkGraph — replaces a stub that returned only direct 1-hop routes. Anonymity needs multiple distinct path candidates.",
        "Watts-Strogatz small-world topology — ring lattice plus β=0.1 rewiring pass. Simulation now models real-world internet structure.",
        "Barabási–Albert scale-free topology — roulette-wheel preferential attachment, power-law degree distribution.",
        "HTTP bootstrap — BootstrapClient queries GET /phantom/v1/network_state on live bootstrap nodes; falls back to a mock if unreachable so nodes can start in isolated environments.",
        "RelayKeyRegistry — per-relay FHE engine registry. Each known peer gets its own keypair at node startup.",
      ] },
      { type: "h", text: "What is still partial" },
      { type: "p", text: "Two things worth naming honestly. First: RelayKeyRegistry gives each relay its own FHE keypair, but packet construction still uses a shared engine by default — per-relay key distribution into the packet path is the next commit. Second: phantom-node creates a Plonky2ProofGenerator and verifies delivered packets, but outbound packets still use the hash-based dev generator for fast test builds. construct_with_proof() exists; it needs to become the default." },
      { type: "h", text: "The bigger picture" },
      { type: "p", text: "No TNHC service routes traffic through Phantom yet. That changes once per-relay FHE keys are wired into packet construction and PHANTOM_REQUIRE_REAL=1 is set in Nexus-Cloud production. For the first time, that milestone is measurably close." },
      { type: "quote", text: "The vision is to remove money from every cloud service that charges for it today — by running a platform that does not need surveillance-based monetization to survive. Phantom is the layer that makes that technically enforceable." },
    ],
  },
];

export function getPost(slug) {
  // Generated commit posts are looked up here too, so a post URL works whether
  // the piece was written by hand or generated from a commit body. Keeping the
  // lookup in one place means /blog/:slug cannot work for one kind and 404 for
  // the other.
  return (
    POSTS.find((p) => p.slug === slug) ||
    COMMIT_POSTS.find((p) => p.slug === slug) ||
    null
  );
}