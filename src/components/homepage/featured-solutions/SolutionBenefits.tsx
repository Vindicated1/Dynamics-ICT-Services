import { CheckCircle2 } from "lucide-react";

interface SolutionBenefitsProps {
  benefits: string[];
  color: string;
}

export default function SolutionBenefits({
  benefits,
  color,
}: SolutionBenefitsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {benefits.map((benefit) => (
        <div
          key={benefit}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
        >
          <CheckCircle2
            size={18}
            style={{ color }}
          />

          <span className="text-sm font-medium text-slate-700">
            {benefit}
          </span>
        </div>
      ))}
    </div>
  );
}