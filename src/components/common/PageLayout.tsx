import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({
  children,
  className = "",
}: PageLayoutProps) {
  return (
    <main
      className={`min-h-[calc(100vh-5rem)] bg-white ${className}`}
    >
      {children}
    </main>
  );
}