# Detaillierte Anforderungen

Funktionale Anforderungen nach der Satzschablone von Pohl und Rupp (Kapitel 2): Subjekt, Modalverb (**muss** = verbindlich), Prozesswort, Objekt, ggf. Bedingung („Falls …“). Begriffe wie Tag, Woche, Quest oder Streak sind im [Glossar](glossar.md) definiert. Prioritäten stehen in [`priorisierung.md`](priorisierung.md).

## EP-01 Konto und Onboarding

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-01 | US-01 | Das System muss einem Besucher die Möglichkeit bieten, sich mit E-Mail-Adresse, Benutzername und Passwort zu registrieren. | – |
| REQ-02 | US-01 | Falls die E-Mail-Adresse oder der Benutzername bereits vergeben ist, muss das System die Registrierung ablehnen und den Grund anzeigen. | REQ-01 |
| REQ-03 | US-01 | Das System muss bei der Registrierung Passwörter mit weniger als 10 Zeichen ablehnen. | REQ-01 |
| REQ-04 | US-02 | Das System muss einem registrierten Nutzer die Möglichkeit bieten, sich mit E-Mail-Adresse und Passwort an- und abzumelden. | REQ-01 |
| REQ-05 | US-02 | Falls für ein Konto fünfmal in Folge ein falsches Passwort eingegeben wurde, muss das System weitere Anmeldeversuche für dieses Konto 15 Minuten lang ablehnen. | REQ-04 |
| REQ-06 | US-03 | Das System muss einen Spieler nach der ersten Anmeldung durch das Onboarding mit den Schritten Avatar wählen, Ziele als Freitext eingeben, 1 bis 7 Lebensbereiche wählen und bevorzugte Schwierigkeit (Easy, Medium, Hard) wählen führen. | REQ-04 |
| REQ-07 | US-03 | Das System muss einem Spieler nach Abschluss des Onboardings 3 Daily Quests aus seinen gewählten Lebensbereichen zuweisen. | REQ-06, REQ-13 |
| REQ-08 | US-04 | Das System muss einem Spieler die Möglichkeit bieten, sein Konto nach erneuter Eingabe seines Passworts zu löschen. | REQ-04 |
| REQ-09 | US-04 | Das System muss beim Löschen eines Kontos alle personenbezogenen Daten des Spielers unwiderruflich entfernen. | REQ-08 |

## EP-02 Quests verwalten

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-10 | US-05 | Das System muss einem Spieler die Möglichkeit bieten, eine Custom Quest mit Titel (3 bis 80 Zeichen), optionaler Beschreibung, 1 bis 3 Lebensbereichen, Schwierigkeitsgrad und optionaler Deadline anzulegen. | – |
| REQ-11 | US-05 | Das System muss die XP-Belohnung einer Quest aus ihrem Schwierigkeitsgrad ableiten: Easy 25 XP, Medium 50 XP, Hard 100 XP, Epic 250 XP, Legendary 500 XP. | – |
| REQ-12 | US-05 | Das System muss für Custom Quests nur die Schwierigkeitsgrade Easy, Medium und Hard zulassen. | REQ-10 |
| REQ-13 | US-06 | Das System muss einem Spieler zu Beginn jedes Tages 3 Daily Quests aus dem Quest-Katalog zuweisen, deren Lebensbereich zu seinen gewählten Lebensbereichen gehört. | REQ-66 |
| REQ-14 | US-06 | Das System muss einem Spieler zu Beginn jeder Woche 2 Weekly Quests aus dem Quest-Katalog zuweisen. | REQ-66 |
| REQ-15 | US-06 | Falls eine Daily Quest bis zum Ende ihres Tages bzw. eine Weekly Quest bis zum Ende ihrer Woche nicht erledigt wurde, muss das System ihren Status auf „Abgelaufen“ setzen. | REQ-13, REQ-14 |
| REQ-16 | US-07 | Das System muss einem Spieler die Möglichkeit bieten, eine offene Quest als erledigt zu markieren. | – |
| REQ-17 | US-07 | Das System muss nach dem Abschließen einer Quest eine Belohnungsanimation mit den erhaltenen XP und Coins anzeigen. | REQ-25, REQ-59 |
| REQ-18 | US-07 | Das System muss einem Spieler die Möglichkeit bieten, das Abschließen einer Quest innerhalb von 10 Sekunden rückgängig zu machen und dabei alle dafür erhaltenen XP, Coins und Skill-Punkte wieder abzuziehen. | REQ-16 |
| REQ-19 | US-08 | Das System muss einem Spieler die Möglichkeit bieten, eine Epic Quest mit einer Laufzeit von 8 bis 365 Tagen, 2 bis 20 Checklisten-Punkten und dem Schwierigkeitsgrad Epic oder Legendary anzulegen. | – |
| REQ-20 | US-08 | Das System muss den Fortschritt einer Epic Quest als Anteil der abgehakten Checklisten-Punkte in Prozent anzeigen. | REQ-19 |
| REQ-21 | US-08 | Falls alle Checklisten-Punkte einer Epic Quest abgehakt sind, muss das System die Epic Quest als erledigt markieren. | REQ-19, REQ-16 |
| REQ-22 | US-09 | Das System muss einem Spieler die Möglichkeit bieten, eigene offene Quests zu bearbeiten und zu löschen. | REQ-10 |
| REQ-23 | US-09 | Das System muss einem Spieler die Möglichkeit bieten, seine Quests nach Quest-Art, Lebensbereich und Quest-Status zu filtern. | – |
| REQ-24 | US-10 | Das System muss einem Spieler auf Anforderung eine Side Quest aus dem Quest-Katalog vorschlagen, die ihm in den letzten 14 Tagen nicht vorgeschlagen wurde. | REQ-66 |

## EP-03 Charakter, XP und Level

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-25 | US-11 | Das System muss einem Spieler beim Abschließen einer Quest die XP-Belohnung der Quest gutschreiben. | REQ-11, REQ-16 |
| REQ-26 | US-11 | Falls ein Spieler am selben Tag mehr als 3 Custom Quests mit demselben Titel abschließt, muss das System für jeden weiteren Abschluss 0 XP gutschreiben. | REQ-25 |
| REQ-27 | US-11 | Das System muss die XP, die ein Spieler an einem Tag aus Custom Quests erhält, auf 500 XP begrenzen. | REQ-25 |
| REQ-28 | US-12 | Das System muss das Level eines Charakters aus der Gesamt-XP berechnen, wobei für den Aufstieg von Level n auf Level n+1 genau 100 · n XP benötigt werden (Level 1 bei 0 Gesamt-XP). | REQ-25 |
| REQ-29 | US-12 | Falls die Gesamt-XP eines Spielers durch eine Gutschrift die Schwelle zum nächsten Level erreicht, muss das System eine Level-Up-Animation anzeigen. | REQ-28 |
| REQ-30 | US-12 | Das System muss jedem Level einen Titel zuordnen: Level 1–4 Novice, 5–9 Adventurer, 10–19 Apprentice, 20–34 Veteran, 35–49 Champion, ab 50 Legend. | REQ-28 |
| REQ-31 | US-13 | Das System muss auf der Charakterseite Benutzername, Avatar, Titel, Level, Gesamt-XP und einen Fortschrittsbalken (XP im aktuellen Level / für das nächste Level benötigte XP) anzeigen. | REQ-28, REQ-30 |
| REQ-32 | US-14 | Das System muss jede XP-Gutschrift mit Zeitpunkt, Quelle (Quest, Achievement, Gruppen-Challenge) und Betrag speichern und dem Spieler als XP-Historie anzeigen. | REQ-25 |

## EP-04 Dashboard

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-33 | US-15 | Das System muss auf dem Dashboard die offenen Daily und Weekly Quests, den Fortschritt laufender Epic Quests, Level mit Fortschrittsbalken, Daily Streak, die XP der aktuellen Woche und die drei zuletzt freigeschalteten Achievements anzeigen. | REQ-13, REQ-28, REQ-38 |
| REQ-34 | US-15 | Das System muss einem Spieler die Möglichkeit bieten, vom Dashboard aus eine Quest abzuschließen und eine Custom Quest anzulegen. | REQ-10, REQ-16 |

## EP-05 Lebensbereiche und Skill Tree

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-35 | US-16 | Das System muss beim Abschließen einer Quest dem Skill jedes zugeordneten Lebensbereichs die XP-Belohnung der Quest (ohne Bonus) geteilt durch die Anzahl ihrer Lebensbereiche, abgerundet, als Skill-Punkte gutschreiben. | REQ-11 |
| REQ-36 | US-17 | Das System muss für jeden Lebensbereich die Skill-Stufe aus den Skill-Punkten berechnen: Stufe 1 ab 0, Stufe 2 ab 250, Stufe 3 ab 750, Stufe 4 ab 1.500, Stufe 5 ab 3.000 Punkten. | REQ-35 |
| REQ-37 | US-17 | Das System muss die sieben Lebensbereiche als Skill Tree mit freigeschalteten und gesperrten Stufen anzeigen. | REQ-36 |

## EP-06 Streaks

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-38 | US-18 | Das System muss die Daily Streak als Anzahl aufeinanderfolgender Tage berechnen, an denen der Spieler mindestens eine Quest abgeschlossen hat. | REQ-16 |
| REQ-39 | US-18 | Das System muss die Weekly Streak als Anzahl aufeinanderfolgender Wochen berechnen, in denen der Spieler an mindestens 3 Tagen eine Quest abgeschlossen hat. | REQ-16 |
| REQ-40 | US-19 | Falls ein Spieler an einem Tag keine Quest abschließt und in dieser Woche noch keinen Streak-Schutz verbraucht hat, muss das System die Daily Streak beibehalten und den Streak-Schutz dieser Woche als verbraucht markieren. | REQ-38 |
| REQ-41 | US-20 | Das System muss die XP-Gutschrift einer Quest bei einer Daily Streak von 3 bis 6 Tagen um 5 %, von 7 bis 29 Tagen um 10 % und ab 30 Tagen um 20 % erhöhen (abgerundet). | REQ-25, REQ-38 |

## EP-07 Achievements

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-42 | US-21 | Das System muss ein Achievement freischalten, sobald dessen Bedingung erfüllt ist, und dem Spieler die XP-Belohnung des Achievements gutschreiben. | REQ-25 |
| REQ-43 | US-21 | Das System muss für jedes Achievement Icon, Titel, Beschreibung, Seltenheit, Fortschritt (erreicht / benötigt) und Freischaltstatus anzeigen. | REQ-42 |
| REQ-44 | US-21 | Das System muss mindestens die Achievements First Steps, Early Bird, Gym Warrior, Knowledge Seeker, Consistency Master, Legendary Player, SideQuest Explorer und Social Hero mit den Bedingungen aus Q-01 §8 bereitstellen. | REQ-42 |

## EP-08 Statistiken und Kalender

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-45 | US-22 | Das System muss für einen wählbaren Zeitraum (aktuelle Woche, aktueller Monat) die Anzahl erledigter Quests je Tag, den Verlauf der Gesamt-XP und die Verteilung der XP auf die Lebensbereiche anzeigen. | REQ-32 |
| REQ-46 | US-23 | Das System muss einen Monatskalender anzeigen, der je Tag die Quests mit Deadline an diesem Tag und die an diesem Tag erledigten Quests enthält. | REQ-10, REQ-16 |

## EP-09 Quest-Master

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-47 | US-24 | Das System muss einem Spieler die Möglichkeit bieten, Ziele als Freitext (höchstens 500 Zeichen) und Lebensbereiche einzugeben und dazu Quest-Vorschläge anzufordern. | – |
| REQ-48 | US-24 | Das System muss je Anforderung 3 Daily-, 2 Weekly- und 1 Epic-Quest-Vorschlag erzeugen, die zu den gewählten Lebensbereichen gehören und dem Spieler in den letzten 7 Tagen nicht vorgeschlagen wurden. | REQ-47, REQ-66 |
| REQ-49 | US-24 | Das System muss einem Spieler die Möglichkeit bieten, einzelne Vorschläge als Quest zu übernehmen oder abzulehnen. | REQ-48 |
| REQ-50 | US-25 | Falls die Erfolgsquote (erledigte / zugewiesene Quests) eines Spielers in den letzten 7 Tagen unter 50 % liegt, muss das System die Vorschläge einen Schwierigkeitsgrad leichter als die bevorzugte Schwierigkeit erzeugen; liegt sie über 90 %, einen Grad schwerer. | REQ-48 |

## EP-10 Freunde und Profile

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-51 | US-26 | Das System muss einem Spieler die Möglichkeit bieten, einem anderen Spieler über dessen Benutzernamen eine Freundschaftsanfrage zu senden. | REQ-01 |
| REQ-52 | US-26 | Das System muss dem Empfänger die Möglichkeit bieten, eine Freundschaftsanfrage anzunehmen oder abzulehnen, und beiden Spielern die Möglichkeit bieten, eine Freundschaft zu beenden. | REQ-51 |
| REQ-53 | US-26 | Das System muss einem Spieler das Profil eines Freundes mit Avatar, Titel, Level, Daily Streak und freigeschalteten Achievements anzeigen. | REQ-52 |

## EP-11 Gruppen-Challenges und Rangliste

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-54 | US-27 | Das System muss einem Spieler eine Rangliste aus ihm selbst und seinen Freunden anzeigen, sortiert nach den XP der aktuellen Woche; die Wertung beginnt jeden Montag neu. | REQ-52, REQ-32 |
| REQ-55 | US-27 | Das System muss einem Spieler die Möglichkeit bieten, seine Teilnahme an Ranglisten abzuschalten; danach darf das System ihn in keiner Rangliste anderer Spieler anzeigen. | REQ-54 |
| REQ-56 | US-28 | Das System muss einem Spieler die Möglichkeit bieten, eine Gruppen-Challenge mit Titel, Ziel (Anzahl erledigter Quests, optional eingeschränkt auf einen Lebensbereich), Laufzeit von 1 bis 14 Tagen und 1 bis 9 eingeladenen Freunden zu erstellen. | REQ-52 |
| REQ-57 | US-28 | Das System muss den gemeinsamen Fortschritt einer Gruppen-Challenge als Summe der während der Laufzeit erledigten passenden Quests aller Teilnehmer anzeigen. | REQ-56 |
| REQ-58 | US-28 | Falls das Ziel einer Gruppen-Challenge innerhalb ihrer Laufzeit erreicht wird, muss das System jedem Teilnehmer 100 XP gutschreiben. | REQ-57, REQ-25 |

## EP-12 Coins und Reward Shop

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-59 | US-29 | Das System muss einem Spieler beim Abschließen einer Quest 1 Coin je volle 10 dafür erhaltene XP gutschreiben. | REQ-25 |
| REQ-60 | US-29 | Das System muss einem Spieler die Möglichkeit bieten, ein kosmetisches Item im Reward Shop zu kaufen, sofern sein Coin-Guthaben mindestens dem Preis entspricht. | REQ-59, REQ-66 |
| REQ-61 | US-29 | Falls das Coin-Guthaben eines Spielers kleiner als der Preis eines Items ist, muss das System den Kauf ablehnen und den fehlenden Betrag anzeigen. | REQ-60 |
| REQ-62 | US-29 | Das System muss einem Spieler die Möglichkeit bieten, gekaufte Items (Avatar, Charakterrahmen, Titel, Theme) auszurüsten. | REQ-60 |

## EP-13 Benachrichtigungen

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-63 | US-30 | Das System muss im Benachrichtigungscenter eines Spielers eine Benachrichtigung erzeugen bei neuen Daily Quests, Level-Up, freigeschaltetem Achievement, Freundschaftsanfrage, Einladung zu einer Gruppen-Challenge sowie, falls er bis 20:00 Uhr noch keine Quest abgeschlossen hat und seine Daily Streak größer 0 ist, bei gefährdeter Streak. | REQ-13, REQ-29, REQ-42, REQ-51, REQ-56, REQ-38 |
| REQ-64 | US-30 | Falls ein Spieler Browser-Benachrichtigungen erlaubt hat, muss das System Benachrichtigungen zusätzlich als Browser-Benachrichtigung senden. | REQ-63 |
| REQ-65 | US-31 | Das System muss einem Spieler die Möglichkeit bieten, jede Benachrichtigungsart einzeln ein- und auszuschalten. | REQ-63 |

## EP-14 Administration

| ID | Story | Anforderung | Abhängig von |
|---|---|---|---|
| REQ-66 | US-32 | Das System muss einem Administrator die Möglichkeit bieten, Katalog-Quests, Achievements und Shop-Items anzulegen, zu bearbeiten und zu deaktivieren. | – |
