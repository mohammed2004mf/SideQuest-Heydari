import { levelForTotalXp, titleForLevel, totalXpForLevel, xpToNextLevel } from "@/lib/domain/level";

// Platzhalter-Startseite für v0.1. Das Dashboard (REQ-33) folgt in Inkrement I1.
const DEMO_XP = 1234;

export default function Home() {
  const level = levelForTotalXp(DEMO_XP);
  const inLevel = DEMO_XP - totalXpForLevel(level);
  const needed = xpToNextLevel(level);
  const percent = Math.round((inLevel / needed) * 100);

  return (
    <main className="container">
      <h1>SideQuest</h1>
      <p className="tagline">Level up your real life.</p>

      <section className="card" aria-labelledby="demo-heading">
        <h2 id="demo-heading">Beispielcharakter</h2>
        <p>
          Level {level} · {titleForLevel(level)} · {DEMO_XP} XP
        </p>
        <div
          className="bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={needed}
          aria-valuenow={inLevel}
          aria-label="Fortschritt zum nächsten Level"
        >
          <div className="bar-fill" style={{ width: `${percent}%` }} />
        </div>
        <p className="muted">
          {inLevel} / {needed} XP bis Level {level + 1}
        </p>
      </section>

      <p className="muted">Projektgerüst v0.1 – die Funktionen folgen ab v0.3.</p>
    </main>
  );
}
