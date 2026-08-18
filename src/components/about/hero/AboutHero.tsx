import InnerPageHero from "@/components/common/inner-page-hero";

export default function AboutHero() {
  return (
    <InnerPageHero
      title="About Dynamics ICT Services"
      subtitle="Discover our story, mission, values, leadership, and commitment to delivering innovative ICT, security, automation, and renewable energy solutions."
      breadcrumb={[
        {
          label: "Home",
          href: "/",
        },
        {
          label: "About Us",
        },
      ]}
    />
  );
}