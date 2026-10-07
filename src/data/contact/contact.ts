export interface ContactInfo {
  id: string;
  title: string;
  value: string;
  description: string;
  href?: string;
}

export const contactInfo: ContactInfo[] = [
  {
    id: "office",
    title: "Visit Our Office",
    value: "Ibadan, Nigeria",
    description:
      "Reach out to our team for technology consultations and project discussions.",
  },
  {
    id: "phone",
    title: "Call Us",
    value: "+2348035281712",
    description:
      "Speak directly with our technical and support team.",
    href: "tel:+2348035281712",
  },
  {
    id: "email",
    title: "Email Us",
    value: "dynamicsictservices2017@gmail.com",
    description:
      "Send us your enquiry and our team will get back to you.",
    href: "mailto:dynamicsictservices2017@gmail.com",
  },
  {
    id: "hours",
    title: "Business Hours",
    value: "Monday – Friday",
    description:
      "Our team is available during normal business hours for enquiries and consultations.",
  },
];

export const contactServices = [
  "Software Development",
  "Web Development",
  "Mobile Applications",
  "Networking",
  "Cyber Security",
  "CCTV & Surveillance",
  "Solar Energy",
  "Cloud Solutions",
  "Digital Marketing",
  "IT Support",
  "Database Solutions",
  "Automation & Smart Systems",
];