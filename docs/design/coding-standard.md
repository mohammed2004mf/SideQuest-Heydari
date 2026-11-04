# Coding-Standard

Gilt für allen Code in `src/` und `tests/`. Die Regeln werden automatisch geprüft (NFR-16): `npm run check` lokal und der Workflow [`ci.yml`](../../.github/workflows/ci.yml) bei jedem Push und Pull Request.

## Werkzeuge

| Werkzeug | Zweck | Konfiguration |
|---|---|---|
| TypeScript (strict) | Statische Typprüfung, `noUncheckedIndexedAccess` | [`tsconfig.json`](../../tsconfig.json) |
| ESLint | Fehler und Stilregeln (Next.js Core Web Vitals, TypeScript, Barrierefreiheit über jsx-a11y) | [`eslint.config.mjs`](../../eslint.config.mjs) |
| Prettier | Einheitliche Formatierung (100 Zeichen, doppelte Anführungszeichen, Semikolon) | [`.prettierrc.json`](../../.prettierrc.json) |
| Vitest | Unit-Tests mit Abdeckungsgrenze 80 % für `src/lib/domain` (NFR-15) | [`vitest.config.ts`](../../vitest.config.ts) |

## Regeln

| Nr. | Regel | Prüfung |
|---|---|---|
| CS-01 | Kein `any`; öffentliche Funktionen haben einen expliziten Rückgabetyp. | ESLint |
| CS-02 | Vergleiche nur mit `===` / `!==`. | ESLint |
| CS-03 | Kein `console.log` im Produktivcode (nur `console.warn` / `console.error`). | ESLint |
| CS-04 | Fachlogik (XP, Level, Streak, Skills, Coins) liegt als reine Funktionen in `src/lib/domain` und hängt weder von Next.js noch von der Datenbank ab. | Review |
| CS-05 | Datenbankzugriff nur über `src/lib/db`; SQL nur mit Platzhaltern (`?`), nie per String-Verkettung. | Review |
| CS-06 | Bezeichner im Code auf Englisch, Kommentare und Fehlermeldungen auf Deutsch. | Review |
| CS-07 | Jede Funktion, die eine Anforderung umsetzt, nennt deren ID im Kommentar (z. B. `REQ-28`). | Review |
| CS-08 | Testnamen beginnen mit der Testfall-ID (`TC-02: …`). | Review |
| CS-09 | Dateinamen in `kebab-case`, React-Komponenten in `PascalCase`. | Review |

## Ordnerstruktur

```
src/
  app/            Next.js App Router: Seiten und API-Routen (Präsentation)
  lib/
    domain/       Fachlogik als reine Funktionen
    db/           SQLite-Zugriff und Migrationen
tests/
  unit/           Unit-Tests der Fachlogik und der Datenbank
```

Die Schichtung wird mit der Architektur in v0.2 als ADR festgehalten.
