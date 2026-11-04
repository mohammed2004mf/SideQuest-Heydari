# Offenlegung der KI-Nutzung

Gemäß Aufgabenstellung wird hier dokumentiert, wofür generative KI genutzt wurde, mit welchen Prompts (sinngemäß) und was selbst geprüft oder verändert wurde.

| Datum | Werkzeug | Wofür | Prompt (sinngemäß) | Selbst geprüft / verändert |
|---|---|---|---|---|
| 2026-11-03 | Claude | Anlegen der Repository-Struktur, README, CHANGELOG und Platzhalter-Dokumente | „Lege die Ordnerstruktur aus der Aufgabenstellung im Repo an“ | Struktur mit Abschnitt 3.1 der Aufgabenstellung abgeglichen |
| 2026-11-03 | Claude | Analyse von Folien und Musterlösungen; Vorlagen und Konventionen in `docs/` daran angepasst | „Analysiere die Kursdateien und setze die Dokumentation so um, wie Kai es verlangt“ | Vorlagen mit Folien (Kap. 2–4) und Musterlösungen abgeglichen |
| 2026-11-03 | ChatGPT | Ausformulierung der Produktidee SideQuest (Ideenpapier Q-01) | „Erstelle einen ausführlichen Projektprompt für eine gamifizierte Lebens-App“ (sinngemäß) | Idee als Quelle Q-01 zusammengefasst; Umfang und Prioritäten selbst festgelegt |
| 2026-11-03 | Claude | Entwurf von Vision, Stakeholdern, Kontextfacetten, Erhebungsplan mit Interviewleitfaden, Randbedingungen, Annahmen und Glossar | „Fang mit v0.1 an“ | Inhalte gelesen und gegen Ideenpapier und Folien Kapitel 2 geprüft; Interviews führe ich selbst durch |
| 2026-11-03 | Claude | Entwurf von Zielbaum, Epics, User Stories, detaillierten Anforderungen, Use Cases und Aktivitätsdiagrammen aus Ideenpapier Q-01 und den Interviews P1/P2 | „Fang mit v0.1 an“ | Inhalte gelesen; Interview-Erkenntnisse (Laufzeit Challenges, Profil verbergen) übernommen; Diagramme mit Mermaid-Parser geprüft |
| 2026-11-03 | Claude | Entwurf der NFRs (ISO/IEC 25010) und der MoSCoW-Zuordnung samt Release-Plan auf Basis meiner 100-Dollar-Verteilung | „Fang mit v0.1 an“ | 100-Dollar-Werte selbst vergeben; Messwerte und MoSCoW-Begründungen gelesen; Abhängigkeiten per Skript gegen Prioritäten geprüft |
| 2026-11-03 | Claude | Projektgerüst (Next.js, TypeScript, SQLite), Linter-/Formatter-/Test-Konfiguration, CI-Workflow, erste Fachlogik (REQ-11, REQ-28, REQ-30) mit Tests, Coding-Standard, README | „Fang mit v0.1 an“ (Block 4) | Lokal gebaut und gestartet; Lint, Typprüfung und 26 Tests grün; Level-Formel und Titelgrenzen gegen die Anforderungen geprüft |
