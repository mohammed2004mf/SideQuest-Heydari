# Tests (LZ5)

| # | Dokument | Inhalt | IDs |
|---|---|---|---|
| 1 | `testkonzept.md` | Teststrategie: Testebenen (Unit, Integration, System, Akzeptanz), Werkzeuge, Testdaten, Endekriterien (z. B. Abdeckung) | – |
| 2 | `testfaelle.md` | Unit-, Integrations- und Systemtestfälle mit Bezug zu REQ/NFR | `TC` |
| 3 | `akzeptanztests.md` | Akzeptanztests, abgeleitet aus den Akzeptanzkriterien (`AC-xx.y`) der User Stories | `TC` |
| 4 | `testbericht.md` | Was wurde getestet, Ergebnisse je Testfall, gefundene Fehler (als Issues mit Label `bug`), Testabdeckung | – |

Automatisierte Tests liegen in `tests/`; der Testname beginnt mit der Testfall-ID (`TC-11: …`).

## Vorlage Testfall

| ID | Ebene | Bezug | Vorbedingung | Eingabe / Schritte | Erwartetes Ergebnis | Automatisiert | Ergebnis |
|---|---|---|---|---|---|---|---|
| TC-xx | Akzeptanz | US-03, AC-03.1 | Spieler angemeldet, Quest offen | Quest abhaken | +50 XP, Quest als erledigt markiert | ja (`tests/…`) | ✅ / ❌ (#Issue) |
