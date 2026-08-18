"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface MenuItem {
  title: string;
  href: string;
}

interface MegaMenuProps {
  title: string;
  items: MenuItem[];
}

export default function MegaMenu({
  title,
  items,
}: MegaMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-blue-600">
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-4 w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
          <div className="space-y-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-3 transition hover:bg-slate-50 hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}