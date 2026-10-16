import { useEffect, useState } from "react";
import { canaryBoxState } from "@/lib/canaryStatus";

const STATUS_URL = "https://status.tnhc.dev/canary.json";
const TONE = {
  pass: "border-acid/40 text-acid",
  stale: "border-amber-400/60 text-amber-300",
  unavailable: "border-white/20 text-white/60",
};

export default function CanaryBox() {
  const [state, setState] = useState({ tone: "unavailable", text: "Checking canary…" });
  useEffect(() => {
    let alive = true;
    fetch(STATUS_URL, { credentials: "omit" })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)
      .then((json) => { if (alive) setState(canaryBoxState(json)); });
    return () => { alive = false; };
  }, []);
  return (
    <div className={`border px-6 py-4 font-mono text-[12px] md:px-12 ${TONE[state.tone] ?? TONE.unavailable}`}
         data-testid="canary-box" role="status">
      {state.text}
    </div>
  );
}
