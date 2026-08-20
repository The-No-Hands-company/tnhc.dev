const ISSUES = "https://github.com/The-No-Hands-company/Nexus-Systems/issues";
const NEW_ISSUE = `${ISSUES}/new`;
const ADVISORY =
  "https://github.com/The-No-Hands-company/Nexus-Systems/security/advisories/new";

/**
 * The issue tracker, fronted.
 *
 * Before this section existed the tracker was reachable from exactly one
 * place on the whole site — a link in the changelog byline — and
 * /.well-known/security.txt returned the SPA's index.html with a 200, so a
 * researcher looking for a disclosure channel found an HTML page pretending
 * to be one. There was no private channel at all: the only way to report a
 * vulnerability was to publish it in a public issue first.
 *
 * The two paths are kept visibly separate because they are not the same
 * decision. Anything exploitable goes to a private advisory; everything else
 * is better in the open where other people can see it has been said.
 */
export default function Issues() {
  return (
    <section
      id="issues"
      className="relative border-t border-white/10 bg-void py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-12 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
          <span className="h-px w-12 bg-white/20" />
          Found a problem
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white md:text-5xl">
              Tell us. We would rather hear it from you.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              Every line of this is written by AI. That is the premise, and it
              is also exactly why an outside pair of eyes is worth more here
              than on a codebase people typed themselves. The characteristic
              failure is not sloppy code — it is{" "}
              <span className="text-white">
                confident, well-commented code that is quietly wrong
              </span>
              , and that kind does not look wrong from the inside.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              So the tracker is public and so is the changelog. A page that
              claims something the software does not do counts as a bug and
              gets filed like one. Several have been.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              There is no bounty — the whole project runs on about twelve
              dollars a year. What you get is a reply, the fix in the public
              changelog, and credit if you want it.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="w-full border border-white/10 bg-surface/40 p-8 backdrop-blur-sm">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Anything exploitable
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Opens a private advisory only the maintainers can read. Please
                use this instead of a public issue — it stays closed until
                there is a fix to announce.
              </p>
              <a
                href={ADVISORY}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-block border border-white/20 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-void"
              >
                Report privately
              </a>
            </div>

            <div className="w-full border border-white/10 bg-surface/40 p-8 backdrop-blur-sm">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Everything else
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Bugs, broken pages, wrong wording, missing features, anything
                that just seems off. A report that turns out to be nothing
                costs a few minutes. A problem nobody mentions costs more.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={NEW_ISSUE}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-block border border-white/20 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-void"
                >
                  Open an issue
                </a>
                <a
                  href={ISSUES}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-block px-2 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 underline underline-offset-4 transition-colors hover:text-white"
                >
                  Browse open issues
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
