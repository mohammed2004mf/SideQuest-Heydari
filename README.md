# SideQuest – Level up your real life

SideQuest ist eine gamifizierte Web-App: Alltägliche Aufgaben werden zu Quests, für die man XP sammelt, im Level aufsteigt und Streaks und Achievements freischaltet.

Projektarbeit im Modul **Software Engineering** (WS 2026/27, HS Flensburg) von Mohammad Heydari.

## Status

Das Projekt befindet sich im Aufbau (Meilenstein v0.1: Vision und Anforderungen).

## Installation

_Folgt mit dem ersten lauffähigen Stand (geplant: Next.js mit TypeScript und SQLite)._

## Start

_Folgt._

## Bedienung

_Folgt._

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
src/                  Quellcode
tests/                Automatisierte Tests
```

## Arbeitsweise

- Jede Aufgabe ist ein Issue, gearbeitet wird in Feature-Branches (`feature/…`, `docs/…`, `fix/…`).
- Pull Requests referenzieren ihr Issue (z. B. `Closes #12`).
- Je Meilenstein gibt es ein Release-Tag: v0.1, v0.2, v0.3, v0.9, v1.0.
- Alle Artefakte tragen eindeutige IDs (z. B. `REQ-03`, `ADR-002`, `TC-11`), siehe [docs/konventionen.md](docs/konventionen.md).
- Diagramme werden mit PlantUML erstellt und als SVG eingebunden.
