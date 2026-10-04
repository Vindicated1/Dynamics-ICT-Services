import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

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
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {/* Home */}
          <li className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-blue-600"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              <ChevronRight className="h-4 w-4 text-slate-400" />

              {item.href ? (
                <Link
                  href={item.href}
                  className="text-slate-500 transition-colors hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="font-medium text-slate-900"
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}