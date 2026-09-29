export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "#", // Replace with the school's actual URL
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "Twitter/X",
    href: "#",
    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 3h11A3.5 3.5 0 0121 6.5v11a3.5 3.5 0 01-3.5 3.5h-11A3.5 3.5 0 013 17.5v-11A3.5 3.5 0 016.5 3z",
  },
] as const;

export const CONTACT_ITEMS = [
  { icon: "📍", text: "The Rock School, Accra, Ghana" },
  { icon: "📞", text: "+233 000 000 0000", href: "tel:+233000000000" },
  {
    icon: "✉️",
    text: "info@therockschool.edu.gh",
    href: "mailto:info@therockschool.edu.gh",
  },
  { icon: "🕐", text: "Mon – Fri: 7:00 AM – 5:00 PM" },
] as const;

export const footerHeading =
  'mb-6 font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.1em] text-white'