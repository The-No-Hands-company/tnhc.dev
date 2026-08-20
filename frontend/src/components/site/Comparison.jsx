import { motion } from "framer-motion";
import { X, Check } from "@phosphor-icons/react";

const ROWS = [
  { k: "Development", old: "Large teams of human software engineers", nexus: "AI agents write, test & deploy — zero hands" },
  { k: "Hosting", old: "Closed vendor clouds (AWS, Google, Azure)", nexus: "Deploy a site here, or run the node yourself" },
  { k: "Websites", old: "Per-seat pricing, vendor lock-in, egress fees", nexus: "Custom domains, TLS, builds, forms — $0" },
  { k: "Data Control", old: "Vendor owns and monetizes your data", nexus: "You own everything — federated, never sold" },
  { k: "Ecosystem", old: "A separate subscription for every tool", nexus: "One open-source kernel, one identity, $0" },
];

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Comparison() {
  return (
    <section id="compare" className="relative border-t border-white/10 bg-void py-28 md:py-40" data-testid="comparison-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            <span className="h-px w-10 bg-acid" />
            The Shift
          </div>
          <h2 className="mb-16 max-w-3xl font-heading text-4xl font-extrabold tracking-tighter text-white md:text-6xl">
            Traditional SaaS vs. No Hands.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-white/10">
            {/* Head */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-surface/40">
              <div className="p-5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 md:p-8">Dimension</div>
              <div className="border-l border-white/10 p-5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 md:p-8">
                Traditional SaaS
              </div>
              <div className="border-l border-white/10 bg-acid/[0.04] p-5 font-mono text-[10px] uppercase tracking-[0.25em] text-acid md:p-8">
                Nexus Systems
              </div>
            </div>

            {ROWS.map((r, i) => (
              <div
                key={r.k}
                className={`grid grid-cols-3 ${i !== ROWS.length - 1 ? "border-b border-white/10" : ""}`}
                data-testid={`comparison-row-${i}`}
              >
                <div className="flex items-center p-5 font-heading text-sm font-bold tracking-tight text-white md:p-8 md:text-lg">
                  {r.k}
                </div>
                <div className="flex items-start gap-3 border-l border-white/10 p-5 md:p-8">
                  <X size={18} weight="bold" className="mt-0.5 shrink-0 text-white/30" />
                  <span className="font-sans text-sm text-white/45 md:text-base">{r.old}</span>
                </div>
                <div className="flex items-start gap-3 border-l border-white/10 bg-acid/[0.04] p-5 md:p-8">
                  <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-acid" />
                  <span className="font-sans text-sm text-white md:text-base">{r.nexus}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
