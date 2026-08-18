import { CheckCircle2 } from "lucide-react";

interface Props {
  service: string;
}

export default function ServiceBadge({
  service,
}: Props) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 p-5">
      <CheckCircle2
        className="text-blue-600"
        size={22}
      />

      <span className="font-medium">
        {service}
      </span>
    </div>
  );
}