"use client";

import CountUp from "react-countup";
import GlassCard from "./GlassCard";

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  const number = Number(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  return (
    <GlassCard className="p-6">
      <h3 className="text-4xl font-extrabold text-white">
        <CountUp end={number} duration={2.5} />
        {suffix}
      </h3>

      <p className="mt-2 text-sm uppercase tracking-wide text-slate-300">
        {label}
      </p>
    </GlassCard>
  );
}