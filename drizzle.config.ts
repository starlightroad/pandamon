import { loadEnvConfig } from "@next/env";

import { defineConfig } from "drizzle-kit";

loadEnvConfig(process.cwd());

export default defineConfig({
  out: "./db/migrations",
  schema: "./db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: String(process.env.DATABASE_URL),
  },
  strict: true,
  verbose: true,
});
