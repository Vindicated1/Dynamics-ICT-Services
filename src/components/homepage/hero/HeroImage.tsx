"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  ShieldCheck,
  Wifi,
  SunMedium,
  Camera,
  Cpu,
} from "lucide-react";

export default function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex h-[600px] items-center justify-center"
    >
      {/* Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

      {/* Main Circle */}
      <div className="relative flex h-[430px] w-[430px] items-center justify-center rounded-full border border-blue-400/30 bg-gradient-to-br from-blue-700/20 to-cyan-400/10 backdrop-blur-xl shadow-[0_0_80px_rgba(37,99,235,0.35)]">

        <Laptop className="h-24 w-24 text-blue-400" />

        {/* Solar */}
        <FloatingIcon
          className="-top-5 left-10"
          icon={<SunMedium size={30} />}
        />

        {/* CCTV */}
        <FloatingIcon
          className="top-14 -right-6"
          icon={<Camera size={28} />}
        />

        {/* Cyber */}
        <FloatingIcon
          className="-bottom-3 right-12"
          icon={<ShieldCheck size={30} />}
        />

        {/* IoT */}
        <FloatingIcon
          className="bottom-10 -left-8"
          icon={<Cpu size={30} />}
        />

        {/* Wifi */}
        <FloatingIcon
          className="top-24 left-0"
          icon={<Wifi size={28} />}
        />

      </div>
    </motion.div>
  );
}

function FloatingIcon({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className={`absolute flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/40 bg-[#132B70]/80 text-blue-300 shadow-lg ${className}`}
    >
      {icon}
    </motion.div>
  );
}