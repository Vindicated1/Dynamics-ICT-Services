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

        <div className="flex min-w-0 gap-3">
          <MapPin className="mt-1 shrink-0 text-blue-400" />

          <span className="min-w-0 break-words text-slate-400">
            {footerCompany.address}
          </span>
        </div>

        <div className="flex min-w-0 gap-3">
          <Phone className="shrink-0 text-blue-400" />

          <span className="min-w-0 break-words text-slate-400">
            {footerCompany.phone}
          </span>
        </div>

        <div className="flex min-w-0 gap-3">
          <Mail className="shrink-0 text-blue-400" />

          <span className="min-w-0 break-all text-slate-400">
            {footerCompany.email}
          </span>
        </div>

      </div>
    </div>
  );
}