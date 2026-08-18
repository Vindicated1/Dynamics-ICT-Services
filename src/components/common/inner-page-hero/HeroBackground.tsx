export default function HeroBackground() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Blue Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Orange Glow */}
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}