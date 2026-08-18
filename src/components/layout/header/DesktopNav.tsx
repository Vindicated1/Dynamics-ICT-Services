"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import MegaMenu from "./MegaMenu";
import { navigation } from "@/data/homepage/navigation";

export default function DesktopNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => {
        if (item.megaMenu) {
          return (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-blue-600">
                {item.title}

                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeMenu === item.title
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <MegaMenu
                open={activeMenu === item.title}
                columns={item.columns}
              />
            </div>
          );
        }

        return (
          <Link
            key={item.title}
            href={item.href!}
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}