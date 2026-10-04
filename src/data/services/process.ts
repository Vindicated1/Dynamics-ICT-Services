export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your business requirements, objectives and technical challenges.",
    icon: "Search",
  },

  {
    step: "02",
    title: "Planning",
    description:
      "We develop a clear technical roadmap and implementation strategy.",
    icon: "ClipboardList",
  },

  {
    step: "03",
    title: "Design",
    description:
      "Our team designs the solution architecture and user experience.",
    icon: "Palette",
  },

  {
    step: "04",
    title: "Development",
    description:
      "We build and configure the required technology solution.",
    icon: "Code",
  },

  {
    step: "05",
    title: "Testing",
    description:
      "We test the solution for reliability, security and performance.",
    icon: "TestTube",
  },

  {
    step: "06",
    title: "Deployment",
    description:
      "The completed solution is deployed and prepared for production use.",
    icon: "Rocket",
  },
];