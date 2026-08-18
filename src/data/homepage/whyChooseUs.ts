import {
  Award,
  Clock3,
  Headphones,
  ShieldCheck,
  Rocket,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const advantages: Advantage[] = [
  {
    id: "experience",
    title: "Experienced Professionals",
    description:
      "Our certified engineers and ICT specialists deliver enterprise-grade technology solutions backed by years of practical experience.",
    icon: Award,
  },
  {
    id: "support",
    title: "24/7 Technical Support",
    description:
      "Our support team is always available to keep your systems running smoothly with rapid response times.",
    icon: Headphones,
  },
  {
    id: "security",
    title: "Security First",
    description:
      "Every solution is designed with cybersecurity, data protection and business continuity in mind.",
    icon: ShieldCheck,
  },
  {
    id: "delivery",
    title: "On-Time Delivery",
    description:
      "Structured project management ensures projects are delivered on schedule without compromising quality.",
    icon: Clock3,
  },
  {
    id: "innovation",
    title: "Innovation Driven",
    description:
      "We continuously adopt emerging technologies to help businesses stay competitive and future-ready.",
    icon: Rocket,
  },
  {
    id: "partnership",
    title: "Long-Term Partnership",
    description:
      "We build lasting relationships through continuous support, maintenance and technology consulting.",
    icon: Users,
  },
];