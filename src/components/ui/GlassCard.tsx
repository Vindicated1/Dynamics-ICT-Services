import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/50",
        className
      )}
    >
      {children}
    </div>
  );
}