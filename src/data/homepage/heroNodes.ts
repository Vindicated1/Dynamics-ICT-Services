import {
  Camera,
  Cloud,
  Code2,
  House,
  LucideIcon,
  Network,
  ShieldCheck,
  Sun,
} from "lucide-react";

export interface HeroNode {
  id: string;
  title: string;
  icon: LucideIcon;
  angle: number;
  radius: number;
  delay: number;
}

export const heroNodes: HeroNode[] = [
  {
    id: "solar",
    title: "Solar",
    icon: Sun,
    angle: -90,
    radius: 240,
    delay: 0.1,
  },
  {
    id: "cctv",
    title: "CCTV",
    icon: Camera,
    angle: -35,
    radius: 240,
    delay: 0.2,
  },
  {
    id: "software",
    title: "Software",
    icon: Code2,
    angle: 10,
    radius: 250,
    delay: 0.3,
  },
  {
    id: "cyber",
    title: "Cyber Security",
    icon: ShieldCheck,
    angle: 55,
    radius: 240,
    delay: 0.4,
  },
  {
    id: "cloud",
    title: "Cloud",
    icon: Cloud,
    angle: 90,
    radius: 240,
    delay: 0.5,
  },
  {
    id: "smart-home",
    title: "Smart Home",
    icon: House,
    angle: 135,
    radius: 240,
    delay: 0.6,
  },
  {
    id: "network",
    title: "Networking",
    icon: Network,
    angle: 180,
    radius: 250,
    delay: 0.7,
  },
];