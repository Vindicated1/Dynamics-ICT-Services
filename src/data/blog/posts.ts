export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
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
