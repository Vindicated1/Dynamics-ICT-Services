import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      {/* Background glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            <MessageCircle className="h-4 w-4" />
            Let's Talk Technology
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Build Something
            <span className="text-blue-500"> Great Together.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have a project in mind or need reliable technology support?
            Tell us what you need and our team will help you find the
            right solution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700"
            >
              Send an Enquiry
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}