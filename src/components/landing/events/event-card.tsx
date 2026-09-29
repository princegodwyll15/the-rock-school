import Image from "next/image";
import type { SchoolEvent } from "./event-data";

export function EventCard({ event }: { event: SchoolEvent }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[20px] bg-white shadow-card transition-all duration-250 hover:-translate-y-1 hover:shadow-hover">
      {/* Image + badges */}
      <div className="relative aspect-video overflow-hidden bg-surface">
        <Image
          src={event.img}
          alt={event.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />

        {/* Date badge */}
        <div
          className={`absolute top-4 left-4 min-w-13 rounded-xl px-3.5 py-2.5 text-center backdrop-blur-sm ${
            event.upcoming ? "bg-primary" : "bg-[rgba(90,90,114,0.9)]"
          }`}
        >
          <div className="font-display text-2xl leading-none text-white">
            {event.date.day}
          </div>
          <div className="mt-0.5 font-body text-[0.7rem] uppercase tracking-[0.08em] text-white/80">
            {event.date.month}
          </div>
        </div>

        {event.upcoming && (
          <div className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 font-body text-[0.7rem] font-semibold tracking-[0.06em] text-white">
            UPCOMING
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-display text-[1.2rem] text-primary">
          {event.title}
        </h3>
        <p className="mb-4 flex-1 font-body text-sm leading-[1.65] text-text-muted">
          {event.desc}
        </p>

        <div className="flex flex-col gap-2 border-t border-border pt-4">
          <div className="flex items-center gap-2">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M7.5 1.25a5 5 0 100 10 5 5 0 000-10zm0 2.5v3.125l2.5 1.25"
                stroke="var(--color-text-muted)"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-body text-[0.8125rem] text-text-muted">
              {event.time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M7.5 1.25C5.29 1.25 3.5 3.04 3.5 5.25c0 3.5 4 8.5 4 8.5s4-5 4-8.5c0-2.21-1.79-4-4-4zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                stroke="var(--color-text-muted)"
                strokeWidth="1.3"
              />
            </svg>
            <span className="font-body text-[0.8125rem] text-text-muted">
              {event.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
