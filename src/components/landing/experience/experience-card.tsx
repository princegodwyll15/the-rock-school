import Image from "next/image";
import type { Experience } from "./experience-data";

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="group cursor-default overflow-hidden rounded-[20px] bg-white shadow-card transition-all duration-250 hover:-translate-y-1.5 hover:shadow-hover">
      <div className="relative aspect-video overflow-hidden bg-surface">
        <Image
          src={exp.img}
          alt={exp.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-400 group-hover:scale-[1.04]"
        />
      </div>

      <div className="px-6 pt-6 pb-7">
        <div className="mb-3 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-primary/8 text-primary">
            {exp.icon}
          </div>
          <span className="font-body text-xs font-semibold uppercase tracking-widesr text-accent">
            {exp.label}
          </span>
        </div>

        <h3 className="mb-2.5 font-display text-xl text-primary">
          {exp.title}
        </h3>
        <p className="font-body text-sm leading-[1.7] text-text-muted">
          {exp.desc}
        </p>
      </div>
    </div>
  );
}
