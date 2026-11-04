import { describe, expect, it } from "vitest";
import { levelForTotalXp, titleForLevel, totalXpForLevel, xpToNextLevel } from "@/lib/domain/level";

describe("TC-02: Level aus Gesamt-XP (REQ-28)", () => {
  it.each([
    [0, 1],
    [99, 1],
    [100, 2],
    [299, 2],
    [300, 3],
    [4500, 10],
  ])("%i XP ergibt Level %i", (xp, level) => {
    expect(levelForTotalXp(xp)).toBe(level);
  });

  it("benötigt 100 · n XP von Level n auf n+1", () => {
    expect(xpToNextLevel(1)).toBe(100);
    expect(xpToNextLevel(7)).toBe(700);
    expect(totalXpForLevel(8) - totalXpForLevel(7)).toBe(xpToNextLevel(7));
  });

  it("lehnt negative oder gebrochene Werte ab", () => {
    expect(() => levelForTotalXp(-1)).toThrow(RangeError);
    expect(() => levelForTotalXp(1.5)).toThrow(RangeError);
    expect(() => xpToNextLevel(0)).toThrow(RangeError);
    expect(() => totalXpForLevel(0)).toThrow(RangeError);
  });
});

describe("TC-03: Titel je Level (REQ-30)", () => {
  it.each([
    [1, "Novice"],
    [4, "Novice"],
    [5, "Adventurer"],
    [9, "Adventurer"],
    [10, "Apprentice"],
    [19, "Apprentice"],
    [20, "Veteran"],
    [34, "Veteran"],
    [35, "Champion"],
    [49, "Champion"],
    [50, "Legend"],
  ] as const)("Level %i ergibt %s", (level, title) => {
    expect(titleForLevel(level)).toBe(title);
  });

  it("lehnt Level < 1 ab", () => {
    expect(() => titleForLevel(0)).toThrow(RangeError);
  });
});
