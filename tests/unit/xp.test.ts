import { describe, expect, it } from "vitest";
import { xpForDifficulty } from "@/lib/domain/xp";

describe("TC-01: XP-Belohnung je Schwierigkeitsgrad (REQ-11)", () => {
  it.each([
    ["easy", 25],
    ["medium", 50],
    ["hard", 100],
    ["epic", 250],
    ["legendary", 500],
  ] as const)("%s ergibt %i XP", (difficulty, xp) => {
    expect(xpForDifficulty(difficulty)).toBe(xp);
  });
});
