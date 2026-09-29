"use client";

type EventsTab = "upcoming" | "past";

interface EventsToggleProps {
  tab: EventsTab;
  onChange: (tab: EventsTab) => void;
}

const TABS: { value: EventsTab; label: string }[] = [
  { value: "upcoming", label: "Upcoming" },
  { value: "past", label: "Past Events" },
];

export function EventsToggle({ tab, onChange }: EventsToggleProps) {
  return (
    <div className="flex gap-1 rounded-[10px] bg-surface-alt p-1">
      {TABS.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          aria-pressed={tab === value}
          className={`cursor-pointer rounded-lg border-none px-4.5 py-2 font-body text-sm font-medium transition-all duration-200 ${
            tab === value
              ? "bg-white text-primary shadow-card"
              : "bg-transparent text-text-muted hover:text-primary"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
