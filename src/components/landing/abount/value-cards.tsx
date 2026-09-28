import { ABOUT_VALUES } from "./about-values";

export function ValueCards() {
  return (
    <div className="mb-10 flex flex-col gap-4">
      {ABOUT_VALUES.map((card) => (
        <div
          key={card.title}
          className="flex cursor-default items-start gap-4 rounded-xl bg-surface px-5 py-4.5 transition-shadow duration-200 hover:shadow-card"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white shadow-[0_2px_10px_rgba(26,58,107,0.08)]">
            {card.icon}
          </div>
          <div>
            <div className="mb-1 font-body text-[0.9375rem] font-semibold text-primary">
              {card.title}
            </div>
            <div className="font-body text-sm leading-[1.6] text-text-muted">
              {card.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
