# Architektur (LZ2)

Aufbau nach Kapitel 3 des Kursbuchs. Vorgehen: Qualitätsszenarien → Taktiken → Architekturstil/Muster → Komponenten und Schnittstellen (Attribute-Driven Design).

| # | Dokument | Inhalt (Kursnotation) | IDs |
|---|---|---|---|
| 1 | `qualitaetsszenarien.md` | Architekturtreiber: Qualitätsszenarien je Merkmal nach ISO/IEC 25010 mit Metrik, abgeleitet aus `NFR` | `QS` |
| 2 | `architekturstil.md` | Gewählter Stil (z. B. Schichten, MVC, Client-Server) mit Begründung, Vergleich der betrachteten Alternativen (Skalierbarkeit, Wartbarkeit, Komplexität), gewählte Taktiken | – |
| 3 | `sichten.md` | 4+1-Sichtenmodell (Kruchten): logische Sicht, Entwicklungssicht, Prozesssicht, physische Sicht, Szenarien | – |
| 4 | `komponenten.md` | Komponentendiagramm mit bereitgestellten (Lollipop) und benötigten (Socket) Schnittstellen und Ports; Verteilungsdiagramm mit Knoten, Artefakten, Kommunikationspfaden inkl. Protokoll | `COMP` |
| 5 | `adr/` | Mindestens drei Architecture Decision Records nach [`adr/ADR-000-vorlage.md`](adr/ADR-000-vorlage.md) | `ADR` |
| 6 | `nfr-mapping.md` | Welche Entscheidung (ADR) unterstützt welche Qualitätsanforderung (NFR/QS)? Trade-offs, Sensitivitätspunkte, Risiken | – |

Diagramme werden mit Mermaid direkt in den Dokumenten erstellt (siehe [Konventionen](../konventionen.md#3-diagramme)).

## Vorlage Qualitätsszenario

| ID | Merkmal (ISO/IEC 25010) | Szenario | Metrik | Bezug |
|---|---|---|---|---|
| QS-xx | Effizienz – Zeitverhalten | 50 Nutzer haken gleichzeitig Quests ab. | 95 % der Antworten in ≤ 500 ms | NFR-xx |

## Vorlage NFR-Mapping

| NFR / QS | Taktik | Entscheidung | Trade-off |
|---|---|---|---|
| NFR-xx | Kopplung reduzieren | ADR-002 | + … / − … |
