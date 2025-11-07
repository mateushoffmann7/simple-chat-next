'use client';

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  className?: string;
}

export function Input({
  value,
  onChange,
  placeholder,
  className,
  onSubmit,
}: InputProps) {
  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && onSubmit) {
      onSubmit();
    }
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onKeyUp={handleKeyUp}
        onChange={(e) => onChange(e.target.value)}
        className={className}
      />
    </div>
  );
}
