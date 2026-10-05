import "server-only";

import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

export const ADMIN_SESSION_COOKIE = "dynamics_admin_session";
export const ADMIN_SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7;

function hashSessionToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function createAdminSession(adminAccountId: string) {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(
    Date.now() + ADMIN_SESSION_DURATION_SECONDS * 1000,
  );

  await prisma.adminSession.create({
    data: {
      tokenHash: hashSessionToken(token),
      adminAccountId,
      expiresAt,
    },
  });

  return { token, expiresAt };
}

export async function getAdminSession() {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  const session = await prisma.adminSession.findUnique({
    where: {
      tokenHash: hashSessionToken(token),
    },
    select: {
      expiresAt: true,
      adminAccount: {
        select: {
          id: true,
          name: true,
          email: true,
          isActive: true,
        },
      },
    },
  });

  if (
    !session ||
    session.expiresAt <= new Date() ||
    !session.adminAccount.isActive
  ) {
    return null;
  }

  return {
    id: session.adminAccount.id,
    name: session.adminAccount.name,
    email: session.adminAccount.email,
  };
}

export async function requireAdmin() {
  const admin = await getAdminSession();

  if (!admin) {
    redirect("/admin/login");
  }

  return admin;
}

export function getSessionTokenHash(token: string) {
  return hashSessionToken(token);
}
