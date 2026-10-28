import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Handshake, ArrowUpRight, Globe } from "@phosphor-icons/react";
import Header from "@/components/site/Header";
import SiteFooterLinks from "@/components/site/SiteFooterLinks";

const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const PARTNERS = [
  {
    name: "Corex Team",
    handle: "corexteam.org",
    href: "https://corexteam.org",
    region: "Indonesia",
    contact: "Mebi",
    contactHref: "https://instagram.com/gadgetkinipadang",
    role: "Joint Development Partner",
    projects: [
      { label: "Docu", href: "https://corexteam.org/Docu" },
    ],
    description:
      "Zajfan and The No Hands Company have partnered with Mebi and the Corex Team to co-develop Docu — an open documentation platform. The partnership combines TNHC's no-hands engineering methodology with Corex Team's product expertise.",
    tags: ["Co-development", "Docu", "Open Source"],
    since: "2026",
  },
];

function PartnerCard({ partner, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="group relative border border-white/10 bg-surface/60 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-acid/30 md:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Left: identity */}
          <div className="flex-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-acid/30 bg-acid/[0.06]">
                <Handshake size={20} weight="duotone" className="text-acid" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                  {partner.name}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">
                  {partner.role}
                </p>
              </div>
            </div>

            <p className="max-w-xl font-sans text-sm leading-relaxed text-white/60">
              {partner.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {partner.tags.map((t) => (
                <span
                  key={t}
                  className="border border-white/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: meta */}
          <dl className="w-full shrink-0 space-y-3 border-t border-white/10 pt-4 sm:w-56 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            {[
              ["Region", partner.region, null],
              ["Partner since", partner.since, null],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">{k}</dt>
                <dd className="text-right font-mono text-xs text-white">{v}</dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">Contact</dt>
              <dd className="text-right">
                {partner.contactHref ? (
                  <a
                    href={partner.contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-acid transition-opacity hover:opacity-70"
                  >
                    {partner.contact} ↗
                  </a>
                ) : (
                  <span className="font-mono text-xs text-white">{partner.contact}</span>
                )}
              </dd>
            </div>

            <div className="border-t border-white/10 pt-3">
              <dt className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                Joint projects
              </dt>
              {partner.projects.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-acid transition-opacity hover:opacity-70"
                >
                  <ArrowUpRight size={12} />
                  {p.label}
                </a>
              ))}
            </div>

            <a
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-white/40 transition-colors hover:text-white"
            >
              <Globe size={12} />
              {partner.handle}
            </a>
          </dl>
        </div>
      </div>
    </Reveal>
  );
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-void text-white">
      <Header />
      <main className="mx-auto max-w-[1600px] px-6 pb-32 pt-40 md:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            <span className="h-px w-10 bg-acid" />
            Partners &amp; Collaborators
          </div>
          <h1 className="max-w-3xl font-heading text-4xl font-extrabold tracking-tighter text-white md:text-6xl">
            Building together,<br />across borders.
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-base text-white/60 md:text-lg">
            TNHC partners with aligned teams who share the same commitment to open,
            transparent, and autonomous software development.
          </p>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-10">
            {[
              ["Active Partners", PARTNERS.length],
              ["Joint Projects", PARTNERS.reduce((n, p) => n + p.projects.length, 0)],
              ["Regions", [...new Set(PARTNERS.map((p) => p.region))].length],
            ].map(([label, value]) => (
              <div key={label} className="min-w-[120px]">
                <div className="font-heading text-3xl font-extrabold text-acid">{value}</div>
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Partner cards */}
        <div className="mt-16 space-y-4">
          {PARTNERS.map((partner, i) => (
            <PartnerCard key={partner.handle} partner={partner} index={i} />
          ))}
        </div>

        {/* Become a partner CTA */}
        <Reveal delay={0.05} className="mt-8">
          <div className="flex flex-col items-center justify-between gap-6 border border-dashed border-white/15 p-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-heading text-lg font-bold text-white">Interested in partnering?</p>
              <p className="mt-1 font-sans text-sm text-white/50">
                We collaborate with teams that build in the open and share our values.
              </p>
            </div>
            <Link
              to="/#waitlist"
              className="shrink-0 border border-acid px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-acid transition-colors duration-300 hover:bg-acid hover:text-black"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </main>
      <SiteFooterLinks />
    </div>
  );
}
