import { ChevronRight } from "lucide-react";

import BreadcrumbItem from "./BreadcrumbItem";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-sm text-slate-500"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={item.label}
            className="flex items-center gap-2"
          >
            <BreadcrumbItem
              label={item.label}
              href={item.href}
              active={isLast}
            />

            {!isLast && (
              <ChevronRight
                size={16}
                className="text-slate-400"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}