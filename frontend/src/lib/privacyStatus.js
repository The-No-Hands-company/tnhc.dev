// Turns the public privacy-check result (status.tnhc.dev/privacy.json) into
// what the page says. Anything unexpected reads as "unavailable", never as a pass.
function ago(ms) {
  const m = Math.floor(ms / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m} minute${m === 1 ? "" : "s"} ago`;
  const h = Math.floor(m / 60);
  if (h < 48) return `${h} hour${h === 1 ? "" : "s"} ago`;
  const d = Math.floor(h / 24);
  return `${d} days ago`;
}

export function privacyBoxState(result, now = Date.now()) {
  if (!result || typeof result !== "object") return { tone: "unavailable", text: "Status unavailable" };
  if (result.status === "fail") return { tone: "fail", text: "❌ The last check found a problem. We are investigating." };
  if (result.status === "stale") return { tone: "stale", text: "Not verified recently" };
  const s = result.searched;
  const at = Date.parse(result.checkedAt);
  if (result.status !== "pass" || !s || !Number.isFinite(at)) return { tone: "unavailable", text: "Status unavailable" };
  return {
    tone: "pass",
    text: `✅ Verified ${ago(now - at)}: searched ${s.databases} databases, ${s.containers} containers, ${s.logs} logs, ${s.files} files — found nothing`,
  };
}
