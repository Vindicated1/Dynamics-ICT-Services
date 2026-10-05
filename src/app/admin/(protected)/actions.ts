"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  ADMIN_SESSION_COOKIE,
  getSessionTokenHash,
} from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export async function logoutAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (token) {
    await prisma.adminSession.deleteMany({
      where: {
        tokenHash: getSessionTokenHash(token),
      },
    });
  }

  cookieStore.delete(ADMIN_SESSION_COOKIE);
  redirect("/admin/login");
}
