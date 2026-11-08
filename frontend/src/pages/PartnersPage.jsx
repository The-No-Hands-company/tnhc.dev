import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Handshake,
  ArrowUpRight,
  Globe,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Lightning,
  Sparkle,
} from "@phosphor-icons/react";
import Header from "@/components/site/Header";
import SiteFooterLinks from "@/components/site/SiteFooterLinks";

const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const PARTNERS = [
  {
    id: "corex-team",
    name: "Corex Team",
    affiliation: null,
    handle: "corexteam.org",
    href: "https://corexteam.org",
    category: "engineering",
    categoryLabel: "Engineering & Open Source",
    region: "International",
    location: "Global / Distributed",
    flag: "🌐",
    contact: "Corex Team",
    contactHref: "https://corexteam.org",
    role: "Joint Development & Open-Source Partner",
    status: "Active Collaboration",
    since: "2026",
    summary:
      "International open-source engineering collective dedicated to modern developer tooling, documentation systems, and transparent software craftsmanship.",
    description:
      "Corex Team collaborates with The No Hands Company on the joint architecture and co-development of Docu — an open, sovereign documentation platform and knowledge framework. The partnership merges TNHC's autonomous no-hands engineering methodology with Corex Team's refined documentation standards and product paradigms to give sovereign teams instant, high-fidelity developer documentation.",
    focusAreas: [
      "Docu Co-Development & Documentation Systems",
      "Developer Experience & Sovereign Tooling",
      "Open-Source Knowledge Architecture",
    ],
    projects: [
      {
        label: "Docu",
        href: "https://corexteam.org/Docu",
        description: "Open sovereign documentation engine co-developed with TNHC",
      },
      {
        label: "Corex Open Source",
        href: "https://corexteam.org",
        description: "Developer tooling and infrastructure",
      },
    ],
    tags: ["Co-Development", "Docu", "Open Source", "Developer Tools", "International"],
  },
  {
    id: "mebi-gadgetkini",
    name: "Mebi",
    affiliation: "Gadgetkini Padang",
    handle: "@gadgetkinipadang",
    href: "https://instagram.com/gadgetkinipadang",
    category: "regional",
    categoryLabel: "Regional & Hardware Ecosystem",
    region: "Indonesia",
    location: "Padang, West Sumatra, Indonesia",
    flag: "🇮🇩",
    contact: "Mebi",
    contactHref: "https://instagram.com/gadgetkinipadang",
    role: "Regional Strategic Partner — Indonesia",
    status: "Active Regional Partner",
    since: "2026",
    summary:
      "Regional strategic partner driving technology adoption, hardware integration, and local creator community engagement across Indonesia.",
    description:
      "Operating from Padang, West Sumatra, Mebi spearheads regional engagement, hardware integration, and technology distribution for The No Hands Company in Indonesia. Connecting TNHC's sovereign software and cloud platforms with real-world consumer devices, mobile environments, retail hardware distribution, and a burgeoning creator ecosystem in Southeast Asia.",
    focusAreas: [
      "Regional Ecosystem Adoption & Community Growth",
      "Consumer Hardware & Mobile Environment Integration",
      "Retail Tech Distribution across Southeast Asia",
    ],
    projects: [
      {
        label: "Gadgetkini Padang Hub",
        href: "https://instagram.com/gadgetkinipadang",
        description: "Mobile technology and gadget showcase in Padang, West Sumatra",
      },
      {
        label: "Sovereign Device Integration",
        href: "https://instagram.com/gadgetkinipadang",
        description: "Testing and deploying sovereign platform clients on Indonesian hardware",
      },
    ],
    tags: ["Regional Partner", "Indonesia", "Padang", "Hardware Ecosystem", "Retail Distribution", "Southeast Asia"],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Partners" },
  { id: "engineering", label: "Engineering & Open Source" },
  { id: "regional", label: "Regional & Hardware" },
];

function PartnerCard({ partner, index }) {
  const isRegional = partner.category === "regional";

  return (
    <Reveal delay={index * 0.08}>
      <article className="group relative overflow-hidden border border-white/10 bg-surface/50 p-7 backdrop-blur-md transition-all duration-500 hover:border-acid/40 hover:bg-surface/70 md:p-9">
        {/* Subtle background ambient tint on hover */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-acid/5 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Main info */}
          <div className="flex-1 space-y-5">
            {/* Top row: badge & live status indicator */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                  {partner.categoryLabel}
                </span>
                <span className="flex items-center gap-1.5 border border-acid/25 bg-acid/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-acid">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acid" />
                  </span>
                  {partner.status}
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] text-white/40">
                <span>{partner.flag}</span>
                <span>{partner.location}</span>
              </div>
            </div>

            {/* Title & Affiliation */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-acid/30 bg-acid/[0.06] text-acid transition-colors duration-300 group-hover:border-acid group-hover:bg-acid/[0.12]">
                {isRegional ? (
                  <Handshake size={24} weight="duotone" />
                ) : (
                  <Cpu size={24} weight="duotone" />
                )}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {partner.name}
                  </h2>
                  {partner.affiliation && (
                    <span className="border border-white/10 px-2 py-0.5 font-mono text-[11px] text-white/60">
                      {partner.affiliation}
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-acid/80">
                  {partner.role}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-2xl font-sans text-sm leading-relaxed text-white/70 md:text-base">
              {partner.description}
            </p>

            {/* Key Focus Areas */}
            <div className="space-y-2 pt-1">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Core Focus Areas
              </div>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {partner.focusAreas.map((focus) => (
                  <li key={focus} className="flex items-center gap-2 font-sans text-xs text-white/80">
                    <CheckCircle size={14} weight="fill" className="shrink-0 text-acid" />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {partner.tags.map((t) => (
                <span
                  key={t}
                  className="border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 transition-colors group-hover:text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right meta sidebar */}
          <aside className="w-full shrink-0 space-y-4 border-t border-white/10 pt-6 lg:w-72 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <dl className="space-y-3">
              <div className="flex items-baseline justify-between gap-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Region
                </dt>
                <dd className="font-mono text-xs text-white">
                  {partner.flag} {partner.region}
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Since
                </dt>
                <dd className="font-mono text-xs text-white">{partner.since}</dd>
              </div>

              <div className="flex items-baseline justify-between gap-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Contact
                </dt>
                <dd className="text-right">
                  {partner.contactHref ? (
                    <a
                      href={partner.contactHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-acid transition-opacity hover:opacity-75"
                    >
                      {partner.contact} <ArrowUpRight size={11} />
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-white">{partner.contact}</span>
                  )}
                </dd>
              </div>
            </dl>

            {/* Projects list */}
            <div className="border-t border-white/10 pt-4">
              <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Joint Initiatives
              </div>
              <div className="space-y-2.5">
                {partner.projects.map((proj) => (
                  <a
                    key={proj.label}
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/proj block border border-white/5 bg-white/[0.02] p-2.5 transition-colors duration-200 hover:border-acid/30 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between text-xs font-medium text-white group-hover/proj:text-acid">
                      <span>{proj.label}</span>
                      <ArrowUpRight size={12} className="shrink-0 transition-transform group-hover/proj:-translate-y-0.5 group-hover/proj:translate-x-0.5" />
                    </div>
                    {proj.description && (
                      <p className="mt-1 font-sans text-[11px] leading-snug text-white/45">
                        {proj.description}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Primary Outbound Action */}
            <div className="pt-2">
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 border border-acid/50 bg-acid/[0.05] py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-acid transition-all duration-300 hover:bg-acid hover:text-black"
              >
                <Globe size={14} />
                <span>Visit {partner.handle}</span>
              </a>
            </div>
          </aside>
        </div>
      </article>
    </Reveal>
  );
}

export default function PartnersPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPartners = useMemo(() => {
    if (selectedCategory === "all") return PARTNERS;
    return PARTNERS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const totalInitiatives = useMemo(() => {
    return PARTNERS.reduce((n, p) => n + p.projects.length, 0);
  }, []);

  return (
    <div className="min-h-screen bg-void text-white">
      <Header />

      <main className="mx-auto max-w-[1600px] px-6 pb-36 pt-40 md:px-12">
        {/* Eyebrow & Hero Header */}
        <Reveal>
          <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            <span className="h-px w-10 bg-acid" />
            TNHC Global &amp; Regional Network
          </div>
          <h1 className="max-w-4xl font-heading text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Building together,<br />across borders.
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/60 sm:text-lg">
            The No Hands Company partners with aligned engineering collectives and regional
            pioneers who share our commitment to open, transparent, and sovereign technology.
          </p>
        </Reveal>

        {/* Stats Row */}
        <Reveal delay={0.08}>
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            <div>
              <div className="font-heading text-3xl font-extrabold text-acid md:text-4xl">
                {PARTNERS.length}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Active Partners
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl font-extrabold text-white md:text-4xl">
                2
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Regions Represented
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl font-extrabold text-acid md:text-4xl">
                {totalInitiatives}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Joint Initiatives
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl font-extrabold text-white md:text-4xl">
                100%
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Sovereign &amp; Open
              </div>
            </div>
          </div>
        </Reveal>

        {/* Category Filter Tabs */}
        <div className="mt-14 flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          <span className="mr-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            Filter:
          </span>
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === "all"
                ? PARTNERS.length
                : PARTNERS.filter((p) => p.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 border px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-all duration-300 ${
                  isSelected
                    ? "border-acid bg-acid text-black"
                    : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 text-[10px] ${
                    isSelected ? "bg-black/15 text-black" : "bg-white/10 text-white/50"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Partner Cards Directory */}
        <div className="mt-8 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredPartners.map((partner, i) => (
              <PartnerCard key={partner.id} partner={partner} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Partnership Principles */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <Reveal>
            <div className="mb-4 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-10 bg-acid" />
              Collaboration Principles
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              How we partner.
            </h2>
            <p className="mt-2 max-w-2xl font-sans text-sm text-white/60">
              We form focused, deep partnerships founded on mutual technical respect, open architecture,
              and sovereign operational control.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="h-full border border-white/10 bg-surface/30 p-7">
                <div className="flex h-10 w-10 items-center justify-center border border-acid/30 bg-acid/[0.06] text-acid">
                  <ShieldCheck size={20} weight="duotone" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">
                  Data &amp; Operational Sovereignty
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/60">
                  Zero vendor lock-in. Every joint initiative is designed to grant full data and compute
                  sovereignty to end users and system operators.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full border border-white/10 bg-surface/30 p-7">
                <div className="flex h-10 w-10 items-center justify-center border border-acid/30 bg-acid/[0.06] text-acid">
                  <Lightning size={20} weight="duotone" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">
                  Autonomous Agentic Speed
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/60">
                  We unite TNHC's no-hands automated engineering runtimes with partner domain expertise
                  to build and iterate software at frontier velocity.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="h-full border border-white/10 bg-surface/30 p-7">
                <div className="flex h-10 w-10 items-center justify-center border border-acid/30 bg-acid/[0.06] text-acid">
                  <Sparkle size={20} weight="duotone" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">
                  Global Reach, Local Impact
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/60">
                  We co-develop core developer infrastructure with international open-source peers,
                  while empowering regional pioneers to onboard local communities and devices.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Become a Partner Call to Action */}
        <Reveal delay={0.1} className="mt-16">
          <div className="relative overflow-hidden border border-acid/30 bg-acid/[0.03] p-8 md:p-12">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-acid">
                  <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                  Partnership Inquiries
                </div>
                <h3 className="font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Interested in partnering with The No Hands Company?
                </h3>
                <p className="font-sans text-sm leading-relaxed text-white/70">
                  Whether you are co-developing developer tools or leading sovereign technology
                  adoption in your country or region, we want to hear from you.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:partners@tnhc.dev"
                  className="inline-flex items-center gap-2 border border-acid bg-acid px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-transparent hover:text-acid"
                >
                  <span>Inquire for Partnership</span>
                  <ArrowUpRight size={14} weight="bold" />
                </a>
                <Link
                  to="/#waitlist"
                  className="border border-white/20 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
                >
                  Join Ecosystem
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      <SiteFooterLinks />
    </div>
  );
}
