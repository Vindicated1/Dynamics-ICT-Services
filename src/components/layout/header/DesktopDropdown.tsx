"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NavItem } from "./NavLinks";

interface Props {
  item: NavItem;
}

export default function DesktopDropdown({ item }: Props) {
  return (
    <div className="group relative">

      <button className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-blue-600">
        {item.title}

        <ChevronDown
          size={16}
          className="transition group-hover:rotate-180"
        />
      </button>

      <div className="invisible absolute left-0 top-full mt-6 w-[700px] rounded-3xl border border-slate-200 bg-white p-8 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">

        <div className="grid grid-cols-2 gap-10">

          {item.children?.map((category) => (
            <div key={category.title}>

              <h3 className="mb-4 text-lg font-bold">
                {category.title}
              </h3>

              <div className="space-y-3">

                {category.children?.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href ?? "#"}
                    className="block rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
                  >
                    {child.title}
                  </Link>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}