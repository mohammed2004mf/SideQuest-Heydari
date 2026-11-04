# Stakeholder, Nutzerrollen und Kontextfacetten

## Stakeholder

| ID | Stakeholder | Rolle im Projekt | Interessen / Erwartungen | Einfluss |
|---|---|---|---|---|
| STK-01 | Endnutzer (Studierende, junge Berufstätige) | nutzen SideQuest im Alltag | motivierende, schnelle und schöne Bedienung; Fortschritt sehen; kein Druck | hoch |
| STK-02 | Mohammad Heydari | Product Owner, Entwickler, Tester | vollständiges, nachvollziehbares Projekt; gute Bewertung; Lernerfolg | hoch |
| STK-03 | Kai Petersen (Dozent) | Auftraggeber und Prüfer | Artefakte in Kursnotation, lückenlose Traceability, saubere Git-Historie, Abgabe zum 18.12.2026 | hoch |
| STK-04 | Freunde / Mitspieler der Endnutzer | nutzen Social-Funktionen | faire Ranglisten, gemeinsame Challenges, Schutz der eigenen Daten | mittel |
| STK-05 | Betreiber / Administrator | pflegt Quest-Katalog und Achievements | einfache Pflege, stabiler Betrieb | niedrig |
| STK-06 | Gesetzgeber (DSGVO) | Randbedingung | Datensparsamkeit, Einwilligung, Löschung personenbezogener Daten | mittel |
| STK-07 | Anbieter einer KI-API (optional, später) | externes System | Einhaltung der Nutzungsbedingungen und Limits | niedrig |

## Nutzerrollen

| ID | Rolle | Beschreibung | Erbt von |
|---|---|---|---|
| ROLE-01 | Besucher | nicht angemeldet; sieht Startseite, kann sich registrieren und anmelden | – |
| ROLE-02 | Spieler | angemeldeter Nutzer mit eigenem Charakter; verwaltet und erledigt Quests | ROLE-01 |
| ROLE-03 | Gruppenmitglied | Spieler, der mit Freunden an einer Gruppen-Challenge teilnimmt | ROLE-02 |
| ROLE-04 | Administrator | pflegt vordefinierte Quests (Katalog), Achievements und Shop-Items | ROLE-02 |
| ROLE-05 | Quest-Master (System) | sekundärer Akteur: erzeugt Quest-Vorschläge (zunächst regelbasiert, später KI-API) | – |

## Kontextfacetten

Nach Kapitel 2 werden die vier Kontextfacetten mit Beispielen und Anforderungsquellen beschrieben.

| Facette | Beispiele für SideQuest | Anforderungsquellen |
|---|---|---|
| **Objekt** | Quest mit Schwierigkeit und XP; Charakter mit Level und Skill-Werten; Streak; Achievement mit Seltenheit; Coins | Ideenpapier (Q-01), Glossar, vergleichbare Systeme (Habitica, Duolingo) |
| **Nutzung** | morgens die Tagesquests ansehen; unterwegs auf dem Smartphone eine Quest abhaken; abends Fortschritt und Streak prüfen; am Wochenende Gruppen-Challenge mit Freunden | Interviews mit Endnutzern (siehe [Erhebung](erhebung.md)) |
| **IT-System** | Webbrowser auf Smartphone und Desktop; Next.js-Server; SQLite-Datenbank; optionale KI-API; Benachrichtigungen im Browser | Technologie-Dokumentation, Randbedingungen (CON-xx) |
| **Entwicklung** | Einzelentwickler; ca. 7 Wochen; GitHub mit Issues, Branches, Pull Requests und Releases; Kursnotationen; KI-Unterstützung mit Offenlegungspflicht | Aufgabenstellung (Q-02), Dozent (STK-03) |
