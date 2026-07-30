import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV = [
  { label: "Manifesto", id: "manifesto" },
  { label: "Kernel", id: "kernel" },
  { label: "Nexus", id: "pillars" },
  { label: "Compare", id: "compare" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-void/60 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3"
          data-testid="logo-home-button"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-acid animate-pulse-glow" />
          </span>
          <span className="font-heading text-lg font-extrabold tracking-tighter text-white">
            NO&nbsp;HANDS
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 sm:inline">
            /TNHC
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-white"
              data-testid={`nav-${n.id}`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => go("waitlist")}
          className="group relative overflow-hidden border border-white/20 bg-transparent px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-black"
          data-testid="header-waitlist-button"
        >
          <span className="relative z-10">Request Access</span>
          <span className="absolute inset-0 -translate-y-full bg-acid transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
        </button>
      </div>
    </motion.header>
  );
}
