import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;

  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}