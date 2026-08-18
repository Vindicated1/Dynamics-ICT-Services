"use client";

interface Props {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function PortfolioFilters({
  categories,
  active,
  onChange,
}: Props) {
  return (
    <div className="mt-16 flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
            active === category
              ? "bg-blue-600 text-white"
              : "border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}