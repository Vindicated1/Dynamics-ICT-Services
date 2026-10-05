import "dotenv/config";

import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { hashAdminPassword } from "../src/lib/admin-password.mjs";

async function readHidden(label) {
  if (!stdin.isTTY || typeof stdin.setRawMode !== "function") {
    throw new Error("Run this command in an interactive terminal.");
  }

  stdout.write(label);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  return new Promise((resolve, reject) => {
    let value = "";

    function cleanup() {
      stdin.removeListener("data", onData);
      stdin.setRawMode(false);
      stdin.pause();
      stdout.write("\n");
    }

    function onData(character) {
      if (character === "\u0003") {
        cleanup();
        reject(new Error("Admin creation cancelled."));
        return;
      }

      if (character === "\r" || character === "\n") {
        cleanup();
        resolve(value);
        return;
      }

      if (character === "\u0008" || character === "\u007f") {
        value = value.slice(0, -1);
        return;
      }

      value += character;
    }

    stdin.on("data", onData);
  });
}

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in the environment.");
  }

  const prompt = createInterface({ input: stdin, output: stdout });
  const name = (await prompt.question("Admin name: ")).trim();
  const email = (await prompt.question("Admin email: ")).trim().toLowerCase();
  prompt.close();

  if (!name || name.length > 120) {
    throw new Error("Admin name must contain between 1 and 120 characters.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    throw new Error("Enter a valid email address (maximum 254 characters).");
  }

  const password = await readHidden("Password (12-128 characters): ");

  if (password.length < 12 || password.length > 128) {
    throw new Error("Admin passwords must be between 12 and 128 characters.");
  }

  const confirmation = await readHidden("Confirm password: ");

  if (password !== confirmation) {
    throw new Error("The passwords do not match.");
  }

  const passwordHash = await hashAdminPassword(password);

  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  });
  const prisma = new PrismaClient({ adapter });

  try {
    await prisma.adminAccount.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });
  } finally {
    await prisma.$disconnect();
  }

  stdout.write(`Created admin account for ${email}.\n`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
