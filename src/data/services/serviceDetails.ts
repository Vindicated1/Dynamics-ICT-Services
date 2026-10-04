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
   * WEB DEVELOPMENT
   * ============================================================
   */
  "web-development": {
    ...services.find(
      (service) => service.slug === "web-development"
    )!,

    heroTitle: "Professional Web Development",

    heroSubtitle:
      "Modern, responsive and high-performing websites built to strengthen your digital presence and grow your business.",

    overview:
      "We design and develop modern websites and web applications that combine excellent user experience, strong performance, responsive design and search-engine-friendly architecture. From corporate websites to complex web platforms, our solutions are built around your business objectives.",

    features: [
      "Corporate Websites",
      "Business Websites",
      "E-Commerce Platforms",
      "Web Applications",
      "Customer Portals",
      "Content Management Systems",
      "Landing Pages",
      "Enterprise Web Platforms",
    ],

    benefits: [
      "Professional online presence",
      "Mobile-responsive experience",
      "Improved search visibility",
      "Fast website performance",
      "Scalable architecture",
      "Better customer engagement",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "WordPress",
      "PHP",
      "PostgreSQL",
    ],

    process: [
      "Requirement Gathering",
      "Planning",
      "UI/UX Design",
      "Development",
      "Content Integration",
      "Testing",
      "Deployment",
      "Maintenance",
    ],
  },

  /*
   * ============================================================
   * MOBILE APP DEVELOPMENT
   * ============================================================
   */
  "mobile-app-development": {
    ...services.find(
      (service) => service.slug === "mobile-app-development"
    )!,

    heroTitle: "Mobile Application Development",

    heroSubtitle:
      "Powerful Android and iOS applications designed to connect businesses with their customers.",

    overview:
      "We develop modern mobile applications that provide smooth user experiences across Android and iOS devices. Our mobile solutions are designed for performance, scalability, security and ease of use.",

    features: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Applications",
      "Business Applications",
      "Customer Applications",
      "Mobile Commerce",
      "API Integration",
      "Push Notifications",
    ],

    benefits: [
      "Reach customers on mobile devices",
      "Improved customer engagement",
      "Convenient access to services",
      "Scalable mobile architecture",
      "Secure application development",
      "Cross-platform compatibility",
    ],

    technologies: [
      "React Native",
      "Flutter",
      "React",
      "TypeScript",
      "Node.js",
      "Firebase",
      "REST APIs",
      "PostgreSQL",
    ],

    process: [
      "Discovery",
      "Requirement Analysis",
      "UI/UX Design",
      "Development",
      "API Integration",
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
      "We design, deploy and maintain reliable wired and wireless network infrastructure for businesses, schools, government institutions and other organizations. Our networking solutions are built for performance, security, scalability and dependable connectivity.",

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
   * CCTV
   * ============================================================
   */
  cctv: {
    ...services.find(
      (service) => service.slug === "cctv"
    )!,

    heroTitle: "CCTV & Surveillance Solutions",

    heroSubtitle:
      "Intelligent surveillance systems designed to protect people, property and business operations.",

    overview:
      "We design and install modern CCTV and surveillance systems for homes, businesses, institutions and industrial facilities. Our solutions provide reliable monitoring, recording and remote access to help organizations improve security and visibility.",

    features: [
      "IP Camera Installation",
      "Analog CCTV Systems",
      "Network Video Recorders",
      "Remote Monitoring",
      "Video Recording",
      "Access Control",
      "Security Monitoring",
      "System Maintenance",
    ],

    benefits: [
      "Improved facility security",
      "Real-time monitoring",
      "Remote access to cameras",
      "Evidence and incident recording",
      "Reduced security risks",
      "Scalable surveillance infrastructure",
    ],

    technologies: [
      "IP Cameras",
      "NVR",
      "DVR",
      "PoE",
      "Network Cameras",
      "Remote Monitoring",
      "Access Control Systems",
      "Video Management Systems",
    ],

    process: [
      "Security Assessment",
      "Site Survey",
      "Camera Planning",
      "Equipment Selection",
      "Installation",
      "Configuration",
      "Testing",
      "Maintenance",
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
      "Modern cloud infrastructure that gives your business flexibility, scalability and secure access to its digital resources.",

    overview:
      "We help organizations adopt and manage cloud technologies for applications, data, collaboration, storage and infrastructure. Our cloud solutions are designed to improve accessibility, reliability and operational efficiency while reducing the complexity of managing traditional infrastructure.",

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
   * DATABASE
   * ============================================================
   */
  database: {
    ...services.find(
      (service) => service.slug === "database"
    )!,

    heroTitle: "Database Solutions",

    heroSubtitle:
      "Secure, scalable and high-performance database systems built around your organization's needs.",

    overview:
      "We design, implement, optimize and maintain database systems that provide organizations with reliable storage, efficient data access and improved operational performance.",

    features: [
      "Database Design",
      "Database Development",
      "Database Migration",
      "Database Optimization",
      "Backup & Recovery",
      "Database Security",
      "Performance Monitoring",
      "Data Integration",
    ],

    benefits: [
      "Reliable data storage",
      "Improved database performance",
      "Better data availability",
      "Enhanced security",
      "Reliable backup and recovery",
      "Scalable data architecture",
    ],

    technologies: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Microsoft SQL Server",
      "Redis",
      "Prisma",
      "Database Replication",
      "Cloud Databases",
    ],

    process: [
      "Requirement Analysis",
      "Database Assessment",
      "Architecture Design",
      "Implementation",
      "Data Migration",
      "Optimization",
      "Testing",
      "Maintenance",
    ],
  },

  /*
   * ============================================================
   * AUTOMATION
   * ============================================================
   */
  automation: {
    ...services.find(
      (service) => service.slug === "automation"
    )!,

    heroTitle: "Automation & Smart Systems",

    heroSubtitle:
      "Smart automation solutions that improve efficiency, convenience, security and operational control.",

    overview:
      "We design and implement smart automation systems for homes, offices and business environments. Our solutions connect devices, sensors and software to automate repetitive processes and improve operational efficiency.",

    features: [
      "Home Automation",
      "Smart Office Systems",
      "IoT Solutions",
      "Industrial Automation",
      "Lighting Automation",
      "Access Automation",
      "Environmental Monitoring",
      "System Integration",
    ],

    benefits: [
      "Improved operational efficiency",
      "Reduced manual processes",
      "Better energy management",
      "Improved security",
      "Remote system control",
      "Scalable smart infrastructure",
    ],

    technologies: [
      "IoT",
      "Smart Sensors",
      "Automation Controllers",
      "Home Automation",
      "Smart Lighting",
      "Access Control",
      "Wireless Networks",
      "Cloud Platforms",
    ],

    process: [
      "Requirements Assessment",
      "Site Assessment",
      "Automation Planning",
      "System Design",
      "Installation",
      "Integration",
      "Testing",
      "Maintenance",
    ],
  },

  /*
   * ============================================================
   * DIGITAL MARKETING
   * ============================================================
   */
  "digital-marketing": {
    ...services.find(
      (service) => service.slug === "digital-marketing"
    )!,

    heroTitle: "Digital Marketing Services",

    heroSubtitle:
      "Helping businesses increase visibility, reach customers and generate qualified opportunities online.",

    overview:
      "We help businesses establish and grow their digital presence through practical digital marketing strategies. Our services combine search visibility, content, social media and digital campaigns to help organizations reach the right audience.",

    features: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Online Advertising",
      "Google Business Optimization",
      "Digital Strategy",
      "Analytics & Reporting",
    ],

    benefits: [
      "Increased online visibility",
      "Improved brand awareness",
      "Better customer reach",
      "Qualified lead generation",
      "Improved search rankings",
      "Measurable marketing performance",
    ],

    technologies: [
      "Google Analytics",
      "Google Search Console",
      "Google Ads",
      "Meta Ads",
      "SEO Tools",
      "Email Marketing Platforms",
      "Content Management Systems",
      "Social Media Platforms",
    ],

    process: [
      "Business Analysis",
      "Market Research",
      "Digital Strategy",
      "Content Planning",
      "Campaign Development",
      "Campaign Launch",
      "Performance Monitoring",
      "Optimization",
    ],
  },

  /*
   * ============================================================
   * IT SUPPORT
   * ============================================================
   */
  "it-support": {
    ...services.find(
      (service) => service.slug === "it-support"
    )!,

    heroTitle: "IT Support & Managed Services",

    heroSubtitle:
      "Reliable technical support that keeps your organization's technology running smoothly.",

    overview:
      "Dynamics ICT Services provides reliable technical support, maintenance and managed IT services for organizations that depend on technology for their daily operations.",

    features: [
      "Remote Technical Support",
      "On-Site Support",
      "Hardware Maintenance",
      "Software Support",
      "Network Support",
      "System Monitoring",
      "IT Consulting",
      "Help Desk Services",
    ],

    benefits: [
      "Reduced downtime",
      "Faster technical issue resolution",
      "Reliable IT infrastructure",
      "Improved employee productivity",
      "Proactive system monitoring",
      "Predictable IT support",
    ],

    technologies: [
      "Windows",
      "Microsoft 365",
      "Active Directory",
      "Remote Support Tools",
      "Network Monitoring",
      "Cloud Platforms",
      "Backup Systems",
      "Endpoint Management",
    ],

    process: [
      "IT Assessment",
      "Problem Identification",
      "Support Planning",
      "Implementation",
      "Monitoring",
      "Maintenance",
      "Performance Review",
      "Continuous Support",
    ],
  },
};