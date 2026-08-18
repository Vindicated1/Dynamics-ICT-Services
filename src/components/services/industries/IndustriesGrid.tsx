import { industries } from "@/data/services/industries";

import IndustryCard from "./IndustryCard";

export default function IndustriesGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {industries.map((industry) => (
        <IndustryCard
          key={industry.title}
          {...industry}
        />
      ))}
    </div>
  );
}