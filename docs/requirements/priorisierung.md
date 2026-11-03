# Priorisierung

Stand v0.1. Die Anforderungen werden in zwei Schritten priorisiert: zuerst die Epics mit der **100-Dollar-Methode** (Wert aus Sicht des Product Owners), danach jede detaillierte Anforderung mit **MoSCoW**, wobei Wert, Abhängigkeiten (Spalte „Abhängig von“ in [`anforderungen.md`](anforderungen.md)) und Aufwand berücksichtigt werden. Daraus folgt der Release-Plan.

## 1. 100-Dollar-Methode (Epics)

**Vorgehen:** Der Product Owner (STK-01, Mohammad Heydari) verteilt 100 $ auf die 14 Epics, je nachdem, wie wertvoll ihm jedes Epic ist. Die Interviews P1 und P2 ([`erhebung.md`](erhebung.md)) flossen qualitativ in die Verteilung ein (z. B. Streaks und Ziele als Hauptmotivation). Eine Verteilung durch mehrere Stakeholder war im Einzelprojekt nicht möglich; das ist eine bewusste Einschränkung.

**Datum:** 2026-11-03 · **Durchschnitt:** 100 $ / 14 Epics ≈ 7,1 $

| Rang | Epic | Name | Betrag | Über Durchschnitt |
|---|---|---|---|---|
| 1 | EP-07 | Achievements | 10 $ | ja |
| 1 | EP-09 | Quest-Master | 10 $ | ja |
| 3 | EP-03 | Charakter, XP und Level | 9 $ | ja |
| 4 | EP-02 | Quests verwalten | 8 $ | ja |
| 4 | EP-06 | Streaks | 8 $ | ja |
| 4 | EP-10 | Freunde und Profile | 8 $ | ja |
| 4 | EP-12 | Coins und Reward Shop | 8 $ | ja |
| 8 | EP-04 | Dashboard | 7 $ | nein |
| 9 | EP-01 | Konto und Onboarding | 6 $ | nein |
| 9 | EP-08 | Statistiken und Kalender | 6 $ | nein |
| 9 | EP-11 | Gruppen-Challenges und Rangliste | 6 $ | nein |
| 12 | EP-05 | Lebensbereiche und Skill Tree | 5 $ | nein |
| 12 | EP-13 | Benachrichtigungen | 5 $ | nein |
| 14 | EP-14 | Administration | 4 $ | nein |
| | | **Summe** | **100 $** | |

**Auswertung:** Am wertvollsten sind Quest-Master (EP-09) und Achievements (EP-07) mit je 10 $, gefolgt von Charakter, XP und Level (EP-03) und Quests verwalten (EP-02). Sieben Epics liegen über dem Durchschnitt. Benachrichtigungen (EP-13), Lebensbereiche (EP-05) und Administration (EP-14) haben den geringsten Wert.

## 2. MoSCoW (detaillierte Anforderungen)

| Kategorie | Bedeutung in diesem Projekt |
|---|---|
| **Must** | Ohne diese Anforderung funktioniert die Kern-Spielschleife (Quest erhalten → abschließen → XP/Level/Streak) nicht, oder ein Epic mit Höchstwert wäre leer. Wird sicher bis v0.9 umgesetzt. |
| **Should** | Wichtig und wertvoll, aber das System ist auch ohne sie nutzbar. Wird bis v1.0 umgesetzt. |
| **Could** | Wünschenswert; wird umgesetzt, wenn nach Must und Should Zeit bleibt. |
| **Won't** | In diesem Semester bewusst nicht umgesetzt. |

**Regeln für die Zuordnung:**

1. Startwert ist der Epic-Wert: Epics über dem Durchschnitt liefern eher Must/Should, Epics darunter eher Should/Could.
2. Eine Anforderung darf nicht höher priorisiert oder früher geplant sein als eine Anforderung, von der sie abhängt (geprüft per Skript gegen die Spalte „Abhängig von“). Einzige Ausnahme ist REQ-66 (Administration): Bis zu ihrer Umsetzung wird der Katalog für Quests, Achievements und Items über Seed-Daten befüllt, damit REQ-13, REQ-14, REQ-24, REQ-48 und REQ-60 nicht blockiert sind.
3. Anforderungen, die einen Zielkonflikt auflösen, haben dieselbe Priorität wie die Anforderung, die den Konflikt auslöst (REQ-55 mit REQ-54; REQ-26 und REQ-27 mit REQ-25).

**Inkremente:** I1 bis v0.3 (Kern-Spielschleife), I2 bis v0.9 (alle Must), I3 bis v1.0.

| Anforderung | Epic | Story | MoSCoW | Inkrement | Begründung |
|---|---|---|---|---|---|
| REQ-01 | EP-01 | US-01 | Must | I1 | Ohne Konto kein persönlicher Fortschritt |
| REQ-02 | EP-01 | US-01 | Must | I1 | Ohne Konto kein persönlicher Fortschritt |
| REQ-03 | EP-01 | US-01 | Must | I1 | Ohne Konto kein persönlicher Fortschritt |
| REQ-04 | EP-01 | US-02 | Must | I1 | Ohne Konto kein persönlicher Fortschritt |
| REQ-05 | EP-01 | US-02 | Should | I3 | Schutz gegen Passwort-Raten, Kernfunktion läuft auch ohne |
| REQ-06 | EP-01 | US-03 | Must | I1 | Erste Quests direkt nach dem Start (NFR-06, Interview P1-7) |
| REQ-07 | EP-01 | US-03 | Must | I1 | Erste Quests direkt nach dem Start (NFR-06, Interview P1-7) |
| REQ-08 | EP-01 | US-04 | Should | I3 | Datenschutz (CON-06), betrifft keinen Kernablauf |
| REQ-09 | EP-01 | US-04 | Should | I3 | Datenschutz (CON-06), betrifft keinen Kernablauf |
| REQ-10 | EP-02 | US-05 | Must | I1 | Kern-Spielschleife: Quest anlegen/erhalten und abschließen |
| REQ-11 | EP-02 | US-05 | Must | I1 | Kern-Spielschleife: Quest anlegen/erhalten und abschließen |
| REQ-12 | EP-02 | US-05 | Must | I1 | Kern-Spielschleife: Quest anlegen/erhalten und abschließen |
| REQ-13 | EP-02 | US-06 | Must | I1 | Kern-Spielschleife: Quest anlegen/erhalten und abschließen |
| REQ-14 | EP-02 | US-06 | Must | I1 | Gehört mit REQ-13 und REQ-15 zur Zuweisung vordefinierter Quests |
| REQ-15 | EP-02 | US-06 | Must | I1 | Kern-Spielschleife: Quest anlegen/erhalten und abschließen |
| REQ-16 | EP-02 | US-07 | Must | I1 | Kern-Spielschleife: Quest anlegen/erhalten und abschließen |
| REQ-17 | EP-02 | US-07 | Should | I2 | Unmittelbares Feedback, motivierend (G-02) |
| REQ-18 | EP-02 | US-07 | Could | I3 | Komfort bei Fehlklick |
| REQ-19 | EP-02 | US-08 | Should | I2 | Langfristige Ziele (Interview P1, P2), baut auf Quest-Kern auf |
| REQ-20 | EP-02 | US-08 | Should | I2 | Langfristige Ziele (Interview P1, P2), baut auf Quest-Kern auf |
| REQ-21 | EP-02 | US-08 | Should | I2 | Langfristige Ziele (Interview P1, P2), baut auf Quest-Kern auf |
| REQ-22 | EP-02 | US-09 | Must | I1 | Kern-Spielschleife: Quest anlegen/erhalten und abschließen |
| REQ-23 | EP-02 | US-09 | Could | I3 | Komfort bei vielen Quests |
| REQ-24 | EP-02 | US-10 | Could | I3 | Zusatzangebot, Quest-Master (EP-09) deckt Vorschläge ab |
| REQ-25 | EP-03 | US-11 | Must | I1 | XP und Level sind das zentrale Belohnungssystem; Anti-Farming gehört untrennbar zur XP-Gutschrift |
| REQ-26 | EP-03 | US-11 | Must | I1 | XP und Level sind das zentrale Belohnungssystem; Anti-Farming gehört untrennbar zur XP-Gutschrift |
| REQ-27 | EP-03 | US-11 | Must | I1 | XP und Level sind das zentrale Belohnungssystem; Anti-Farming gehört untrennbar zur XP-Gutschrift |
| REQ-28 | EP-03 | US-12 | Must | I1 | XP und Level sind das zentrale Belohnungssystem; Anti-Farming gehört untrennbar zur XP-Gutschrift |
| REQ-29 | EP-03 | US-12 | Should | I2 | Motivierendes Feedback |
| REQ-30 | EP-03 | US-12 | Must | I1 | XP und Level sind das zentrale Belohnungssystem; Anti-Farming gehört untrennbar zur XP-Gutschrift |
| REQ-31 | EP-03 | US-13 | Must | I1 | XP und Level sind das zentrale Belohnungssystem; Anti-Farming gehört untrennbar zur XP-Gutschrift |
| REQ-32 | EP-03 | US-14 | Should | I2 | Grundlage für Statistik und Rangliste |
| REQ-33 | EP-04 | US-15 | Must | I1 | Startseite mit Überblick (EP-04: 7 $) |
| REQ-34 | EP-04 | US-15 | Must | I1 | Startseite mit Überblick (EP-04: 7 $) |
| REQ-35 | EP-05 | US-16 | Should | I2 | Lebensbereiche sichtbar machen (EP-05: 5 $) |
| REQ-36 | EP-05 | US-17 | Should | I2 | Lebensbereiche sichtbar machen (EP-05: 5 $) |
| REQ-37 | EP-05 | US-17 | Could | I3 | Visualisierung, Stufen sind auch ohne Baum sichtbar |
| REQ-38 | EP-06 | US-18 | Must | I1 | Streak ist Hauptmotivation laut Interviews (EP-06: 8 $) |
| REQ-39 | EP-06 | US-18 | Should | I2 | Ergänzen die Daily Streak; Streak-Schutz aus Interview P1 |
| REQ-40 | EP-06 | US-19 | Should | I2 | Ergänzen die Daily Streak; Streak-Schutz aus Interview P1 |
| REQ-41 | EP-06 | US-20 | Should | I2 | Ergänzen die Daily Streak; Streak-Schutz aus Interview P1 |
| REQ-42 | EP-07 | US-21 | Must | I2 | EP-07 hat mit 10 $ den höchsten Wert |
| REQ-43 | EP-07 | US-21 | Must | I2 | EP-07 hat mit 10 $ den höchsten Wert |
| REQ-44 | EP-07 | US-21 | Should | I2 | Konkreter Achievement-Katalog, kann schrittweise wachsen |
| REQ-45 | EP-08 | US-22 | Should | I3 | Statistik (EP-08: 6 $) |
| REQ-46 | EP-08 | US-23 | Could | I3 | Kalender ist Zusatznutzen |
| REQ-47 | EP-09 | US-24 | Must | I2 | EP-09 hat mit 10 $ den höchsten Wert; regelbasiert (ASM-04) |
| REQ-48 | EP-09 | US-24 | Must | I2 | EP-09 hat mit 10 $ den höchsten Wert; regelbasiert (ASM-04) |
| REQ-49 | EP-09 | US-24 | Must | I2 | EP-09 hat mit 10 $ den höchsten Wert; regelbasiert (ASM-04) |
| REQ-50 | EP-09 | US-25 | Should | I3 | Anpassung der Schwierigkeit, setzt Verlaufsdaten voraus |
| REQ-51 | EP-10 | US-26 | Should | I2 | Soziale Motivation (EP-10: 8 $); Profil verbergen aus Interview P2-5 |
| REQ-52 | EP-10 | US-26 | Should | I2 | Soziale Motivation (EP-10: 8 $); Profil verbergen aus Interview P2-5 |
| REQ-53 | EP-10 | US-26 | Should | I2 | Soziale Motivation (EP-10: 8 $); Profil verbergen aus Interview P2-5 |
| REQ-67 | EP-10 | US-26 | Should | I2 | Soziale Motivation (EP-10: 8 $); Profil verbergen aus Interview P2-5 |
| REQ-54 | EP-11 | US-27 | Should | I3 | Rangliste nur zusammen mit Opt-out (Zielkonflikt G-15 ⟂ G-04) |
| REQ-55 | EP-11 | US-27 | Should | I3 | Rangliste nur zusammen mit Opt-out (Zielkonflikt G-15 ⟂ G-04) |
| REQ-56 | EP-11 | US-28 | Could | I3 | EP-11 liegt mit 6 $ unter dem Durchschnitt; hoher Aufwand |
| REQ-57 | EP-11 | US-28 | Could | I3 | EP-11 liegt mit 6 $ unter dem Durchschnitt; hoher Aufwand |
| REQ-58 | EP-11 | US-28 | Could | I3 | EP-11 liegt mit 6 $ unter dem Durchschnitt; hoher Aufwand |
| REQ-59 | EP-12 | US-29 | Should | I2 | Coins und Shop (EP-12: 8 $) |
| REQ-60 | EP-12 | US-29 | Should | I2 | Coins und Shop (EP-12: 8 $) |
| REQ-61 | EP-12 | US-29 | Should | I2 | Coins und Shop (EP-12: 8 $) |
| REQ-62 | EP-12 | US-29 | Could | I3 | Ausrüsten ist Zusatz zum Kauf |
| REQ-63 | EP-13 | US-30 | Could | I3 | EP-13 liegt mit 5 $ unter dem Durchschnitt |
| REQ-64 | EP-13 | US-30 | Won't | – | Browser-Benachrichtigungen in diesem Semester nicht; Benachrichtigungscenter reicht |
| REQ-65 | EP-13 | US-31 | Could | I3 | EP-13 liegt mit 5 $ unter dem Durchschnitt |
| REQ-66 | EP-14 | US-32 | Could | I3 | EP-14 hat mit 4 $ den niedrigsten Wert; Katalog wird bis dahin über Seed-Daten befüllt |

**Verteilung:** 28 Must, 26 Should, 12 Could, 1 Won't (gesamt 67).

## 3. Nicht-funktionale Anforderungen

Die NFRs aus [`nfr.md`](nfr.md) werden ebenfalls nach MoSCoW eingeordnet.

| MoSCoW | NFRs | Begründung |
|---|---|---|
| Must | NFR-03, NFR-04, NFR-05, NFR-07, NFR-08, NFR-12, NFR-13, NFR-15, NFR-16, NFR-17, NFR-19 | Korrektheit, Datensicherheit und Wartbarkeit sind Voraussetzung für Betrieb und Change Request; NFR-17 hält den Quest-Master austauschbar |
| Should | NFR-01, NFR-02, NFR-06, NFR-09, NFR-10, NFR-14, NFR-18 | Performanz- und Usability-Ziele mit Messwerten; werden bis v1.0 gemessen |
| Could | NFR-11 | Hängt an den Benachrichtigungen (EP-13, Could) |

## 4. Bewusst ausgeschlossen (Won't)

| Thema | Grund |
|---|---|
| REQ-64 Browser-Benachrichtigungen | Das Benachrichtigungscenter reicht; Push-Infrastruktur ist Aufwand ohne Kernnutzen |
| Anbindung einer echten KI-API für den Quest-Master | Regelbasierter Quest-Master genügt (ASM-04); Kosten und Datenschutz (CON-06). Über NFR-17 später austauschbar |
| Native Mobile-App | Die responsive Web-App deckt Smartphones ab (NFR-08) |
| Bezahlfunktionen / Echtgeld im Shop | Nicht im Projektumfang; Coins gibt es nur im Spiel |
| Nachweis realer Aktivitäten (Foto, GPS, Fitness-Tracker) | Vertrauensprinzip; Missbrauch wird über die Anti-Farming-Regeln begrenzt (REQ-26, REQ-27) |

## 5. Release-Plan

| Meilenstein | Inhalt |
|---|---|
| v0.1 (6.11.2026) | Anforderungen, Priorisierung, Projektgerüst |
| v0.2 | Architektur, ADRs, Entwurf |
| v0.3 (I1, Kern-Spielschleife) | REQ-01, REQ-02, REQ-03, REQ-04, REQ-06, REQ-07, REQ-10, REQ-11, REQ-12, REQ-13, REQ-14, REQ-15, REQ-16, REQ-22, REQ-25, REQ-26, REQ-27, REQ-28, REQ-30, REQ-31, REQ-33, REQ-34, REQ-38 |
| v0.9 (I2, alle Must) | REQ-17, REQ-19, REQ-20, REQ-21, REQ-29, REQ-32, REQ-35, REQ-36, REQ-39, REQ-40, REQ-41, REQ-42, REQ-43, REQ-44, REQ-47, REQ-48, REQ-49, REQ-51, REQ-52, REQ-53, REQ-67, REQ-59, REQ-60, REQ-61 |
| v1.0 (I3, restliche Should und Could nach Zeit) | REQ-05, REQ-08, REQ-09, REQ-18, REQ-23, REQ-24, REQ-37, REQ-45, REQ-46, REQ-50, REQ-54, REQ-55, REQ-56, REQ-57, REQ-58, REQ-62, REQ-63, REQ-65, REQ-66 |

Der Change Request am 13.11.2026 wird gegen diesen Plan bewertet; Verschiebungen werden in [`../change-request.md`](../change-request.md) begründet.
