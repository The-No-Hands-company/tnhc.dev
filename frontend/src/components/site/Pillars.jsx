import { motion } from "framer-motion";
import { Brain, Fingerprint, SquaresFour, GlobeHemisphereWest } from "@phosphor-icons/react";

const FED_IMG = "/img/hero-1.webp";

const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Card = ({ tag, title, body, icon: Icon, children }) => (
  <div className="tracing-card group relative flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-surface/60 p-8 backdrop-blur-sm transition-colors duration-500 md:p-10">
    {children}
    <div className="relative z-10 flex items-start justify-between">
      <Icon size={40} weight="duotone" className="text-acid" />
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">{tag}</span>
    </div>
    <div className="relative z-10 mt-16">
      <h3 className="mb-3 font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">{title}</h3>
      <p className="max-w-md font-sans text-sm leading-relaxed text-white/60 md:text-base">{body}</p>
    </div>
  </div>
);

export default function Pillars() {
  return (
    <section id="pillars" className="relative bg-void py-28 md:py-40" data-testid="pillars-section">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            <span className="h-px w-10 bg-acid" />
            Nexus Systems — The 4 Pillars
          </div>
          <h2 className="mb-16 max-w-3xl font-heading text-4xl font-extrabold tracking-tighter text-white md:text-6xl">
            Four pillars. One autonomous ecosystem.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={0.05}>
            <Card
              tag="Pillar A"
              icon={Brain}
              title="The AI Development Engine"
              body="Development runs on high-level prompting and system-design directives. The human defines constraints, API specs and UX criteria; AI agents write every service, schema and interface."
            />
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.12}>
            <Card
              tag="Pillar B"
              icon={Fingerprint}
              title="The Central Auth Kernel"
              body="One identity kernel manages authentication. Log in once at auth.tnhc.dev and a secure token grants access across all sub-apps — no repeat prompts."
            />
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.05}>
            <Card
              tag="Pillar C"
              icon={SquaresFour}
              title="Isolated Modular Apps"
              body="Apps are isolated by browser origin, so a flaw in one can never reach another's cookies or data. They are gathered behind one shell at app.tnhc.dev without giving up that boundary."
            />
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.12}>
            <Card
              tag="Pillar D"
              icon={GlobeHemisphereWest}
              title="Federated Node Syncing"
              body="Self-hosted instances talk directly over an authenticated node-to-node channel, with a peer registry that makes trust explicit rather than assumed. Your node can reach tnhc.dev with no middleman."
            >
              <div className="pointer-events-none absolute inset-0 z-0">
                <img src={FED_IMG} alt="" className="h-full w-full object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/40" />
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
