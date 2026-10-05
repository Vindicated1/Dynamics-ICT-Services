import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getAdminSession } from "@/lib/admin-auth";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Sign In",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLoginPage() {
  if (await getAdminSession()) {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-12">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
        <Link
          href="/"
          aria-label="Dynamics ICT Services home"
          className="inline-flex"
        >
          <Image
            src="/images/brand/logo.svg"
            alt="Dynamics ICT Services"
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
            priority
          />
        </Link>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
            Administration
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Welcome back
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Sign in with your administrator account to manage the website.
          </p>
        </div>

        <LoginForm />

        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          This area is restricted to authorized administrators.
        </p>
      </section>
    </main>
  );
}
