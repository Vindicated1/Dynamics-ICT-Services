import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  hasMegaMenu?: boolean;
}

export default function NavItem({
  title,
  href = "#",
  hasMegaMenu = false,
}: Props) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-blue-600"
    >
      {title}

      {hasMegaMenu && (
        <ChevronDown size={16} />
      )}
    </Link>
  );
}