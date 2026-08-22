import Marquee from "react-fast-marquee";

const ITEMS = [
  "ZERO HUMAN INTERVENTION",
  "AI DEVELOPMENT ENGINE",
  "100% OPEN SOURCE",
  "SELF-HOSTED",
  "FEDERATED",
  "NO HANDS ON THE KEYBOARD",
];

export default function EditorialMarquee() {
  return (
    <section className="border-y border-white/10 bg-void py-8" data-testid="marquee-section">
      <Marquee speed={40} gradient={false} autoFill>
        {ITEMS.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-stroke px-8 font-heading text-6xl font-extrabold uppercase tracking-tighter md:text-8xl">
              {item}
            </span>
            <span className="text-4xl text-acid md:text-6xl">✦</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
