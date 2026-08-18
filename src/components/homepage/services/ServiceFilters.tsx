"use client";

interface ServiceFiltersProps {
  active: string;
  onChange: (category: string) => void;
}

const categories = [
  "All",
  "Software",
  "Security",
  "Infrastructure",
  "Digital",
  "Energy",
];

export default function ServiceFilters({
  active,
  onChange,
}: ServiceFiltersProps) {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
      {categories.map((category) => {
        const isActive = active === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                : "border border-slate-300 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}