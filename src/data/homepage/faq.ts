export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "1",
    category: "General",
    question: "What services does Dynamics ICT Services provide?",
    answer:
      "We provide software development, networking, cybersecurity, CCTV installation, cloud computing, renewable energy, digital marketing, automation and ICT consulting.",
  },
  {
    id: "2",
    category: "Projects",
    question: "How long does a typical project take?",
    answer:
      "Project duration depends on complexity. Small projects may take 2–4 weeks, while enterprise implementations can take several months.",
  },
  {
    id: "3",
    category: "Software",
    question: "Do you develop custom software?",
    answer:
      "Yes. We design and build custom web applications, mobile apps, ERP systems, portals and enterprise software tailored to your business.",
  },
  {
    id: "4",
    category: "Networking",
    question: "Do you install enterprise networking equipment?",
    answer:
      "Yes. We install structured cabling, Wi-Fi infrastructure, firewalls, switches, routers and complete network infrastructure.",
  },
  {
    id: "5",
    category: "Solar",
    question: "Do you offer maintenance after installation?",
    answer:
      "Yes. We provide preventive maintenance, monitoring and technical support for all our solar and ICT installations.",
  },
  {
    id: "6",
    category: "Support",
    question: "Can we get ongoing technical support?",
    answer:
      "Absolutely. We provide flexible maintenance contracts and 24/7 technical support for our clients.",
  },
];