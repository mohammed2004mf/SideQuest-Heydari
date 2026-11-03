# Qualitätsanforderungen (NFR)

Qualitätsanforderungen beschreiben, **wie gut** das System seine Funktionen erbringt (Kapitel 2). Sie sind nach den Qualitätsmerkmalen der ISO/IEC 25010 gegliedert und mit einem Messwert prüfbar formuliert. Sie sind Treiber der Architektur und werden in `docs/architecture/qualitaetsszenarien.md` zu Qualitätsszenarien (QS) verfeinert.

| ID | Merkmal (ISO/IEC 25010) | Anforderung mit Messwert | Prüfung | Quelle |
|---|---|---|---|---|
| NFR-01 | Effizienz – Zeitverhalten | Das Dashboard muss bei bis zu 50 gleichzeitig angemeldeten Spielern in 95 % der Aufrufe innerhalb von 1 s vollständig geladen sein. | Lasttest | ASM-03, P2-7 |
| NFR-02 | Effizienz – Zeitverhalten | Das System muss das Abschließen einer Quest (inkl. XP-, Coin-, Skill- und Streak-Aktualisierung) in 95 % der Fälle innerhalb von 300 ms serverseitig bestätigen. | Lasttest | P2-7 |
| NFR-03 | Funktionale Eignung – Korrektheit | Die Berechnungen von XP, Level, Streak, Streak-Bonus, Skill-Punkten und Coins müssen in 100 % der Akzeptanztestfälle das in den Anforderungen festgelegte Ergebnis liefern. | Unit- und Akzeptanztests | REQ-25 – REQ-41, REQ-59 |
| NFR-04 | Zuverlässigkeit – Fehlertoleranz | Das Abschließen einer Quest muss atomar erfolgen: Bricht die Verarbeitung ab, darf keine der Gutschriften (XP, Coins, Skill-Punkte, Streak) gespeichert sein. | Integrationstest mit erzwungenem Fehler | G-16 |
| NFR-05 | Zuverlässigkeit – Wiederherstellbarkeit | Alle vom System bestätigten Daten müssen nach einem Neustart des Servers vollständig vorhanden sein. | Systemtest | – |
| NFR-06 | Usability – Erlernbarkeit | Mindestens 3 von 3 Testpersonen ohne Vorkenntnisse müssen Registrierung, Onboarding und den Abschluss der ersten Quest ohne Hilfe innerhalb von 3 Minuten schaffen. | Usability-Test | P2-6 |
| NFR-07 | Usability – Bedienbarkeit | Eine Quest muss vom Dashboard aus mit einer einzigen Interaktion abgeschlossen werden können; das Anlegen einer Custom Quest darf höchstens 4 Eingabeschritte erfordern. | Review der Oberfläche | P2-6, P2-7 |
| NFR-08 | Usability – Bedienbarkeit | Alle Seiten müssen von 360 px bis 1920 px Bildschirmbreite ohne horizontales Scrollen nutzbar sein; Schaltflächen müssen mindestens 44 × 44 px groß sein. | Test in Browser-Entwicklertools | P1-7, P2-7, Q-01 §2 |
| NFR-09 | Usability – Barrierefreiheit | Texte müssen ein Kontrastverhältnis von mindestens 4,5 : 1 einhalten (WCAG 2.1 AA), und alle Funktionen müssen per Tastatur bedienbar sein; der Lighthouse-Accessibility-Wert muss mindestens 90 betragen. | Lighthouse, manueller Tastaturtest | – |
| NFR-10 | Usability – Ästhetik der Benutzeroberfläche | Das System muss standardmäßig ein dunkles Farbschema verwenden; Animationen dürfen höchstens 600 ms dauern und müssen bei der Browsereinstellung „reduzierte Bewegung“ entfallen. | Review, Browsertest | Q-01 §2 |
| NFR-11 | Usability – Schutz vor Überlastung | Das System darf einem Spieler höchstens 3 Benachrichtigungen pro Tag senden (ausgenommen Freundschaftsanfragen und Einladungen). | Unit-Test | P1-6, P2-6, G-04 |
| NFR-12 | Sicherheit – Vertraulichkeit | Passwörter dürfen nicht im Klartext gespeichert werden, sondern nur als gesalzener Hash eines für Passwörter vorgesehenen Verfahrens. | Code-Review, Datenbankprüfung | CON-06 |
| NFR-13 | Sicherheit – Integrität | Ein Spieler darf nur seine eigenen Daten ändern können; jede Anfrage auf Quests, Profile oder Käufe eines anderen Spielers muss abgelehnt werden. | Integrationstests (0 erfolgreiche Zugriffe) | CON-06 |
| NFR-14 | Sicherheit – Datenschutz | Das System darf neben E-Mail-Adresse, Benutzername und Passwort-Hash nur Spieldaten speichern und keine Tracking- oder Analysedienste Dritter einbinden. | Review | CON-06 |
| NFR-15 | Wartbarkeit – Testbarkeit | Die Kernlogik (XP, Level, Streak, Anti-Farming, Skill, Coins) muss eine Zeilenabdeckung durch automatisierte Unit-Tests von mindestens 80 % haben. | Coverage-Report | CON-07 |
| NFR-16 | Wartbarkeit – Analysierbarkeit | Der Quellcode muss dem dokumentierten Coding-Standard entsprechen; der Linter darf auf dem Stand jedes Releases 0 Fehler melden. | Linter in CI | Q-02 |
| NFR-17 | Wartbarkeit – Modifizierbarkeit | Der Quest-Master muss hinter einer Schnittstelle liegen, sodass die regelbasierte Umsetzung durch eine KI-API ersetzt werden kann, ohne Code außerhalb des Quest-Master-Moduls zu ändern. | Architektur-Review | ASM-04, Q-01 §6 |
| NFR-18 | Kompatibilität / Portabilität | Das System muss in Chrome, Edge und Firefox ab Version 120 sowie Safari ab Version 17 alle Akzeptanztests bestehen. | Systemtest je Browser | CON-05 |
| NFR-19 | Portabilität – Installierbarkeit | Das System muss sich nach den Schritten der README mit höchstens 3 Befehlen in höchstens 5 Minuten lokal installieren und starten lassen. | Test auf frischem Rechner | Q-02 |

## Zuordnung zu Qualitätsmerkmalen

| Merkmal (ISO/IEC 25010) | NFR |
|---|---|
| Funktionale Eignung | NFR-03 |
| Effizienz | NFR-01, NFR-02 |
| Kompatibilität | NFR-18 |
| Usability | NFR-06 – NFR-11 |
| Zuverlässigkeit | NFR-04, NFR-05 |
| Sicherheit | NFR-12 – NFR-14 |
| Wartbarkeit | NFR-15 – NFR-17 |
| Portabilität | NFR-18, NFR-19 |
