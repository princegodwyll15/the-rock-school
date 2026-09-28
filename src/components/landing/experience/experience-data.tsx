import type { ReactNode } from "react";
import { IMAGES } from "@/lib/images";

export interface Experience {
  img: string;
  icon: ReactNode;
  label: string;
  title: string;
  desc: string;
}

export const EXPERIENCES: Experience[] = [
  {
    img: IMAGES.classroom,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Academic Excellence",
    title: "Rigorous Learning",
    desc: "Our curriculum challenges students to think critically, solve problems creatively and build mastery in every subject.",
  },
  {
    img: IMAGES.student_drawing,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Creative Learning",
    title: "Arts & Expression",
    desc: "From drawing to music and drama, we nurture creativity as a core part of a balanced education.",
  },
  {
    img: IMAGES.soccer,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10zM2 12h20"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Sports & Activities",
    title: "Active & Healthy",
    desc: "Team sports, athletics and extracurricular activities develop teamwork, resilience and a healthy lifestyle.",
  },
  {
    img: IMAGES.graduation_group,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Student Development",
    title: "Growing Leaders",
    desc: "We cultivate leadership, moral character and social responsibility to prepare students for life beyond school.",
  },
];
