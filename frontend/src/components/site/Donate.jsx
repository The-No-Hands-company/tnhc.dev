import { ArrowUpRight } from "@phosphor-icons/react";

const PAYPAL_URL = "https://www.paypal.me/tnhcns";

export default function Donate() {
  return (
    <a
      href={PAYPAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex overflow-hidden border border-white/20 bg-transparent px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-black"
      data-testid="donate-paypal-button"
      aria-label="Support development via PayPal"
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        Support the build
        <ArrowUpRight
          weight="bold"
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
      <span className="absolute inset-0 -translate-y-full bg-acid transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
    </a>
  );
}
