import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="mt-16 border-t border-slate-800 pt-8">
      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Dynamics ICT Services. All rights
          reserved.
        </p>

        <div className="flex flex-wrap gap-6">
          <Link
            href="/privacy-policy"
            className="text-sm text-slate-500 transition hover:text-blue-400"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-sm text-slate-500 transition hover:text-blue-400"
          >
            Terms of Service
          </Link>

          <Link
            href="/cookies"
            className="text-sm text-slate-500 transition hover:text-blue-400"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
}