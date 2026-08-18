import { Award } from "lucide-react";

interface Props {
  benefit: string;
}

export default function BenefitCard({
  benefit,
}: Props) {
  return (
    <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
      <Award
        className="mb-4 text-green-600"
        size={28}
      />

      <p className="font-medium text-slate-700">
        {benefit}
      </p>
    </div>
  );
}