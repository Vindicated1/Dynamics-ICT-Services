export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;

  category: BlogCategory;
  tags: string[];

  author: {
    name: string;
    role?: string;
  };

  image: string;

  publishedAt: string;
  updatedAt?: string;

  readingTime: number;

  featured: boolean;
  published: boolean;
}

export type BlogCategory =
  | "Technology"
  | "Cybersecurity"
  | "Networking"
  | "Software Development"
  | "Solar Energy"
  | "Digital Transformation"
  | "Business Technology";

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "How Technology Can Transform Your Business",
    slug: "how-technology-can-transform-your-business",

    excerpt:
      "Discover how modern technology solutions can help businesses improve productivity, security, efficiency and long-term growth.",

    content: `
Technology is becoming an essential part of modern business operations.

From business software and cloud solutions to networking, cybersecurity and renewable energy systems, organizations can use technology to improve the way they work.

The right technology solution should not simply introduce new tools. It should solve real business problems, improve efficiency and create measurable value.

Businesses should therefore evaluate their current operations, identify areas that can be improved and implement technology solutions that support their long-term goals.
`,

    category: "Business Technology",

    tags: [
      "Business Technology",
      "Digital Transformation",
      "Technology",
    ],

    author: {
      name: "Dynamics ICT Services",
      role: "Technology Team",
    },

    image: "/images/blog/technology-business.jpg",

    publishedAt: "2026-08-01",

    readingTime: 5,

    featured: true,
    published: true,
  },

  {
    id: "post-2",
    title: "Why Cybersecurity Matters for Modern Businesses",
    slug: "why-cybersecurity-matters-for-modern-businesses",

    excerpt:
      "Learn why cybersecurity should be an essential part of every organization's technology strategy.",

    content: `
Cybersecurity is no longer only a concern for large technology companies.

Businesses of every size rely on computers, networks, applications and digital information. Protecting these resources is therefore an important part of maintaining business continuity.

Organizations should consider measures such as secure network infrastructure, access control, endpoint protection, backups and security monitoring.

A strong cybersecurity strategy combines technology, processes and employee awareness.
`,

    category: "Cybersecurity",

    tags: [
      "Cybersecurity",
      "Network Security",
      "Data Protection",
    ],

    author: {
      name: "Dynamics ICT Services",
      role: "Cybersecurity Team",
    },

    image: "/images/blog/cybersecurity.jpg",

    publishedAt: "2026-08-05",

    readingTime: 6,

    featured: true,
    published: true,
  },

  {
    id: "post-3",
    title: "Building Reliable Network Infrastructure",
    slug: "building-reliable-network-infrastructure",

    excerpt:
      "A reliable network infrastructure provides the foundation for communication, collaboration and digital business operations.",

    content: `
A reliable network is one of the foundations of modern organizational infrastructure.

Businesses depend on networks for communication, internet access, cloud applications, file sharing, security systems and many other services.

Proper planning is therefore important when designing a network.

Structured cabling, wireless coverage, routing, switching, network security and monitoring should all be considered when developing a reliable infrastructure.
`,

    category: "Networking",

    tags: [
      "Networking",
      "Infrastructure",
      "Wi-Fi",
      "Structured Cabling",
    ],

    author: {
      name: "Dynamics ICT Services",
      role: "Network Engineering Team",
    },

    image: "/images/blog/networking.jpg",

    publishedAt: "2026-08-08",

    readingTime: 5,

    featured: false,
    published: true,
  },

  {
    id: "post-4",
    title: "The Benefits of Custom Business Software",
    slug: "benefits-of-custom-business-software",

    excerpt:
      "Custom software can help organizations automate processes, improve productivity and build systems around their specific business requirements.",

    content: `
Every organization has its own processes and operational requirements.

Off-the-shelf software can provide useful functionality, but some businesses require systems designed specifically around their workflows.

Custom software development allows organizations to build applications around their operational requirements.

Business applications can be used to automate repetitive processes, organize information, improve reporting and support better decision-making.
`,

    category: "Software Development",

    tags: [
      "Software Development",
      "Business Software",
      "Automation",
      "Digital Transformation",
    ],

    author: {
      name: "Dynamics ICT Services",
      role: "Software Development Team",
    },

    image: "/images/blog/software-development.jpg",

    publishedAt: "2026-08-10",

    readingTime: 6,

    featured: false,
    published: true,
  },

  {
    id: "post-5",
    title: "Understanding the Benefits of Solar Energy",
    slug: "understanding-the-benefits-of-solar-energy",

    excerpt:
      "Solar energy can provide organizations with a reliable alternative source of electricity while helping reduce dependence on conventional power sources.",

    content: `
Reliable electricity is important for homes, businesses and institutions.

Solar energy provides an alternative approach to power generation by combining solar panels, inverters and battery storage systems.

A properly designed solar installation can provide backup power, reduce generator dependence and support more predictable energy management.

Before installing a solar system, organizations should assess their energy consumption and determine the appropriate system capacity.
`,

    category: "Solar Energy",

    tags: [
      "Solar Energy",
      "Renewable Energy",
      "Power Solutions",
    ],

    author: {
      name: "Dynamics ICT Services",
      role: "Energy Solutions Team",
    },

    image: "/images/blog/solar-energy.jpg",

    publishedAt: "2026-08-12",

    readingTime: 5,

    featured: false,
    published: true,
  },

  {
    id: "post-6",
    title: "Digital Transformation: Where Should Your Business Start?",
    slug: "digital-transformation-where-should-your-business-start",

    excerpt:
      "Digital transformation does not have to happen all at once. Learn how businesses can identify priorities and introduce technology strategically.",

    content: `
Digital transformation is a continuous process of improving business operations through technology.

Organizations do not necessarily need to replace every existing system at once.

A better approach is to identify operational challenges, determine which areas provide the greatest opportunity for improvement and introduce solutions gradually.

This may involve business software, cloud services, networking, cybersecurity, automation or digital marketing.

The most successful technology strategy is one that aligns technology investments with actual business objectives.
`,

    category: "Digital Transformation",

    tags: [
      "Digital Transformation",
      "Business Technology",
      "Automation",
      "Cloud Computing",
    ],

    author: {
      name: "Dynamics ICT Services",
      role: "Technology Consulting Team",
    },

    image: "/images/blog/digital-transformation.jpg",

    publishedAt: "2026-08-15",

    readingTime: 6,

    featured: true,
    published: true,
  },
];