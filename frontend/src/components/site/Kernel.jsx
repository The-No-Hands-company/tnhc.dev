import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Cloud, StackSimple, Lightning } from "@phosphor-icons/react";

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

const Node = ({ domain, label, icon: Icon, apps }) => (
  <div className="tracing-card group relative flex flex-col gap-3 border border-white/10 bg-surface/60 p-6 backdrop-blur-sm">
    <div className="flex items-center gap-3">
      <Icon size={22} weight="duotone" className="text-acid" />
      <span className="font-mono text-sm text-white">{domain}</span>
    </div>
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{label}</span>
    {apps && (
      <div className="mt-2 flex flex-wrap gap-2">
        {apps.map((a) => (
          <span
            key={a}
            className="border border-white/10 px-2.5 py-1 font-mono text-[10px] text-white/60 transition-colors duration-300 group-hover:border-acid/40"
          >
            {a}
          </span>
        ))}
      </div>
    )}
  </div>
);

const Connector = () => (
  <div className="flex justify-center" aria-hidden="true">
    <div className="h-14 w-px bg-gradient-to-b from-acid/60 to-white/10" />
  </div>
);

export default function Kernel() {
  return (
    <section id="kernel" className="relative overflow-hidden border-t border-white/10 bg-void py-28 md:py-40" data-testid="kernel-section">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-40" />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            <span className="h-px w-10 bg-acid" />
            System Architecture
          </div>
          <h2 className="mb-4 max-w-3xl font-heading text-4xl font-extrabold tracking-tighter text-white md:text-6xl">
            An operating system for the cloud.
          </h2>
          <p className="mb-16 max-w-xl font-sans text-base text-white/60 md:text-lg">
            Instead of 80 isolated websites, Nexus runs on a centralized kernel — one identity, infinite modular apps.
          </p>
        </Reveal>

        <div className="flex flex-col items-stretch">
          <Reveal>
            <div className="mx-auto w-full max-w-md border border-white/10 bg-surface/60 p-5 text-center backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">The Founder / AI Orchestrator</span>
            </div>
          </Reveal>

          <Connector />

          <Reveal delay={0.05}>
            <div className="tracing-card relative mx-auto flex w-full max-w-md flex-col items-center gap-2 border border-acid/40 bg-surface p-8 text-center shadow-[0_0_60px_-15px_rgba(204,255,0,0.4)]">
              <Cpu size={30} weight="duotone" className="text-acid animate-pulse-glow" />
              <span className="font-heading text-2xl font-bold tracking-tight text-white">tnhc.dev</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid">The Kernel</span>
            </div>
          </Reveal>

          <Connector />

          <div className="grid gap-6 md:grid-cols-3">
            <Reveal delay={0.05}>
              <Node domain="cloud.tnhc.dev" label="Nexus Cloud Dashboard" icon={Cloud} />
            </Reveal>
            <Reveal delay={0.12}>
              <Node domain="auth.tnhc.dev" label="Unified SSO Kernel" icon={ShieldCheck} />
            </Reveal>
            <Reveal delay={0.19}>
              <Node
                domain="*.apps.tnhc.dev"
                label="80+ Modular Applications"
                icon={StackSimple}
                apps={["chat", "drive", "mail", "docs", "+76"]}
              />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex items-center justify-center gap-3 border border-dashed border-white/15 bg-void/40 px-6 py-4">
              <Lightning size={16} weight="duotone" className="text-acid" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                Silent OAuth2 / Token Validation across every sub-app
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
