import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceButtonProps {
  slug: string;
}

export default function ServiceButton({
  slug,
}: ServiceButtonProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-3"
    >
      Learn More

      <ArrowRight size={18} />
    </Link>
  );
}