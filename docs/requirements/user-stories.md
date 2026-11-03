# User Stories

Vorlage: **Als** ROLLE **möchte ich** FUNKTION, **um** NUTZEN **zu erreichen.** Der Nutzen ist die Begründung (Rationale) der Story. Akzeptanzkriterien (AC) sind im Format „Gegeben … wenn … dann …“ prüfbar formuliert und werden zu Akzeptanztests (`TC`) in `docs/testing/akzeptanztests.md`. Die detaillierten Anforderungen je Story stehen in [`anforderungen.md`](anforderungen.md).

## EP-01 Konto und Onboarding

**US-01** Als Besucher möchte ich mich mit E-Mail-Adresse, Benutzername und Passwort registrieren, um meinen Fortschritt dauerhaft zu speichern.
- AC-01.1: Gegeben eine noch nicht verwendete E-Mail-Adresse und ein freier Benutzername, wenn ich mich mit einem Passwort von mindestens 10 Zeichen registriere, dann wird mein Konto angelegt und ich bin angemeldet.
- AC-01.2: Gegeben eine bereits registrierte E-Mail-Adresse, wenn ich mich damit registriere, dann wird die Registrierung abgelehnt und der Grund angezeigt.
- AC-01.3: Gegeben ein Passwort mit 9 Zeichen, wenn ich mich registriere, dann wird die Registrierung abgelehnt.

**US-02** Als Besucher möchte ich mich an- und abmelden, um sicher auf meinen Charakter zuzugreifen.
- AC-02.1: Gegeben ein registriertes Konto, wenn ich E-Mail und richtiges Passwort eingebe, dann sehe ich mein Dashboard.
- AC-02.2: Gegeben fünf falsche Passworteingaben in Folge, wenn ich es ein sechstes Mal versuche, dann ist die Anmeldung für 15 Minuten gesperrt.

**US-03** Als neuer Spieler möchte ich beim ersten Start Avatar, Ziele, Lebensbereiche und Schwierigkeit wählen, um sofort passende erste Quests zu bekommen.
- AC-03.1: Gegeben ich melde mich zum ersten Mal an, dann führt mich das System durch die Schritte Avatar, Ziele, Lebensbereiche und Schwierigkeit.
- AC-03.2: Gegeben ich habe die Lebensbereiche Fitness und Knowledge gewählt, wenn ich das Onboarding abschließe, dann habe ich 3 Daily Quests, die jeweils zu Fitness oder Knowledge gehören.

**US-04** Als Spieler möchte ich mein Konto mit allen Daten löschen, um selbst über meine Daten zu bestimmen.
- AC-04.1: Gegeben ich bestätige das Löschen mit meinem Passwort, dann kann ich mich danach nicht mehr anmelden und meine Quests, XP und mein Profil sind nicht mehr abrufbar.

## EP-02 Quests verwalten

**US-05** Als Spieler möchte ich eigene Quests mit Titel, Lebensbereich, Schwierigkeit und optionaler Deadline anlegen, um meine persönlichen Aufgaben ins Spiel zu bringen.
- AC-05.1: Gegeben ich lege die Custom Quest „10 Seiten lesen“ (Knowledge, Medium) an, dann erscheint sie offen in meiner Questliste mit 50 XP Belohnung.
- AC-05.2: Gegeben ich lege eine Custom Quest an, dann kann ich nur Easy, Medium oder Hard als Schwierigkeit wählen.

**US-06** Als Spieler möchte ich jeden Tag neue Daily Quests und jede Woche Weekly Quests erhalten, um ohne Planungsaufwand regelmäßig etwas zu tun.
- AC-06.1: Gegeben ein neuer Tag beginnt, wenn ich die App öffne, dann habe ich 3 neue Daily Quests aus meinen Lebensbereichen.
- AC-06.2: Gegeben eine Daily Quest vom Vortag ist nicht erledigt, dann hat sie den Status „Abgelaufen“.
- AC-06.3: Gegeben eine neue Woche beginnt, dann habe ich 2 neue Weekly Quests.

**US-07** Als Spieler möchte ich eine Quest als erledigt markieren, um meine Belohnung zu erhalten.
- AC-07.1: Gegeben eine offene Quest, wenn ich sie abschließe, dann hat sie den Status „Erledigt“ und ich sehe eine Belohnungsanimation mit XP und Coins.
- AC-07.2: Gegeben ich habe eine Quest gerade abgeschlossen, wenn ich innerhalb von 10 Sekunden „Rückgängig“ wähle, dann ist sie wieder offen und die XP und Coins sind wieder abgezogen.

**US-08** Als Spieler möchte ich Epic Quests mit Checkliste anlegen, um langfristige Ziele in Etappen zu verfolgen.
- AC-08.1: Gegeben eine Epic Quest mit 4 Checklisten-Punkten, wenn ich 2 davon abhake, dann zeigt sie 50 % Fortschritt.
- AC-08.2: Gegeben ich hake den letzten offenen Punkt ab, dann ist die Epic Quest erledigt und ich erhalte ihre XP.

**US-09** Als Spieler möchte ich meine Quests bearbeiten, löschen und filtern, um den Überblick zu behalten.
- AC-09.1: Gegeben ich filtere nach „Fitness“ und „Offen“, dann sehe ich nur offene Quests des Lebensbereichs Fitness.
- AC-09.2: Gegeben eine erledigte Quest, dann kann ich sie nicht mehr bearbeiten.

**US-10** Als Spieler möchte ich spontane Side Quests vorgeschlagen bekommen, um Abwechslung in meinen Alltag zu bringen.
- AC-10.1: Gegeben ich fordere eine Side Quest an, dann erhalte ich eine Quest, die ich in den letzten 14 Tagen nicht vorgeschlagen bekommen habe.

## EP-03 Charakter, XP und Level

**US-11** Als Spieler möchte ich für jede erledigte Quest XP entsprechend ihrer Schwierigkeit erhalten, um für Anstrengung fair belohnt zu werden.
- AC-11.1: Gegeben eine offene Hard-Quest und keine Streak, wenn ich sie abschließe, dann steigt meine Gesamt-XP um 100.
- AC-11.2: Gegeben ich habe heute schon dreimal die Custom Quest „Liegestütze“ abgeschlossen, wenn ich sie ein viertes Mal abschließe, dann erhalte ich 0 XP.
- AC-11.3: Gegeben ich habe heute bereits 500 XP aus Custom Quests erhalten, wenn ich eine weitere Custom Quest abschließe, dann erhalte ich dafür 0 XP.

**US-12** Als Spieler möchte ich im Level aufsteigen und dabei eine Animation und einen neuen Titel sehen, um meinen Fortschritt zu feiern.
- AC-12.1: Gegeben ich bin Level 1 mit 90 Gesamt-XP, wenn ich eine Easy-Quest abschließe, dann bin ich Level 2 und sehe die Level-Up-Animation.
- AC-12.2: Gegeben ich erreiche Level 10, dann lautet mein Titel „Apprentice“.

**US-13** Als Spieler möchte ich meinen Charakter mit Level, XP-Fortschritt, Titel und Avatar sehen, um zu wissen, wo ich stehe.
- AC-13.1: Gegeben ich bin Level 3 mit 350 Gesamt-XP, dann zeigt der Fortschrittsbalken 50 / 300 XP.

**US-14** Als Spieler möchte ich meine XP-Historie einsehen, um nachzuvollziehen, wofür ich XP bekommen habe.
- AC-14.1: Gegeben ich habe eine Quest und ein Achievement abgeschlossen, dann zeigt die Historie zwei Einträge mit Zeitpunkt, Quelle und Betrag.

## EP-04 Dashboard

**US-15** Als Spieler möchte ich auf dem Dashboard auf einen Blick meine heutigen Quests, mein Level, meine Streak und meinen Wochenfortschritt sehen, um sofort zu wissen, was heute zu tun ist.
- AC-15.1: Gegeben ich bin angemeldet, wenn ich das Dashboard öffne, dann sehe ich offene Daily und Weekly Quests, Level mit Fortschrittsbalken, Daily Streak und XP dieser Woche.
- AC-15.2: Gegeben ich schließe eine Quest direkt auf dem Dashboard ab, dann aktualisieren sich XP, Level und Streak ohne Neuladen der Seite.

## EP-05 Lebensbereiche und Skill Tree

**US-16** Als Spieler möchte ich, dass erledigte Quests meine Skills im zugehörigen Lebensbereich erhöhen, um meine Entwicklung je Bereich zu sehen.
- AC-16.1: Gegeben eine Medium-Quest mit den Lebensbereichen Fitness und Discipline, wenn ich sie abschließe, dann steigen beide Skills um je 25 Punkte.

**US-17** Als Spieler möchte ich einen Skill Tree mit freischaltbaren Stufen je Lebensbereich sehen, um Ziele für meine Weiterentwicklung zu haben.
- AC-17.1: Gegeben mein Fitness-Skill hat 260 Punkte, dann zeigt der Skill Tree bei Fitness Stufe 2 als freigeschaltet und Stufe 3 als gesperrt.

## EP-06 Streaks

**US-18** Als Spieler möchte ich meine Daily und Weekly Streak sehen, um motiviert zu bleiben, regelmäßig aktiv zu sein.
- AC-18.1: Gegeben ich habe an den letzten 4 Tagen jeweils mindestens eine Quest abgeschlossen, dann zeigt die Daily Streak 4.

**US-19** Als Spieler möchte ich, dass ein einzelner verpasster Tag meine Streak nicht sofort beendet, um nicht durch einen Ausrutscher allen Fortschritt zu verlieren.
- AC-19.1: Gegeben eine Daily Streak von 10 und in dieser Woche noch kein verbrauchter Streak-Schutz, wenn ich einen Tag keine Quest abschließe, dann bleibt die Streak bei 10.
- AC-19.2: Gegeben der Streak-Schutz dieser Woche ist verbraucht, wenn ich erneut einen Tag aussetze, dann beginnt die Streak wieder bei 0.

**US-20** Als Spieler möchte ich bei längeren Streaks Bonus-XP erhalten, um für Beständigkeit belohnt zu werden.
- AC-20.1: Gegeben eine Daily Streak von 7, wenn ich eine Hard-Quest abschließe, dann erhalte ich 110 XP.

## EP-07 Achievements

**US-21** Als Spieler möchte ich Achievements freischalten und mit Fortschritt und Seltenheit sehen, um besondere Leistungen zu sammeln.
- AC-21.1: Gegeben ich habe noch keine Quest abgeschlossen, wenn ich meine erste Quest abschließe, dann wird „First Steps“ freigeschaltet und ich erhalte dessen XP-Belohnung.
- AC-21.2: Gegeben ich habe 3 von 10 Trainings-Quests erledigt, dann zeigt „Gym Warrior“ den Fortschritt 3/10.

## EP-08 Statistiken und Kalender

**US-22** Als Spieler möchte ich Statistiken zu erledigten Quests, XP-Verlauf und Lebensbereichen sehen, um meine Entwicklung auszuwerten.
- AC-22.1: Gegeben ich wähle „Monat“, dann sehe ich je Tag des Monats die Anzahl erledigter Quests und die XP-Verteilung auf die Lebensbereiche.

**US-23** Als Spieler möchte ich einen Kalender mit geplanten und erledigten Quests sehen, um meine Woche zu planen.
- AC-23.1: Gegeben eine Quest mit Deadline am 20.11., dann erscheint sie im Kalender am 20.11. als geplant.

## EP-09 Quest-Master

**US-24** Als Spieler möchte ich dem Quest-Master meine Ziele nennen und passende Vorschläge erhalten, um nicht selbst überlegen zu müssen, was ich tun kann.
- AC-24.1: Gegeben ich gebe „fitter werden“ ein und wähle Fitness, wenn ich Vorschläge anfordere, dann erhalte ich 3 Daily-, 2 Weekly- und 1 Epic-Vorschlag aus dem Lebensbereich Fitness.
- AC-24.2: Gegeben ich nehme einen Vorschlag an, dann erscheint er als offene Quest in meiner Questliste.

**US-25** Als Spieler möchte ich, dass der Quest-Master die Schwierigkeit an meine Erfolgsquote anpasst, um weder unter- noch überfordert zu werden.
- AC-25.1: Gegeben ich habe in den letzten 7 Tagen 4 von 10 zugewiesenen Quests erledigt, wenn ich Vorschläge anfordere, dann sind sie einen Schwierigkeitsgrad leichter als meine bevorzugte Schwierigkeit.

## EP-10 Freunde und Profile

**US-26** Als Spieler möchte ich Freunde über ihren Benutzernamen hinzufügen und ihre Profile sehen, um mich gegenseitig zu motivieren.
- AC-26.1: Gegeben ich sende „anna“ eine Freundschaftsanfrage und sie nimmt an, dann steht sie in meiner Freundesliste und ich in ihrer.
- AC-26.2: Gegeben „anna“ ist meine Freundin, dann sehe ich ihr Profil mit Level, Titel, Daily Streak und Achievements.

## EP-11 Gruppen-Challenges und Rangliste

**US-27** Als Spieler möchte ich eine wöchentliche Rangliste unter meinen Freunden sehen und meine Teilnahme abschalten können, um mich zu messen, ohne mich unter Druck gesetzt zu fühlen.
- AC-27.1: Gegeben ich habe drei Freunde, dann zeigt die Rangliste vier Einträge, sortiert nach XP der aktuellen Woche.
- AC-27.2: Gegeben ich schalte die Ranglisten-Teilnahme ab, dann erscheine ich in keiner Rangliste meiner Freunde.

**US-28** Als Spieler möchte ich mit Freunden eine Gruppen-Challenge erstellen und gemeinsam erfüllen, um zusammen Ziele zu erreichen.
- AC-28.1: Gegeben eine Challenge „gemeinsam 20 Quests in 7 Tagen“ mit 3 Teilnehmern, wenn zusammen 20 Quests erledigt sind, dann ist sie erfüllt und jeder Teilnehmer erhält 100 XP.

## EP-12 Coins und Reward Shop

**US-29** Als Spieler möchte ich Coins verdienen und gegen kosmetische Items eintauschen, um meinen Charakter zu gestalten.
- AC-29.1: Gegeben ich erhalte 55 XP für eine Quest, dann erhalte ich 5 Coins.
- AC-29.2: Gegeben ich habe 80 Coins, wenn ich einen Rahmen für 100 Coins kaufen will, dann wird der Kauf abgelehnt und mir fehlen 20 Coins.

## EP-13 Benachrichtigungen

**US-30** Als Spieler möchte ich über neue Daily Quests, Level-Ups, Achievements, Freundschaftsanfragen und eine gefährdete Streak benachrichtigt werden, um nichts zu verpassen.
- AC-30.1: Gegeben ich habe bis 20:00 Uhr heute keine Quest abgeschlossen und eine Daily Streak größer 0, dann erhalte ich eine Benachrichtigung „Streak in Gefahr“.

**US-31** Als Spieler möchte ich Benachrichtigungen je Art ein- und ausschalten, um nicht gestört zu werden.
- AC-31.1: Gegeben ich schalte „Streak in Gefahr“ ab, dann erhalte ich diese Benachrichtigung nicht mehr.

## EP-14 Administration

**US-32** Als Administrator möchte ich vordefinierte Quests, Achievements und Shop-Items pflegen, um Inhalte ohne Code-Änderung zu erweitern.
- AC-32.1: Gegeben ich lege die Katalog-Quest „15 Minuten spazieren“ (Fitness, Easy) an, dann kann sie ab dem nächsten Tag als Daily Quest zugewiesen werden.
- AC-32.2: Gegeben ich deaktiviere ein Shop-Item, dann ist es im Shop nicht mehr kaufbar, bleibt aber bei Spielern, die es besitzen, erhalten.
