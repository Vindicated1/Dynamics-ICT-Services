import { featuredSolutions } from "@/data/homepage/featuredSolutions";
import { industries } from "@/data/homepage/industries";
import { services } from "@/data/homepage/services";

export interface MenuItem {
  title: string;
  href: string;
  group: string;
}

export const servicesMenuItems: MenuItem[] = [
  {
    title: "View All Services",
    href: "/services",
    group: "Overview",
  },
  ...services.map((service) => ({
    title: service.title,
    href: service.href,
    group: "Services",
  })),
];

export const solutionsMenuItems: MenuItem[] = [
  {
    title: "View All Solutions",
    href: "/solutions",
    group: "Overview",
  },
  ...featuredSolutions.map((solution) => ({
    title: solution.title,
    href: solution.href,
    group: "Featured Solutions",
  })),
  ...industries.map((industry) => ({
    title: industry.title,
    href: industry.href,
    group: "Industries",
  })),
];
