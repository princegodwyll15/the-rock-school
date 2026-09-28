"use client";

import { useState } from "react";
import { GALLERY_CATS, GALLERY_ITEMS } from "./gallery-data";
import { GalleryItemCard } from "./gallery-item";
import { Lightbox } from "./light-box";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  return (
    <section id="gallery" className="bg-white px-6 py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <div className="section-label mb-5 justify-center">Photo Gallery</div>
          <h2 className="mb-4 font-display text-[clamp(1.875rem,4vw,2.875rem)] text-primary">
            Life at The Rock School
          </h2>
          <p className="mx-auto max-w-135 font-body text-[1.05rem] leading-[1.75] text-text-muted">
            Explore moments from our classrooms, activities, celebrations and
            school community.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {GALLERY_CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer rounded-full border-[1.5px] px-5 py-2 font-body text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-text-muted hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filtered.map((item, idx) => (
            <GalleryItemCard
              key={item.img + idx}
              item={item}
              featured={idx === 0}
              onOpen={() => setLightboxIdx(idx)}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveCategory("All")}
            className="btn-outline inline-flex cursor-pointer items-center gap-2"
          >
            View Full Gallery
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

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onNavigate={setLightboxIdx}
        />
      )}
    </section>
  );
}
