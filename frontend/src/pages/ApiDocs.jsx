import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Lock, Globe, Warning } from "@phosphor-icons/react";
import { APIS } from "@/data/apis";

const EASE = [0.22, 1, 0.36, 1];

/**
 * The API front door.
 *
 * Every surface and endpoint here comes from scripts/build-apis.py, which reads
 * app names and statuses out of docs/NEXUS-ECOSYSTEM.md and probes each
 * endpoint at build time. Nothing on this page is typed by hand, so it cannot
 * drift from the register the way hand-maintained docs do — and an endpoint
 * that stopped answering is shown as unreachable rather than quietly listed as
 * though it still works.
 */
export default function ApiDocs() {
  const total = APIS.reduce((n, a) => n + a.endpoints.length, 0);
  const down = APIS.reduce((n, a) => n + a.endpoints.filter((e) => !e.reachable).length, 0);

  return (
    <main className="min-h-screen bg-void text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12 md:py-24">
        <Link
          to="/"
          className="mb-12 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={14} /> Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            <span className="h-px w-12 bg-white/20" />
            API
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-6xl">
            Every API, and what it will actually answer.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
            There is no single API host. Each app serves its own API from its own
            origin, and that is deliberate — the apps are isolated by browser
            origin, so a flaw in one cannot reach another's cookies or data.
            Putting them all behind one hostname would trade that boundary for a
            shorter URL.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
            This page is generated from the same register the app directory is
            built from, and{" "}
            <span className="text-white">
              every endpoint below was requested at build time
            </span>
            . If one stops answering it is marked unreachable here rather than
            left standing as a promise.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
            <span>{APIS.length} surfaces</span>
            <span>{total} endpoints</span>
            <span className={down ? "text-amber-400" : ""}>
              {down} unreachable
            </span>
          </div>
        </motion.div>

        <div className="mt-16 space-y-10">
          {APIS.map((api, i) => (
            <motion.section
              key={api.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i, ease: EASE }}
              className="border border-white/10 bg-surface/30 p-8 backdrop-blur-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <h2 className="font-heading text-2xl font-bold tracking-tight">
                    {api.name}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/50">
                    {api.role}
                  </p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {api.registerStatus}
                </span>
              </div>

              <div className="mt-6 overflow-x-auto">
                <code className="inline-block whitespace-nowrap border border-white/10 bg-void/60 px-4 py-2 font-mono text-sm text-white/80">
                  {api.base}
                </code>
              </div>

              <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-white/60">
                {/^Public/.test(api.auth) ? (
                  <Globe size={16} className="mt-0.5 shrink-0 text-white/40" />
                ) : (
                  <Lock size={16} className="mt-0.5 shrink-0 text-white/40" />
                )}
                <span>{api.auth}</span>
              </p>

              {api.spec && (
                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  Spec: {api.spec}
                </p>
              )}

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/10 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                      <th className="py-2 pr-4 font-normal">Method</th>
                      <th className="py-2 pr-4 font-normal">Path</th>
                      <th className="py-2 pr-4 font-normal">Returns</th>
                      <th className="py-2 font-normal">Last probe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {api.endpoints.map((e) => (
                      <tr key={e.path} className="border-b border-white/5 align-top">
                        <td className="py-3 pr-4 font-mono text-xs text-white/50">
                          {e.method}
                        </td>
                        <td className="py-3 pr-4 font-mono text-xs text-white/80">
                          {e.path}
                        </td>
                        <td className="py-3 pr-4 text-sm text-white/60">{e.desc}</td>
                        <td className="py-3 font-mono text-xs">
                          {e.reachable ? (
                            <span className="text-white/50">
                              {e.status}
                              {e.contentType ? ` · ${e.contentType}` : ""}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-amber-400">
                              <Warning size={13} /> unreachable
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>
          ))}
        </div>

        <section className="mt-16 border border-white/10 bg-surface/30 p-8 backdrop-blur-sm">
          <h2 className="font-heading text-xl font-bold tracking-tight">
            No published OpenAPI specs, and saying so
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/60">
            None of these services serves a machine-readable spec over HTTP
            today — every <code className="font-mono text-white/70">openapi.json</code>{" "}
            answers 404. Nexus-Hosting has one in its repository that its codegen
            currently cannot read. Listing spec URLs that 404 would make this page
            the thing it exists to prevent, so it lists none.
          </p>
          <a
            href="https://github.com/The-No-Hands-company/Nexus-Systems/issues"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-2 border border-white/20 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-void"
          >
            Something wrong here? Tell us <ArrowUpRight size={14} />
          </a>
        </section>
      </div>
    </main>
  );
}
