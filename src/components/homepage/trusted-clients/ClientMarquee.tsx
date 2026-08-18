"use client";

import { clients } from "@/data/clients";

export default function ClientMarquee() {
  const items = [...clients, ...clients];

  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-marquee gap-12">
        {items.map((client, index) => (
          <div
            key={`${client}-${index}`}
            className="text-xl font-semibold text-slate-400 transition hover:text-blue-600"
          >
            {client}
          </div>
        ))}
      </div>
    </div>
  );
}