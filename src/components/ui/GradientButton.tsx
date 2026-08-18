import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function GradientButton({
  href,
  children,
}: GradientButtonProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
    >
      {children}

      <ArrowRight
        size={18}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}