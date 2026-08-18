import InnerPageHero from "@/components/common/inner-page-hero";

interface Props {
  title: string;
  subtitle: string;
}

export default function SolutionHero({
  title,
  subtitle,
}: Props) {
  return (
    <InnerPageHero
      title={title}
      subtitle={subtitle}
      breadcrumb={[
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Solutions",
          href: "/solutions",
        },
        {
          label: title,
        },
      ]}
    />
  );
}