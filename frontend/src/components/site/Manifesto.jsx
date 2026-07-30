import { motion } from "framer-motion";

const IMG =
  "https://images.unsplash.com/photo-1704920110270-5c107519cdc4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxkYXJrJTIwZnV0dXJpc3RpYyUyMGVtcHR5JTIwcm9vbSUyMGRlc2t8ZW58MHx8fHwxNzgxOTIxNzcxfDA&ixlib=rb-4.1.0&q=85";

const CHAPTERS = [
  {
    n: "01",
    title: "The thesis",
    body: "Software can be built by artificial intelligence alone. It does not have to be made by humans. We are smart enough to admit it — and bold enough to build on it.",
  },
  {
    n: "02",
    title: "The method",
    body: "The founder is the architect, the strategist, the prompt layer. AI agents write the frontend, backend, database schemas and microservices — then test and deploy them. No hands touch the keyboard.",
  },
  {
    n: "03",
    title: "The proof",
    body: "Nexus Systems. A suite spanning 80+ distinct web applications, generated and actively maintained by AI. One zero-human codebase, running in the open for anyone to inspect.",
  },
  {
    n: "04",
    title: "The principle",
    body: "100% free, self-hosted and federated. Run the entire platform on your own hardware. Your data never leaves your hands — and no big-tech vendor gets to monetize it.",
  },
];

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative bg-void py-28 md:py-40" data-testid="manifesto-section">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <div className="mb-20 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            <span className="h-px w-10 bg-acid" />
            The Manifesto
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-1">
            <div className="space-y-16 md:space-y-24">
              {CHAPTERS.map((c) => (
                <Reveal key={c.n}>
                  <article
                    className="grid grid-cols-[auto_1fr] gap-6 border-t border-white/10 pt-8 md:gap-10"
                    data-testid={`manifesto-chapter-${c.n}`}
                  >
                    <span className="font-mono text-2xl font-medium text-acid md:text-3xl">{c.n}</span>
                    <div>
                      <h3 className="mb-4 font-heading text-3xl font-bold tracking-tight text-white md:text-5xl">
                        {c.title}
                      </h3>
                      <p className="max-w-xl font-sans text-base leading-relaxed text-white/60 md:text-lg">
                        {c.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15}>
              <div className="sticky top-28 overflow-hidden border border-white/10">
                <img src={IMG} alt="An empty room — zero hands" className="h-[520px] w-full object-cover" />
                <div className="absolute inset-0 bg-void/50" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-white/70">
                    No engineers. No offices full of keyboards. Just an architect and the machine.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
