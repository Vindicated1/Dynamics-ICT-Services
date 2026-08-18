"use client";

import { CheckCircle2, MinusCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const comparison = [
  {
    feature: "End-to-End ICT Solutions",
    others: "No",
    dynamics: "Yes",
  },
  {
    feature: "24/7 Technical Support",
    others: "Limited",
    dynamics: "24/7",
  },
  {
    feature: "Cybersecurity Expertise",
    others: "Basic",
    dynamics: "Advanced",
  },
  {
    feature: "Renewable Energy Solutions",
    others: "No",
    dynamics: "Yes",
  },
  {
    feature: "Custom Software Development",
    others: "Optional",
    dynamics: "Core Service",
  },
  {
    feature: "After-Sales Partnership",
    others: "Varies",
    dynamics: "Long-Term",
  },
];

function renderOthers(value: string) {
  switch (value) {
    case "No":
      return (
        <span className="flex items-center gap-2 text-red-500">
          <XCircle size={18} />
          No
        </span>
      );

    case "Limited":
    case "Basic":
    case "Optional":
    case "Varies":
      return (
        <span className="flex items-center gap-2 text-amber-500">
          <MinusCircle size={18} />
          {value}
        </span>
      );

    default:
      return value;
  }
}

function renderDynamics(value: string) {
  return (
    <span className="flex items-center gap-2 font-semibold text-green-600">
      <CheckCircle2 size={18} />
      {value}
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="mt-24 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="px-8 py-6 text-left text-lg">
                Feature
              </th>

              <th className="px-8 py-6 text-left text-lg">
                Typical Provider
              </th>

              <th className="bg-blue-600 px-8 py-6 text-left text-lg">
                Dynamics ICT
              </th>
            </tr>
          </thead>

          <tbody>
            {comparison.map((item, index) => (
              <tr
                key={item.feature}
                className={`${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-slate-50"
                }`}
              >
                <td className="border-b px-8 py-6 font-semibold text-slate-900">
                  {item.feature}
                </td>

                <td className="border-b px-8 py-6">
                  {renderOthers(item.others)}
                </td>

                <td className="border-b bg-blue-50 px-8 py-6">
                  {renderDynamics(item.dynamics)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}