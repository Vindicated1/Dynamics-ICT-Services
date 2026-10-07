import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { services } from "./services";

export const footerCompany = {
  name: "Dynamics ICT Services",

  description:
    "Providing innovative ICT, software development, networking, cybersecurity, renewable energy, automation and digital transformation solutions across Africa.",

  phone: "+234 803 528 1712",

  email: "dynamicsictservices2017@gmail.com",

  address: "Ibadan, Oyo State, Nigeria",
};

export const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const servicesLinks = services.map((service) => ({
  label: service.title,
  href: service.href,
}));

export const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
  },
  {
    name: "X",
    icon: FaXTwitter,
    href: "https://x.com",
  },
];