# Testfälle

Stand v0.1: erste Unit-Tests für das Projektgerüst. Weitere Testfälle folgen mit der Umsetzung (siehe [`../requirements/priorisierung.md`](../requirements/priorisierung.md)).

| ID | Ebene | Bezug | Vorbedingung | Eingabe / Schritte | Erwartetes Ergebnis | Automatisiert | Ergebnis |
|---|---|---|---|---|---|---|---|
| TC-01 | Unit | REQ-11 | – | `xpForDifficulty` für Easy, Medium, Hard, Epic, Legendary | 25, 50, 100, 250, 500 XP | ja (`tests/unit/xp.test.ts`) | ✅ |
| TC-02 | Unit | REQ-28 | – | `levelForTotalXp` mit 0, 99, 100, 299, 300, 4500 XP; ungültige Werte | Level 1, 1, 2, 2, 3, 10; `RangeError` bei negativen oder gebrochenen Werten | ja (`tests/unit/level.test.ts`) | ✅ |
| TC-03 | Unit | REQ-30 | – | `titleForLevel` an allen Grenzwerten (1, 4, 5, 9, 10, 19, 20, 34, 35, 49, 50) | Novice, Adventurer, Apprentice, Veteran, Champion, Legend gemäß Grenzen | ja (`tests/unit/level.test.ts`) | ✅ |
| TC-04 | Integration | NFR-05, NFR-19 | – | Datenbank öffnen | Schema wird angelegt, Schema-Version 1 | ja (`tests/unit/db.test.ts`) | ✅ |
