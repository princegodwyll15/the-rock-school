import { IMAGES } from "@/lib/images";

export interface GalleryItem {
  img: string;
  alt: string;
  category: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    img: IMAGES.classroom,
    alt: "Preschool pupils raising their hands in class",
    category: "Classroom",
  },
  {
    img: IMAGES.preschool_group,
    alt: "Preschool pupils gathered for a school activity",
    category: "Classroom",
  },
  {
    img: IMAGES.sports_team,
    alt: "School football team on the sports field",
    category: "Sports",
  },
  {
    img: IMAGES.sports_activity,
    alt: "Pupils taking part in an outdoor sports activity",
    category: "Sports",
  },
  {
    img: IMAGES.graduation_group,
    alt: "Graduating pupils together in blue gowns",
    category: "Events",
  },
  {
    img: IMAGES.culture,
    alt: "Pupils posing in traditional Ghanaian clothing",
    category: "Events",
  },
  {
    img: IMAGES.cadets,
    alt: "School cadets standing in formation",
    category: "Activities",
  },
  {
    img: IMAGES.career_day,
    alt: "Pupils dressed as a pilot and a healthcare worker",
    category: "Activities",
  },
  {
    img: IMAGES.preschool_activity,
    alt: "Preschool pupils beside classroom activity displays",
    category: "Classroom",
  },
  {
    img: IMAGES.sports_coaching,
    alt: "Pupils gathered with their coach on the field",
    category: "Sports",
  },
  {
    img: IMAGES.sports_group,
    alt: "Pupils and staff posing together at a sports event",
    category: "Sports",
  },
  {
    img: IMAGES.graduation_award,
    alt: "Graduate receiving a certificate on stage",
    category: "Events",
  },
  {
    img: IMAGES.cultural_procession,
    alt: "Pupils parading in traditional clothing",
    category: "Events",
  },
  {
    img: IMAGES.career_group,
    alt: "Pupils wearing career day costumes",
    category: "Activities",
  },
  {
    img: IMAGES.dance,
    alt: "Pupils performing a dance in the school courtyard",
    category: "Activities",
  },
];

export const GALLERY_CATS = [
  "All",
  "Classroom",
  "Sports",
  "Activities",
  "Events",
] as const;
