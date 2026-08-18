import Donate from "@/components/site/Donate";

/**
 * The support section.
 *
 * Donate.jsx existed for weeks and was never imported anywhere, so the button
 * shipped in the bundle and appeared on no page. This section is what gives it
 * somewhere to live.
 *
 * The copy is deliberately concrete about where money goes. "Support us" asks
 * for a favour; naming the domain bill and the fact that everything else is
 * time explains what a contribution actually changes.
 */
export default function Support() {
  return (
    <section
      id="support"
      className="relative border-t border-white/10 bg-void py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-12 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
          <span className="h-px w-12 bg-white/20" />
          Support
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white md:text-5xl">
              Free to use. Cheap to run. Expensive to build.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              Nexus runs on one machine and a domain name. The entire recurring
              cost of this project is{" "}
              <span className="text-white">about twelve dollars a year</span> —
              deliberately, because anything that scales with users eventually
              gets paid for by users, and that is how every service this replaces
              ended up where it is.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              Everything else is time. If you want to shorten that, this is the
              place. There is no tier, no perk, and nothing behind a paywall —
              the software is free whether you give anything or not.
            </p>
          </div>

          <div className="flex items-start lg:col-span-5 lg:justify-end">
            <div className="w-full max-w-sm border border-white/10 bg-surface/40 p-8 backdrop-blur-sm">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                One-off, via PayPal
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Goes to the domain first, then hardware. Nothing is subscription
                based, because a subscription is a promise this project has not
                earned yet.
              </p>
              <div className="mt-6">
                <Donate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
