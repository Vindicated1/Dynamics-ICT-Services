import Image from "next/image";
import Link from "next/link";

import { requireAdmin } from "@/lib/admin-auth";
import { logoutAdmin } from "./actions";

export default async function ProtectedAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const admin = await requireAdmin();

  return (
    <>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/admin"
            aria-label="Dynamics ICT Services admin dashboard"
            className="flex items-center"
          >
            <Image
              src="/images/brand/logo.svg"
              alt="Dynamics ICT Services"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              priority
            />
          </Link>

          <nav className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-3 md:order-none md:mr-auto md:w-auto md:border-0 md:pl-2 md:pt-0">
            <Link
              href="/admin"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/projects"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Projects
            </Link>
            <Link
              href="/admin/enquiries"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Enquiries
            </Link>
            <Link
              href="/admin/blog"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Blog
            </Link>
            <Link
              href="/"
              target="_blank"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              View website
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-slate-600 sm:inline">
              {admin.name}
            </span>
            <form action={logoutAdmin}>
              <button
                type="submit"
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
