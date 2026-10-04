import Link from "next/link";
import {
  ArrowLeft,
  Mail,
} from "lucide-react";
import type { ContactEnquiry } from "@prisma/client";

import { prisma } from "@/lib/prisma";

export default async function EnquiriesPage() {
  const enquiries = await prisma.contactEnquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Administration
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Contact Enquiries
            </h1>

            <p className="mt-2 text-slate-600">
              View enquiries submitted through the website.
            </p>
          </div>

          <div className="rounded-xl bg-white px-5 py-3 shadow-sm ring-1 ring-slate-200">
            <span className="text-sm text-slate-500">
              Total
            </span>

            <span className="ml-2 font-bold text-slate-900">
              {enquiries.length}
            </span>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {enquiries.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Mail className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                No enquiries yet
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                Contact form submissions will appear here once visitors
                start sending enquiries.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Name
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Service
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {enquiries.map((enquiry: ContactEnquiry) => (
                    <tr
                      key={enquiry.id}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-6 py-5">
                        <p className="font-semibold text-slate-900">
                          {enquiry.name}
                        </p>

                        {enquiry.company && (
                          <p className="mt-1 text-xs text-slate-500">
                            {enquiry.company}
                          </p>
                        )}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {enquiry.email}
                      </td>

                      <td className="px-6 py-5 text-sm font-medium text-slate-700">
                        {enquiry.service}
                      </td>

                      <td className="px-6 py-5">
                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          {enquiry.status.replace("_", " ")}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-500">
                        {new Intl.DateTimeFormat("en-NG", {
                          dateStyle: "medium",
                        }).format(enquiry.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
