"use client";

import { useActionState, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

import { contactServices } from "@/data/contact/contact";
import {
  submitContactEnquiry,
  type ContactFormState,
} from "@/app/(website)/contact/actions";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactFormState, FormData>(
    submitContactEnquiry,
    null,
  );
  const [dismissedSubmissionId, setDismissedSubmissionId] = useState("");
  const submitted =
    state?.success && state.submissionId !== dismissedSubmissionId;

  if (submitted) {
    return (
      <section id="contact-form" className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-green-200 bg-green-50 p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Thank You!
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Your enquiry has been received. Our team will review your
              message and get back to you as soon as possible.
            </p>

            <button
              type="button"
              onClick={() =>
                setDismissedSubmissionId(state.submissionId ?? "")
              }
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Introduction */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Send Us a Message
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tell Us About Your Project
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Give us a few details about what you need. Our team will
              review your enquiry and recommend the right technology
              solution.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Discuss your technology requirements",
                "Get professional recommendations",
                "Receive a tailored solution",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form action={action} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234..."
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Company / Organization
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="text-sm font-semibold text-slate-900"
                >
                  Service Required
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {contactServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-900"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your project or requirements..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                />
              </div>

              <button
                type="submit"
                disabled={pending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
              >
                {pending ? "Sending..." : "Send Enquiry"}
                <Send className="h-4 w-4" />
              </button>

              {state?.error && (
                <p role="alert" className="text-sm font-medium text-red-700">
                  {state.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}