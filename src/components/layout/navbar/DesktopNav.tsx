import NavLink from "./NavLink";
import MegaMenu from "./MegaMenu";
import { servicesMenuItems, solutionsMenuItems } from "./menu-items";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-4 lg:flex xl:gap-7">
      <NavLink href="/">Home</NavLink>

      <NavLink href="/about">About</NavLink>

      <MegaMenu title="Services" items={servicesMenuItems} />

      <MegaMenu title="Solutions" items={solutionsMenuItems} />

      <NavLink href="/projects">Projects</NavLink>

      <NavLink href="/portfolio">Portfolio</NavLink>

      <NavLink href="/blog">Blog</NavLink>

      <NavLink href="/contact">Contact</NavLink>
    </nav>
  );
}