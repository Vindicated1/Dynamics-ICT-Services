"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      {/* Primary CTA */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/30"
        >
          Get Free Consultation

          <ArrowRight
            size={18}
            className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      {/* Secondary CTA */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/70 px-8 py-4 text-base font-semibold text-slate-800 backdrop-blur transition-all duration-300 hover:border-blue-500 hover:bg-white"
        >
          <PhoneCall
            size={18}
            className="mr-3 text-blue-600"
          />

          Speak With Our Team
        </Link>
      </motion.div>
    </div>
  );
}