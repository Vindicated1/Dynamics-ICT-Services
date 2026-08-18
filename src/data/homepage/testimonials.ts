export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  initials: string;
  rating: number;
  testimonial: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Adebayo Johnson",
    role: "ICT Director",
    company: "University of Ibadan",
    initials: "AJ",
    rating: 5,
    testimonial:
      "Dynamics ICT Services delivered a complete networking and software solution that exceeded our expectations. Their professionalism and technical expertise were exceptional.",
  },

  {
    id: "2",
    name: "Grace Okafor",
    role: "Managing Director",
    company: "Prime Logistics Ltd",
    initials: "GO",
    rating: 5,
    testimonial:
      "Their CCTV, access control and cybersecurity deployment significantly improved the security of our facilities. We highly recommend them.",
  },

  {
    id: "3",
    name: "Ibrahim Bello",
    role: "Operations Manager",
    company: "Green Energy Solutions",
    initials: "IB",
    rating: 5,
    testimonial:
      "The solar installation project was completed on time and has greatly reduced our energy costs while improving power reliability.",
  },
];

export const trustMetrics = [
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "250+",
    label: "Projects Delivered",
  },
  {
    value: "120+",
    label: "Business Clients",
  },
  {
    value: "24/7",
    label: "Technical Support",
  },
];