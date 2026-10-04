export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  location?: string;
  technologies: string[];
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "enterprise-network",
    title: "Enterprise Network Infrastructure",
    category: "Networking",
    description:
      "Design and deployment of reliable wired and wireless network infrastructure for organizations requiring secure and scalable connectivity.",
    location: "Ibadan, Nigeria",
    technologies: [
      "Structured Cabling",
      "Enterprise Wi-Fi",
      "Routing & Switching",
      "Network Security",
    ],
    featured: true,
  },

  {
    id: "business-software",
    title: "Custom Business Software",
    category: "Software Development",
    description:
      "Business-focused software solutions designed to automate operations, improve productivity and provide organizations with better control over their workflows.",
    location: "Nigeria",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
    ],
    featured: true,
  },

  {
    id: "security-deployment",
    title: "Intelligent Security Deployment",
    category: "Security",
    description:
      "Integrated surveillance and access control infrastructure designed to improve visibility, security and protection of business facilities.",
    location: "Ibadan, Nigeria",
    technologies: [
      "CCTV",
      "Access Control",
      "NVR",
      "Remote Monitoring",
    ],
    featured: true,
  },

  {
    id: "renewable-energy",
    title: "Renewable Energy Installation",
    category: "Energy",
    description:
      "Solar power and backup energy systems designed to improve power reliability and reduce dependence on conventional electricity sources.",
    location: "Ibadan, Nigeria",
    technologies: [
      "Solar PV",
      "Hybrid Inverters",
      "Battery Storage",
      "Energy Monitoring",
    ],
    featured: true,
  },

  {
    id: "digital-transformation",
    title: "Digital Transformation Project",
    category: "Digital Transformation",
    description:
      "Technology solutions that help organizations modernize their operations, improve customer experiences and build more efficient digital workflows.",
    location: "Nigeria",
    technologies: [
      "Automation",
      "Cloud",
      "Business Software",
      "Digital Strategy",
    ],
  },

  {
    id: "ict-infrastructure",
    title: "ICT Infrastructure Deployment",
    category: "ICT Infrastructure",
    description:
      "End-to-end ICT infrastructure implementation combining hardware, networking, software and technical support.",
    location: "Ibadan, Nigeria",
    technologies: [
      "ICT Infrastructure",
      "Networking",
      "Systems",
      "Technical Support",
    ],
  },
];