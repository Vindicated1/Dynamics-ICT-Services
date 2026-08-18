import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface MegaMenuItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

interface MegaMenuColumnProps {
  heading: string;
  items: MegaMenuItem[];
}

export default function MegaMenuColumn({
  heading,
  items,
}: MegaMenuColumnProps) {
  return (
    <div className="space-y-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        {heading}
      </h3>

      <div className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-slate-50"
            >
              <div className="rounded-lg bg-blue-50 p-3 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={20} />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  {item.title}
                </h4>

                {item.description && (
                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}