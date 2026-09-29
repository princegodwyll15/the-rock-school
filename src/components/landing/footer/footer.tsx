"use client";

import { NAV_LINKS } from "@/components/layout/nav-links";
import { CONTACT_ITEMS, footerHeading, SOCIAL_LINKS } from "./footer-data";

function FooterBrand() {
  return (
    <div className="max-w-75">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-[10px] bg-white/10">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M13 3L3 8.5V13C3 18.25 7.4 23.15 13 24.5C18.6 23.15 23 18.25 23 13V8.5L13 3Z"
              fill="white"
              fillOpacity="0.9"
            />
            <path
              d="M10 13L12.5 15.5L17 11"
              stroke="#E8961E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="font-display text-[1.15rem] text-white">
          The Rock School
        </span>
      </div>

      <p className="mb-7 font-display text-sm leading-7 text-white/60">
        Building strong academic foundations and shaping confident, responsible
        young leaders for a brighter Ghana and Africa.
      </p>

      <div className="flex gap-3">
        {SOCIAL_LINKS.map(({ label, href, path }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex size-9.5 items-center justify-center rounded-[9px] bg-white/80 text-white/70 transition-colors hover:bg-accent hover:text-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d={path}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

function FooterQuickLinks() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h4 className={footerHeading}>Quick Links</h4>

      <nav
        aria-label="Footer navigation"
        className="flex flex-col items-start gap-3"
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            type="button"
            onClick={() => scrollTo(link)}
            className="font-display text-sm text-white/60 transition-colors hover:text-accent-light"
          >
            {link}
          </button>
        ))}
      </nav>
    </div>
  );
}

function FooterContact() {
  return (
    <div>
      <h4 className={footerHeading}>Contact Us</h4>

      <div className="flex flex-col gap-3.5">
        {CONTACT_ITEMS.map((item) => (
          <div key={item.text} className="flex items-start gap-2.5">
            <span className="text-sm" aria-hidden="true">
              {item.icon}
            </span>

            {"href" in item ? (
              <a
                href={item.href}
                className="font-display text-sm leading-6 text-white/60 transition-colors hover:text-white/90"
              >
                {item.text}
              </a>
            ) : (
              <span className="font-display text-sm leading-6 text-white/60">
                {item.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterBottomBar() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-7 font-display text-[0.8125rem] text-white/40">
      <p>© {year} The Rock School. All Rights Reserved.</p>

      <div className="flex gap-6">
        {["Privacy Policy", "Terms of Use"].map((label) => (
          <a
            key={label}
            href="#" // Replace with the actual policy page
            className="transition-colors hover:text-white/70"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-primary-dark px-6 pb-8 pt-[clamp(48px,8vw,80px)] text-white/75">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12">
          <FooterBrand />
          <FooterQuickLinks />
          <FooterContact />
        </div>

        <FooterBottomBar />
      </div>
    </footer>
  );
}

export default Footer;
