import { describe, it, expect } from "bun:test";
import { privacyBoxState } from "./privacyStatus";

const NOW = Date.parse("2026-10-08T12:00:00Z");
describe("privacyBoxState", () => {
  it("pass shows the verified line with counts", () => {
    const s = privacyBoxState({ status: "pass", checkedAt: "2026-10-08T00:00:00Z", findings: 0,
      searched: { databases: 6, containers: 24, logs: 28, files: 5, probes: 21 } }, NOW);
    expect(s.tone).toBe("pass");
    expect(s.text).toBe("✅ Verified 12 hours ago: searched 6 databases, 24 containers, 28 logs, 5 files — found nothing");
  });
  it("fail, stale and unavailable", () => {
    expect(privacyBoxState({ status: "fail", findings: 2 }, NOW)).toEqual({ tone: "fail", text: "❌ The last check found a problem. We are investigating." });
    expect(privacyBoxState({ status: "stale", findings: 0 }, NOW)).toEqual({ tone: "stale", text: "Not verified recently" });
    expect(privacyBoxState(null, NOW)).toEqual({ tone: "unavailable", text: "Status unavailable" });
    expect(privacyBoxState({ status: "pass" }, NOW).tone).toBe("unavailable");
  });
  it("uses minutes under an hour and 'just now' under a minute", () => {
    const base = { status: "pass", findings: 0, searched: { databases: 1, containers: 1, logs: 1, files: 1, probes: 1 } };
    expect(privacyBoxState({ ...base, checkedAt: "2026-10-08T11:30:00Z" }, NOW).text).toContain("Verified 30 minutes ago");
    expect(privacyBoxState({ ...base, checkedAt: "2026-10-08T11:59:40Z" }, NOW).text).toContain("Verified just now");
  });
  const ok = { status: "pass", checkedAt: "2026-10-08T11:00:00Z", findings: 0, searched: { databases: 6, containers: 24, logs: 28, files: 5, probes: 21 } };
  it("a pass with findings above zero (or missing) is unavailable, never 'found nothing'", () => {
    expect(privacyBoxState({ ...ok, findings: 2 }, NOW).tone).toBe("unavailable");
    const { findings, ...noFindings } = ok;
    expect(privacyBoxState(noFindings, NOW).tone).toBe("unavailable");
  });
  it("missing or non-numeric counts are unavailable", () => {
    expect(privacyBoxState({ ...ok, searched: { ...ok.searched, databases: undefined } }, NOW).tone).toBe("unavailable");
    expect(privacyBoxState({ ...ok, searched: { ...ok.searched, logs: "28" } }, NOW).tone).toBe("unavailable");
    expect(privacyBoxState({ ...ok, searched: { ...ok.searched, files: NaN } }, NOW).tone).toBe("unavailable");
  });
  it("a checkedAt more than five minutes in the future is unavailable", () => {
    expect(privacyBoxState({ ...ok, checkedAt: "2026-10-08T12:10:00Z" }, NOW).tone).toBe("unavailable");
    expect(privacyBoxState({ ...ok, checkedAt: "2026-10-08T12:02:00Z" }, NOW).tone).toBe("pass");
  });
});
