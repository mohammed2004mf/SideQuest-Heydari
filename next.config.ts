import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // better-sqlite3 ist ein natives Node-Modul und wird nicht gebündelt.
  serverExternalPackages: ["better-sqlite3"],
};

export default nextConfig;
