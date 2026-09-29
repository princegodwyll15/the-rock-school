import { CONTACT_INFO } from "./contact-info";

export function ContactInfo() {
  return (
    <div className="mb-12 flex flex-col gap-6">
      {CONTACT_INFO.map((item) => (
        <div key={item.label} className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/[0.07]">
            {item.icon}
          </div>
          <div>
            <div className="mb-1 font-body text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-text-muted">
              {item.label}
            </div>
            {item.href ? (
              <a
                href={item.href}
                className="font-body text-base leading-normal font-medium text-primary no-underline hover:underline"
              >
                {item.value}
              </a>
            ) : (
              <p className="m-0 font-body text-base leading-normal font-medium whitespace-pre-line text-primary">
                {item.value}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
