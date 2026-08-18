"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import Badge from "@/components/common/Badge";
import PrimaryButton from "@/components/common/Button/PrimaryButton";

import CompanyStats from "./CompanyStats";
import ValuesGrid from "./ValuesGrid";

const highlights = [
  "Enterprise Software Development",
  "Networking & Infrastructure",
  "Cybersecurity & CCTV Solutions",
  "Solar & Renewable Energy",
  "Cloud Computing",
  "Digital Transformation",
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Badge>
        About Dynamics ICT Services
      </Badge>

      <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
        Empowering Businesses Through
        <span className="block text-blue-600">
          Innovative Technology
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Dynamics ICT Services is a technology company dedicated to helping
        businesses embrace digital transformation through innovative software,
        enterprise networking, cybersecurity, renewable energy, cloud
        solutions and intelligent automation.
      </p>

      <p className="mt-6 leading-8 text-slate-600">
        Our mission is to deliver reliable, scalable and future-ready
        technology solutions that improve productivity, strengthen security
        and create sustainable business growth.
      </p>

      {/* Highlights */}

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              className="text-blue-600"
              size={20}
            />

            <span className="text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">
        <PrimaryButton href="/about">
          Learn More
        </PrimaryButton>

        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
        >
          Contact Us

          <ArrowRight
            size={18}
            className="ml-2"
          />
        </Link>
      </div>

      <CompanyStats />

      <ValuesGrid />
    </motion.div>
  );
}