import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./drizzle";

(async () => {
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("Migrations");
    process.exit(0);
})();