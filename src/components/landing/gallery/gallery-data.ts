import { IMAGES } from "@/lib/images";

export interface GalleryItem {
  img: string;
  alt: string;
  category: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    img: IMAGES.classroom,
    alt: "Students in classroom",
    category: "Classroom",
  },
  {
    img: IMAGES.student_drawing,
    alt: "Student drawing with ruler",
    category: "Classroom",
  },
  { img: IMAGES.soccer, alt: "Student with soccer ball", category: "Sports" },
  { img: IMAGES.running, alt: "Students running", category: "Activities" },
  {
    img: IMAGES.graduation_solo,
    alt: "Graduate in academic gown",
    category: "Events",
  },
  {
    img: IMAGES.graduation_group,
    alt: "Group of graduates",
    category: "Events",
  },
  { img: IMAGES.graduation_girl, alt: "Graduate student", category: "Events" },
  {
    img: IMAGES.graduates_celebrate,
    alt: "Graduates celebrating",
    category: "Events",
  },
  { img: IMAGES.boys_soccer, alt: "Boys playing soccer", category: "Sports" },
  {
    img: IMAGES.children_running,
    alt: "Children running",
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
