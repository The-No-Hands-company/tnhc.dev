import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import Landing from "@/pages/Landing";
import Apps from "@/pages/Apps";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Changelog from "@/pages/Changelog";
import ApiDocs from "@/pages/ApiDocs";
import Charter from "@/pages/Charter";
import Privacy from "@/pages/Privacy";
import PhantomStatus from "@/pages/PhantomStatus";

/**
 * True when this bundle is being served from the API subdomain.
 *
 * Read once at module load rather than per render: the hostname cannot change
 * without a full navigation, and a function call in a route element would
 * re-evaluate on every render for a value that is fixed.
 */
const IS_API_HOST =
  typeof window !== "undefined" && window.location.hostname.startsWith("api.");

function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return null;
}

function App() {
  return (
    <div className="App dark">
      <div className="grain-overlay" aria-hidden="true" />
      <SmoothScroll />
      <BrowserRouter>
        <Routes>
          {/*
            api.tnhc.dev serves the API directory at its root.

            The subdomain is a Cloudflare Pages custom domain on this same
            project, so it delivers this same bundle — without this, someone
            typing api.tnhc.dev would land on the marketing page, which is
            the opposite of what the hostname promises. /api still works on
            the apex, and both render the identical component, so there is one
            page and no copy to keep in sync.
          */}
          <Route path="/" element={IS_API_HOST ? <ApiDocs /> : <Landing />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/api" element={<ApiDocs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/charter" element={<Charter />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/phantom" element={<PhantomStatus />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
