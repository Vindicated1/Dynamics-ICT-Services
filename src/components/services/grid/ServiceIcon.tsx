import { LucideIcon } from "lucide-react";

interface ServiceIconProps {
  icon: LucideIcon;
}

export default function ServiceIcon({
  icon: Icon,
}: ServiceIconProps) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600">
      <Icon
        size={30}
        className="text-blue-600 transition-colors duration-300 group-hover:text-white"
      />
    </div>
  );
}