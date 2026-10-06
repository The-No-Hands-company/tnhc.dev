import Header from "@/components/site/Header";
import SiteFooterLinks from "@/components/site/SiteFooterLinks";

// Renders a generated document (see scripts/build-markdown-page.py). The HTML
// comes from our own committed Markdown, never from user input.
export default function MarkdownPage({ doc, testId }) {
  return (
    <main className="min-h-screen bg-void text-white">
      <Header />
      <article
        className="charter-prose mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-12"
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
