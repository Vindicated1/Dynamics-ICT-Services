import Link from "next/link";

interface Props {
  solution: {
    slug: string;
    title: string;
    description: string;
    icon: React.ElementType;
  };
}

export default function IndustryCard({ solution }: Props) {
  const Icon = solution.icon;

  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-colors group-hover:bg-blue-600">
        <Icon
          size={32}
          className="text-blue-600 transition-colors group-hover:text-white"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {solution.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {solution.description}
      </p>
    </Link>
  );
}