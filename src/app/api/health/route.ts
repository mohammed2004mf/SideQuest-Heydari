import { NextResponse } from "next/server";
import { getDatabase, schemaVersion } from "@/lib/db";

// Läuft serverseitig in Node.js, weil better-sqlite3 ein natives Modul ist.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Health-Check: prüft, ob die Datenbank erreichbar ist. */
export function GET(): NextResponse {
  const version = schemaVersion(getDatabase());
  return NextResponse.json({ status: "ok", schemaVersion: version });
}
