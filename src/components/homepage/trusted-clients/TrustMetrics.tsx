"use client";

import CountUp from "react-countup";

const metrics = [
  {
    value: 250,
    suffix: "+",
    title: "Projects Delivered",
  },
  {
    value: 120,
    suffix: "+",
    title: "Satisfied Clients",
  },
  {
    value: 98,
    suffix: "%",
    title: "Customer Satisfaction",
  },
  {
    value: 24,
    suffix: "/7",
    title: "Technical Support",
  },
];

export default function TrustMetrics() {
  return (
    <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {metrics.map((metric) => (

        <div
          key={metric.title}
          className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
        >
          <h3 className="text-5xl font-bold text-blue-600">

            <CountUp
              end={metric.value}
              duration={2}
            />

            {metric.suffix}

          </h3>

          <p className="mt-4 text-slate-600">

            {metric.title}

          </p>

        </div>

      ))}

    </div>
  );
}