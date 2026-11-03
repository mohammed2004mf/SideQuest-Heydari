import { describe, expect, it } from "vitest";
import { openDatabase, schemaVersion } from "@/lib/db";

describe("TC-04: Datenbank wird angelegt und migriert (NFR-05, NFR-19)", () => {
  it("legt eine In-Memory-Datenbank an und wendet alle Migrationen an", () => {
    const db = openDatabase(":memory:");
    expect(schemaVersion(db)).toBe(1);
    db.close();
  });
});
