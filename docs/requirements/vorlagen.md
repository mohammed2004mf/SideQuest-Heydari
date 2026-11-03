# Vorlagen für Anforderungen

Kopiervorlagen in der Notation der Vorlesung (Kapitel 2).

## Ziel (Zielbaum)

```
G-01 <Oberziel>
├── UND: G-02 <Teilziel>, G-03 <Teilziel>
└── ODER: G-04 <Alternative>, G-05 <Alternative>
Konflikt: G-03 ⟂ G-06 (<Begründung>)
```

## Epic

> **EP-xx – <Name>:** Als <Rolle> möchte ich <großer Funktionsbereich>. _Ziel: G-xx_

## User Story

> **US-xx (EP-xx):** Als <Rolle> möchte ich <Funktion>, um <Nutzen> zu erreichen.
>
> **Akzeptanzkriterien**
> - AC-xx.1: Gegeben <Ausgangslage>, wenn <Aktion>, dann <prüfbares Ergebnis>.
> - AC-xx.2: …

## Detaillierte Anforderung (Satzschablone nach Pohl/Rupp)

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-xx | US-xx | Das System muss <Prozesswort> <Objekt>. | – |
| REQ-xx | US-xx | Das System muss <Rolle> die Möglichkeit bieten, <Objekt> <Prozesswort>. | REQ-yy |
| REQ-xx | US-xx | Falls <Bedingung>, muss das System <Objekt> <Prozesswort>. | REQ-yy |

Modalverb = Verbindlichkeit: **muss** (Pflicht), **soll** (dringend empfohlen), **wird** (Absicht), **kann** (optional).

## Use-Case-Vorlage

| Feld | Inhalt |
|---|---|
| Name / ID | UC-xx <Name> |
| Akteure | <primär>, <sekundär> |
| Auslöser | <Startereignis> |
| Vorbedingungen | <Voraussetzungen> |
| Nachbedingungen | <Zustand nach Erfolg> |
| Hauptszenario | 1. … 2. … 3. … |
| Alternativen | 2a. <Abweichung>: <Reaktion>, zurück zu Schritt n |
| Priorität / Häufigkeit | <hoch/mittel/niedrig> / <Nutzungsfrequenz> |
| Bezug | US-xx, REQ-xx |

## Qualitätsanforderung

| ID | Merkmal (ISO/IEC 25010) | Anforderung mit Messwert | Prüfung |
|---|---|---|---|
| NFR-xx | Effizienz – Zeitverhalten | Das Dashboard muss unter Normallast (≤ 50 gleichzeitige Nutzer) innerhalb von 1 s geladen sein. | TC-xx (Lasttest) |

## Randbedingung / Annahme

| ID | Art | Beschreibung | Quelle |
|---|---|---|---|
| CON-xx | Termin / Technologie / Recht | … | Aufgabenstellung, DSGVO … |
| ASM-xx | Annahme | … | – |

## Priorisierung

**Epics – 100-Dollar-Methode** (Durchschnitt = 100 / Anzahl Epics)

| Epic | Spieler | Entwickler | Ø | Rang |
|---|---|---|---|---|
| EP-01 | | | | |

**Anforderungen – MoSCoW**

| ID | Priorität (M/S/C/W) | Rationale | Meilenstein |
|---|---|---|---|
| REQ-xx | Must | … | v0.2 |
