# Konventionen für Dokumentation und Traceability

Alle Artefakte richten sich nach den Notationen aus Kursbuch, Folien und Übungen (Software Engineering, WS 2026/27).

## 1. ID-Schema

Jedes Artefakt bekommt eine eindeutige, nie wiederverwendete ID. Gelöschte Elemente werden als `~~gestrichen~~` markiert, nicht neu nummeriert.

| Präfix | Artefakt | Ablage | Beispiel |
|---|---|---|---|
| `G-xx` | Ziel (Zielbaum) | `docs/requirements/ziele.md` | G-01 Motivation im Alltag steigern |
| `EP-xx` | Epic | `docs/requirements/epics.md` | EP-01 Quests |
| `US-xx` | User Story | `docs/requirements/user-stories.md` | US-03 Quest abhaken |
| `AC-xx.y` | Akzeptanzkriterium der Story `US-xx` | dito | AC-03.1 |
| `REQ-xx` | Detaillierte (funktionale) Anforderung nach Satzschablone | `docs/requirements/anforderungen.md` | REQ-07 |
| `NFR-xx` | Qualitätsanforderung (ISO/IEC 25010) | `docs/requirements/nfr.md` | NFR-02 Effizienz |
| `CON-xx` | Randbedingung | `docs/requirements/randbedingungen.md` | CON-01 Abgabe 18.12. |
| `ASM-xx` | Annahme | dito | ASM-01 |
| `STK-xx` / `ROLE-xx` | Stakeholder / Nutzerrolle | `docs/requirements/stakeholder.md` | ROLE-01 Spieler |
| `UC-xx` | Use Case | `docs/requirements/use-cases.md` | UC-02 Quest abschließen |
| `QS-xx` | Qualitätsszenario | `docs/architecture/qualitaetsszenarien.md` | QS-01 |
| `COMP-xx` | Komponente | `docs/architecture/komponenten.md` | COMP-03 QuestService |
| `ADR-xxx` | Architekturentscheidung | `docs/architecture/adr/` | ADR-001 |
| `CLS-xx` | Klasse/Modul | `docs/design/klassendiagramm.md` | CLS-04 Quest |
| `SEQ-xx` / `ACT-xx` | Sequenz- / Aktivitätsdiagramm | `docs/design/`, `docs/requirements/` | SEQ-01 |
| `ENT-xx` | Entität im Datenmodell | `docs/design/datenmodell.md` | ENT-02 |
| `TC-xx` | Testfall | `docs/testing/` | TC-11 |
| `CR-xx` | Änderungsanforderung | `docs/change-request.md` | CR-01 |

## 2. Verfeinerungskette

Wie im Kurs werden Anforderungen schrittweise verfeinert und jede Ebene verweist auf die darüberliegende:

```
Ziel (G) → Epic (EP) → User Story (US, mit AC) → detaillierte Anforderung (REQ) → Use Case (UC)
                                                     ↓
               Architektur (QS, COMP, ADR) → Entwurf (CLS, SEQ, ENT) → Code (src/) → Testfall (TC)
```

- Jede `US` nennt ihr `EP`, jede `REQ` ihre `US`, jede `NFR` das Qualitätsmerkmal nach ISO/IEC 25010.
- Im Code verweist ein Kommentar an Klasse oder öffentlicher Funktion auf die umgesetzten IDs, z. B. `// Umsetzung: REQ-07, US-03`.
- Testnamen beginnen mit der Testfall-ID, z. B. `it("TC-11: vergibt XP beim Abhaken", …)`.
- Die Gesamtsicht steht in [`traceability.md`](traceability.md).

## 3. Diagramme

- Alle Diagramme werden mit **Mermaid** direkt im Markdown erstellt (Codeblock ` ```mermaid `). GitHub zeigt sie ohne Zusatzwerkzeug als Grafik an, und weil sie Text sind, sind Änderungen im Git-Diff sichtbar (wichtig für die Änderungsanforderung).
- Jedes Diagramm steht in dem Dokument, zu dem es gehört, mit seiner ID als Überschrift (z. B. `### ACT-01 Quest abschließen`).
- Lokale Vorschau: VS-Code-Erweiterung „Markdown Preview Mermaid Support“ oder [mermaid.live](https://mermaid.live).
- Notation wie in den Folien: Use Cases mit Akteur-Vererbung, `«include»` und `«extend»`; Aktivitätsdiagramme mit Start, Aktion, Entscheidung, Fork/Join, Objektknoten und Swimlanes; Klassendiagramme (`classDiagram`) mit Sichtbarkeiten, Multiplizitäten, Aggregation/Komposition; Sequenzdiagramme (`sequenceDiagram`) mit `alt`, `loop`, `break`; ER-Diagramme (`erDiagram`).
- Wo Mermaid eine UML-Notation nicht direkt kennt (Use-Case-Diagramm, Komponenten mit Lollipop/Socket), wird sie mit `flowchart` nachgebildet und unter dem Diagramm kurz erklärt.

## 4. Git-Workflow

- Jede Arbeit beginnt mit einem Issue; Branches heißen `docs/…`, `feature/…`, `fix/…`, `test/…`.
- Commit-Nachrichten im Imperativ und mit Bezug, z. B. `REQ-07 Satzschablone für Quest abhaken ergänzen (#5)`.
- Pull Requests nennen die betroffenen IDs und schließen ihr Issue (`Closes #5`).
- Je Meilenstein ein Tag (`v0.1`, `v0.2`, `v0.3`, `v0.9`, `v1.0`) und ein Eintrag in `CHANGELOG.md`.
- Gefundene Fehler werden als Issue mit Label `bug` und Verweis auf den Testfall erfasst.
