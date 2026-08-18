"use client";

import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({
  open,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
      className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
    >
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}