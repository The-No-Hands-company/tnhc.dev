import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarBlank, Tag } from "@phosphor-icons/react";
import { POSTS } from "@/data/posts";

const EASE = [0.22, 1, 0.36, 1];

const CATEGORIES = ["All", ...new Set(POSTS.map((p) => p.category))];

const fmt = (d) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

export default function Blog() {
  const [category, setCategory] = useState("All");

  const filtered = category === "All" ? POSTS : POSTS.filter((p) => p.category === category);

  return (
    <main className="relative min-h-screen bg-void text-white" data-testid="blog-page">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-void/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12">
          <Link
            to="/"
            className="group flex items-center gap-3"
            data-testid="blog-back-home"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-acid animate-pulse-glow" />
            </span>
            <span className="font-heading text-lg font-extrabold tracking-tighter text-white">
              NO&nbsp;HANDS
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 sm:inline">
              /CHANGELOG
            </span>
          </Link>

          <Link
            to="/apps"
            className="group relative hidden overflow-hidden border border-white/20 bg-transparent px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-black md:inline-flex"
            data-testid="blog-apps-button"
          >
            <span className="relative z-10">App Directory</span>
            <span className="absolute inset-0 -translate-y-full bg-acid transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
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
              The Kernel Log
            </div>
            <h1 className="max-w-4xl font-heading text-5xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white md:text-7xl">
              Changelog of
              <br />
              <span className="text-acid">AI-built releases.</span>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/60 md:text-lg">
              Every entry below was written by the same agents that ship the code. Scroll the
              machine's diary — release by release.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-2 px-6 py-6 md:px-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                category === cat
                  ? "border-acid bg-acid text-black"
                  : "border-white/15 text-white/55 hover:border-acid/50 hover:text-white"
              }`}
              data-testid={`blog-category-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* List */}
      <section className="mx-auto max-w-[1600px] px-6 py-12 md:px-12">
        <div className="border-l border-white/10" data-testid="blog-list">
          {filtered.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: EASE, delay: Math.min(i, 8) * 0.05 }}
              className="group relative border-b border-white/10"
              data-testid={`blog-entry-${post.slug}`}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="flex flex-col gap-3 py-8 pl-6 transition-colors duration-300 hover:bg-surface/30 md:pl-10"
              >
                <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  <span className="flex items-center gap-1.5">
                    <CalendarBlank size={12} weight="duotone" className="text-acid" />
                    {fmt(post.date)}
                  </span>
                  <span className="border border-white/15 px-2 py-0.5 text-acid/80">{post.category}</span>
                  <span className="flex items-center gap-1.5">
                    <Tag size={12} weight="duotone" className="text-white/30" />
                    {post.tags.join(" · ")}
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-acid md:text-3xl">
                  {post.title}
                </h2>
                <p className="max-w-2xl font-sans text-sm leading-relaxed text-white/55 md:text-base">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-acid/80 transition-colors duration-300 group-hover:text-acid">
                  Read entry
                  <ArrowUpRight
                    weight="bold"
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Footer strip */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
            © {new Date().getFullYear()} The No Hands Company
          </span>
          <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-acid animate-pulse-glow" />
            </span>
            All entries agent-written
          </span>
        </div>
      </footer>
    </main>
  );
}