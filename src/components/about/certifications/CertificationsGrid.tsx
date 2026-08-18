import { certifications } from "@/data/about/certifications";
import CertificationCard from "./CertificationCard";

export default function CertificationsGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {certifications.map((item) => (
        <CertificationCard
          key={item.title}
          certification={item}
        />
      ))}
    </div>
  );
}