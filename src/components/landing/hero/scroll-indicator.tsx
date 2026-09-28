"use client";

import { scrollToSection } from "@/components/layout/nav-links";

export function ScrollIndicator() {
  return (
    <button
      onClick={() => scrollToSection("about")}
      aria-label="Scroll down"
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 border-none bg-transparent animate-bounce-soft"
    >
      <span className="h-10 w-px bg-white/40" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 3v10M3.5 8.5L8 13l4.5-4.5"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
