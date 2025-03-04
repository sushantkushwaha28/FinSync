import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis; 

const db = globalForPrisma.prisma ?? new PrismaClient({
  log: ["query", "info", "warn", "error"], // Enables logging for debugging
});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

export default db;
