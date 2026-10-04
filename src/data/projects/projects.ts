export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  location?: string;
  year?: string;
  services: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Enterprise Network Infrastructure",
    slug: "enterprise-network-infrastructure",
    category: "Networking",
    description:
      "A structured networking infrastructure designed to provide reliable, secure and scalable connectivity for an organization.",
    image: "/images/projects/networking.jpg",
    location: "Ibadan, Nigeria",
    year: "2025",
    services: [
      "Structured Cabling",
      "Network Infrastructure",
      "Wi-Fi Deployment",
    ],
  },

  {
    id: "project-2",
    title: "Solar Energy Installation",
    slug: "solar-energy-installation",
    category: "Solar Energy",
    description:
      "A renewable energy installation designed to provide dependable power and reduce reliance on conventional electricity sources.",
    image: "/images/projects/solar.jpg",
    location: "Ibadan, Nigeria",
    year: "2025",
    services: [
      "Solar Installation",
      "Inverter System",
      "Battery Storage",
    ],
  },

  {
    id: "project-3",
    title: "CCTV Surveillance System",
    slug: "cctv-surveillance-system",
    category: "Security",
    description:
      "A professional surveillance deployment providing monitoring, recording and improved security visibility across a facility.",
    image: "/images/projects/cctv.jpg",
    location: "Ibadan, Nigeria",
    year: "2025",
    services: [
      "CCTV Installation",
      "NVR Configuration",
      "Remote Monitoring",
    ],
  },

  {
    id: "project-4",
    title: "Custom Business Software",
    slug: "custom-business-software",
    category: "Software",
    description:
      "A customized software solution developed to streamline business operations and improve productivity.",
    image: "/images/projects/software.jpg",
    location: "Nigeria",
    year: "2025",
    services: [
      "Software Development",
      "UI/UX Design",
      "Database Development",
    ],
  },

  {
    id: "project-5",
    title: "Business Website Development",
    slug: "business-website-development",
    category: "Web Development",
    description:
      "A responsive business website designed to strengthen online presence, improve user experience and support business growth.",
    image: "/images/projects/web-development.jpg",
    location: "Nigeria",
    year: "2025",
    services: [
      "Web Development",
      "Responsive Design",
      "SEO",
    ],
  },

  {
    id: "project-6",
    title: "Smart Automation System",
    slug: "smart-automation-system",
    category: "Automation",
    description:
      "A smart automation solution connecting technology and infrastructure to improve convenience, efficiency and control.",
    image: "/images/projects/automation.jpg",
    location: "Ibadan, Nigeria",
    year: "2025",
    services: [
      "Automation",
      "IoT Integration",
      "Smart Systems",
    ],
  },
];