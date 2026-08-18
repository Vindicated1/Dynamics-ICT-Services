import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QuoteButton() {
  return (
    <Link
      href="/quote"
      className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
    >
      Get Quote

      <ArrowRight size={18} />
    </Link>
  );
}