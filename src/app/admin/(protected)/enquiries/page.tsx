import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { EnquiryStatus } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { updateEnquiryStatus } from "./actions";

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

          <div className="flex gap-4">
            <div className="rounded-xl bg-white px-5 py-3 shadow-sm ring-1 ring-slate-200">
              <span className="text-sm text-slate-500">Total</span>
              <span className="ml-2 font-bold text-slate-900">
                {enquiries.length}
              </span>
            </div>
            <div className="rounded-xl bg-white px-5 py-3 shadow-sm ring-1 ring-slate-200">
              <span className="text-sm text-slate-500">New</span>
              <span className="ml-2 font-bold text-blue-700">
                {enquiries.filter((enquiry) => enquiry.status === "NEW").length}
              </span>
            </div>
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
                      Message
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Status / Date
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {enquiries.map((enquiry) => (
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
                        <a
                          href={`mailto:${enquiry.email}`}
                          className="text-blue-700 hover:underline"
                        >
                          {enquiry.email}
                        </a>
                        {enquiry.phone && (
                          <a
                            href={`tel:${enquiry.phone}`}
                            className="mt-1 block text-xs text-slate-500 hover:underline"
                          >
                            {enquiry.phone}
                          </a>
                        )}
                      </td>

                      <td className="px-6 py-5 text-sm font-medium text-slate-700">
                        {enquiry.service}
                      </td>

                      <td className="max-w-sm px-6 py-5 text-sm leading-6 text-slate-600">
                        {enquiry.message}
                      </td>

                      <td className="px-6 py-5">
                        <form action={updateEnquiryStatus} className="space-y-2">
                          <input type="hidden" name="id" value={enquiry.id} />
                          <select
                            aria-label={`Status for ${enquiry.name}`}
                            name="status"
                            defaultValue={enquiry.status}
                            className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-xs font-semibold text-slate-700"
                          >
                            {Object.values(EnquiryStatus).map((status) => (
                              <option key={status} value={status}>
                                {status.replaceAll("_", " ")}
                              </option>
                            ))}
                          </select>
                          <button
                            type="submit"
                            className="ml-2 rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                          >
                            Save
                          </button>
                        </form>
                        <p className="mt-2 text-xs text-slate-500">
                          {new Intl.DateTimeFormat("en-NG", {
                            dateStyle: "medium",
                          }).format(enquiry.createdAt)}
                        </p>
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
