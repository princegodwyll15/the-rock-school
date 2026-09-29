"use client";

import { scrollToSection } from "@/components/layout/nav-links";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

export function Cta() {
  return (
    <section className="relative overflow-hidden px-6 py-[clamp(64px,10vw,120px)]">
      {/* Background */}
      <Image
        src={IMAGES.graduation_group}
        alt="School graduates"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-[rgba(17,40,80,0.94)] from-0% via-[rgba(26,58,107,0.88)] via-60% to-[rgba(26,58,107,0.78)]" />

      <div className="relative z-10 mx-auto max-w-200 text-center">
        <div className="section-label mb-6 justify-center text-accent-light">
          <span className="bg-accent-light" />
          Start Their Journey
        </div>

        <h2 className="mb-5 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-white">
          Give Your Child a Strong Foundation for the{" "}
          <span className="text-accent-light italic">Future</span>
        </h2>

        <p className="mx-auto mb-12 max-w-140 font-body text-[1.1rem] leading-[1.75] text-white/80">
          Discover how The Rock School can support your Child&apos;s educational
          journey and help them become the best version of themselves.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-primary cursor-pointer px-9 py-3.75 text-base"
          >
            Contact Us Today
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="btn-secondary cursor-pointer px-9 py-3.75 text-base"
          >
            Learn About The School
          </button>
        </div>
      </div>
    </section>
  );
}
