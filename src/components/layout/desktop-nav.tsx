"use client";

import { NAV_LINKS, scrollToSection } from "./nav-links";

interface DesktopNavProps {
  scrolled: boolean;
}

export function DesktopNav({ scrolled }: DesktopNavProps) {
  return (
    <nav className="hidden items-center gap-9 lg:flex">
      {NAV_LINKS.map((link) => (
        <button
          key={link}
          onClick={() => scrollToSection(link)}
          className={`cursor-pointer border-none bg-transparent py-1 font-body text-[0.9375rem] font-medium transition-colors duration-200 hover:text-accent ${
            scrolled ? "text-text" : "text-white/90"
          }`}
        >
          {link}
        </button>
      ))}

      <button
        onClick={() => scrollToSection("Contact")}
        className="btn-primary cursor-pointer px-5.5 py-2.5 text-sm"
      >
        Contact Us
      </button>
    </nav>
  );
}
