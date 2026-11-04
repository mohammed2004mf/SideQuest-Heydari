# Changelog

Alle wichtigen Änderungen an diesem Projekt werden hier dokumentiert.
Format angelehnt an [Keep a Changelog](https://keepachangelog.com/de/1.1.0/).

## [Unreleased]

### Geändert
- Erhebung: Tagebuchstudie (Q-05) nicht durchgeführt, durch die Interviews P1 und P2 ersetzt; Einschränkung dokumentiert

## [0.1] – 2026-11-03

### Hinzugefügt
- Zielbaum (G-01 bis G-16) mit Zielkonflikten, 14 Epics, 32 User Stories mit Akzeptanzkriterien
- 67 detaillierte Anforderungen nach Satzschablone mit Abhängigkeiten
- Use-Case-Diagramm, 5 Use-Case-Vorlagen, Aktivitätsdiagramme ACT-01 und ACT-02
- 19 nicht-funktionale Anforderungen nach ISO/IEC 25010 mit Messwerten
- Priorisierung: Epics per 100-Dollar-Methode, alle Anforderungen per MoSCoW, Release-Plan
- Traceability: Priorität je Anforderung, NFR-Tabelle und NFR↔REQ-Abhängigkeiten
- Projektgerüst: Next.js 16 mit TypeScript, SQLite (better-sqlite3) mit Migrationen, Health-Check unter `/api/health`
- Fachlogik für XP je Schwierigkeit, Level und Titel (REQ-11, REQ-28, REQ-30) mit Unit-Tests TC-01 bis TC-04
- Coding-Standard mit ESLint, Prettier und TypeScript strict; CI-Workflow auf GitHub Actions
- README mit Installation, Start und Entwicklungsbefehlen

### Geändert
- Diagramme mit Mermaid statt PlantUML (direkte Anzeige auf GitHub)
- Produktvision, Stakeholder, Nutzerrollen und Kontextfacetten
- Erhebungsplan mit Interviewleitfaden und Tagebuchstudie
- Randbedingungen, Annahmen und Glossar; Ideenpapier als Quelle Q-01
- Repository-Struktur gemäß Aufgabenstellung (docs/, src/, tests/)
- Platzhalter für alle Artefakte, Issue-Vorlagen
- Konventionen (ID-Schema, Diagramme, Git-Workflow) und Vorlagen nach den Notationen des Kurses
