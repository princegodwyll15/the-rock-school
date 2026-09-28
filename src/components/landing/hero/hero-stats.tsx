import { HERO_STATS } from "./stats";

export function HeroStats() {
  return (
    <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/15 pt-12">
      {HERO_STATS.map((stat) => (
        <div key={stat.label}>
          <div className="font-display text-[2rem] leading-none text-accent-light">
            {stat.value}
          </div>
          <div className="mt-1 font-body text-[0.8125rem] tracking-[0.04em] text-white/60">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
