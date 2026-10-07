"use client";

import Link from "next/link";
import { Fragment } from "react";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { MenuItem } from "./menu-items";

interface MegaMenuProps {
  title: string;
  items: MenuItem[];
}

export default function MegaMenu({
  title,
  items,
}: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = `mega-menu-${title.toLowerCase()}`;

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !menuRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
        className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-blue-600"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id={menuId}
          className="absolute left-0 top-full z-50 mt-4 max-h-[min(70vh,36rem)] w-80 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"
        >
          {items.map((item, index) => (
            <Fragment key={item.href}>
              {item.group !== items[index - 1]?.group && (
                <h3 className="px-4 pb-2 pt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.group}
                </h3>
              )}
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 transition hover:bg-slate-50 hover:text-blue-600"
              >
                {item.title}
              </Link>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}