# Detailentwurf (LZ3)

Aufbau nach Kapitel 4 des Kursbuchs. Diagramme werden mit Mermaid direkt in den Dokumenten erstellt.

| # | Dokument | Inhalt (Kursnotation) | IDs |
|---|---|---|---|
| 1 | `klassendiagramm.md` | UML-Klassendiagramm der zentralen Klassen/Module: Attribute und Operationen mit Typen und Sichtbarkeit (`+ - #`), Multiplizitäten, Assoziation, Aggregation, Komposition, Generalisierung, ggf. Assoziationsklassen; bewusste Modellierungsentscheidungen | `CLS` |
| 2 | `sequenzdiagramme.md` | Sequenzdiagramme (oder Aktivitätsdiagramme) für mindestens zwei zentrale Use Cases, mit Lebenslinien, synchronen/asynchronen Nachrichten und kombinierten Fragmenten (`alt`, `loop`, `break`) | `SEQ` |
| 3 | `datenmodell.md` | ER-Diagramm bzw. Datenbankschema | `ENT` |
| 4 | `entwurfsprinzipien.md` | Angewandte Prinzipien mit Beleg im Entwurf: SOLID, DRY, KISS, Information Hiding, Separation of Concerns, lose Kopplung, hohe Kohäsion, Komposition vor Vererbung; MVC-Zuordnung | – |
| 5 | `entwurfsmuster.md` | Eingesetzte Entwurfsmuster nach der Vorlage unten | – |

## Vorlage Entwurfsmuster

| Feld | Inhalt |
|---|---|
| Pattern Name | z. B. Strategy |
| Intent | Welches Problem löst das Muster hier? |
| Motivation | Warum wäre es ohne das Muster schlechter (welches Prinzip würde verletzt)? |
| Applicability | Wann ist das Muster passend? |
| Structure | Mermaid-Klassendiagramm |
| Participants | Rollen und konkrete Klassen (CLS-xx) |
| Consequences | + Vorteile / − Nachteile (inkl. KISS-Abwägung) |
