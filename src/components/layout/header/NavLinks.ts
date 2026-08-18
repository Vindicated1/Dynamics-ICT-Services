export interface NavItem {
  title: string;
  href?: string;
  children?: NavItem[];
}

export const navLinks: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Services",

    children: [
      {
        title: "ICT Infrastructure",

        children: [
          {
            title: "Networking",
            href: "/services/networking",
          },
          {
            title: "Structured Cabling",
            href: "/services/structured-cabling",
          },
          {
            title: "Servers & Storage",
            href: "/services/servers",
          },
          {
            title: "Cloud Computing",
            href: "/services/cloud",
          },
          {
            title: "Cyber Security",
            href: "/services/cyber-security",
          },
        ],
      },

      {
        title: "Software Solutions",

        children: [
          {
            title: "Web Development",
            href: "/services/web-development",
          },
          {
            title: "Mobile Apps",
            href: "/services/mobile-development",
          },
          {
            title: "UI/UX Design",
            href: "/services/ui-ux",
          },
          {
            title: "Digital Marketing",
            href: "/services/digital-marketing",
          },
          {
            title: "Data Analytics",
            href: "/services/data-analytics",
          },
        ],
      },
    ],
  },

  {
    title: "Solutions",

    children: [
      {
        title: "Smart Energy",

        children: [
          {
            title: "Residential Solar",
            href: "/solutions/residential-solar",
          },
          {
            title: "Commercial Solar",
            href: "/solutions/commercial-solar",
          },
          {
            title: "Battery Storage",
            href: "/solutions/battery-storage",
          },
          {
            title: "Hybrid Systems",
            href: "/solutions/hybrid",
          },
        ],
      },

      {
        title: "Smart Security",

        children: [
          {
            title: "CCTV",
            href: "/solutions/cctv",
          },
          {
            title: "Access Control",
            href: "/solutions/access-control",
          },
          {
            title: "Alarm Systems",
            href: "/solutions/alarm",
          },
          {
            title: "Electric Fence",
            href: "/solutions/electric-fence",
          },
        ],
      },
    ],
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Portfolio",
    href: "/portfolio",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];