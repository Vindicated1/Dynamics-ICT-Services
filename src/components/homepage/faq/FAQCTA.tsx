import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FAQCTA() {
  return (
    <div className="mt-14 rounded-[32px] bg-gradient-to-r from-blue-700 to-slate-900 p-6 text-center text-white sm:mt-20 sm:p-10 lg:p-12">
      <h3 className="text-2xl font-bold sm:text-3xl">
        Still Have Questions?
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
        Our consultants are ready to discuss your project and recommend the
        right technology solution for your organization.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center rounded-xl bg-white px-5 py-4 font-semibold text-slate-900 transition hover:scale-105 sm:mt-10 sm:px-8"
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