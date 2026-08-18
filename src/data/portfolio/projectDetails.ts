import { projects } from "./projects";

export const projectDetails = {
  "school-management-system": {
    ...projects.find(
      (project) => project.slug === "school-management-system"
    )!,

    heroSubtitle:
      "A complete digital transformation solution for educational institutions.",

    overview:
      "Dynamics ICT Services designed and implemented a comprehensive School Management System that digitized admissions, student records, fee payments, attendance tracking, examinations, result processing, staff management, and communication between students, parents, and administrators. The solution improved operational efficiency, enhanced data accuracy, and provided real-time access to academic information.",

    objectives: [
      "Digitize administrative processes",
      "Reduce paperwork and manual records",
      "Improve academic management",
      "Enable online fee payments",
      "Improve communication among stakeholders",
    ],

    outcomes: [
      "80% reduction in paperwork",
      "50% faster student registration",
      "Real-time academic reporting",
      "Improved parent communication",
      "Centralized student records",
    ],

    gallery: [
      "/images/portfolio/school1.jpg",
      "/images/portfolio/school2.jpg",
      "/images/portfolio/school3.jpg",
    ],

    challenges: [
      "Manual student record keeping",
      "Slow admission processing",
      "Difficulty generating academic reports",
      "Poor communication between staff and parents",
    ],

    solutions: [
      "Developed a centralized web application",
      "Implemented online admission workflows",
      "Integrated automated report generation",
      "Built parent and staff communication portal",
    ],
    timeline: [
      {
        title: "Requirements Gathering",
        duration: "Week 1",
      },
      {
        title: "UI/UX Design",
        duration: "Week 2",
      },
      {
        title: "Development",
        duration: "Weeks 3–8",
      },
      {
        title: "Testing",
        duration: "Week 9",
      },
      {
        title: "Deployment",
        duration: "Week 10",
      },
    ],

    metrics: [
      {
        label: "Paperwork Reduced",
        value: "80%",
      },
      {
        label: "Registration Speed",
        value: "50%",
      },
      {
        label: "Departments Digitized",
        value: "12",
      },
      {
        label: "Daily Users",
        value: "2,000+",
      },
    ],
  },

  "enterprise-network": {
    ...projects.find(
      (project) => project.slug === "enterprise-network"
    )!,

    heroSubtitle:
      "Reliable enterprise networking for mission-critical operations.",

    overview:
      "Dynamics ICT Services designed and deployed a secure enterprise networking solution featuring redundant connectivity, VLAN segmentation, centralized monitoring, and high availability. The implementation significantly improved network performance, security, and business continuity.",

    objectives: [
      "Increase network uptime",
      "Improve cybersecurity",
      "Centralize network management",
      "Reduce downtime",
      "Improve scalability",
    ],

    outcomes: [
      "99.9% network availability",
      "Improved network security",
      "Reduced maintenance costs",
      "Higher employee productivity",
      "Simplified IT management",
    ],

    gallery: [
      "/images/portfolio/network1.jpg",
      "/images/portfolio/network2.jpg",
      "/images/portfolio/network3.jpg",
    ],
    challenges: [
      "Frequent network downtime",
      "Limited bandwidth management",
      "Weak internal security",
      "Poor monitoring capabilities",
    ],

    solutions: [
      "Designed redundant network topology",
      "Implemented VLAN segmentation",
      "Installed enterprise firewall",
      "Configured centralized monitoring",
    ],
    timeline: [
      {
        title: "Site Survey",
        duration: "2 Days",
      },
      {
        title: "Network Design",
        duration: "3 Days",
      },
      {
        title: "Installation",
        duration: "1 Week",
      },
      {
        title: "Testing",
        duration: "2 Days",
      },
      {
        title: "Go Live",
        duration: "1 Day",
      },
    ],

    metrics: [
      {
        label: "Network Availability",
        value: "99.9%",
      },
      {
        label: "Downtime Reduction",
        value: "90%",
      },
      {
        label: "Connected Devices",
        value: "450+",
      },
      {
        label: "Sites Connected",
        value: "4",
      },
    ],
  },

  "solar-installation": {
    ...projects.find(
      (project) => project.slug === "solar-installation"
    )!,

    heroSubtitle:
      "Reliable renewable energy powering uninterrupted business operations.",

    overview:
      "Dynamics ICT Services implemented a hybrid solar power solution designed to reduce dependence on grid electricity while providing reliable backup power for critical business operations. The installation combines solar panels, battery storage, and intelligent inverter technology for maximum efficiency.",

    objectives: [
      "Reduce electricity costs",
      "Provide uninterrupted power",
      "Improve energy efficiency",
      "Lower carbon emissions",
      "Increase operational reliability",
    ],

    outcomes: [
      "Over 70% reduction in electricity costs",
      "24/7 power availability",
      "Lower maintenance expenses",
      "Improved sustainability",
      "Enhanced business continuity",
    ],

    gallery: [
      "/images/portfolio/solar1.jpg",
      "/images/portfolio/solar2.jpg",
      "/images/portfolio/solar3.jpg",
    ],
    challenges: [
      "Unstable public power supply",
      "High diesel costs",
      "Equipment downtime",
      "Growing electricity bills",
    ],

    solutions: [
      "Installed hybrid solar system",
      "Added lithium battery storage",
      "Configured intelligent inverter",
      "Integrated automatic switching",
    ],
    timeline: [
      {
        title: "Energy Audit",
        duration: "2 Days",
      },
      {
        title: "System Design",
        duration: "3 Days",
      },
      {
        title: "Installation",
        duration: "1 Week",
      },
      {
        title: "Commissioning",
        duration: "2 Days",
      },
    ],

    metrics: [
      {
        label: "Energy Savings",
        value: "70%",
      },
      {
        label: "Power Availability",
        value: "24/7",
      },
      {
        label: "Solar Capacity",
        value: "25kW",
      },
      {
        label: "CO₂ Reduction",
        value: "18 Tons/Year",
      },
    ],
  },
};