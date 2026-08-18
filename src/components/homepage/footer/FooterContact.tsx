import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import { footerCompany } from "@/data/homepage/footer";

export default function FooterContact() {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">
        Contact
      </h3>

      <div className="space-y-5">

        <div className="flex gap-3">
          <MapPin className="mt-1 text-blue-400" />

          <span className="text-slate-400">
            {footerCompany.address}
          </span>
        </div>

        <div className="flex gap-3">
          <Phone className="text-blue-400" />

          <span className="text-slate-400">
            {footerCompany.phone}
          </span>
        </div>

        <div className="flex gap-3">
          <Mail className="text-blue-400" />

          <span className="text-slate-400">
            {footerCompany.email}
          </span>
        </div>

      </div>
    </div>
  );
}