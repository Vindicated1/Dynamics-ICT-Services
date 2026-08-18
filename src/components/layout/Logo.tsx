import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
        D
      </div>

      <div>
        <h2 className="text-xl font-bold text-white">
          Dynamics ICT
        </h2>

        <p className="text-xs text-blue-200">
          Smart Technology Solutions
        </p>
      </div>
    </Link>
  );
}