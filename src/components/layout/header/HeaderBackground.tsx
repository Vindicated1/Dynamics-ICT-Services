interface Props {
  scrolled: boolean;
}

export default function HeaderBackground({
  scrolled,
}: Props) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200"
          : "bg-transparent"
      }`}
    />
  );
}