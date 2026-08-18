import { services } from "./services";

export const serviceDetails = {
  /*
   * ============================================================
   * SOFTWARE DEVELOPMENT
   * ============================================================
   */
  "software-development": {
    ...services.find(
      (service) => service.slug === "software-development"
    )!,

    heroTitle: "Custom Software Development",

    heroSubtitle:
      "Scalable software engineered to automate business operations and accelerate digital transformation.",

    overview:
      "Dynamics ICT Services develops secure, scalable and enterprise-grade software solutions tailored to your organization. From internal business systems to customer-facing platforms, we build software that improves productivity and supports long-term growth.",

    features: [
      "Custom Business Applications",
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "School Management Systems",
      "Hospital Management Systems",
      "Inventory Management",
      "Payroll Systems",
      "Desktop Applications",
    ],

    benefits: [
      "Automates repetitive tasks",
      "Improves operational efficiency",
      "Enhances decision-making",
      "Scalable architecture",
      "High security",
      "Long-term maintainability",
    ],

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Laravel",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Azure",
    ],

    process: [
      "Discovery",
      "Planning",
      "UI/UX Design",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance",
    ],
  },

  /*
   * ============================================================
   * NETWORKING
   * ============================================================
   */
  networking: {
    ...services.find(
      (service) => service.slug === "networking"
    )!,

    heroTitle: "Enterprise Networking Solutions",

    heroSubtitle:
      "Reliable, secure and scalable network infrastructure designed to keep your organization connected.",

    overview:
      "Dynamics ICT Services designs, deploys and maintains reliable wired and wireless network infrastructure for businesses, schools, government institutions and other organizations. Our networking solutions are built for performance, security, scalability and dependable connectivity.",

    features: [
      "Structured Cabling",
      "Enterprise Wi-Fi",
      "LAN & WAN Infrastructure",
      "Router & Switch Configuration",
      "Network Security",
      "VLAN Configuration",
      "Server & Network Setup",
      "Network Monitoring",
    ],

    benefits: [
      "Reliable connectivity",
      "Improved network performance",
      "Scalable infrastructure",
      "Enhanced network security",
      "Reduced downtime",
      "Centralized network management",
    ],

    technologies: [
      "Cisco",
      "MikroTik",
      "Ubiquiti",
      "TP-Link",
      "Fortinet",
      "VLAN",
      "Wi-Fi 6",
      "Fiber Optics",
    ],

    process: [
      "Site Assessment",
      "Network Planning",
      "Infrastructure Design",
      "Equipment Installation",
      "Configuration",
      "Testing",
      "Documentation",
      "Maintenance",
    ],
  },

  /*
   * ============================================================
   * CYBER SECURITY
   * ============================================================
   */
  "cyber-security": {
    ...services.find(
      (service) => service.slug === "cyber-security"
    )!,

    heroTitle: "Cybersecurity Solutions",

    heroSubtitle:
      "Protect your systems, networks and business data against modern cyber threats.",

    overview:
      "Dynamics ICT Services provides practical cybersecurity solutions designed to protect organizations from unauthorized access, malware, data loss and other digital threats. We combine secure infrastructure, monitoring, access controls and cybersecurity best practices to strengthen your digital environment.",

    features: [
      "Network Security",
      "Firewall Deployment",
      "Endpoint Protection",
      "Access Control",
      "Security Audits",
      "Vulnerability Assessment",
      "Data Protection",
      "Security Monitoring",
    ],

    benefits: [
      "Reduced security risks",
      "Protection of sensitive data",
      "Improved access control",
      "Early threat detection",
      "Stronger network security",
      "Better regulatory readiness",
    ],

    technologies: [
      "Fortinet",
      "Sophos",
      "Microsoft Defender",
      "Firewall Systems",
      "Endpoint Security",
      "VPN",
      "Multi-Factor Authentication",
      "Security Monitoring",
    ],

    process: [
      "Security Assessment",
      "Risk Analysis",
      "Security Planning",
      "Implementation",
      "Configuration",
      "Testing",
      "Monitoring",
      "Continuous Improvement",
    ],
  },

  /*
   * ============================================================
   * CLOUD COMPUTING
   * ============================================================
   */
  "cloud-computing": {
  ...services.find(
    (service) => service.slug === "cloud-computing"
  )!,

  heroTitle: "Cloud Services & Solutions",

  heroSubtitle:
    "Modern cloud infrastructure that gives your business flexibility, scalability and secure access to digital resources.",

  overview:
    "Dynamics ICT Services helps organizations adopt and manage cloud technologies for applications, data, collaboration, storage and infrastructure. Our cloud solutions are designed to improve accessibility, reliability and operational efficiency while reducing the complexity of managing traditional infrastructure.",

  features: [
    "Cloud Infrastructure",
    "Cloud Migration",
    "Cloud Storage",
    "Cloud Backup",
    "Cloud Applications",
    "Microsoft 365 Solutions",
    "Server Deployment",
    "Cloud Security",
  ],

  benefits: [
    "Reduced infrastructure costs",
    "Remote accessibility",
    "Improved scalability",
    "Reliable data backup",
    "Better collaboration",
    "Business continuity",
  ],

  technologies: [
    "Microsoft Azure",
    "AWS",
    "Google Cloud",
    "Microsoft 365",
    "Cloud Storage",
    "Cloud Backup",
    "Virtual Machines",
    "Docker",
  ],

  process: [
    "Cloud Assessment",
    "Strategy & Planning",
    "Architecture Design",
    "Migration",
    "Configuration",
    "Security Testing",
    "Deployment",
    "Ongoing Support",
  ],
},

  /*
   * ============================================================
   * SOLAR ENERGY
   * ============================================================
   */
  "solar-energy": {
    ...services.find(
      (service) => service.slug === "solar-energy"
    )!,

    heroTitle: "Solar & Renewable Energy Solutions",

    heroSubtitle:
      "Reliable solar power systems designed to reduce energy costs and provide dependable electricity.",

    overview:
      "Dynamics ICT Services designs and installs solar energy systems for homes, offices, businesses and other facilities. Our solutions combine solar panels, hybrid inverters and battery storage to provide reliable power while reducing dependence on conventional electricity and generators.",

    features: [
      "Solar Panel Installation",
      "Hybrid Inverter Systems",
      "Battery Storage",
      "Residential Solar Systems",
      "Commercial Solar Systems",
      "Energy Audits",
      "Solar System Design",
      "Solar Maintenance",
    ],

    benefits: [
      "Reduced electricity costs",
      "Reliable backup power",
      "Reduced generator dependence",
      "Lower operating costs",
      "Scalable energy systems",
      "Cleaner energy",
    ],

    technologies: [
      "Solar PV Panels",
      "Hybrid Inverters",
      "Lithium Batteries",
      "Deep Cycle Batteries",
      "MPPT Controllers",
      "Energy Monitoring",
      "Battery Management Systems",
      "Solar Protection Systems",
    ],

    process: [
      "Energy Assessment",
      "Site Survey",
      "System Design",
      "Equipment Selection",
      "Installation",
      "Configuration",
      "Testing & Commissioning",
      "Maintenance",
    ],
  },
};