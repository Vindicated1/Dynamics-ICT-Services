import InnerPageHero from "@/components/common/inner-page-hero";

export default function PortfolioHero() {
  return (
    <InnerPageHero
      title="Our Portfolio"
      subtitle="Explore selected projects that demonstrate our expertise across software, infrastructure, security, networking, automation, and renewable energy."

      breadcrumb={[
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Portfolio",
        },
      ]}
    />
  );
}