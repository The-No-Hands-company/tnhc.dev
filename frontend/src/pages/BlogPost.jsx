import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CalendarBlank, Tag, ListBullets } from "@phosphor-icons/react";
import { POSTS, getPost } from "@/data/posts";

const EASE = [0.22, 1, 0.36, 1];

const fmt = (d) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

function Block({ block }) {
  if (block.type === "h") {
    return (
      <h2 className="mt-10 mb-4 flex items-center gap-3 font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
        <span className="h-px w-8 bg-acid" />
        {block.text}
      </h2>
    );
  }
  if (block.type === "list") {
    return (
      <ul className="mt-6 space-y-3 border-l border-acid/30 pl-6">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 font-sans text-base leading-relaxed text-white/70">
            <ListBullets size={16} weight="duotone" className="mt-1 shrink-0 text-acid" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="mt-8 border border-acid/30 bg-acid/[0.04] p-8 font-heading text-xl font-bold tracking-tight text-white md:text-2xl">
        “{block.text}”
      </blockquote>
    );
  }
  return (
    <p className="mt-6 font-sans text-base leading-relaxed text-white/70 md:text-lg">{block.text}</p>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="relative min-h-screen bg-void text-white" data-testid="blog-post-page">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-void/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-12">
          <Link
            to="/"
            className="group flex items-center gap-3"
            data-testid="post-back-home"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-acid animate-pulse-glow" />
            </span>
            <span className="font-heading text-lg font-extrabold tracking-tighter text-white">
              NO&nbsp;HANDS
            </span>
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-acid"
            data-testid="post-back-to-blog"
          >
            <ArrowLeft size={14} weight="bold" />
            Changelog
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-[1200px] px-6 py-16 md:px-12 md:py-24">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="mb-6">
            <Link
              to="/blog"
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid hover:text-white"
            >
              ← Changelog
            </Link>
          </div>
          <div className="mb-6 flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            <span className="flex items-center gap-1.5">
              <CalendarBlank size={12} weight="duotone" className="text-acid" />
              {fmt(post.date)}
            </span>
            <span className="border border-white/15 px-2 py-0.5 text-acid/80">{post.category}</span>
            <span>by {post.author}</span>
            <span>· {post.readTime}</span>
          </div>
          <h1 className="max-w-3xl font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white md:text-6xl">
            {post.title}
          </h1>
        </motion.header>

        <div className="mt-12 max-w-3xl">
          {post.content.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <Block block={block} />
            </motion.div>
          ))}

          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-white/10 pt-8">
            <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              Tagged
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/55"
              >
                <Tag size={11} weight="duotone" className="text-acid" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* More entries */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-12">
          <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
            More kernel logs
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group border border-white/10 bg-surface/40 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-acid/40"
                data-testid={`post-related-${p.slug}`}
              >
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {fmt(p.date)} · {p.category}
                </div>
                <h3 className="font-heading text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-acid">
                  {p.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-acid/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Read <ArrowUpRight size={12} weight="bold" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}