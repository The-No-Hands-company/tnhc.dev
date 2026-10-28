import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Handshake, ArrowUpRight } from "@phosphor-icons/react";
import { PARTNERS } from "@/pages/PartnersPage";

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

// Shows up to 3 partners on the landing page with a link to /partners for the full list.
const PREVIEW_COUNT = 3;

export default function Partners() {
  const preview = PARTNERS.slice(0, PREVIEW_COUNT);

  return (
    <section
      id="partners"
      className="relative overflow-hidden border-t border-white/10 bg-void py-28 md:py-36"
      data-testid="partners-section"
    >
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-20" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-10 bg-acid" />
              Partners
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-white md:text-4xl">
              Building together, across borders.
            </h2>
          </div>
          <Link
            to="/partners"
            className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-acid"
          >
            View all partners →
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((p, i) => (
            <Reveal key={p.handle} delay={i * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between border border-white/10 bg-surface/60 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-acid/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-heading text-base font-bold text-white group-hover:text-acid transition-colors">
                      {p.name}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-acid/70">
                      {p.role}
                    </p>
                  </div>
                  <Handshake size={20} weight="duotone" className="shrink-0 text-white/20 transition-colors group-hover:text-acid/60" />
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] text-white/30">{p.handle}</span>
                  <div className="flex gap-2">
                    {p.projects.map((proj) => (
                      <span
                        key={proj.label}
                        className="flex items-center gap-1 font-mono text-[10px] text-acid/60"
                      >
                        <ArrowUpRight size={10} />
                        {proj.label}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}

          {/* CTA card — always shown */}
          <Reveal delay={preview.length * 0.08}>
            <Link
              to="/partners"
              className="group flex h-full flex-col items-center justify-center border border-dashed border-white/10 p-6 text-center transition-colors hover:border-acid/20"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/30 transition-colors group-hover:text-white/60">
                {PARTNERS.length > PREVIEW_COUNT
                  ? `+${PARTNERS.length - PREVIEW_COUNT} more`
                  : "View all partners"}
              </p>
              <p className="mt-1 font-mono text-[10px] text-white/20 transition-colors group-hover:text-acid/50">
                /partners →
              </p>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
