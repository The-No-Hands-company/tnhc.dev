import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Manifesto from "@/components/site/Manifesto";
import Kernel from "@/components/site/Kernel";
import Federation from "@/components/site/Federation";
import Pillars from "@/components/site/Pillars";
import Comparison from "@/components/site/Comparison";
import Waitlist from "@/components/site/Waitlist";

export default function Landing() {
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
      <Waitlist />
    </main>
  );
}
