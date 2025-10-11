import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(String(process.env.DATABASE_URL), {
  logger: true,
});

export type Database = typeof db;
