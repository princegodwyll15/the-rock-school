"use client";

import { scrollToSection } from "./nav-links";

interface LogoProps {
  scrolled: boolean;
  dark?: boolean; // for the mobile menu (always dark bg)
}

export function Logo({ scrolled, dark = false }: LogoProps) {
  return (
    <button
      onClick={() => scrollToSection("home")}
      className="flex cursor-pointer items-center gap-3 border-none bg-transparent"
      aria-label="Go to home"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-linear-to-br from-[#1A3A6B] to-[#2954A3] shadow-[0_2px_12px_rgba(26,58,107,0.25)]">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path
            d="M13 3L3 8.5V13C3 18.25 7.4 23.15 13 24.5C18.6 23.15 23 18.25 23 13V8.5L13 3Z"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M10 13L12.5 15.5L17 11"
            stroke="#E8961E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="text-left">
        <div
          className={`font-display text-lg leading-tight transition-colors duration-300 ${
            scrolled || dark ? "text-primary" : "text-white"
          }`}
        >
          The Rock School
        </div>
        <div
          className={`font-body text-[0.7rem] uppercase tracking-[0.08em] transition-colors duration-300 ${
            scrolled || dark ? "text-text-muted" : "text-white/75"
          }`}
        >
          Building Strong Foundations
        </div>
      </div>
    </button>
  );
}
