import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500",
        "hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}