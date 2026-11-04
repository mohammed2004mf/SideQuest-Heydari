# Erhebung der Anforderungen

## Anforderungsquellen

| ID | Quelle | Art | Verwendung |
|---|---|---|---|
| Q-01 | [Ideenpapier SideQuest](quellen/Q-01-ideenpapier.md) (03.11.2026, mit ChatGPT erstellt, siehe `ki-nutzung.md`) | Dokument | Funktionsumfang, Begriffe, erste Priorisierung |
| Q-02 | Aufgabenstellung Software Engineering WS 2026/27 | Dokument | Randbedingungen, zu erstellende Artefakte |
| Q-03 | Vergleichbare Systeme: Habitica, Duolingo, Streaks-Apps | Systemanalyse | Bewährte Mechaniken (XP, Streaks, Ranglisten) und ihre Schwächen |
| Q-04 | Interviews mit Endnutzern | Interview | Bedürfnisse, Motivation, Probleme mit bestehenden Tools |
| Q-05 | ~~Tagebuchstudie mit Endnutzern~~ (nicht durchgeführt, siehe [Tagebuchstudie](#tagebuchstudie)) | Beobachtung | – |
| Q-06 | Mohammad Heydari (Product Owner) | Stakeholder | Ziele, Prioritäten (100-Dollar-Methode) |

## Gewählte Techniken

| Stakeholder | Technik | Begründung (explizites / implizites Wissen) |
|---|---|---|
| STK-01 Endnutzer | **Interview** (Einzelgespräch, ca. 20 min) | Ziele, Wünsche und Ärger über bestehende Apps sind **explizites** Wissen, das sich erfragen lässt. |
| STK-01 Endnutzer | **Tagebuchstudie** (5 Tage, kurze Notiz am Abend), *geplant, nicht durchgeführt* | Wann und warum Gewohnheiten abbrechen, ist **implizites** Wissen. Es lässt sich schlecht erfragen, aber über mehrere Tage beobachten. |
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
- Dank, Frage nach offenen Punkten.

**Durchführung:** Befragte reden lassen, keine Suggestivfragen („Du willst doch sicher …?“), Antworten während des Gesprächs zusammenfassen, Notizen direkt nach dem Gespräch ausformulieren.

## Tagebuchstudie

An fünf aufeinanderfolgenden Tagen notieren die Teilnehmenden abends in 2 Minuten:
1. Welche Vorhaben hattest du heute? Welche davon hast du erledigt?
2. Was hat dich abgehalten oder unterstützt?
3. Wann am Tag hättest du eine Erinnerung oder Belohnung gebraucht?

**Status: nicht durchgeführt.** Der Product Owner hat am 04.11.2026 entschieden, die Tagebuchstudie nicht durchzuführen und stattdessen die Ergebnisse der beiden Interviews (P1, P2) zu verwenden.

**Ersatz:** Interviewfrage 3 fragt gezielt nach abgebrochenen Gewohnheiten, Frage 7 nach Zeitpunkt und Gerät der Nutzung. P1 hat dazu ein konkretes Beispiel geschildert (P1-3: Lernroutine bei mehreren gleichzeitigen Abgaben aufgegeben). Daraus sind Streak-Schutz (US-19) und die Anpassung der Schwierigkeit (US-25) entstanden.

**Einschränkung:** Interviews liefern Erinnerungen und Selbsteinschätzungen, keine Beobachtung über mehrere Tage. Implizites Verhalten im Alltag (z. B. zu welcher Tageszeit Erinnerungen helfen) ist daher weniger gut abgesichert. Betroffen sind vor allem die Annahmen zu Benachrichtigungen (REQ-63, 20:00 Uhr) und zur Nutzung im Tagesverlauf (Kontextfacette Nutzung). Diese werden im Usability-Test (NFR-06) und bei den Akzeptanztests erneut geprüft.

## Ergebnisse

> **Status: 2 Interviews ausgewertet.** Interviews werden von Mohammad Heydari geführt und notiert. KI-Rollenspiele ersetzen echte Stakeholder nicht und werden nicht als Ergebnis verwendet. Die Tagebuchstudie (Q-05) wurde nicht durchgeführt (siehe [Tagebuchstudie](#tagebuchstudie)).

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

### P2 – Interview vom 03.11.2026

- **Person:** studierende Person an der HS Flensburg mit Schwerpunkt Krafttraining (anonymisiert)
- **Form:** persönliches Gespräch an der Hochschule, geführt von Mohammad Heydari
- **Protokoll:** [Antworten P2](quellen/Q-04-interview-P2.md)

| # | Kernaussage | Abgeleitet / bestätigt |
|---|---|---|
| P2-1 | Ziele: im Gym besser werden, Muskeln aufbauen, Gewichte steigern; gesünder essen und genug schlafen. | Lebensbereiche Fitness, Discipline; Epic Quests (US-08) |
| P2-2 | Nutzt eine Fitness-App für Trainings und manchmal eine Ernährungs-App; für andere Ziele nichts. | Abgrenzung: SideQuest ersetzt keine Trainings-App, sondern bündelt Ziele aller Lebensbereiche |
| P2-3 | Nach zwei bis drei verpassten Trainingstagen fiel der Wiedereinstieg schwer; zu viel selbst gemachter Druck. | Streak-Schutz (US-19), kein Fortschrittsverlust bei Pausen (G-04) |
| P2-4 | Motivierend: immer ein neues Ziel, direktes Feedback, Verbesserung; wünscht Punkte und Level für erledigte Aufgaben. | EP-03 XP und Level, Belohnungsanimation (US-07) |
| P2-5 | Challenges mit Freunden gut, z. B. „20 Trainings in einem Monat“; will selbst entscheiden, ob der Fortschritt sichtbar ist. | Gruppen-Challenges (US-28) mit **Laufzeit bis zu einem Monat**; Sichtbarkeit des Profils und der Ranglisten-Teilnahme steuerbar (US-27) |
| P2-6 | Würde die App bei komplizierter Bedienung, langem Eintragen oder zu vielen Benachrichtigungen nicht nutzen. | NFR Bedienbarkeit (Quest in wenigen Schritten abschließen), Benachrichtigungen abschaltbar (US-31) |
| P2-7 | Nutzung auf dem Smartphone: morgens Ziele ansehen, vor dem Gym Challenge prüfen, abends Erledigtes eintragen; im Gym schnell und einfach. | NFR responsives Design und kurze Bedienwege, Dashboard (US-15) |

### Zusammenfassung

Beide Interviews bestätigen die Kernidee: kleine Schritte belohnen, Fortschritt sichtbar machen, Level und Punkte als Motivation. Beide nennen dieselben Risiken: Druck (durch Wettbewerb, durch Dauerpflichten, nach verpassten Tagen) und zu viele Benachrichtigungen. Daraus folgen der Streak-Schutz, abschaltbare Ranglisten und Benachrichtigungen sowie eine schnelle Bedienung auf dem Smartphone als wichtige Qualitätsanforderung.

**Neue bzw. geänderte Anforderungen aus der Erhebung:**
- Gruppen-Challenges sollen bis zu einem Monat laufen können (P2-5).
- Spieler sollen steuern können, ob ihr Profil für Freunde sichtbar ist (P2-5).
- Eine Quest soll auf dem Smartphone mit wenigen Schritten abgeschlossen werden können (P2-6, P2-7, P1-7).
- Benachrichtigungen sollen begrenzt und abschaltbar sein (P1-6, P2-6).
