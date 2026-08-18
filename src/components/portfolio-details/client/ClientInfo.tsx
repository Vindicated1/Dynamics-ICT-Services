import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

interface Props {
  client: string;
  location: string;
  category: string;
}

export default function ClientInfo({
  client,
  location,
  category,
}: Props) {
  return (
    <Section background="gray">
      <Container>
        <div className="grid gap-8 rounded-3xl bg-white p-10 shadow-sm md:grid-cols-3">

          <div>
            <h4 className="text-sm font-semibold uppercase text-blue-600">
              Client
            </h4>

            <p className="mt-3 text-lg font-bold text-slate-900">
              {client}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-blue-600">
              Location
            </h4>

            <p className="mt-3 text-lg font-bold text-slate-900">
              {location}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-blue-600">
              Category
            </h4>

            <p className="mt-3 text-lg font-bold text-slate-900">
              {category}
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}