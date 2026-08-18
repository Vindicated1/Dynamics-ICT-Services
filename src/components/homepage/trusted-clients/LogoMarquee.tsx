"use client";

import LogoCard from "./LogoCard";
import { trustedClients } from "@/data/homepage/trustedClients";

export default function LogoMarquee() {
  const firstRow = trustedClients.slice(0, Math.ceil(trustedClients.length / 2));
  const secondRow = trustedClients.slice(Math.ceil(trustedClients.length / 2));

  return (
    <div className="mt-16 space-y-8 overflow-hidden">

      {/* Row One */}

      <div className="relative overflow-hidden">

        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-slate-50 to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-slate-50 to-transparent" />

        <div className="flex w-max animate-marquee gap-8">

          {[...firstRow, ...firstRow].map((client, index) => (
            <LogoCard
              key={`${client.id}-${index}`}
              name={client.name}
              logo={client.logo}
            />
          ))}

        </div>

      </div>

      {/* Row Two */}

      <div className="relative overflow-hidden">

        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-slate-50 to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-slate-50 to-transparent" />

        <div className="flex w-max animate-marquee-reverse gap-8">

          {[...secondRow, ...secondRow].map((client, index) => (
            <LogoCard
              key={`${client.id}-${index}`}
              name={client.name}
              logo={client.logo}
            />
          ))}

        </div>

      </div>

    </div>
  );
}