import {
  Code2,
  Shield,
  Sun,
  Network,
  Smartphone,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  technologies: string[];
  icon: LucideIcon;
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "school-portal",
    title: "University School Portal",
    category: "Software",
    description:
      "Complete student information management system with online admissions, payments and result processing.",
    image: "/images/portfolio/school-portal.jpg",
    href: "/portfolio/school-portal",
    technologies: ["Next.js", "Laravel", "MySQL"],
    icon: Code2,
    featured: true,
  },

  {
    id: "solar-installation",
    title: "Commercial Solar Installation",
    category: "Solar",
    description:
      "100kVA hybrid solar power solution for uninterrupted business operations.",
    image: "/images/portfolio/solar.jpg",
    href: "/portfolio/solar",
    technologies: ["Solar", "Hybrid", "Battery"],
    icon: Sun,
  },

  {
    id: "security-system",
    title: "Enterprise Security System",
    category: "Security",
    description:
      "Integrated CCTV, access control and monitoring solution for a corporate office.",
    image: "/images/portfolio/security.jpg",
    href: "/portfolio/security",
    technologies: ["CCTV", "Access Control"],
    icon: Shield,
  },

  {
    id: "network-infrastructure",
    title: "Corporate Network Infrastructure",
    category: "Networking",
    description:
      "Structured cabling, enterprise Wi-Fi and firewall deployment.",
    image: "/images/portfolio/network.jpg",
    href: "/portfolio/network",
    technologies: ["Cisco", "Wi-Fi", "Firewall"],
    icon: Network,
  },

  {
    id: "mobile-app",
    title: "Business Mobile Application",
    category: "Software",
    description:
      "Cross-platform mobile application with real-time reporting.",
    image: "/images/portfolio/mobile.jpg",
    href: "/portfolio/mobile",
    technologies: ["Flutter", "Firebase"],
    icon: Smartphone,
  },

  {
    id: "corporate-website",
    title: "Corporate Digital Platform",
    category: "Web",
    description:
      "Modern responsive corporate website with SEO optimisation.",
    image: "/images/portfolio/website.jpg",
    href: "/portfolio/website",
    technologies: ["Next.js", "SEO"],
    icon: Globe,
  },
];

export const portfolioCategories = [
  "All",
  "Software",
  "Solar",
  "Security",
  "Networking",
  "Web",
];