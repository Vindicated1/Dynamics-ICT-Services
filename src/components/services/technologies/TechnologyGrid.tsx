import { technologyCategories } from "@/data/services/technologies";

import TechnologyCard from "./TechnologyCard";

export default function TechnologyGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {technologyCategories.map((category) => (
        <TechnologyCard
          key={category.title}
          title={category.title}
          technologies={category.technologies}
        />
      ))}
    </div>
  );
}