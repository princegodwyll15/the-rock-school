"use client";

import { NAV_LINKS, scrollToSection } from "./nav-links";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-500 flex flex-col overflow-y-auto p-6 transition-transform duration-300 ease-in-out lg:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{
        background: "linear-gradient(160deg, #1A3A6B 0%, #0f2447 100%)",
        pointerEvents: open ? "auto" : "none",
      }}
      aria-hidden={!open}
    >
      {/* Top bar */}
      <div className="mb-12 flex items-center justify-between">
        <span className="font-display text-xl text-white">The Rock School</span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="cursor-pointer border-none bg-transparent p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Links */}
      <nav className="flex flex-col gap-1">
        {NAV_LINKS.map((link, i) => (
          <button
            key={link}
            onClick={() => {
              scrollToSection(link);
              onClose();
            }}
            className="animate-slide-in cursor-pointer border-none border-b border-white/10 bg-transparent py-3.5 text-left font-body text-2xl font-medium text-white"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {link}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-10">
        <button
          onClick={() => {
            scrollToSection("Contact");
            onClose();
          }}
          className="btn-primary w-full cursor-pointer"
        >
          Contact Us
        </button>
        <p className="mt-6 text-center font-body text-[0.8125rem] text-white/50">
          📍 The Rock School, Ghana
          <br />
          📞 +233 000 000 0000
        </p>
      </div>
    </div>
  );
}
