import {
  Globe,
  ShieldCheck,
  Sun,
  Camera,
  Cpu,
  Network,
  Smartphone,
  MonitorSmartphone,
  Database,
  Building2,
  Home,
  Factory,
} from "lucide-react";

export const navigation = [
  {
    title: "Services",
    megaMenu: true,

    columns: [
      {
        heading: "ICT Infrastructure",

        items: [
          {
            title: "Networking",
            href: "/services/networking",
            icon: Network,
            description:
              "Enterprise networking solutions",
          },

          {
            title: "Cloud",
            href: "/services/cloud",
            icon: Database,
            description:
              "Cloud migration & hosting",
          },

          {
            title: "Cyber Security",
            href: "/services/cyber-security",
            icon: ShieldCheck,
            description:
              "Enterprise cyber protection",
          },
        ],
      },

      {
        heading: "Digital Solutions",

        items: [
          {
            title: "Web Development",
            href: "/services/web-development",
            icon: Globe,
            description:
              "Modern responsive websites",
          },

          {
            title: "Mobile Apps",
            href: "/services/mobile-apps",
            icon: Smartphone,
            description:
              "Android & iOS development",
          },

          {
            title: "UI / UX Design",
            href: "/services/ui-ux",
            icon: MonitorSmartphone,
            description:
              "Beautiful user experiences",
          },
        ],
      },

      {
        heading: "Smart Technology",

        items: [
          {
            title: "Solar Energy",
            href: "/services/solar",
            icon: Sun,
            description:
              "Renewable energy systems",
          },

          {
            title: "CCTV",
            href: "/services/cctv",
            icon: Camera,
            description:
              "Professional surveillance",
          },

          {
            title: "Smart Home",
            href: "/services/smart-home",
            icon: Cpu,
            description:
              "Automation & IoT",
          },
        ],
      },
    ],
  },

  {
    title: "Solutions",
    megaMenu: true,

    columns: [
      {
        heading: "Industries",

        items: [
          {
            title: "Corporate",
            href: "/solutions/corporate",
            icon: Building2,
          },

          {
            title: "Residential",
            href: "/solutions/residential",
            icon: Home,
          },

          {
            title: "Manufacturing",
            href: "/solutions/manufacturing",
            icon: Factory,
          },
        ],
      },
    ],
  },

  {
    title: "Portfolio",
    href: "/portfolio",
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Blog",
    href: "/blog",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];