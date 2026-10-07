export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  technologies: string[];
  featured?: boolean;
}
