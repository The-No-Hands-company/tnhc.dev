import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1693648793394-0b76b7eb042e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxtZXRhbGxpYyUyMGFic3RyYWN0JTIwM2QlMjBmbHVpZCUyMGRhcmt8ZW58MHx8fHwxNzgyMjA2MDA2fDA&ixlib=rb-4.1.0&q=85";

const EASE = [0.76, 0, 0.24, 1];

const Line = ({ children, delay = 0, className = "" }) => (
  <span className="block overflow-hidden">
    <motion.span
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: EASE, delay }}
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden" data-testid="hero-section">
      {/* Parallax background */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 -z-10">
        <img src={HERO_IMG} alt="" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/40 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-6 pb-20 pt-40 md:px-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50"
        >
          <span className="h-px w-10 bg-acid" />
          The No Hands Company — Autonomous Software Engineering
        </motion.div>

        <h1 className="font-heading text-[15vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-white md:text-[11vw]">
          <Line delay={0.15}>We build</Line>
          <Line delay={0.3}>with no</Line>
          <Line delay={0.45} className="text-acid">
            hands.
          </Line>
        </h1>

        <div className="mt-10 flex flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-xl font-sans text-base leading-relaxed text-white/65 md:text-lg"
          >
            A radical experiment in <span className="text-white">zero human intervention</span>. Every line
            of code is written, tested and deployed by AI agents — building{" "}
            <span className="text-white">Nexus Systems</span>, an 80+ app open-source alternative to big-tech
            cloud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("waitlist")}
              className="group inline-flex items-center gap-3 bg-acid px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:-translate-y-0.5"
              data-testid="hero-enter-nexus-button"
            >
              Enter Nexus
              <ArrowRight weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("manifesto")}
              className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-acid hover:text-acid"
              data-testid="hero-manifesto-button"
            >
              Read the manifesto
            </button>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo("manifesto")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 md:right-12"
        data-testid="hero-scroll-cue"
      >
        Scroll <ArrowDown weight="bold" className="animate-bounce" />
      </motion.button>
    </section>
  );
}
