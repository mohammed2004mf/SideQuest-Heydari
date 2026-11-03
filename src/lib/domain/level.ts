/**
 * Level- und Titelberechnung aus der Gesamt-XP.
 * Umsetzung von REQ-28 und REQ-30 (Epic EP-03).
 */

/** XP, die für den Aufstieg von Level n auf Level n+1 nötig sind: 100 · n (REQ-28). */
export function xpToNextLevel(level: number): number {
  if (!Number.isInteger(level) || level < 1) {
    throw new RangeError(`Ungültiges Level: ${level}`);
  }
  return 100 * level;
}

/** Gesamt-XP, ab der ein Level erreicht ist: 100 · (1 + … + (L−1)) = 50 · L · (L−1). */
export function totalXpForLevel(level: number): number {
  if (!Number.isInteger(level) || level < 1) {
    throw new RangeError(`Ungültiges Level: ${level}`);
  }
  return 50 * level * (level - 1);
}

/** Berechnet das Level aus der Gesamt-XP; Level 1 bei 0 XP (REQ-28). */
export function levelForTotalXp(totalXp: number): number {
  if (!Number.isInteger(totalXp) || totalXp < 0) {
    throw new RangeError(`Ungültige Gesamt-XP: ${totalXp}`);
  }
  let level = 1;
  while (totalXpForLevel(level + 1) <= totalXp) {
    level += 1;
  }
  return level;
}

export type Title = "Novice" | "Adventurer" | "Apprentice" | "Veteran" | "Champion" | "Legend";

/** Ordnet einem Level seinen Titel zu (REQ-30). */
export function titleForLevel(level: number): Title {
  if (!Number.isInteger(level) || level < 1) {
    throw new RangeError(`Ungültiges Level: ${level}`);
  }
  if (level >= 50) return "Legend";
  if (level >= 35) return "Champion";
  if (level >= 20) return "Veteran";
  if (level >= 10) return "Apprentice";
  if (level >= 5) return "Adventurer";
  return "Novice";
}
