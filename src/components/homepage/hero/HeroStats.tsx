"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 120,
    suffix: "+",
    label: "Business Clients",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Technical Support",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="text-3xl font-bold text-blue-600">
            <CountUp
              end={stat.value}
              duration={2}
            />
            {stat.suffix}
          </div>

          <p className="mt-2 text-sm text-slate-600">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}