"use client";

import CountUp from "react-countup";

interface Props {
  number: number;
  suffix?: string;
  title: string;
}

export default function StatCard({
  number,
  suffix = "+",
  title,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h3 className="text-4xl font-bold text-blue-600">
        <CountUp end={number} duration={3} />
        {suffix}
      </h3>

      <p className="mt-2 text-slate-600">
        {title}
      </p>
    </div>
  );
}