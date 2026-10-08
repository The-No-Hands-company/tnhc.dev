import { Link } from "react-router-dom";

export default function SiteFooterLinks() {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
      The No Hands Company ·{" "}
      <Link to="/charter" className="transition-colors hover:text-acid" data-testid="footer-charter">Charter</Link>
      {" · "}
      <Link to="/privacy" className="transition-colors hover:text-acid" data-testid="footer-privacy">Privacy</Link>
      {" · "}
      <a href="https://zajfan.tnhc.dev" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-acid">
        Founder: Zajfan
      </a>
    </span>
  );
}
