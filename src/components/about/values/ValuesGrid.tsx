import { coreValues } from "@/data/about/values";
import ValueCard from "./ValueCard";

export default function ValuesGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {coreValues.map((value) => (
        <ValueCard
          key={value.title}
          title={value.title}
          description={value.description}
          icon={value.icon}
        />
      ))}
    </div>
  );
}