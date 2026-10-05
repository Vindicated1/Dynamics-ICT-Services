"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_DURATION_SECONDS,
  createAdminSession,
} from "@/lib/admin-auth";
import {
  hashAdminPassword,
  verifyAdminPassword,
} from "@/lib/admin-password.mjs";
import { prisma } from "@/lib/prisma";

const LoginSchema = z.object({
  email: z.email().trim().toLowerCase(),
  password: z.string().min(1).max(128),
});

const dummyPasswordHash = hashAdminPassword("not-a-real-admin-password");

export type LoginState = {
  error: string;
} | null;

export async function loginAdmin(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const parsed = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: "Enter a valid email address and password." };
  }

  const account = await prisma.adminAccount.findUnique({
    where: {
      email: parsed.data.email,
    },
    select: {
      id: true,
      passwordHash: true,
      isActive: true,
    },
  });

  const passwordMatches = await verifyAdminPassword(
    parsed.data.password,
    account?.passwordHash ?? (await dummyPasswordHash),
  );

  if (!account || !account.isActive || !passwordMatches) {
    return { error: "The email or password is incorrect." };
  }

  const session = await createAdminSession(account.id);
  const cookieStore = await cookies();

  cookieStore.set(ADMIN_SESSION_COOKIE, session.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    expires: session.expiresAt,
    maxAge: ADMIN_SESSION_DURATION_SECONDS,
  });

  redirect("/admin");
}
