import Breadcrumb from "@/components/common/breadcrumb";

interface HeroContentProps {
  title: string;
  subtitle: string;
  breadcrumb: {
    label: string;
    href?: string;
  }[];
}

export default function HeroContent({
  title,
  subtitle,
  breadcrumb,
}: HeroContentProps) {
  return (
    <div className="relative z-10 max-w-4xl">
      <Breadcrumb items={breadcrumb} />

      <h1 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
        {title}
      </h1>

      <p className="mt-8 text-xl leading-9 text-slate-300">
        {subtitle}
      </p>
    </div>
  );
}