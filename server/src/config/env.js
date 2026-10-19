import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const environmentSchema = z.object({
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  MONGODB_URI: z.string().trim().min(1),
  FIREBASE_PROJECT_ID: z.string().trim().min(1),
  CORS_ALLOWED_ORIGINS: z
    .string()
    .trim()
    .min(1)
    .transform((origins) => origins.split(",").map((origin) => origin.trim()))
    .pipe(z.array(z.string().url()).min(1)),
});

const result = environmentSchema.safeParse(process.env);

if (!result.success) {
  const issues = result.error.issues
    .map(({ path, message }) => `${path.join(".")}: ${message}`)
    .join("; ");
  throw new Error(`Invalid server environment configuration: ${issues}`);
}

const { PORT, MONGODB_URI, FIREBASE_PROJECT_ID, CORS_ALLOWED_ORIGINS } = result.data;

export const env = Object.freeze({
  port: PORT,
  mongoUri: MONGODB_URI,
  firebaseProjectId: FIREBASE_PROJECT_ID,
  corsAllowedOrigins: CORS_ALLOWED_ORIGINS,
});
