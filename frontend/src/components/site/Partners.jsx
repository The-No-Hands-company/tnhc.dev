import { motion } from "framer-motion";
import { Handshake } from "@phosphor-icons/react";

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

const PARTNERS = [
  {
    name: "Corex Team",
    handle: "corexteam.org",
    href: "https://corexteam.org",
    region: "International",
    contact: "Mebi",
    role: "Joint Development Partner",
    project: "Docu — corexteam.org/Docu",
    projectHref: "https://corexteam.org/Docu",
    description:
      "Zajfan and The No Hands Company have partnered with Mebi and the Corex Team to co-develop Docu. The partnership combines TNHC's no-hands engineering methodology with Corex Team's expertise.",
    tags: ["Co-development", "Docu", "Open Source"],
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden border-t border-white/10 bg-void py-28 md:py-40"
      data-testid="partners-section"
    >
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-20" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            <span className="h-px w-10 bg-acid" />
            Partners &amp; Collaborators
          </div>
          <h2 className="max-w-3xl font-heading text-4xl font-extrabold tracking-tighter text-white md:text-6xl">
            Building together, across borders.
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-base text-white/60 md:text-lg">
            TNHC partners with aligned teams who share the same commitment to open,
            transparent, and autonomous software development.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.handle} delay={i * 0.1}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="tracing-card group relative flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-surface/60 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-acid/40 md:p-10"
              >
                <div className="relative z-10 flex items-start justify-between">
                  <Handshake size={36} weight="duotone" className="text-acid" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {p.region}
                  </span>
                </div>

                <div className="relative z-10 mt-10">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-acid">
                    {p.role}
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/60 md:text-base">
                    {p.description}
                  </p>

                  <dl className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {[
                      ["Contact", p.contact],
                      ["Joint Project", p.project],
                      ["Website", p.handle],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-baseline justify-between gap-4">
                        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                          {k}
                        </dt>
                        <dd className="text-right font-mono text-xs text-white">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}

          {/* Placeholder — future partners */}
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col items-center justify-center border border-dashed border-white/10 p-8 text-center md:p-10">
              <Handshake size={32} weight="duotone" className="mb-4 text-white/20" />
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
                More partners coming
              </p>
              <p className="mt-2 font-sans text-sm text-white/20">
                Interested in building together?{" "}
                <a
                  href="https://tnhc.dev/#waitlist"
                  className="text-acid/60 underline transition-colors hover:text-acid"
                >
                  Get in touch
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
