interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
  light = false,
}: Props) {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {badge && (
        <span
          className={`inline-flex rounded-full px-5 py-2 text-sm font-semibold ${
            light
              ? "bg-white/10 text-blue-200"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`mt-6 text-4xl font-extrabold leading-tight lg:text-5xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-6 text-lg leading-8 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}