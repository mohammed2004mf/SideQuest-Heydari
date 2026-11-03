# Erhebung der Anforderungen

## Anforderungsquellen

| ID | Quelle | Art | Verwendung |
|---|---|---|---|
| Q-01 | [Ideenpapier SideQuest](quellen/Q-01-ideenpapier.md) (03.11.2026, mit ChatGPT erstellt, siehe `ki-nutzung.md`) | Dokument | Funktionsumfang, Begriffe, erste Priorisierung |
| Q-02 | Aufgabenstellung Software Engineering WS 2026/27 | Dokument | Randbedingungen, zu erstellende Artefakte |
| Q-03 | Vergleichbare Systeme: Habitica, Duolingo, Streaks-Apps | Systemanalyse | Bewährte Mechaniken (XP, Streaks, Ranglisten) und ihre Schwächen |
| Q-04 | Interviews mit Endnutzern | Interview | Bedürfnisse, Motivation, Probleme mit bestehenden Tools |
| Q-05 | Tagebuchstudie mit Endnutzern | Beobachtung | Implizites Verhalten im Alltag |
| Q-06 | Mohammad Heydari (Product Owner) | Stakeholder | Ziele, Prioritäten (100-Dollar-Methode) |

## Gewählte Techniken

| Stakeholder | Technik | Begründung (explizites / implizites Wissen) |
|---|---|---|
| STK-01 Endnutzer | **Interview** (Einzelgespräch, ca. 20 min) | Ziele, Wünsche und Ärger über bestehende Apps sind **explizites** Wissen, das sich erfragen lässt. |
| STK-01 Endnutzer | **Tagebuchstudie** (5 Tage, kurze Notiz am Abend) | Wann und warum Gewohnheiten abbrechen, ist **implizites** Wissen. Es lässt sich schlecht erfragen, aber über mehrere Tage beobachten. |
| STK-02 Product Owner | **Dokumentenanalyse** des Ideenpapiers und Priorisierung | Die Produktidee liegt schriftlich vor (explizit). |
| STK-03 Dozent | **Dokumentenanalyse** der Aufgabenstellung, Rückfragen in den freien Arbeitsterminen | Vorgaben sind explizit dokumentiert; offene Punkte werden direkt geklärt. |
| Vergleichssysteme | **Systemanalyse** | Bestehende Lösungen zeigen bewährte Mechaniken und typische Schwächen. |

## Interviewleitfaden (Endnutzer)

**Ziel:** Verstehen, wie die Befragten heute persönliche Ziele und Gewohnheiten verfolgen, woran sie scheitern und welche Spielmechaniken sie motivieren.
**Erwartete Ergebnisse:** Liste von Zielen, Problemen, motivierenden und demotivierenden Elementen sowie daraus abgeleitete User Stories.

**Einleitung (2 min)**
- Ziel des Gesprächs und Projekt kurz erklären; warum die Person ausgewählt wurde.
- Hinweis auf Verwendung der Antworten (nur für das Studienprojekt, anonymisiert); Aufzeichnung nur mit Einwilligung.

**Hauptteil (15 min, offene Fragen)**
1. Welche persönlichen Ziele verfolgst du gerade, zum Beispiel beim Sport, Lernen oder bei Routinen?
2. Wie behältst du heute den Überblick über diese Ziele? Welche Apps oder Hilfsmittel nutzt du?
3. Erzähl von einer Situation, in der du eine Gewohnheit aufgegeben hast. Was ist da passiert?
4. Was motiviert dich in Spielen dranzubleiben, und was davon würdest du dir im Alltag wünschen?
5. Wie würdest du es finden, deinen Fortschritt mit Freunden zu vergleichen oder gemeinsam Challenges zu machen?
6. Was würde dich an einer solchen App nerven oder dazu bringen, sie zu löschen?
7. Wann und auf welchem Gerät würdest du die App typischerweise öffnen?

**Abschluss (3 min)**
- Zusammenfassung der wichtigsten Punkte vorlesen und bestätigen lassen (Member Checking).
- Dank, Frage nach offenen Punkten, Hinweis auf Teilnahme an der Tagebuchstudie.

**Durchführung:** Befragte reden lassen, keine Suggestivfragen („Du willst doch sicher …?“), Antworten während des Gesprächs zusammenfassen, Notizen direkt nach dem Gespräch ausformulieren.

## Tagebuchstudie

An fünf aufeinanderfolgenden Tagen notieren die Teilnehmenden abends in 2 Minuten:
1. Welche Vorhaben hattest du heute? Welche davon hast du erledigt?
2. Was hat dich abgehalten oder unterstützt?
3. Wann am Tag hättest du eine Erinnerung oder Belohnung gebraucht?

## Ergebnisse

> **Status: 1 von mindestens 2 Interviews ausgewertet.** Interviews werden von Mohammad Heydari geführt und notiert. KI-Rollenspiele ersetzen echte Stakeholder nicht und werden nicht als Ergebnis verwendet. Die Tagebuchstudie (Q-05) steht noch aus.

### P1 – Interview vom 03.11.2026

- **Person:** studierende Person an der HS Flensburg (anonymisiert)
- **Form:** persönliches Gespräch an der Hochschule, geführt von Mohammad Heydari
- **Protokoll:** [Antworten P1](quellen/Q-04-interview-P1.md)

| # | Kernaussage | Abgeleitet / bestätigt |
|---|---|---|
| P1-1 | Ziele: Studium organisieren, regelmäßig lernen, Prüfungen bestehen, sportlich aktiv bleiben, Routinen einhalten. | Lebensbereiche Knowledge, Fitness, Discipline; EP-02, EP-05 |
| P1-2 | Nutzt Handy-Kalender, Notizen und To-do-Listen, vergisst aber das Aktualisieren; wünscht sich eine App, die alles zusammenfasst. | EP-04 Dashboard (US-15), EP-08 Kalender (US-23) |
| P1-3 | Hat tägliches Lernen aufgegeben, als mehrere Abgaben gleichzeitig kamen; Aufschieben führte zum Motivationsverlust. | Streak-Schutz (US-19), Anpassung der Schwierigkeit (US-25) |
| P1-4 | Motivierend sind Level, Belohnungen und sichtbarer Fortschritt; wünscht kleine Belohnungen statt nur des großen Ziels. | EP-03 XP und Level (US-11, US-12), Epic Quests mit Etappen (US-08) |
| P1-5 | Vergleich und Challenges mit Freunden „ziemlich cool“, z. B. Lern-Challenge über eine Woche; aber kein Wettbewerb, bei dem man sich schlecht fühlt. | Gruppen-Challenges (US-28), Rangliste abschaltbar (US-27), Zielkonflikt G-15 ⟂ G-04 |
| P1-6 | Würde die App bei zu vielen Benachrichtigungen, Dauerdruck oder kostenpflichtigen Kernfunktionen löschen. | Benachrichtigungen abschaltbar (US-31), NFR Benachrichtigungsgrenze, CON-09 keine Kosten |
| P1-7 | Nutzung vor allem auf dem Smartphone, morgens (Tagesplan) und abends (Fortschritt); beim Lernen auch am Laptop. | NFR responsives Design (Smartphone und Desktop), Dashboard (US-15) |

### P2 – Interview

> **Offen.** Wird nach Durchführung ergänzt.

### Zusammenfassung

Das erste Interview bestätigt die Kernidee (Belohnung kleiner Schritte, sichtbarer Fortschritt) und zwei Risiken aus dem Zielbaum: Druck durch Wettbewerb und durch zu viele Benachrichtigungen. Diese werden durch abschaltbare Ranglisten, Streak-Schutz und einstellbare Benachrichtigungen adressiert.
