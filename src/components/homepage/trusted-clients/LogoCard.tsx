"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface LogoCardProps {
  name: string;
  logo: string;
}

export default function LogoCard({
  name,
  logo,
}: LogoCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group flex h-28 w-48 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
    >
      <Image
        src={logo}
        alt={name}
        width={150}
        height={70}
        className="max-h-14 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
      />
    </motion.div>
  );
}