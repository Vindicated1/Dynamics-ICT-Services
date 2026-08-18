import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

      <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600">
        Learn More
        <ArrowRight size={18} />
      </button>
    </div>
  );
}