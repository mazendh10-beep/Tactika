import { sql } from "@vercel/postgres";

export const db = process.env.POSTGRES_URL ? sql : null as any;
