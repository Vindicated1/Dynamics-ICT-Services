import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FAQCTA() {
  return (
    <div className="mt-20 rounded-[32px] bg-gradient-to-r from-blue-700 to-slate-900 p-12 text-center text-white">
      <h3 className="text-3xl font-bold">
        Still Have Questions?
      </h3>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        Our consultants are ready to discuss your project and recommend the
        right technology solution for your organization.
      </p>

      <Link
        href="/contact"
        className="mt-10 inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
      >
        Contact Our Experts

        <ArrowRight
          className="ml-2"
          size={18}
        />
      </Link>
    </div>
  );
}