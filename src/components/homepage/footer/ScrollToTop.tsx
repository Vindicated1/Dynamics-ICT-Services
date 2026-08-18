"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-8 right-8 z-50 rounded-full bg-blue-600 p-4 text-white shadow-2xl transition hover:bg-blue-700"
      aria-label="Back to top"
    >
      <ChevronUp size={22} />
    </button>
  );
}