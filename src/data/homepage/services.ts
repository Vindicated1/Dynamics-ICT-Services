import {
  BarChart3,
  Camera,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Laptop,
  Network,
  ShieldCheck,
  Smartphone,
  Sun,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  image: string;
  href: string;
  color: string;
  category:
    | "Software"
    | "Security"
    | "Infrastructure"
    | "Digital"
    | "Energy";
}

export const services: Service[] = [
  /*
   * ============================================================
   * SOFTWARE DEVELOPMENT
   * ============================================================
   */
  {
    id: "software-development",
    title: "Software Development",
    shortDescription:
      "Custom business software, enterprise systems and web applications.",
    description:
      "We design and develop scalable software solutions tailored to business growth.",
    icon: Code2,
    image: "/images/services/software-development.jpg",
    href: "/services/software-development",
    color: "#2563EB",
    category: "Software",
  },

  /*
   * ============================================================
   * WEB DEVELOPMENT
   * ============================================================
   */
  {
    id: "web-development",
    title: "Web Development",
    shortDescription:
      "Modern, responsive and conversion-focused websites.",
    description:
      "Professional websites built for performance, SEO and business growth.",
    icon: Globe,
    image: "/images/services/web-design.jpg",
    href: "/services/web-development",
    color: "#06B6D4",
    category: "Software",
  },

  /*
   * ============================================================
   * MOBILE APP DEVELOPMENT
   * ============================================================
   */
  {
    id: "mobile-app-development",
    title: "Mobile Applications",
    shortDescription:
      "Android and iOS business applications.",
    description:
      "Cross-platform mobile solutions for modern organizations.",
    icon: Smartphone,
    image: "/images/services/mobile-app.jpg",
    href: "/services/mobile-app-development",
    color: "#8B5CF6",
    category: "Software",
  },

  /*
   * ============================================================
   * NETWORKING
   * ============================================================
   */
  {
    id: "networking",
    title: "Networking",
    shortDescription:
      "Reliable enterprise networking and structured cabling.",
    description:
      "Secure, high-performance wired and wireless network infrastructure.",
    icon: Network,
    image: "/images/services/networking.jpg",
    href: "/services/networking",
    color: "#3B82F6",
    category: "Infrastructure",
  },

  /*
   * ============================================================
   * CYBER SECURITY
   * ============================================================
   */
  {
    id: "cyber-security",
    title: "Cyber Security",
    shortDescription:
      "Protecting organizations against digital threats.",
    description:
      "Comprehensive cybersecurity services including assessments, monitoring and protection.",
    icon: ShieldCheck,
    image: "/images/services/cyber-security.jpg",
    href: "/services/cyber-security",
    color: "#DC2626",
    category: "Security",
  },

  /*
   * ============================================================
   * CCTV
   * ============================================================
   */
  {
    id: "cctv",
    title: "CCTV & Surveillance",
    shortDescription:
      "Smart surveillance and access control solutions.",
    description:
      "Intelligent CCTV systems for homes, businesses and institutions.",
    icon: Camera,
    image: "/images/services/cctv.jpg",
    href: "/services/cctv",
    color: "#0F766E",
    category: "Security",
  },

  /*
   * ============================================================
   * SOLAR ENERGY
   * ============================================================
   */
  {
    id: "solar-energy",
    title: "Solar Energy",
    shortDescription:
      "Reliable renewable energy systems.",
    description:
      "Residential and commercial solar installations with backup solutions.",
    icon: Sun,
    image: "/images/services/solar.jpg",
    href: "/services/solar-energy",
    color: "#F59E0B",
    category: "Energy",
  },

  /*
   * ============================================================
   * CLOUD COMPUTING
   * ============================================================
   */
  {
    id: "cloud-computing",
    title: "Cloud Solutions",
    shortDescription:
      "Cloud migration and infrastructure services.",
    description:
      "Deploy, secure and manage cloud environments for modern businesses.",
    icon: Cloud,
    image: "/images/services/cloud.jpg",
    href: "/services/cloud-computing",
    color: "#0EA5E9",
    category: "Infrastructure",
  },

  /*
   * ============================================================
   * DIGITAL MARKETING
   * ============================================================
   */
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "SEO, branding and digital campaigns.",
    description:
      "Helping businesses increase visibility and generate qualified leads online.",
    icon: BarChart3,
    image: "/images/services/digital-marketing.jpg",
    href: "/services/digital-marketing",
    color: "#10B981",
    category: "Digital",
  },

  /*
   * ============================================================
   * IT SUPPORT
   * ============================================================
   */
  {
    id: "it-support",
    title: "IT Support",
    shortDescription:
      "Managed IT services and technical support.",
    description:
      "Reliable technical support, maintenance and IT consulting services.",
    icon: Laptop,
    image: "/images/services/it-support.jpg",
    href: "/services/it-support",
    color: "#6366F1",
    category: "Infrastructure",
  },

  /*
   * ============================================================
   * DATABASE SOLUTIONS
   * ============================================================
   */
  {
    id: "database",
    title: "Database Solutions",
    shortDescription:
      "Database architecture, optimization and management.",
    description:
      "Secure, scalable and high-performance database systems.",
    icon: Database,
    image: "/images/services/database.jpg",
    href: "/services/database",
    color: "#9333EA",
    category: "Software",
  },

  /*
   * ============================================================
   * AUTOMATION
   * ============================================================
   */
  {
    id: "automation",
    title: "Automation & Smart Systems",
    shortDescription:
      "Smart homes, offices and industrial automation.",
    description:
      "Automated solutions that improve efficiency, convenience and security.",
    icon: Cpu,
    image: "/images/services/automation.jpg",
    href: "/services/automation",
    color: "#14B8A6",
    category: "Infrastructure",
  },
];