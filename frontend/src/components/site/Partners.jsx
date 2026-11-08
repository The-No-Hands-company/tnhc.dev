import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Handshake, ArrowUpRight, Cpu } from "@phosphor-icons/react";
import { PARTNERS } from "@/pages/PartnersPage";

const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden border-t border-white/10 bg-void py-24 md:py-32"
      data-testid="partners-section"
    >
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-20" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-10 bg-acid" />
              Strategic Partners
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Building together, across borders.
            </h2>
            <p className="mt-2 max-w-xl font-sans text-sm text-white/60">
              Collaborating with open-source engineering teams and regional hardware pioneers.
            </p>
          </div>

          <Link
            to="/partners"
            className="group flex shrink-0 items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-acid transition-colors hover:text-white"
          >
            <span>Explore all partners</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((p, i) => {
            const isRegional = p.category === "regional";

            return (
              <Reveal key={p.id} delay={i * 0.08}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between border border-white/10 bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-acid/40 hover:bg-surface/70"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-acid/30 bg-acid/[0.06] text-acid transition-colors group-hover:border-acid">
                          {isRegional ? (
                            <Handshake size={20} weight="duotone" />
                          ) : (
                            <Cpu size={20} weight="duotone" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2">
                            <p className="font-heading text-lg font-bold text-white transition-colors group-hover:text-acid">
                              {p.name}
                            </p>
                            {p.affiliation && (
                              <span className="font-mono text-[10px] text-white/40">
                                {p.affiliation}
                              </span>
                            )}
                          </div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-acid/80">
                            {p.role}
                          </p>
                        </div>
                      </div>

                      <span className="font-mono text-xs text-white/40">{p.flag}</span>
                    </div>

                    {/* Summary */}
                    <p className="font-sans text-xs leading-relaxed text-white/60">
                      {p.summary}
                    </p>

                    {/* Region Pill */}
                    <div className="flex items-center gap-2">
                      <span className="border border-white/10 bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                        {p.flag} {p.region}
                      </span>
                      <span className="border border-white/10 bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                        {p.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Footer metadata */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-mono text-[11px] text-white/40 transition-colors group-hover:text-white">
                      {p.handle}
                    </span>
                    <div className="flex gap-2">
                      {p.projects.slice(0, 1).map((proj) => (
                        <span
                          key={proj.label}
                          className="flex items-center gap-1 font-mono text-[11px] text-acid transition-opacity group-hover:opacity-80"
                        >
                          <ArrowUpRight size={12} />
                          {proj.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}

          {/* Third card: CTA to explore / inquire */}
          <Reveal delay={PARTNERS.length * 0.08}>
            <Link
              to="/partners"
              className="group flex h-full flex-col justify-between border border-dashed border-white/15 bg-white/[0.01] p-6 text-left transition-all duration-300 hover:border-acid/40 hover:bg-white/[0.03]"
            >
              <div className="space-y-3">
                <div className="inline-flex h-10 w-10 items-center justify-center border border-white/20 bg-white/[0.04] text-white/60 transition-colors group-hover:border-acid group-hover:text-acid">
                  <Handshake size={20} weight="duotone" />
                </div>
                <p className="font-heading text-lg font-bold text-white group-hover:text-acid">
                  Partner with TNHC
                </p>
                <p className="font-sans text-xs leading-relaxed text-white/50">
                  We collaborate with open-source teams and regional leaders driving sovereign tech.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-acid">
                <span>View Full Register</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
