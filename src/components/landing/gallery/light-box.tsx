"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { GalleryItem } from "./gallery-data";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const current = items[index];
  const total = items.length;
  const prev = () => onNavigate((index - 1 + total) % total);
  const next = () => onNavigate((index + 1) % total);

  // Keyboard nav + body scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  });

  const navBtn =
    "absolute top-1/2 -translate-y-1/2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none bg-white/10 text-white transition-colors hover:bg-white/20";

  return (
    <div
      className="fixed inset-0 z-600 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${current.alt}`}
    >
      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous photo"
        className={`${navBtn} left-4`}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M12.5 5L7.5 10l5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Image
        src={current.img.replace("w=900", "w=1400")}
        alt={current.alt}
        width={1400}
        height={933}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-auto max-w-[90vw] rounded-xl object-contain shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
        priority
      />

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next photo"
        className={`${navBtn} right-4`}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M7.5 5l5 5-5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close viewer"
        className="absolute top-5 right-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-none bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M14 4L4 14M4 4l10 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-sm text-white/60">
        {index + 1} / {total}
      </div>
    </div>
  );
}
