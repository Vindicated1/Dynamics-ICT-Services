import {
  Building2,
  GraduationCap,
  Hospital,
  Landmark,
  Factory,
  Store,
  Hotel,
  Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const industries: Industry[] = [
  {
    id: "corporate",
    title: "Corporate Organizations",
    description:
      "Enterprise ICT infrastructure, software and cybersecurity solutions.",
    icon: Building2,
    href: "/solutions/corporate",
  },
  {
    id: "education",
    title: "Education",
    description:
      "Digital learning platforms, campus networking and smart classrooms.",
    icon: GraduationCap,
    href: "/solutions/education",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Secure healthcare systems, surveillance and hospital networking.",
    icon: Hospital,
    href: "/solutions/healthcare",
  },
  {
    id: "government",
    title: "Government",
    description:
      "Reliable ICT infrastructure and digital transformation projects.",
    icon: Landmark,
    href: "/solutions/government",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Automation, monitoring and industrial networking solutions.",
    icon: Factory,
    href: "/solutions/manufacturing",
  },
  {
    id: "Retail",
    title: "Retail & Commerce",
    description:
      "POS systems, inventory software and customer engagement solutions.",
    icon: Store,
    href: "/solutions/retail",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description:
      "Guest Wi-Fi, security systems and hotel management technologies.",
    icon: Hotel,
    href: "/solutions/hospitality",
  },
  {
    id: "technology",
    title: "Technology Startups",
    description:
      "Cloud infrastructure, DevOps, software engineering and AI integration.",
    icon: Cpu,
    href: "/solutions/technology",
  },
];