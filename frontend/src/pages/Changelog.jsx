import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/site/Header";
import { CHANGELOG } from "@/data/changelog";

const REPO = "https://github.com/The-No-Hands-company/Nexus-Systems";

/** How many entries to show before asking the reader to opt into more. */
const PAGE = 40;

/**
 * The changelog, generated from the actual commit history.
 *
 * Two decisions keep this readable rather than exhausting. It shows a page at a
 * time instead of all 300-odd entries, and it groups by day — a flat list of
 * three hundred one-liners is data, not information, and the point of putting
 * this on a public site is that someone can see what moved this week.
 *
 * Only feat and fix commits are generated into the data file. Nobody outside
 * the project needs to read "chore: bump lockfile", and including it teaches a
 * reader to stop reading.
 */
export default function Changelog() {
  const [area, setArea] = useState("all");
  const [limit, setLimit] = useState(PAGE);

  // Areas are ranked by how much actually happened in them, so the filter row
  // leads with what a reader is most likely to want.
  const areas = useMemo(() => {
    const counts = new Map();
    for (const e of CHANGELOG) counts.set(e.area, (counts.get(e.area) ?? 0) + 1);
    return [...counts.entries()]
      .filter(([, n]) => n >= 4)
      .sort((a, b) => b[1] - a[1])
      .map(([name]) => name);
  }, []);

  const filtered = useMemo(
    () => (area === "all" ? CHANGELOG : CHANGELOG.filter((e) => e.area === area)),
    [area],
  );

  const shown = filtered.slice(0, limit);

  const days = useMemo(() => {
    const grouped = new Map();
    for (const e of shown) {
      const list = grouped.get(e.date);
      if (list) list.push(e);
      else grouped.set(e.date, [e]);
    }
    return [...grouped.entries()];
  }, [shown]);

  return (
    <div className="min-h-screen bg-void">
      <Header />

      <main className="mx-auto max-w-[1100px] px-6 pb-32 pt-32 md:px-12 md:pt-40">
        <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
          <span className="h-px w-12 bg-white/20" />
          Changelog
        </div>

        <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-6xl">
          Every change, as it happened
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          Generated from the commit history, not written for an audience. Each
          line links to the commit that made the change, so nothing here can drift
          from what the code actually does.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {["all", ...areas].map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => {
                setArea(a);
                setLimit(PAGE);
              }}
              className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                area === a
                  ? "border-white/40 bg-white/10 text-white"
                  : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="mt-14 space-y-12">
          {days.map(([date, entries]) => (
            <section key={date}>
              <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                {date}
              </h2>
              <ul className="space-y-px">
                {entries.map((e) => (
                  <li
                    key={e.sha}
                    className="group flex items-baseline gap-4 border-l border-white/10 py-2.5 pl-5 transition-colors hover:border-white/30"
                  >
                    <span
                      className={`shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] ${
                        e.kind === "fix" ? "text-white/35" : "text-acid/70"
                      }`}
                      title={e.kind === "fix" ? "Fix" : "New"}
                    >
                      {e.kind === "fix" ? "fix" : "new"}
                    </span>
                    <span className="min-w-0 flex-1 text-sm leading-relaxed text-white/75">
                      {e.title}
                      <span className="ml-2 font-mono text-[10px] text-white/30">
                        {e.area}
                      </span>
                    </span>
                    <a
                      href={`${REPO}/commit/${e.sha}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 font-mono text-[10px] text-white/25 transition-colors hover:text-white/60"
                    >
                      {e.sha}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {limit < filtered.length && (
          <button
            type="button"
            onClick={() => setLimit((n) => n + PAGE)}
            className="mt-14 border border-white/20 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            Show older ({filtered.length - limit} remaining)
          </button>
        )}

        <p className="mt-16 text-sm text-white/40">
          The full history, including the work too dull to list here, is in{" "}
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 underline hover:text-white"
          >
            the repository
          </a>
          . <Link to="/" className="text-white/60 underline hover:text-white">Back to the front page</Link>.
        </p>
      </main>
    </div>
  );
}
