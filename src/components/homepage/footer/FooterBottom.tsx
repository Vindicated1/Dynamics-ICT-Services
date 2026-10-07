export default function FooterBottom() {
  return (
    <div className="mt-16 border-t border-slate-800 pt-8">
      <div className="text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Dynamics ICT Services. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}