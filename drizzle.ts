import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString: string = 'postgres://jiraporn404:sTGxZPAu50QB@ep-dawn-sound-199422-pooler.us-east-2.aws.neon.tech/neondb';
const sql = postgres(connectionString, { max: 1, ssl: "require" })
export const db = drizzle(sql);


