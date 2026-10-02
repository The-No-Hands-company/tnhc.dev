import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowUpRight, CircleNotch } from "@phosphor-icons/react";
import Donate from "@/components/site/Donate";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [node, setNode] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/waitlist/count`)
      .then((r) => setCount(r.data.count))
      .catch(() => setCount(null));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Enter an email to request access.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/waitlist`, { email: email.trim(), node: node.trim() || null });
      setDone(true);
      setCount((c) => (c == null ? 1 : c + 1));
      toast.success("You're on the list. The kernel will reach out.");
      setEmail("");
      setNode("");
    } catch (err) {
      const msg = err?.response?.data?.detail || "Something went wrong. Try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="waitlist" className="relative overflow-hidden border-t border-white/10 bg-void pt-28 md:pt-40" data-testid="waitlist-section">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-10 bg-acid" />
              Request Access
            </div>
            <h2 className="mb-6 font-heading text-4xl font-extrabold tracking-tighter text-white md:text-6xl">
              Join the zero-human cloud.
            </h2>
            <p className="mb-10 max-w-md font-sans text-base text-white/60 md:text-lg">
              Be first to run Nexus Systems on your own node. Drop your email — and optionally the domain you’ll
              federate from.{" "}
            </p>

            {done ? (
              <div
                className="border border-acid/40 bg-acid/[0.05] p-8"
                data-testid="waitlist-success"
              >
                <p className="font-heading text-2xl font-bold tracking-tight text-white">You’re in.</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-acid">
                  Access request logged // no hands required
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4" data-testid="waitlist-form">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full rounded-none border border-white/20 bg-transparent px-5 py-4 font-mono text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-acid"
                  data-testid="waitlist-email-input"
                />
                <input
                  type="text"
                  value={node}
                  onChange={(e) => setNode(e.target.value)}
                  placeholder="your-node.com (optional)"
                  className="w-full rounded-none border border-white/20 bg-transparent px-5 py-4 font-mono text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-acid"
                  data-testid="waitlist-node-input"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-3 bg-acid px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60 md:w-auto"
                  data-testid="waitlist-submit-button"
                >
                  {loading ? (
                    <>
                      <CircleNotch className="animate-spin" weight="bold" /> Requesting
                    </>
                  ) : (
                    <>
                      Request Access
                      <ArrowUpRight weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}

            {count != null && (
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40" data-testid="waitlist-count">
                {count} operator{count === 1 ? "" : "s"} already in the queue
              </p>
            )}
          </div>

          <div className="hidden items-start justify-end lg:col-span-6 lg:flex">
            <div className="w-full space-y-6 border-l border-white/10 pl-10">
              {[
                ["Codebase", "100% AI-generated"],
                ["Apps", "80+ modular"],
                ["Cost", "Free & self-hosted"],
                ["Network", "Globally federated"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">{k}</span>
                  <span className="font-heading text-lg font-bold tracking-tight text-white">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Massive wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 select-none border-t border-white/10 pt-10"
        >
          <h2 className="font-heading text-[24vw] font-extrabold uppercase leading-none tracking-tighter text-white/95 md:text-[18vw]">
            NEXUS
          </h2>
        </motion.div>

        <div className="flex flex-col items-start justify-between gap-4 py-10 md:flex-row md:items-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
            © {new Date().getFullYear()} The No Hands Company ·{" "}
            <a
              href="https://zajfan.tnhc.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-acid"
              data-testid="home-footer-founder"
            >
              Founder: Zajfan
            </a>
          </span>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Donate />
            <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-acid animate-pulse-glow" />
              </span>
              Kernel online — no hands on the keyboard
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
