"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { scrollToSection } from "@/components/layout/nav-links";
import { HeroStats } from "./hero-stats";
import { ScrollIndicator } from "./scroll-indicator";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden bg-primary-dark"
    >
      {/* Background */}
      <Image
        src={IMAGES.hero}
        alt="Students at The Rock School"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(17,40,80,0.88)_0%,rgba(26,58,107,0.72)_50%,rgba(26,58,107,0.18)_100%)]" />
      {/* Decorative accent wash */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-[45%]"
        style={{
          background:
            "linear-gradient(to left, rgba(232,150,30,0.08) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-30 pb-20">
        <div className="max-w-170">
          {/* Section label */}
          <div className="section-label mb-6 flex items-center gap-3 text-accent-light">
            <span className="block h-0.5 w-7 bg-accent-light" />
            Welcome to The Rock School
          </div>

          {/* Heading */}
          <h1 className="mb-6 font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.1] text-white">
            Building Strong Foundations for a{" "}
            <span className="text-accent-light italic">Brighter Future</span>
          </h1>

          {/* Subtext */}
          <p className="mb-10 max-w-140 font-body text-[clamp(1rem,2vw,1.175rem)] leading-[1.75] text-white/82">
            At The Rock School, we provide a nurturing learning environment
            where students are encouraged to learn, grow, discover their
            potential and prepare for the future.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="btn-primary flex cursor-pointer items-center gap-2 px-8 py-3.75 text-base"
            >
              Discover Our School
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3.75 9h10.5M9.75 4.5L14.25 9l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-secondary cursor-pointer px-8 py-3.75 text-base"
            >
              Contact Us
            </button>
          </div>

          <HeroStats />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
