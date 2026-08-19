import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NAV = [
  { label: "Manifesto", id: "manifesto" },
  { label: "Kernel", id: "kernel" },
  { label: "Mesh", id: "federation" },
  { label: "Nexus", id: "pillars" },
  { label: "Compare", id: "compare" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  // This header is shared with pages that are not the landing page. Its logo
  // and nav used to assume otherwise: the logo only scrolled to the top of
  // whatever page you were on, and each nav item looked up a section id that
  // exists only on the landing page, found nothing, and did nothing at all.
  // On /changelog every one of them was silently dead.
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onLanding = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    if (onLanding) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // Off the landing page the section does not exist here — go there and let
    // the hash carry the destination. This also makes the sections linkable:
    // tnhc.dev/#kernel now means something.
    navigate(`/#${id}`);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-void/60 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12">
        {/* On the landing page the wordmark scrolls you back up; anywhere
            else it has to actually navigate home, which is what a logo in the
            top-left is universally expected to do. */}
        <Link
          to="/"
          onClick={(e) => {
            if (onLanding) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex items-center gap-3"
          data-testid="logo-home-button"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-acid animate-pulse-glow" />
          </span>
          <span className="font-heading text-lg font-extrabold tracking-tighter text-white">
            NO&nbsp;HANDS
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 sm:inline">
            /TNHC
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-white"
              data-testid={`nav-${n.id}`}
            >
              {n.label}
            </button>
          ))}
          <Link
            to="/apps"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-acid"
            data-testid="nav-apps"
          >
            Apps
          </Link>
            {/* This said Changelog and pointed at /blog. They are different
                things: the blog is written, the changelog is generated from
                commits and cannot drift from what actually shipped. */}
            <Link
              to="/blog"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-acid"
              data-testid="nav-blog"
            >
              Blog
            </Link>
            <Link
              to="/changelog"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-acid"
              data-testid="nav-changelog"
            >
              Changelog
            </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/*
            Sign in and Request access are plain anchors to other hosts, not
            router links: this site is static on Cloudflare Pages and cannot
            authenticate anyone. Auth and the dashboard do that.

            redirect_uri lands people on their app grid afterwards instead of
            back here. It is validated against the domain before it is
            honoured, so an off-domain value would simply be ignored.
          */}
          <a
            href="https://auth.tnhc.dev/login?redirect_uri=https%3A%2F%2Fapp.tnhc.dev"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-acid"
            data-testid="header-signin-link"
          >
            Sign In
          </a>
          <a
            href="https://app.tnhc.dev/request"
            className="group relative overflow-hidden border border-white/20 bg-transparent px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-black"
            data-testid="header-request-access-link"
          >
            <span className="relative z-10">Request Access</span>
            <span className="absolute inset-0 -translate-y-full bg-acid transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
