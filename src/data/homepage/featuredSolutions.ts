import {
  Building2,
  Shield,
  Network,
  Sun,
  Code2,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FeaturedSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  color: string;
  icon: LucideIcon;
  benefits: string[];
}

export const featuredSolutions: FeaturedSolution[] = [
  {
    id: "smart-office",
    title: "Smart Office Transformation",
    subtitle: "Modern Digital Workplace",
    description:
      "Transform your office into an intelligent, secure and connected environment using networking, automation, cloud technologies and enterprise software.",
    image: "/images/solutions/smart-office.jpg",
    href: "/solutions/smart-office",
    color: "#2563EB",
    icon: Building2,
    benefits: [
      "Smart Automation",
      "Enterprise Networking",
      "Cloud Collaboration",
      "Access Control",
    ],
  },

  {
    id: "security",
    title: "Intelligent Security Systems",
    subtitle: "Protect What Matters",
    description:
      "Integrated CCTV, access control and cybersecurity solutions designed to protect modern businesses.",
    image: "/images/solutions/security.jpg",
    href: "/solutions/security",
    color: "#DC2626",
    icon: Shield,
    benefits: [
      "CCTV",
      "Cyber Security",
      "Access Control",
      "24/7 Monitoring",
    ],
  },

  {
    id: "network",
    title: "Enterprise Network Infrastructure",
    subtitle: "Reliable Connectivity",
    description:
      "High-performance wired and wireless infrastructure designed for reliability, speed and scalability.",
    image: "/images/solutions/network.jpg",
    href: "/solutions/network",
    color: "#0EA5E9",
    icon: Network,
    benefits: [
      "Structured Cabling",
      "Enterprise Wi-Fi",
      "Firewalls",
      "Cloud Integration",
    ],
  },

  {
    id: "solar",
    title: "Renewable Energy Solutions",
    subtitle: "Power Without Limits",
    description:
      "Residential and commercial solar solutions with intelligent backup systems for uninterrupted operations.",
    image: "/images/solutions/solar.jpg",
    href: "/solutions/solar",
    color: "#F59E0B",
    icon: Sun,
    benefits: [
      "Solar Panels",
      "Hybrid Inverters",
      "Battery Storage",
      "Energy Audit",
    ],
  },

  {
    id: "software",
    title: "Custom Business Software",
    subtitle: "Built Around Your Business",
    description:
      "Scalable enterprise software, mobile applications and cloud platforms tailored to your workflow.",
    image: "/images/solutions/software.jpg",
    href: "/solutions/software",
    color: "#7C3AED",
    icon: Code2,
    benefits: [
      "Web Applications",
      "Mobile Apps",
      "REST APIs",
      "Business Dashboards",
    ],
  },

  {
    id: "growth",
    title: "Digital Growth Strategy",
    subtitle: "Accelerate Your Business",
    description:
      "Integrated branding, SEO, digital marketing and analytics that help businesses attract and retain customers.",
    image: "/images/solutions/growth.jpg",
    href: "/solutions/growth",
    color: "#10B981",
    icon: TrendingUp,
    benefits: [
      "SEO",
      "Digital Marketing",
      "Brand Strategy",
      "Analytics",
    ],
  },
];