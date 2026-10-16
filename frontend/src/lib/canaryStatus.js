// Turns the public warrant canary result (status.tnhc.dev/canary.json) into
// what the page says. Anything unexpected reads as "unavailable", never as active.
function ago(ms) {
  const d = Math.floor(ms / 86400000);
  if (d < 1) return "today";
  if (d === 1) return "yesterday";
  return `${d} days ago`;
}

export function canaryBoxState(result, now = Date.now()) {
  if (!result || typeof result !== "object") return { tone: "unavailable", text: "Canary status unavailable" };
  if (result.status === "unavailable") return { tone: "unavailable", text: "Canary status unavailable" };
  if (result.status === "stale") return { tone: "stale", text: "⚠ The warrant canary has not been updated recently (more than 90 days). This may indicate inability to update freely." };
  if (result.status !== "active") return { tone: "unavailable", text: "Canary status unavailable" };
  const at = Date.parse(result.issuedAt);
  if (!Number.isFinite(at) || at > now + 5 * 60 * 1000) return { tone: "unavailable", text: "Canary status unavailable" };
  const days = typeof result.daysRemaining === "number" && Number.isFinite(result.daysRemaining) ? result.daysRemaining : null;
  const updated = ago(now - at);
  const remaining = days !== null ? ` · valid for ${days} more day${days === 1 ? "" : "s"}` : "";
  return {
    tone: "pass",
    text: `✅ No government orders received — canary updated ${updated}${remaining}`,
  };
}
