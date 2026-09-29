import Image from "next/image";
import { IMAGES } from "@/lib/images";

export function AboutImage() {
  return (
    <div className="relative">
      <div className="aspect-4/5 overflow-hidden rounded-[20px] shadow-card">
        <Image
          src={IMAGES.about}
          alt="Students learning in a classroom"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-5 -right-5 flex max-w-55 items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-[0_8px_40px_rgba(26,58,107,0.16)]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="var(--color-accent)"
            />
          </svg>
        </div>
        <div>
          <div className="font-display text-2xl leading-none text-primary">
            A+
          </div>
          <div className="mt-0.5 font-body text-[0.8rem] text-text-muted">
            Academic Excellence
          </div>
        </div>
      </div>
    </div>
  );
}
