import { useEffect, useState } from "react";
import { privacyBoxState } from "@/lib/privacyStatus";

const STATUS_URL = "https://status.tnhc.dev/privacy.json";
const TONE = {
  pass: "border-acid/40 text-acid",
  fail: "border-red-400/60 text-red-300",
  stale: "border-white/20 text-white/60",
  unavailable: "border-white/20 text-white/60",
};

export default function PrivacyCheckBox() {
  const [state, setState] = useState({ tone: "unavailable", text: "Checking…" });
  useEffect(() => {
    let alive = true;
    fetch(STATUS_URL, { credentials: "omit" })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)
      .then((json) => { if (alive) setState(privacyBoxState(json)); });
    return () => { alive = false; };
  }, []);
  return (
    <div className={`mx-auto mt-28 max-w-3xl border px-6 py-4 font-mono text-[12px] md:px-12 ${TONE[state.tone]}`}
         data-testid="privacy-check-box" role="status">
      {state.text}
    </div>
  );
}
