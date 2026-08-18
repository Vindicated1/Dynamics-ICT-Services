import InnerPageHero from "@/components/common/inner-page-hero";

export default function ServicesHero() {
  return (
    <InnerPageHero
      title="Our Services"
      subtitle="Delivering world-class ICT, software engineering, networking, cybersecurity, renewable energy, automation, and digital transformation services that help businesses thrive."
      breadcrumb={[
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Services",
        },
      ]}
    />
  );
}