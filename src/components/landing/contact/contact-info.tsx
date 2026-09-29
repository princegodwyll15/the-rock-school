import type { ReactNode } from "react";

export interface ContactInfoItem {
  icon: ReactNode;
  label: string;
  value: string;
  href: string | null;
}

const stroke = "var(--color-primary)";

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2C8.24 2 6 4.24 6 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"
          stroke={stroke}
          strokeWidth="1.6"
        />
      </svg>
    ),
    label: "Our Address",
    value: "The Rock School, Accra, Ghana",
    href: "https://maps.google.com",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M4 4h3l1.5 3.5-2 1.5a11 11 0 005.5 5.5l1.5-2L17 14v3a1 1 0 01-1 1C8.27 18 4 13.73 4 9a1 1 0 011-1"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Phone Number",
    value: "+233 000 000 0000",
    href: "tel:+233000000000",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M4 4h14a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm0 0l7 8 7-8"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Email Address",
    value: "info@therockschool.edu.gh",
    href: "mailto:info@therockschool.edu.gh",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke={stroke} strokeWidth="1.6" />
        <path
          d="M11 6v5l3 3"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Opening Hours",
    value: "Mon – Fri: 7:00 AM – 5:00 PM\nSat: 8:00 AM – 12:00 PM",
    href: null,
  },
];
