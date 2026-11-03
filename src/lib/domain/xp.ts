/**
 * XP-Belohnung je Schwierigkeitsgrad.
 * Umsetzung von REQ-11 (Epic EP-03).
 */

export const DIFFICULTIES = ["easy", "medium", "hard", "epic", "legendary"] as const;

export type Difficulty = (typeof DIFFICULTIES)[number];

const XP_BY_DIFFICULTY: Readonly<Record<Difficulty, number>> = {
  easy: 25,
  medium: 50,
  hard: 100,
  epic: 250,
  legendary: 500,
};

/** Liefert die XP-Belohnung einer Quest für ihren Schwierigkeitsgrad (REQ-11). */
export function xpForDifficulty(difficulty: Difficulty): number {
  return XP_BY_DIFFICULTY[difficulty];
}
