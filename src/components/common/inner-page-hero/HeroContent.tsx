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

      <h1 className="mt-6 text-4xl font-bold text-white sm:mt-8 sm:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="mt-5 text-lg leading-8 text-slate-300 sm:mt-8 sm:text-xl sm:leading-9">
        {subtitle}
      </p>
    </div>
  );
}