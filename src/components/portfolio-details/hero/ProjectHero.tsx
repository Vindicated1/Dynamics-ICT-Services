import InnerPageHero from "@/components/common/inner-page-hero";

interface Props {
  title: string;
  subtitle: string;
}

export default function ProjectHero({
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
          label: "Portfolio",
          href: "/portfolio",
        },
        {
          label: title,
        },
      ]}
    />
  );
}