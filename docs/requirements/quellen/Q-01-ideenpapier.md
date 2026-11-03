# Q-01: Ideenpapier SideQuest (Zusammenfassung)

**Herkunft:** Projektprompt „SideQuest – Level up your real life“, von Mohammad Heydari am 03.11.2026 mit ChatGPT erstellt (siehe `docs/ki-nutzung.md`).
**Verwendung:** Anforderungsquelle (Pre-Traceability). Die Abschnittsnummern (Q-01 §n) werden in Epics und User Stories als Herkunft angegeben. Das Ideenpapier ist eine Wunschliste und keine verbindliche Anforderung; verbindlich ist erst die priorisierte Spezifikation.

| § | Thema | Kernaussagen |
|---|---|---|
| 1 | Vision | Gamifizierte Webanwendung, die das echte Leben in ein RPG verwandelt; Mischung aus Duolingo (Streaks), Habitica (Gamification), RPG (Level, Skill Trees, Quests), KI-Coach und Social Gaming. |
| 2 | Design | Dark Mode, gaming-inspiriert, dezente violette/blaue/cyanfarbene Akzente, Karten, Fortschrittsbalken, Animationen, responsiv für Desktop, Tablet, Smartphone. |
| 3A | Charakter | Benutzername, Level, XP, Gesamt-XP, Avatar, Titel, Fortschrittsbalken, Achievements, Skill-Werte; Level-Up-Animation; kosmetische Items freischaltbar. |
| 3B | Quests | Arten: Daily, Weekly, Epic, Side, Custom. Attribute: Titel, Beschreibung, Kategorie, Schwierigkeit, XP, Deadline, Status, optionale Checkliste und Fortschritt. Belohnungsanimation beim Abschluss. |
| 4 | XP und Level | Easy 25, Medium 50, Hard 100, Epic 250, Legendary 500 XP; steigende Level-Anforderungen; Progress Bar, Level-Titel, XP-Historie, Streak-Bonus; Schutz gegen XP-Farming. |
| 5 | Skill Tree | Sieben Lebensbereiche (Fitness, Knowledge, Discipline, Career, Creativity, Social, Mental Growth) mit Unterbereichen; Quests erhöhen den Fortschritt in einem oder mehreren Bereichen. |
| 6 | KI-Quest-Master | Ziele eingeben; passende Daily, Weekly und Epic Quests mit realistischen XP; Überforderung vermeiden; abwechslungsreich; modular für eine spätere KI-API. |
| 7 | Social | Freunde, Profile, XP/Level vergleichen, gemeinsame Quests, Gruppen-Challenges, wöchentliche Ranglisten, Fortschritt teilen; kein toxischer Wettbewerb. |
| 8 | Achievements | Icon, Titel, Beschreibung, Fortschritt, XP-Belohnung, Status, Seltenheit (Common, Rare, Epic, Legendary); Beispiele wie „First Steps“, „Consistency Master“. |
| 9 | Streaks | Daily und Weekly Streak, Anzeige, Bonus-XP, Streak-Achievements, Kalender; eine verpasste Aufgabe soll nicht den gesamten Fortschritt zerstören. |
| 10 | Dashboard | Begrüßung, Charakter, Level, XP, Daily/Weekly Quests, Epic-Fortschritt, Skills, Streak, Achievement-Hinweise, Wochenfortschritt, Schnellaktionen. |
| 11 | Weitere | Quest-Kalender, Statistiken, Reward Shop mit Coins, Benachrichtigungen, Onboarding (Account, Avatar, Ziele, Kategorien, Schwierigkeit, erste Quests). |
| 12 | Navigation | Dashboard, Quests, Character, Skill Tree, AI Quest Master, Friends, Leaderboard, Achievements, Calendar, Statistics, Reward Shop, Settings. |
| 13 | Technik | Vorschlag: Next.js/React, TypeScript, Tailwind CSS, Supabase/PostgreSQL, Supabase Auth, Lucide, Framer Motion; modular, sicher, responsiv, performant. Die endgültige Technologiewahl erfolgt in den ADRs. |
| 14 | MVP | Priorität 1: Dashboard, Charakter, XP/Level, Quests, Kategorien, Fortschritt speichern. Priorität 2: Quest-Master, Skill Tree, Achievements, Streaks, Statistiken. Priorität 3: Freunde, Challenges, Leaderboard, Shop, Benachrichtigungen. |
