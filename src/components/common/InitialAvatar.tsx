interface InitialAvatarProps {
  name: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function generateInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export default function InitialAvatar({
  name,
  initials,
  size = "md",
  className = "",
}: InitialAvatarProps) {
  const displayInitials = initials || generateInitials(name);

  const sizes = {
    sm: "h-9 w-9 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-14 w-14 text-base",
  };

  return (
    <div
      role="img"
      aria-label={`${name} avatar`}
      title={name}
      className={`flex shrink-0 items-center justify-center rounded-full bg-blue-50 font-semibold text-blue-700 ring-1 ring-blue-100 ${sizes[size]} ${className}`}
    >
      {displayInitials}
    </div>
  );
}