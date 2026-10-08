import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MagnifyingGlass, ArrowUpRight, ArrowLeft } from "@phosphor-icons/react";
import { APP_ICONS } from "@/lib/appIcons";
import { APPS, CATEGORIES, STATUS_META } from "@/data/apps";
import SiteFooterLinks from "@/components/site/SiteFooterLinks";

const EASE = [0.22, 1, 0.36, 1];

const IconFor = ({ name, className }) => {
  const Icon = APP_ICONS[name] || APP_ICONS.Stack;
  return <Icon size={22} weight="duotone" className={className} />;
};

export default function Apps() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const counts = useMemo(() => {
    const c = { All: APPS.length };
    CATEGORIES.forEach((cat) => (c[cat] = APPS.filter((a) => a.category === cat).length));
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return APPS.filter((a) => {
      if (category !== "All" && a.category !== category) return false;
      if (status !== "All" && a.status !== status) return false;
      if (q && !`${a.name} ${a.blurb} ${a.slug}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, category, status]);

  const reset = () => {
    setQuery("");
    setCategory("All");
    setStatus("All");
  };

  return (
    <main className="relative min-h-screen bg-void text-white" data-testid="apps-page">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-void/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12">
          <Link
            to="/"
            className="group flex items-center gap-3"
            data-testid="apps-back-home"
          >
            <ArrowLeft
              size={16}
              weight="bold"
              className="text-acid transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-acid animate-pulse-glow" />
            </span>
            <span className="font-heading text-lg font-extrabold tracking-tighter text-white">
              NO&nbsp;HANDS
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 sm:inline">
              /NEXUS.APPS
            </span>
          </Link>

        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 fine-grid opacity-40" />
        <div className="relative mx-auto max-w-[1600px] px-6 pt-24 pb-14 md:px-12 md:pt-32 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-10 bg-acid" />
              Live App Directory
            </div>
            <h1 className="max-w-4xl font-heading text-5xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white md:text-7xl">
              The Nexus
              <br />
              <span className="text-acid">app stack.</span>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/60 md:text-lg">
              {APPS.length} modular applications running on one autonomous kernel. Search, filter,
              and see what the zero-human cloud ships today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1600px] space-y-6 px-6 py-8 md:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <MagnifyingGlass
                size={18}
                weight="duotone"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-acid"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${APPS.length} apps…`}
                className="w-full rounded-none border border-white/20 bg-transparent py-3.5 pl-12 pr-4 font-mono text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-acid"
                data-testid="apps-search-input"
              />
            </div>

            <div className="flex items-center gap-2" data-testid="apps-status-filter">
              {["All", ...Object.keys(STATUS_META)].map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    status === s
                      ? "border-acid bg-acid text-black"
                      : "border-white/20 text-white/50 hover:border-acid/50 hover:text-white"
                  }`}
                  data-testid={`apps-status-${s.toLowerCase()}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2" data-testid="apps-category-filter">
            {["All", ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`group inline-flex items-center gap-2 border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  category === cat
                    ? "border-acid bg-acid text-black"
                    : "border-white/15 text-white/55 hover:border-acid/50 hover:text-white"
                }`}
                data-testid={`apps-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
                <span className={category === cat ? "text-black/60" : "text-white/30"}>
                  {counts[cat] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-[1600px] px-6 py-12 md:px-12">
        <div className="mb-8 flex items-baseline justify-between border-b border-white/10 pb-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
            {filtered.length} / {APPS.length} applications
          </span>
          {filtered.length === 0 && (
            <button
              onClick={reset}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid transition-colors hover:text-white"
              data-testid="apps-clear-filters"
            >
              Reset filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="border border-white/10 bg-surface/40 px-8 py-16 text-center">
            <p className="font-heading text-2xl font-bold tracking-tight text-white">
              Nothing found on this node.
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Try a different query or clear the filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-testid="apps-grid">
            {filtered.map((app, i) => {
              const meta = STATUS_META[app.status];
              // Only apps with a real URL become links. The directory used to
              // link every card at `${slug}.tnhc.dev`, so a reader clicking any
              // of the ~100 unbuilt apps landed on a 404 — the card promised
              // something the ecosystem does not yet serve. An unbuilt app is
              // now honestly inert.
              const Card = app.url ? motion.a : motion.div;
              const linkProps = app.url
                ? { href: app.url, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Card
                  key={app.slug}
                  {...linkProps}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: Math.min(i % 12, 6) * 0.04 }}
                  className="tracing-card group relative flex h-full flex-col border border-white/10 bg-surface/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-acid/40"
                  data-testid={`apps-card-${app.slug}`}
                >
                  <div className="mb-8 flex items-start justify-between">
                    <IconFor name={app.icon} className="text-acid" />
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                      {meta.label}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-white">
                    {app.name}
                  </h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-white/55">
                    {app.blurb}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                      {app.category}
                    </span>
                    {app.url && (
                      <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.15em] text-acid/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {app.url.replace("https://", "")}
                        <ArrowUpRight size={12} weight="bold" />
                      </span>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {/* Footer strip */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-12">
          <SiteFooterLinks />
        </div>
      </footer>
    </main>
  );
}
