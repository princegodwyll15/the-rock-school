"use client";

import Image from "next/image";
import type { GalleryItem } from "./gallery-data";

interface GalleryItemProps {
  item: GalleryItem;
  featured: boolean;
  onOpen: () => void;
}

export function GalleryItemCard({ item, featured, onOpen }: GalleryItemProps) {
  return (
    <button
      onClick={onOpen}
      aria-label={`View photo: ${item.alt}`}
      className={`group relative cursor-pointer overflow-hidden rounded-[14px] bg-surface shadow-card transition-all duration-250 hover:scale-[1.02] hover:shadow-hover ${
        featured ? "aspect-square" : "aspect-4/3"
      }`}
    >
      <Image
        src={item.img}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-end bg-linear-to-t from-[rgba(17,40,80,0.6)] to-transparent p-4 opacity-0 transition-opacity duration-250 group-hover:opacity-100">
        <span className="font-body text-[0.8125rem] font-medium uppercase tracking-[0.06em] text-white/85">
          {item.category}
        </span>
      </div>
    </button>
  );
}
