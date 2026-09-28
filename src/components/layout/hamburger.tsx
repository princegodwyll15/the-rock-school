"use client";

interface HamburgerButtonProps {
  scrolled: boolean;
  onClick: () => void;
}

export function HamburgerButton({ scrolled, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Open menu"
      className="flex cursor-pointer flex-col gap-1.25 border-none bg-transparent p-2 lg:hidden"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`block h-0.5 w-6 rounded transition-colors duration-200 ${
            scrolled ? "bg-primary" : "bg-white"
          }`}
        />
      ))}
    </button>
  );
}
