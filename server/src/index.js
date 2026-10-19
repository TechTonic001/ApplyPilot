import app from "./app.js";
import { connectDatabase } from "./config/database.js";
import { env } from "./config/env.js";

try {
  await connectDatabase();
  app.listen(env.port, () => {
    console.info(`ApplyPilot API listening on port ${env.port}`);
  });
} catch (error) {
  console.error(
    `ApplyPilot API startup failed (${error.name || "unknown error"}). Check the database configuration and availability.`,
  );
  process.exitCode = 1;
}
