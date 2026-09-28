"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { HamburgerButton } from "./hamburger";
import { MobileMenu } from "./mobile-nav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close on Escape when menu is open
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-400 transition-all duration-300 ${
          scrolled
            ? "bg-white/97 py-3 shadow-[0_2px_20px_rgba(26,58,107,0.10)] backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Logo scrolled={scrolled} />
          <DesktopNav scrolled={scrolled} />
          <HamburgerButton
            scrolled={scrolled}
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
