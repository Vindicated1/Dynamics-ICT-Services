"use client";

import Image from "next/image";
import { Award, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Background Glow */}
      <div className="absolute -left-10 -top-10 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Main Image */}
      <div className="relative overflow-hidden rounded-[36px] shadow-2xl">
        <Image
          src="/images/about/office.jpg"
          alt="Dynamics ICT Office"
          width={700}
          height={800}
          className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
          priority={false}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
      </div>

      {/* Floating Card 1 */}
      <div className="absolute -left-8 top-12 rounded-2xl border border-white/20 bg-white p-5 shadow-xl backdrop-blur">
        <div className="flex items-center gap-3">
          <Award className="text-blue-600" size={28} />
          <div>
            <h4 className="font-bold text-slate-900">
              Quality Service
            </h4>
            <p className="text-sm text-slate-500">
              Enterprise Standard
            </p>
          </div>
        </div>
      </div>

      {/* Floating Card 2 */}
      <div className="absolute -right-8 bottom-20 rounded-2xl border border-white/20 bg-white p-5 shadow-xl backdrop-blur">
        <div className="flex items-center gap-3">
          <Users className="text-green-600" size={28} />
          <div>
            <h4 className="font-bold text-slate-900">
              Expert Team
            </h4>
            <p className="text-sm text-slate-500">
              Certified Professionals
            </p>
          </div>
        </div>
      </div>

      {/* Floating Card 3 */}
      <div className="absolute left-20 -bottom-8 rounded-2xl border border-white/20 bg-white p-5 shadow-xl backdrop-blur">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-cyan-600" size={28} />
          <div>
            <h4 className="font-bold text-slate-900">
              Trusted Partner
            </h4>
            <p className="text-sm text-slate-500">
              Secure & Reliable
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}