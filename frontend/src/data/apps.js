// The Nexus app registry — single source of truth for the live app directory.
// 80+ modular applications that ship on the tnhc.dev kernel. Each entry is:
//   { slug, name, category, status, blurb, icon }
// slug    : kebab-case identifier (used for the sub-app subdomain *.apps.tnhc.dev)
// name    : display name
// category: one of CATEGORIES below
// status  : "live" | "beta" | "planned"
// blurb   : one-line description (<=90 chars)
// icon    : @phosphor-icons/react export name (duotone weight)
//
// To add an app: append to APPS below. The directory UI derives categories and
// counts from this list automatically.

export const CATEGORIES = [
  "Productivity",
  "Comms",
  "Dev",
  "Media",
  "Finance",
  "AI",
  "Infra",
  "Social",
  "Data",
  "Utility",
];

export const STATUSES = ["live", "beta", "planned"];

export const APPS = [
  // --- Productivity (12) ---
  { slug: "docs", name: "Nexus Docs", category: "Productivity", status: "live", blurb: "Real-time collaborative documents with kernel-grade auth.", icon: "FileText" },
  { slug: "sheets", name: "Nexus Sheets", category: "Productivity", status: "live", blurb: "Federated spreadsheets with AI formula assist.", icon: "Table" },
  { slug: "slides", name: "Nexus Slides", category: "Productivity", status: "beta", blurb: "Presentation deck builder with AI layout engine.", icon: "PresentationChart" },
  { slug: "tasks", name: "Nexus Tasks", category: "Productivity", status: "live", blurb: "Board-first task tracking synced across nodes.", icon: "CheckSquare" },
  { slug: "notes", name: "Nexus Notes", category: "Productivity", status: "live", blurb: "Local-first markdown notes with federated sync.", icon: "Notebook" },
  { slug: "calendar", name: "Nexus Calendar", category: "Productivity", status: "beta", blurb: "Federated calendar with cross-node invites.", icon: "Calendar" },
  { slug: "kanban", name: "Nexus Kanban", category: "Productivity", status: "live", blurb: "WIP-limited kanban with cycle-time analytics.", icon: "Kanban" },
  { slug: "whiteboard", name: "Nexus Whiteboard", category: "Productivity", status: "beta", blurb: "Infinite canvas with AI diagramming.", icon: "PaintBrush" },
  { slug: "forms", name: "Nexus Forms", category: "Productivity", status: "live", blurb: "Featherweight forms with kernel-SSO responses.", icon: "ClipboardText" },
  { slug: "vault", name: "Nexus Vault", category: "Productivity", status: "live", blurb: "Zero-knowledge secrets and password store.", icon: "LockKey" },
  { slug: "inbox", name: "Nexus Inbox", category: "Productivity", status: "planned", blurb: "Unified triage inbox across all Nexus apps.", icon: "Tray" },
  { slug: "bookmarks", name: "Nexus Bookmarks", category: "Productivity", status: "beta", blurb: "Federated link archive with full-text search.", icon: "BookmarkSimple" },

  // --- Comms (10) ---
  { slug: "chat", name: "Nexus Chat", category: "Comms", status: "live", blurb: "E2E-encrypted channels with federated bridges.", icon: "ChatCircleText" },
  { slug: "mail", name: "Nexus Mail", category: "Comms", status: "live", blurb: "Self-hosted IMAP/SMTP replacement on the kernel.", icon: "EnvelopeSimple" },
  { slug: "meet", name: "Nexus Meet", category: "Comms", status: "beta", blurb: "Peer-to-peer video rooms, no central turn.", icon: "VideoCamera" },
  { slug: "voice", name: "Nexus Voice", category: "Comms", status: "beta", blurb: "Federated voice channels for distributed teams.", icon: "Microphone" },
  { slug: "rooms", name: "Nexus Rooms", category: "Comms", status: "live", blurb: "Spatial audio rooms for ambient co-working.", icon: "SpeakerHifi" },
  { slug: "irc", name: "Nexus IRC", category: "Comms", status: "live", blurb: "Modern IRC client with persistent backlog.", icon: "Hash" },
  { slug: "broadcast", name: "Nexus Broadcast", category: "Comms", status: "planned", blurb: "One-to-many announcements across federated nodes.", icon: "Megaphone" },
  { slug: "sms", name: "Nexus SMS", category: "Comms", status: "planned", blurb: "Self-hosted SMS gateway with webhook pipelines.", icon: "ChatTeardropText" },
  { slug: "fax", name: "Nexus Fax", category: "Comms", status: "planned", blurb: "Yes, really. Federated document fax.", icon: "Printer" },
  { slug: "contacts", name: "Nexus Contacts", category: "Comms", status: "live", blurb: "CardDAV-compatible federated address book.", icon: "AddressBook" },

  // --- Dev (12) ---
  { slug: "code", name: "Nexus Code", category: "Dev", status: "live", blurb: "In-browser VS Code with kernel agent runner.", icon: "CodeBlock" },
  { slug: "git", name: "Nexus Git", category: "Dev", status: "live", blurb: "Self-hosted git forge with AI pull requests.", icon: "GitBranch" },
  { slug: "issues", name: "Nexus Issues", category: "Dev", status: "live", blurb: "Issue tracker federated across repos and nodes.", icon: "Bug" },
  { slug: "ci", name: "Nexus CI", category: "Dev", status: "beta", blurb: "Distributed build pipelines with AI failure triage.", icon: "GearFine" },
  { slug: "deploy", name: "Nexus Deploy", category: "Dev", status: "beta", blurb: "Edge deploy from kernel commit to global node.", icon: "Rocket" },
  { slug: "registry", name: "Nexus Registry", category: "Dev", status: "live", blurb: "Private container + npm registry on the kernel.", icon: "Package" },
  { slug: "secrets", name: "Nexus Secrets", category: "Dev", status: "live", blurb: "Encrypted env vars injected at deploy time.", icon: "Key" },
  { slug: "sentry", name: "Nexus Sentry", category: "Dev", status: "planned", blurb: "Self-hosted error monitoring with AI triage.", icon: "ShieldWarning" },
  { slug: "terminal", name: "Nexus Terminal", category: "Dev", status: "live", blurb: "Web terminal with kernel agent dispatch.", icon: "Terminal" },
  { slug: "snapshot", name: "Nexus Snapshot", category: "Dev", status: "beta", blurb: "DB versioning and instant rollback.", icon: "ClockCounterClockwise" },
  { slug: "reviewer", name: "Nexus Reviewer", category: "Dev", status: "beta", blurb: "AI-first code review on every PR.", icon: "MagnifyingGlass" },
  { slug: "playground", name: "Nexus Playground", category: "Dev", status: "live", blurb: "Shareable code snippets with live output.", icon: "Play" },

  // --- Media (10) ---
  { slug: "photos", name: "Nexus Photos", category: "Media", status: "live", blurb: "Self-hosted photo library with face + place.", icon: "Images" },
  { slug: "videos", name: "Nexus Videos", category: "Media", status: "beta", blurb: "Transcoded, federated video hosting.", icon: "FilmReel" },
  { slug: "stream", name: "Nexus Stream", category: "Media", status: "planned", blurb: "Live streaming on self-hosted ingest.", icon: "Broadcast" },
  { slug: "music", name: "Nexus Music", category: "Media", status: "live", blurb: "Federated music library with Subsonic API.", icon: "MusicNotes" },
  { slug: "podcast", name: "Nexus Podcast", category: "Media", status: "beta", blurb: "Podcast host + transcriber with AI chapters.", icon: "MicrophoneStage" },
  { slug: "library", name: "Nexus Library", category: "Media", status: "beta", blurb: "Self-hosted ebooks + audiobooks server.", icon: "Books" },
  { slug: "editor", name: "Nexus Editor", category: "Media", status: "planned", blurb: "In-browser NLE for the kernel node.", icon: "Scissors" },
  { slug: "render", name: "Nexus Render", category: "Media", status: "planned", blurb: "Distributed GPU render farm via nodes.", icon: "Sparkle" },
  { slug: "stream-cam", name: "Nexus Cam", category: "Media", status: "planned", blurb: "IP-camera aggregator with timeline replay.", icon: "Camera" },
  { slug: "vinyl", name: "Nexus Vinyl", category: "Media", status: "planned", blurb: "Lossless audio archive with player.", icon: "Disc" },

  // --- Finance (10) ---
  { slug: "ledger", name: "Nexus Ledger", category: "Finance", status: "live", blurb: "Double-entry personal + small-biz bookkeeping.", icon: "BookOpen" },
  { slug: "invoices", name: "Nexus Invoices", category: "Finance", status: "live", blurb: "Invoice issuer with stripe + paypal rails.", icon: "Receipt" },
  { slug: "expenses", name: "Nexus Expenses", category: "Finance", status: "beta", blurb: "Receipt capture with AI categorization.", icon: "CreditCard" },
  { slug: "pay", name: "Nexus Pay", category: "Finance", status: "planned", blurb: "P2P payments on the federated ledger.", icon: "Wallet" },
  { slug: "budget", name: "Nexus Budget", category: "Finance", status: "live", blurb: "Envelope budgeting with AI forecasting.", icon: "Coin" },
  { slug: "tax", name: "Nexus Tax", category: "Finance", status: "planned", blurb: "Self-hosted tax filing with kernel SSO.", icon: "FileText" },
  { slug: "trading", name: "Nexus Trading", category: "Finance", status: "planned", blurb: "Self-hosted portfolio and ticker tracker.", icon: "ChartLine" },
  { slug: "treasury", name: "Nexus Treasury", category: "Finance", status: "planned", blurb: "Multi-org treasury with policy engine.", icon: "Vault" },
  { slug: "subscriptions", name: "Nexus Subs", category: "Finance", status: "beta", blurb: "Track every recurring card charge, AI-flagged.", icon: "Repeat" },
  { slug: "donate", name: "Nexus Donate", category: "Finance", status: "planned", blurb: "Self-hosted donation rails incl. PayPal.me.", icon: "Heart" },

  // --- AI (10) ---
  { slug: "studio", name: "Nexus Studio", category: "AI", status: "live", blurb: "Multi-model AI chat with kernel-side memory.", icon: "Sparkle" },
  { slug: "agent", name: "Nexus Agent", category: "AI", status: "beta", blurb: "Long-running autonomous agent host on kernel.", icon: "Robot" },
  { slug: "embed", name: "Nexus Embed", category: "AI", status: "beta", blurb: "Self-hosted embedding + vector store.", icon: "Stack" },
  { slug: "fine-tune", name: "Nexus Tune", category: "AI", status: "planned", blurb: "Fine-tune tracked models on your own data.", icon: "Wrench" },
  { slug: "dataset", name: "Nexus Dataset", category: "AI", status: "live", blurb: "Versioned datasets with lineage provenance.", icon: "Database" },
  { slug: "evals", name: "Nexus Evals", category: "AI", status: "planned", blurb: "Continuous eval harness for AI agents.", icon: "Selection" },
  { slug: "image-gen", name: "Nexus Imagegen", category: "AI", status: "live", blurb: "Self-hosted image generation pipeline.", icon: "Image" },
  { slug: "voice-clone", name: "Nexus Voice", category: "AI", status: "planned", blurb: "Ethical voice cloning hooked to kernel auth.", icon: "Waveform" },
  { slug: "transcribe", name: "Nexus Transcribe", category: "AI", status: "live", blurb: "Whisper-grade transcription across nodes.", icon: "Subtitles" },
  { slug: "copilot", name: "Nexus Copilot", category: "AI", status: "beta", blurb: "Pervasive AI assistant across every Nexus app.", icon: "Lightbulb" },

  // --- Infra (10) ---
  { slug: "auth", name: "Nexus Auth", category: "Infra", status: "live", blurb: "Unified SSO kernel — one identity, every app.", icon: "ShieldCheck" },
  { slug: "dns", name: "Nexus DNS", category: "Infra", status: "live", blurb: "Self-hosted DNS with sec, DDoS foreshadowing.", icon: "GlobeHemisphereWest" },
  { slug: "storage", name: "Nexus Storage", category: "Infra", status: "live", blurb: "S3-compatible block storage on the kernel.", icon: "HardDrives" },
  { slug: "queue", name: "Nexus Queue", category: "Infra", status: "beta", blurb: "Distributed job queue with AI scheduling.", icon: "ListBullets" },
  { slug: "monitoring", name: "Nexus Monitor", category: "Infra", status: "beta", blurb: "Self-hosted metrics, traces and logs in one.", icon: "Pulse" },
  { slug: "firewall", name: "Nexus Firewall", category: "Infra", status: "planned", blurb: "Per-node L7 firewall with AI policy.", icon: "Shield" },
  { slug: "proxy", name: "Nexus Proxy", category: "Infra", status: "live", blurb: "Reverse proxy with zero-config SSL on kernel.", icon: "ArrowsLeftRight" },
  { slug: "mesh", name: "Nexus Mesh", category: "Infra", status: "planned", blurb: "Wireguard mesh that auto-meshes your nodes.", icon: "ShareNetwork" },
  { slug: "compute", name: "Nexus Compute", category: "Infra", status: "planned", blurb: "Serverless functions on every federated node.", icon: "Cpu" },
  { slug: "backup", name: "Nexus Backup", category: "Infra", status: "live", blurb: "Snapshot everything across all apps, nightly.", icon: "ArrowArcLeft" },

  // --- Social (8) ---
  { slug: "feed", name: "Nexus Feed", category: "Social", status: "beta", blurb: "ActivityPub-style federated timeline.", icon: "NewspaperClipping" },
  { slug: "events", name: "Nexus Events", category: "Social", status: "live", blurb: "Community events with RSVPs across nodes.", icon: "Calendar" },
  { slug: "groups", name: "Nexus Groups", category: "Social", status: "beta", blurb: "Forum-style threads with slow-mode + polls.", icon: "ChatsCircle" },
  { slug: "blogs", name: "Nexus Blogs", category: "Social", status: "live", blurb: "Federated blog host with markdown + AI ghost.", icon: "PenNib" },
  { slug: "reviews", name: "Nexus Reviews", category: "Social", status: "planned", blurb: "AI-verified review network for products.", icon: "Star" },
  { slug: "forums", name: "Nexus Forums", category: "Social", status: "planned", blurb: "Self-hosted Discourse-equivalent on kernel.", icon: "ChatDots" },
  { slug: "polls", name: "Nexus Polls", category: "Social", status: "live", blurb: "Federated polls with kernel-SSO verification.", icon: "ChartBar" },
  { slug: "wiki", name: "Nexus Wiki", category: "Social", status: "live", blurb: "Federated knowledge base with edit graph.", icon: "Globe" },

  // --- Data (8) ---
  { slug: "postgres", name: "Nexus Postgres", category: "Data", status: "live", blurb: "Self-hosted Postgres with kernel-side pooling.", icon: "Database" },
  { slug: "mongo", name: "Nexus Mongo", category: "Data", status: "live", blurb: "Document store with one-click replica set.", icon: "Stack" },
  { slug: "redis", name: "Nexus Redis", category: "Data", status: "live", blurb: "In-memory cache with cluster auto-deploy.", icon: "Lightning" },
  { slug: "etl", name: "Nexus ETL", category: "Data", status: "beta", blurb: "Pipelines with AI schema inference.", icon: "ArrowsClockwise" },
  { slug: "warehouse", name: "Nexus Warehouse", category: "Data", status: "planned", blurb: "Column store for analytics on the kernel.", icon: "CubeTransparent" },
  { slug: "crawl", name: "Nexus Crawl", category: "Data", status: "planned", blurb: "Distributed web crawler with AI shaping.", icon: "BugBeetle" },
  { slug: "search", name: "Nexus Search", category: "Data", status: "live", blurb: "Self-hosted full-text + vector search.", icon: "MagnifyingGlassPlus" },
  { slug: "bi", name: "Nexus BI", category: "Data", status: "beta", blurb: "Dashboards with natural-language queries.", icon: "ChartBar" },

  // --- Utility (10) ---
  { slug: "shortner", name: "Nexus Short", category: "Utility", status: "live", blurb: "URL shortener with analytics per node.", icon: "Scissors" },
  { slug: "qr", name: "Nexus QR", category: "Utility", status: "live", blurb: "Generate + scan QR codes against the kernel.", icon: "QrCode" },
  { slug: "paste", name: "Nexus Paste", category: "Utility", status: "live", blurb: "Encrypted pastebin with auto-expiry.", icon: "Clipboard" },
  { slug: "clock", name: "Nexus Clock", category: "Utility", status: "live", blurb: "World clock across all your operators.", icon: "Clock" },
  { slug: "translate", name: "Nexus Translate", category: "Utility", status: "beta", blurb: "Self-hosted neural MT with AI fine-tunes.", icon: "Translate" },
  { slug: "weather", name: "Nexus Weather", category: "Utility", status: "planned", blurb: "Federated weather grid predictions.", icon: "CloudRain" },
  { slug: "units", name: "Nexus Units", category: "Utility", status: "live", blurb: "Unit + currency converter, kernel-induced.", icon: "Ruler" },
  { slug: "timer", name: "Nexus Timer", category: "Utility", status: "live", blurb: "Pomodoro + multi-timer across nodes.", icon: "Timer" },
  { slug: "calculator", name: "Nexus Calc", category: "Utility", status: "live", blurb: "Programmable calculator with AI assist.", icon: "MathOperations" },
  { slug: "scraper", name: "Nexus Scraper", category: "Utility", status: "planned", blurb: "Visual web scraper with AI selectors.", icon: "Bug" },
];

export const STATUS_META = {
  live: { label: "Live", className: "text-acid", dot: "bg-acid" },
  beta: { label: "Beta", className: "text-white/70", dot: "bg-white/60" },
  planned: { label: "Planned", className: "text-white/40", dot: "bg-white/30" },
};
