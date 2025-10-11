import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "@/db/schema";

export const db = drizzle(String(process.env.DATABASE_URL), {
  schema,
  logger: true,
});

export type Database = typeof db;
