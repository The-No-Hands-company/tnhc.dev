import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GlobeHemisphereWest, WebhooksLogo, LockKey, ArrowsClockwise, Play, Pause } from "@phosphor-icons/react";

const W = 900;
const H = 640;
const CX = 450;
const CY = 340;

// A diagram of how federation is designed to work — not a live map of nodes
// that exist. This previously named six invented domains, gave each a region
// and a running-app count, and labelled them Matrix / ActivityPub / WebFinger.
// None of those protocols appear anywhere in the codebase, and none of those
// nodes exist. A visitor reasonably read it as a status board for a live mesh.
//
// What is real: Nexus-Cloud carries a peer registry with trust levels, and the
// node-to-node channel is authenticated and direct. The `.example` domains
// below are reserved by RFC 2606 precisely so illustrations cannot be mistaken
// for real hosts.
const NODES = [
  { domain: "tnhc.dev", label: "The Kernel", region: "This node", protocol: "Node channel", role: "Authoritative", x: CX, y: CY, kernel: true },
  { domain: "your-node.example", label: "a self-hosted node", region: "Illustrative", protocol: "Node channel", role: "Peer", x: 690, y: 220, kernel: false },
  { domain: "second-node.example", label: "another operator", region: "Illustrative", protocol: "Node channel", role: "Peer", x: 718, y: 400, kernel: false },
  { domain: "third-node.example", label: "a community node", region: "Illustrative", protocol: "Identity", role: "Peer", x: 520, y: 520, kernel: false },
  { domain: "fourth-node.example", label: "a private node", region: "Illustrative", protocol: "Identity", role: "Peer", x: 380, y: 520, kernel: false },
  { domain: "fifth-node.example", label: "an org node", region: "Illustrative", protocol: "Node channel", role: "Peer", x: 180, y: 400, kernel: false },
  { domain: "sixth-node.example", label: "a lab node", region: "Illustrative", protocol: "Identity", role: "Peer", x: 210, y: 220, kernel: false },
];

const PROTOCOLS = {
  "Node channel": "Authenticated node-to-node transport. Two Nexus nodes that already trust each other exchange events directly, with no third party relaying and no gateway in the middle.",
  Identity: "A peer registry with trust levels, held by Nexus-Cloud. A node decides which peers it federates with; trust is granted, never assumed.",
};

const EASE = [0.22, 1, 0.36, 1];

export default function Federation() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [touring, setTouring] = useState(false);

  useEffect(() => {
    if (!touring) return;
    const id = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % NODES.length;
        return next === 0 ? 1 : next; // always return to a satellite after passing kernel
      });
    }, 2600);
    return () => clearInterval(id);
  }, [touring]);

  const node = NODES[active];

  return (
    <section id="federation" className="relative overflow-hidden border-t border-white/10 bg-void py-28 md:py-40" data-testid="federation-section">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-30" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
          <span className="h-px w-10 bg-acid" />
          Federation — The Global Mesh
        </div>
        <h2 className="max-w-4xl font-heading text-4xl font-extrabold tracking-tighter text-white md:text-6xl">
          One kernel. No middleman. Any node on Earth.
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-base text-white/60 md:text-lg">
          Self-hosted instances talk to <span className="text-white">tnhc.dev</span> and each other directly,
          with no middleman. This is a diagram of that design, not a live map — the peer nodes shown are
          illustrative. Click one to trace how a connection is made.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {/* Node map */}
          <div className="relative lg:col-span-2">
            <div className="relative overflow-hidden border border-white/10 bg-surface/30 backdrop-blur-sm">
              <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Interactive federation node map">
                {/* ring guides */}
                <circle cx={CX} cy={CY} r={140} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <circle cx={CX} cy={CY} r={240} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 6" />

                {/* edges */}
                {NODES.map((n, i) => {
                  if (n.kernel) return null;
                  const isActive = active === i || active === 0;
                  return (
                    <g key={`edge-${n.domain}`}>
                      <line
                        x1={CX}
                        y1={CY}
                        x2={n.x}
                        y2={n.y}
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="1"
                      />
                      <line
                        x1={CX}
                        y1={CY}
                        x2={n.x}
                        y2={n.y}
                        className="animate-dash"
                        stroke={isActive ? "#CCFF00" : "rgba(204,255,0,0.25)"}
                        strokeWidth="1.5"
                        strokeDasharray="6 10"
                        style={{ transition: "stroke 0.4s ease" }}
                      />
                    </g>
                  );
                })}

                {/* packet trace on active satellite edge */}
                {!reduceMotion && !NODES[active].kernel && (
                  <motion.circle
                    r={4}
                    fill="#CCFF00"
                    cx={CX}
                    cy={CY}
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{ duration: touring ? 1.1 : 1.6, ease: "linear", repeat: Infinity }}
                    style={{
                      offsetPath: `path('M ${CX} ${CY} L ${NODES[active].x} ${NODES[active].y}')`,
                    }}
                  />
                )}

                {/* nodes */}
                {NODES.map((n, i) => {
                  const isActive = active === i;
                  const dimmed = active !== i && active !== 0 && !n.kernel;
                  return (
                    <g
                      key={`node-${n.domain}`}
                      onClick={() => {
                        setActive(i);
                        setTouring(false);
                      }}
                      style={{ cursor: "pointer" }}
                      className="federation-node"
                      data-testid={`federation-node-${n.domain.split(".")[0]}`}
                    >
                      {isActive && (
                        <motion.circle
                          cx={n.x}
                          cy={n.y}
                          r={34}
                          fill="none"
                          stroke="#CCFF00"
                          strokeWidth="1"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: [0.8, 1.15], opacity: [0.6, 0] }}
                          transition={reduceMotion ? { duration: 0 } : { duration: 1.8, repeat: Infinity }}
                        />
                      )}
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={n.kernel ? 40 : 28}
                        fill={n.kernel ? "#0D0D0D" : "#0D0D0D"}
                        stroke={isActive ? "#CCFF00" : n.kernel ? "rgba(204,255,0,0.5)" : "rgba(255,255,255,0.25)"}
                        strokeWidth={isActive ? 1.5 : 1}
                        fillOpacity={dimmed ? 0.4 : 1}
                        style={{ transition: "fill-opacity .3s ease, stroke .3s ease" }}
                      />
                      {n.kernel ? (
                        <>
                          <circle cx={n.x} cy={n.y} r={26} fill="none" stroke="#CCFF00" strokeWidth="1" className={reduceMotion ? "" : "animate-pulse-glow"} />
                          <text x={n.x} y={n.y - 2} textAnchor="middle" fill="#CCFF00" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="700">
                            TNHC
                          </text>
                        </>
                      ) : (
                        <text x={n.x} y={n.y + 4} textAnchor="middle" fill={isActive ? "#CCFF00" : "rgba(255,255,255,0.7)"} fontSize="10" fontFamily="JetBrains Mono, monospace">
                          {n.region.split("-")[0]}
                        </text>
                      )}
                      <text
                        x={n.x}
                        y={n.kernel ? n.y + 62 : n.y + 50}
                        textAnchor="middle"
                        fill={isActive ? "#CCFF00" : "rgba(255,255,255,0.5)"}
                        fontSize="11"
                        fontFamily="JetBrains Mono, monospace"
                        style={{ transition: "fill .3s ease" }}
                      >
                        {n.domain}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Tour toggle */}
              <button
                onClick={() => setTouring((t) => !t)}
                className="absolute right-4 top-4 inline-flex items-center gap-2 border border-white/20 bg-void/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors duration-300 hover:border-acid hover:text-acid"
                data-testid="federation-tour-toggle"
              >
                {touring ? <Pause weight="duotone" /> : <Play weight="duotone" />}
                {touring ? "Pause tour" : "Tour the mesh"}
              </button>
            </div>
          </div>

          {/* Inspector panel */}
          <aside className="flex flex-col gap-6" data-testid="federation-inspector">
            <div className="border border-acid/30 bg-acid/[0.04] p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">Active Node</span>
                <motion.span
                  key={node.domain}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative flex h-2 w-2"
                >
                  <span className="absolute inline-flex h-full w-full rounded-full bg-acid animate-pulse-glow" />
                </motion.span>
              </div>
              <motion.h3
                key={node.domain}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="font-heading text-3xl font-extrabold tracking-tight text-white"
              >
                {node.domain}
              </motion.h3>
              <motion.p
                key={`${node.domain}-lbl`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-acid"
              >
                {node.label} — {node.region}
              </motion.p>

              <dl className="mt-8 space-y-4 border-t border-white/10 pt-6">
                {[
                  ["Transport", node.protocol],
                  ["Role", node.role],
                  ["Peer link", node.kernel ? "authoritative" : "direct to kernel"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{k}</dt>
                    <dd className="text-right font-mono text-sm text-white">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex-1 border border-white/10 bg-surface/40 p-8 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                <WebhooksLogo size={16} weight="duotone" className="text-acid" />
                {node.protocol} explained
              </div>
              <motion.p
                key={node.protocol}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-sans text-sm leading-relaxed text-white/65"
              >
                {PROTOCOLS[node.protocol]}
              </motion.p>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                {[
                  { icon: LockKey, label: "Authed" },
                  { icon: GlobeHemisphereWest, label: "Open" },
                  { icon: ArrowsClockwise, label: "Real-time" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 border border-white/10 py-4">
                    <Icon size={18} weight="duotone" className="text-acid" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}