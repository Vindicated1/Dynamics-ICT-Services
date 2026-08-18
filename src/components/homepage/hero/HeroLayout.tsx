import Container from "@/components/common/Container";

interface Props {
  children: React.ReactNode;
}

export default function HeroLayout({
  children,
}: Props) {
  return (
    <Container className="relative z-10">

      <div className="grid min-h-[92vh] items-center gap-20 py-32 lg:grid-cols-2">

        {children}

      </div>

    </Container>
  );
}