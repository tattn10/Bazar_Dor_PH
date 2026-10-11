import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

function getOrigin(value: string | undefined, variableName: string) {
  if (!value) {
    return undefined;
  }

  try {
    const url = new URL(value.includes("://") ? value : `https://${value}`);
    return url.origin;
  } catch {
    throw new Error(`${variableName} must contain a valid URL or hostname.`);
  }
}

const trustedOrigins = [
  getOrigin(process.env.BETTER_AUTH_URL, "BETTER_AUTH_URL"),
  getOrigin(process.env.VERCEL_URL, "VERCEL_URL"),
  getOrigin(
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    "VERCEL_PROJECT_PRODUCTION_URL",
  ),
].filter((origin): origin is string => origin !== undefined);

const client = new MongoClient(process.env.MONGODB_URL as string);
const db = client.db("bazar-dor");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins,
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});