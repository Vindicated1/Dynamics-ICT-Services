import NavLink from "./NavLink";
import MegaMenu from "./MegaMenu";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      <NavLink href="/">Home</NavLink>

      <NavLink href="/about">About</NavLink>

      <MegaMenu
        title="Services"
        items={[
          {
            title: "Software Development",
            href: "/services/software-development",
          },
          {
            title: "Networking",
            href: "/services/networking",
          },
          {
            title: "Cybersecurity",
            href: "/services/cyber-security",
          },
          {
            title: "Cloud Computing",
            href: "/services/cloud-computing",
          },
          {
            title: "Solar Solutions",
            href: "/services/solar-energy",
          },
        ]}
      />

      <MegaMenu
        title="Solutions"
        items={[
          {
            title: "Education",
            href: "/solutions/education",
          },
          {
            title: "Healthcare",
            href: "/solutions/healthcare",
          },
          {
            title: "Government",
            href: "/solutions/government",
          },
          {
            title: "Manufacturing",
            href: "/solutions/manufacturing",
          },
          {
            title: "Retail",
            href: "/solutions/retail",
          },
        ]}
      />

      <NavLink href="/projects">Projects</NavLink>

      <NavLink href="/blog">Blog</NavLink>

      <NavLink href="/contact">Contact</NavLink>
    </nav>
  );
}