import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Manifesto from "@/components/site/Manifesto";
import Kernel from "@/components/site/Kernel";
import Federation from "@/components/site/Federation";
import Pillars from "@/components/site/Pillars";
import Comparison from "@/components/site/Comparison";
import Issues from "@/components/site/Issues";
import Waitlist from "@/components/site/Waitlist";

export default function Landing() {
  const { hash } = useLocation();

  // React Router does not scroll to a hash on its own. Without this, arriving
  // from another page via /#kernel lands you at the top with no indication the
  // link did anything — which is how the nav behaved before it was fixed to
  // navigate at all.
  useEffect(() => {
    if (!hash) return;
    // After paint: the section has to exist before it can be scrolled to.
    const id = hash.slice(1);
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(raf);
  }, [hash]);

  return (
    <main className="relative bg-void text-white overflow-x-hidden" data-testid="landing-page">
      <Header />
      <Hero />
      <Marquee />
      <Manifesto />
      <Kernel />
      <Federation />
      <Pillars />
      <Comparison />
      <Issues />
      <Waitlist />
    </main>
  );
}
