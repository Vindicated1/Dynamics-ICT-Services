"use client";

import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <button
      aria-label="Search"
      className="rounded-full p-3 transition hover:bg-slate-100"
    >
      <Search size={20} />
    </button>
  );
}