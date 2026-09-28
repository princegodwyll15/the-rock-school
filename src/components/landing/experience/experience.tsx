import { EXPERIENCES } from "./experience-data";
import { ExperienceCard } from "./experience-card";

export function Experience() {
  return (
    <section className="bg-surface px-6 py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <div className="section-label mb-5 justify-center">School Life</div>
          <h2 className="mb-4 font-display text-[clamp(1.875rem,4vw,2.875rem)] text-primary">
            The Rock School Experience
          </h2>
          <p className="mx-auto max-w-140 font-body text-[1.05rem] leading-[1.75] text-text-muted">
            A complete education that develops the mind, character, creativity,
            and body of every student.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard key={exp.label} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
