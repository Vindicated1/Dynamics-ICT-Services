import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-slate-300"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={item.label}
            className="flex items-center gap-2"
          >
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-white">
                {item.label}
              </span>
            )}

            {!isLast && (
              <ChevronRight
                size={16}
                className="text-slate-500"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}