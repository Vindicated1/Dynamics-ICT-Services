import clsx from "clsx";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;

  className?: string;

  background?:
    | "white"
    | "gray"
    | "dark"
    | "primary";
}

export default function Section({
  children,
  className,
  background = "white",
}: SectionProps) {
  return (
    <section
      className={clsx(
        "py-14 sm:py-16 lg:py-28",

        background === "white" &&
          "bg-white",

        background === "gray" &&
          "bg-slate-50",

        background === "dark" &&
          "bg-slate-950",

        background === "primary" &&
          "bg-blue-600",

        className
      )}
    >
      {children}
    </section>
  );
}