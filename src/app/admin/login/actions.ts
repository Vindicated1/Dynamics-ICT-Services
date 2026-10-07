"use server";

import { Prisma } from "@prisma/client";
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

  if (!prisma.adminAccount) {
    return {
      error: "Admin sign-in is unavailable because the authentication models are not ready.",
    };
  }

  try {
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

    cookieStore.set(ADMIN_SESSION_COOKIE, "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/admin",
      maxAge: 0,
    });
    cookieStore.set(ADMIN_SESSION_COOKIE, session.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: session.expiresAt,
      maxAge: ADMIN_SESSION_DURATION_SECONDS,
    });

    redirect("/admin");
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      (error.code === "P1001" || error.code === "P1017")
    ) {
      return {
        error: "The admin database is unavailable. Please try again later.",
      };
    }

    return {
      error: "Unable to sign in right now. Please try again later.",
    };
  }
}
