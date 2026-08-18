import Container from "@/components/common/Container";
import StatCard from "@/components/common/StatCard";

export default function Stats() {
  return (
    <section className="bg-blue-700 py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            number={500}
            title="Projects Completed"
          />

          <StatCard
            number={100}
            title="Business Clients"
          />

          <StatCard
            number={15}
            title="Years Experience"
          />

          <StatCard
            number={24}
            suffix="/7"
            title="Technical Support"
          />
        </div>
      </Container>
    </section>
  );
}