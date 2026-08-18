import { Check } from "lucide-react";

interface ServiceFeaturesProps {
  features: string[];
}

export default function ServiceFeatures({
  features,
}: ServiceFeaturesProps) {
  return (
    <ul className="mt-6 space-y-3">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-center gap-3"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
            <Check
              size={14}
              className="text-green-600"
            />
          </div>

          <span className="text-slate-600">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}