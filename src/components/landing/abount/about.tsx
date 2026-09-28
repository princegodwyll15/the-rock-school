"use client";

import { scrollToSection } from "@/components/layout/nav-links";
import { AboutImage } from "./about-image";
import { ValueCards } from "./value-cards";

export function About() {
  return (
    <section id="about" className="bg-white px-6 py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          <AboutImage />

          <div>
            <div className="section-label mb-5">About Us</div>

            <h2 className="mb-5 font-display text-[clamp(2rem,4vw,3rem)] text-primary">
              Welcome to The Rock School
            </h2>

            <p className="mb-4 font-body text-[1.05rem] leading-[1.8] text-text-muted">
              The Rock School is committed to delivering quality education that
              shapes the whole child — academically, morally, and socially. We
              believe every child carries unique gifts waiting to be discovered
              and nurtured.
            </p>
            <p className="mb-10 font-body text-[1.05rem] leading-[1.8] text-text-muted">
              Our dedicated team of educators creates an environment where
              curiosity is celebrated, discipline is taught with love, and every
              student is set up for a confident, successful future.
            </p>

            <ValueCards />

            <button
              onClick={() => scrollToSection("contact")}
              className="btn-outline flex cursor-pointer items-center gap-2"
            >
              Learn More About Us
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
          </div>
        </div>
      </div>
    </section>
  );
}
