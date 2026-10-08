import { describe, it, expect } from "bun:test";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { BRAND_FILES } from "./brandFiles";

const PUBLIC = join(import.meta.dir, "..", "..", "public");

describe("brand downloads", () => {
  it("every listed file is published under /brand", () => {
    expect(BRAND_FILES.length).toBe(6);
    for (const f of BRAND_FILES) {
      expect(f.href.startsWith("/brand/")).toBe(true);
      expect(existsSync(join(PUBLIC, f.href))).toBe(true);
    }
  });
  it("each file says what it is for and which background it needs", () => {
    for (const f of BRAND_FILES) {
      expect(f.label.length).toBeGreaterThan(0);
      expect(["dark", "light"]).toContain(f.ground);
    }
  });
});
