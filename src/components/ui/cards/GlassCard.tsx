interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}