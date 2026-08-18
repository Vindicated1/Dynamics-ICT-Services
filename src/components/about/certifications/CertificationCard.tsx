"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CertificationCardProps {
  certification: {
    title: string;
    description: string;
    image: string;
  };
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative mx-auto h-20 w-20">
        <Image
          src={certification.image}
          alt={certification.title}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {certification.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {certification.description}
      </p>
    </motion.div>
  );
}