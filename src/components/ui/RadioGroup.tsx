"use client";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function RadioGroup({
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-center gap-3"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
            className="h-5 w-5 text-blue-600"
          />

          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}