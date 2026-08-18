interface ServiceIconProps {
  icon: React.ReactNode;
  color: string;
}

export default function ServiceIcon({
  icon,
  color,
}: ServiceIconProps) {
  return (
    <div
      className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
      style={{
        background: `linear-gradient(135deg, ${color}, ${color}CC)`,
      }}
    >
      <div className="text-white">
        {icon}
      </div>
    </div>
  );
}