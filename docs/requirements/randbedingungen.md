# Randbedingungen und Annahmen

## Randbedingungen

Randbedingungen schränken den Lösungsraum von außen ein und sind nicht verhandelbar.

| ID | Art | Randbedingung | Quelle |
|---|---|---|---|
| CON-01 | Termin | Das System muss bis zum 18.12.2026, 23:59 Uhr, als Release `v1.0` im GitHub-Repository vorliegen. | Q-02 |
| CON-02 | Termin | Die Meilensteine `v0.1`, `v0.2`, `v0.3` und `v0.9` müssen jeweils als Tag mit CHANGELOG-Eintrag existieren. | Q-02 |
| CON-03 | Organisation | Das Projekt wird von einer Person (Einzelarbeit) entwickelt. | Q-02 |
| CON-04 | Technologie | Das System muss als Webanwendung umgesetzt werden, die im Browser ohne Installation nutzbar ist; eine native App ist nicht vorgesehen. | Q-06 |
| CON-05 | Technologie | Das System muss in den Browsern Chrome, Edge und Firefox ab Version 120 sowie Safari ab Version 17 lauffähig sein. | Q-06 |
| CON-06 | Recht | Die Verarbeitung personenbezogener Daten muss der DSGVO entsprechen (Datensparsamkeit, Einwilligung, Recht auf Löschung). | STK-06 |
| CON-07 | Prozess | Alle Artefakte müssen als Markdown im Repository liegen und die Notationen des Kursbuchs verwenden. | Q-02 |
| CON-08 | Prozess | Der Einsatz generativer KI muss in `docs/ki-nutzung.md` offengelegt werden. | Q-02 |
| CON-09 | Kosten | Für Entwicklung und Betrieb dürfen nur kostenlose Werkzeuge und Dienste verwendet werden. | Q-06 |

## Annahmen

Annahmen werden getroffen, wo Informationen fehlen, und bei neuen Erkenntnissen überprüft.

| ID | Annahme | Auswirkung, falls falsch |
|---|---|---|
| ASM-01 | Nutzer haben während der Nutzung eine Internetverbindung. | Offline-Funktion würde nötig. |
| ASM-02 | Nutzer melden erledigte Quests ehrlich; das System prüft reale Aktivitäten nicht. | Manipulation von Ranglisten; ggf. Bestätigung durch Freunde nötig. |
| ASM-03 | Im Projektzeitraum nutzen höchstens 50 Personen das System gleichzeitig. | Andere Datenbank- und Betriebsentscheidungen nötig. |
| ASM-04 | Der Quest-Master arbeitet zunächst regelbasiert; eine KI-API wird nur über eine Schnittstelle vorbereitet. | Kosten (CON-09) und Datenschutz (CON-06) müssten neu bewertet werden. |
| ASM-05 | Die Zeitzone des Nutzers wird aus dem Browser übernommen und bestimmt Tages- und Wochengrenzen. | Streaks und Daily Quests könnten falsch berechnet werden. |
