import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import path from "node:path";

/**
 * Zugriff auf die lokale SQLite-Datenbank.
 * Der Pfad ist über SIDEQUEST_DB_PATH einstellbar; Standard ist data/sidequest.db.
 * Das Schema der Fachdaten folgt mit dem Datenmodell in v0.2 (docs/design).
 */

const DEFAULT_PATH = path.join(process.cwd(), "data", "sidequest.db");

const MIGRATIONS: readonly string[] = [
  `CREATE TABLE IF NOT EXISTS schema_version (
     version INTEGER NOT NULL,
     applied_at TEXT NOT NULL DEFAULT (datetime('now'))
   )`,
];

let instance: Database.Database | undefined;

/** Öffnet eine Datenbank und wendet ausstehende Migrationen an. */
export function openDatabase(filePath: string = DEFAULT_PATH): Database.Database {
  if (filePath !== ":memory:") {
    mkdirSync(path.dirname(filePath), { recursive: true });
  }
  const db = new Database(filePath);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  migrate(db);
  return db;
}

function migrate(db: Database.Database): void {
  db.exec(MIGRATIONS[0] ?? "");
  const row = db.prepare("SELECT MAX(version) AS v FROM schema_version").get() as {
    v: number | null;
  };
  const current = row.v ?? 0;
  const apply = db.transaction(() => {
    for (let i = current; i < MIGRATIONS.length; i += 1) {
      db.exec(MIGRATIONS[i] ?? "");
      db.prepare("INSERT INTO schema_version (version) VALUES (?)").run(i + 1);
    }
  });
  apply();
}

/** Liefert die gemeinsame Datenbankverbindung des Servers. */
export function getDatabase(): Database.Database {
  instance ??= openDatabase(process.env.SIDEQUEST_DB_PATH ?? DEFAULT_PATH);
  return instance;
}

/** Aktuelle Schema-Version, z. B. für den Health-Check. */
export function schemaVersion(db: Database.Database): number {
  const row = db.prepare("SELECT MAX(version) AS v FROM schema_version").get() as {
    v: number | null;
  };
  return row.v ?? 0;
}
