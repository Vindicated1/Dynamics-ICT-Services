import Link from "next/link";
import {
  ArrowRight,
  FileText,
  FolderKanban,
  Mail,
  Users,
} from "lucide-react";

import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const [enquiryCount, newEnquiryCount, projectCount, blogCount, adminCount] = await Promise.all([
    prisma.contactEnquiry.count(),
    prisma.contactEnquiry.count({ where: { status: "NEW" } }),
    prisma.project.count({
      where: { isPublished: true, showOnProjects: true },
    }),
    prisma.blogArticle.count({ where: { isPublished: true } }),
    prisma.adminAccount.count({ where: { isActive: true } }),
  ]);

  const stats = [
    {
      title: "Contact Enquiries",
      value: enquiryCount,
      description: `${newEnquiryCount} new enquiries`,
      icon: Mail,
      href: "/admin/enquiries",
    },
    {
      title: "Published Projects",
      value: projectCount,
      description: "Listed on the public Projects page",
      icon: FolderKanban,
      href: "/admin/projects",
    },
    {
      title: "Published Blog Posts",
      value: blogCount,
      description: "Visible on the public blog",
      icon: FileText,
      href: "/admin/blog",
    },
    {
      title: "Active Admin Accounts",
      value: adminCount,
      description: "Authorized administrators",
      icon: Users,
      href: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Administration
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-600">
            Manage website projects and contact enquiries.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Link
                key={stat.title}
                href={stat.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
                </div>

                <p className="mt-6 text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {stat.description}
                </p>
              </Link>
            );
          })}
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Quick Actions</h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/admin/projects"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Manage Projects
            </Link>

            <Link
              href="/admin/enquiries"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              View Enquiries
            </Link>

            <Link
              href="/admin/blog"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Manage Blog
            </Link>

            <Link
              href="/projects"
              target="_blank"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Preview Public Projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
