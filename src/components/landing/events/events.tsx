"use client";

import { useState } from "react";
import { EVENTS } from "./event-data";
import { EventsToggle } from "./event-toggle";
import { EventCard } from "./event-card";

type EventsTab = "upcoming" | "past";

export function Events() {
  const [tab, setTab] = useState<EventsTab>("upcoming");

  const shown = EVENTS.filter((e) =>
    tab === "upcoming" ? e.upcoming : !e.upcoming,
  );

  return (
    <section
      id="events"
      className="bg-surface px-6 py-[clamp(64px,10vw,120px)]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header + toggle */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="section-label mb-5">Events</div>
            <h2 className="font-display text-[clamp(1.875rem,4vw,2.875rem)] text-primary">
              School Events
            </h2>
          </div>
          <EventsToggle tab={tab} onChange={setTab} />
        </div>

        {/* Cards */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {shown.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <button className="btn-outline inline-flex cursor-pointer items-center gap-2">
            View All Events
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
    </section>
  );
}
