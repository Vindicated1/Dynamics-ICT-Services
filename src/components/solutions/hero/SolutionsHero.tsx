import InnerPageHero from "@/components/common/inner-page-hero";

export default function SolutionsHero() {
  return (
    <InnerPageHero
      title="Industry Solutions"
      subtitle="Technology solutions tailored to the unique needs of different industries."

      breadcrumb={[
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Solutions",
        },
      ]}
    />
  );
}