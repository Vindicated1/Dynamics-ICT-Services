"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Start Your Project
        <ArrowRight size={18} />
      </Link>

      <Link
        href="tel:+2348000000000"
        className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
      >
        <Phone size={18} />
        Call Our Team
      </Link>
    </div>
  );
}