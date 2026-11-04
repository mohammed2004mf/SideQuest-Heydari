# SideQuest – Level up your real life

SideQuest ist eine gamifizierte Web-App: Alltägliche Aufgaben werden zu Quests, für die man XP sammelt, im Level aufsteigt und Streaks und Achievements freischaltet.

Projektarbeit im Modul **Software Engineering** (WS 2026/27, HS Flensburg) von Mohammad Heydari.

## Status

Meilenstein **v0.1**: Anforderungen, Priorisierung und lauffähiges Projektgerüst. Die Funktionen folgen ab v0.3 (siehe [Release-Plan](docs/requirements/priorisierung.md#5-release-plan)).

## Technik

Next.js 16 (App Router) mit TypeScript, SQLite über better-sqlite3, ESLint, Prettier und Vitest.

## Installation

Voraussetzung: [Node.js](https://nodejs.org/) ab Version 20.9 (empfohlen 22 LTS) und Git.

```bash
git clone https://github.com/mohammed2004mf/SideQuest-Heydari.git && cd SideQuest-Heydari
npm install
```

## Start

```bash
npm run dev
```

Danach im Browser <http://localhost:3000> öffnen. Die SQLite-Datenbank wird beim ersten Zugriff automatisch unter `data/sidequest.db` angelegt (anderer Pfad über die Umgebungsvariable `SIDEQUEST_DB_PATH`). Ob die Datenbank erreichbar ist, zeigt <http://localhost:3000/api/health>.

Produktions-Build: `npm run build` und danach `npm start`.

## Entwicklung

| Befehl | Zweck |
|---|---|
| `npm run lint` | ESLint |
| `npm run format` | Code mit Prettier formatieren |
| `npm run typecheck` | TypeScript prüfen |
| `npm test` | Unit-Tests (Vitest) |
| `npm run test:coverage` | Tests mit Abdeckungsbericht (mind. 80 % für `src/lib/domain`) |
| `npm run check` | Alles zusammen; läuft auch in der CI bei jedem Pull Request |

Regeln für den Code: [docs/design/coding-standard.md](docs/design/coding-standard.md).

## Bedienung

_Folgt mit den ersten Funktionen in v0.3._

## Repository-Struktur

```
README.md             Installation, Start, Bedienung
CHANGELOG.md          Änderungen je Release
docs/
  requirements/       Vision, Stakeholder, Use Cases, User Stories, NFR
  architecture/       Architekturstil, Komponenten, ADRs
  design/             Klassen-, Sequenzdiagramme, Datenmodell
  testing/            Testkonzept, Akzeptanztests, Testbericht
  konventionen.md     ID-Schema, Diagramme, Git-Workflow
  change-request.md   Impact-Analyse der Änderungsanforderung
  traceability.md     Traceability-Matrix
  reflexion.md        Reflexion
  ki-nutzung.md       Offenlegung der KI-Nutzung
src/                  Quellcode (Next.js-App, Fachlogik, Datenbank)
tests/                Automatisierte Tests (Vitest)
```

## Arbeitsweise

- Jede Aufgabe ist ein Issue, gearbeitet wird in Feature-Branches (`feature/…`, `docs/…`, `fix/…`).
- Pull Requests referenzieren ihr Issue (z. B. `Closes #12`).
- Je Meilenstein gibt es ein Release-Tag: v0.1, v0.2, v0.3, v0.9, v1.0.
- Alle Artefakte tragen eindeutige IDs (z. B. `REQ-03`, `ADR-002`, `TC-11`), siehe [docs/konventionen.md](docs/konventionen.md).
- Diagramme werden mit Mermaid direkt im Markdown erstellt und von GitHub angezeigt.
