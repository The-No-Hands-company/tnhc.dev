import { describe, it, expect } from "bun:test";
import { canaryBoxState } from "./canaryStatus";

const NOW = Date.parse("2026-10-16T12:00:00Z");

describe("canaryBoxState", () => {
  const ok = { status: "active", issuedAt: "2026-10-16T00:00:00Z", daysRemaining: 89, scope: "tnhc.dev" };

  it("active shows the verified line with update time and remaining days", () => {
    const s = canaryBoxState(ok, NOW);
    expect(s.tone).toBe("pass");
    expect(s.text).toContain("No government orders received");
    expect(s.text).toContain("89 more days");
  });

  it("stale returns a warning tone", () => {
    const s = canaryBoxState({ status: "stale", issuedAt: "2026-07-01T00:00:00Z", daysRemaining: -10, scope: "tnhc.dev" }, NOW);
    expect(s.tone).toBe("stale");
    expect(s.text).toContain("not been updated recently");
  });

  it("unavailable result returns unavailable", () => {
    expect(canaryBoxState({ status: "unavailable" }, NOW).tone).toBe("unavailable");
    expect(canaryBoxState(null, NOW).tone).toBe("unavailable");
    expect(canaryBoxState({}, NOW).tone).toBe("unavailable");
  });

  it("a future-dated result is unavailable", () => {
    const future = { ...ok, issuedAt: "2026-10-18T00:00:00Z" };
    expect(canaryBoxState(future, NOW).tone).toBe("unavailable");
  });

  it("result text does not leak raw JSON fields", () => {
    const s = canaryBoxState(ok, NOW);
    expect(s.text).not.toContain("issuedAt");
    expect(s.text).not.toContain("scope");
  });
});
