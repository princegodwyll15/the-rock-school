import { ContactInfo } from "./contact-card";
import { MapPlaceholder } from "./map-placeholder";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="section-label mb-5 justify-center">Contact</div>
          <h2 className="mb-4 font-display text-[clamp(1.875rem,4vw,2.875rem)] text-primary">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-125 font-body text-[1.05rem] leading-[1.75] text-text-muted">
            We&apos;d love to hear from you. Reach out and we&apos;ll get back
            to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          <div>
            <ContactInfo />
            <MapPlaceholder />
          </div>

          <div className="rounded-3xl bg-surface p-[clamp(28px,5vw,44px)]">
            <h3 className="mb-7 font-display text-2xl text-primary">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
