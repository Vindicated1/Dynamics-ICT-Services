import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-20 text-white">
      <Container>

        <h2 className="text-3xl font-bold">
          Dynamics ICT Services
        </h2>

        <p className="mt-6 max-w-xl text-slate-400">
          Delivering innovative ICT, Solar,
          Security and Smart Automation
          solutions across Nigeria.
        </p>

        <div className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-500">
          © 2026 Dynamics ICT Services.
          All rights reserved.
        </div>

      </Container>
    </footer>
  );
}