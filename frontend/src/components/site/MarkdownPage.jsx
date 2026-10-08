import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/site/Header";
import SiteFooterLinks from "@/components/site/SiteFooterLinks";

// Renders a generated document (see scripts/build-markdown-page.py). The HTML
// comes from our own committed Markdown, never from user input.
export default function MarkdownPage({ doc, testId, before = null }) {
  const { hash } = useLocation();
  // The article is injected HTML, so the browser cannot honour #fragment links
  // on its own; scroll to the heading once it is mounted and on hash changes.
  useEffect(() => {
    if (!hash) return;
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash]);
  return (
    <main className="min-h-screen bg-void text-white">
      <Header />
      {before}
      <article
        className={`charter-prose mx-auto max-w-3xl px-6 pb-24 md:px-12 ${before ? "pt-12" : "pt-32"}`}
        data-testid={testId}
        dangerouslySetInnerHTML={{ __html: doc.html }}
      />
      <p className="mx-auto max-w-3xl px-6 pb-16 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 md:px-12">
        <a href={doc.source} target="_blank" rel="noopener noreferrer" className="hover:text-acid">
          Source · {doc.commit.slice(0, 7)}
        </a>
      </p>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 py-8 md:px-12"><SiteFooterLinks /></div>
      </footer>
    </main>
  );
}
