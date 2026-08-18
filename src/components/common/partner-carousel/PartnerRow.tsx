"use client";

import { partners } from "@/data/partners";

import PartnerLogo from "./PartnerLogo";

export default function PartnerRow() {
  return (
    <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-8">
      {[...partners, ...partners].map((partner, index) => (
        <PartnerLogo
          key={`${partner.name}-${index}`}
          {...partner}
        />
      ))}
    </div>
  );
}