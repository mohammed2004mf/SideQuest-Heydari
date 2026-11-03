# Anforderungen (LZ1)

Aufbau nach der Struktur eines Anforderungsdokuments aus Kapitel 2 des Kursbuchs. IDs und Verweise siehe [`../konventionen.md`](../konventionen.md), Vorlagen siehe [`vorlagen.md`](vorlagen.md).

| # | Dokument | Inhalt (Kursnotation) | IDs |
|---|---|---|---|
| 1 | `vision.md` | Produktvision: Problem, Zielgruppe, Nutzen (max. ½ Seite); Zweck und Umfang | – |
| 2 | `stakeholder.md` | Stakeholder mit Interessen, Nutzerrollen, Kontextfacetten (Objekt, Nutzung, IT-System, Entwicklung) mit Anforderungsquellen | `STK`, `ROLE` |
| 3 | `erhebung.md` | Gewählte Erhebungstechniken (Interview, Beobachtung, Workshop) mit Begründung, Leitfaden, Ergebnisse | – |
| 4 | `ziele.md` | Zielbaum mit UND-/ODER-Zerlegung und markierten Zielkonflikten (Mermaid) | `G` |
| 5 | `epics.md` | Epics („Als … möchte ich …“), knapp und mit Bezug zu Zielen | `EP` |
| 6 | `user-stories.md` | User Stories nach „Als ROLLE möchte ich FUNKTION, um NUTZEN zu erreichen“ mit Akzeptanzkriterien | `US`, `AC` |
| 7 | `anforderungen.md` | Detaillierte Anforderungen nach Satzschablone (Pohl/Rupp) mit Modalverb, Prozesswort, Objekt, ggf. Bedingung; Abhängigkeiten zwischen Anforderungen | `REQ` |
| 8 | `use-cases.md` | Use-Case-Diagramm (Vererbung, «include», «extend»), ausgefüllte Use-Case-Vorlagen und Aktivitätsdiagramme für zentrale Abläufe | `UC`, `ACT` |
| 9 | `nfr.md` | Qualitätsanforderungen nach ISO/IEC 25010, prüfbar mit Messwert | `NFR` |
| 10 | `randbedingungen.md` | Randbedingungen (Termin, Technologie, Recht) und Annahmen | `CON`, `ASM` |
| 11 | `priorisierung.md` | Epics per 100-Dollar-Methode, detaillierte Anforderungen per MoSCoW-Gruppierung, je mit Begründung (Rationale) | – |
| 12 | `glossar.md` | Fachbegriffe (Quest, XP, Level, Streak …) eindeutig definiert, um Mehrdeutigkeiten zu vermeiden | – |

Diagramme werden mit Mermaid direkt in den Dokumenten erstellt (siehe [Konventionen](../konventionen.md#3-diagramme)).

## Qualitätsregeln aus der Vorlesung

- **Anforderungsarten trennen:** funktionale Anforderung, Qualitätsanforderung, Randbedingung.
- **Prüfbar formulieren:** keine vagen Begriffe wie „schnell“ oder „benutzerfreundlich“, sondern konkrete Werte.
- **Lösungsneutral:** Anforderungen beschreiben Daten, Funktionen und Verhalten, nicht die technische Umsetzung.
- **Mehrdeutigkeit vermeiden:** keine Pronomen mit unklarem Bezug, Klammern bei UND/ODER, Begriffe im Glossar.
- **Priorisierung mit Trade-offs:** Die 100-Dollar-Methode zeigt Abstände; MoSCoW (eine Gruppierung) allein erzwingt keine Trade-offs, daher werden beide kombiniert.
- **Validierung:** Anforderungen werden per Review (z. B. Walkthrough) geprüft; Befunde als Issue.
