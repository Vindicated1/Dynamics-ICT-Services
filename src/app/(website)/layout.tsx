import Navbar from "@/components/layout/navbar";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}