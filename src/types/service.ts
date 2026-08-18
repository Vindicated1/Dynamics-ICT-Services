import {
  Sun,
  ShieldCheck,
  Globe,
  Wifi,
  Laptop,
  MapPinned,
  BarChart3,
  Cpu,
} from "lucide-react";

export const services = [
  {
    title: "Solar Energy",
    description:
      "Residential and commercial solar power installation.",
    icon: Sun,
    href: "/services/solar-energy",
  },
  {
    title: "Security Systems",
    description:
      "CCTV surveillance, access control and alarm systems.",
    icon: ShieldCheck,
    href: "/services/security",
  },
  {
    title: "Networking",
    description:
      "Enterprise networking, wireless and structured cabling.",
    icon: Wifi,
    href: "/services/networking",
  },
  {
    title: "ICT Infrastructure",
    description:
      "Servers, cloud solutions and enterprise ICT deployment.",
    icon: Globe,
    href: "/services/ict",
  },
  {
    title: "Smart Home",
    description:
      "Home automation and IoT integration.",
    icon: Cpu,
    href: "/services/smart-home",
  },
  {
    title: "Fleet Tracking",
    description:
      "Real-time GPS vehicle monitoring and management.",
    icon: MapPinned,
    href: "/services/fleet-tracking",
  },
  {
    title: "Web Development",
    description:
      "Professional websites, portals and business applications.",
    icon: Laptop,
    href: "/services/web-development",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, social media, branding and online advertising.",
    icon: BarChart3,
    href: "/services/digital-marketing",
  },
];