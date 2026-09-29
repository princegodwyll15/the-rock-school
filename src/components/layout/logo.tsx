"use client";

import { scrollToSection } from "./nav-links";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

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
        <Image
          src={IMAGES.crest}
          alt="The Rock School Crest"
          width={26}
          height={26}
        />
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
          IN GOD WE TRUST
        </div>
      </div>
    </button>
  );
}
