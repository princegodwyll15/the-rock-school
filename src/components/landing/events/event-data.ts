import { IMAGES } from "@/lib/images";

export interface SchoolEvent {
  img: string;
  date: { day: string; month: string; year: string };
  title: string;
  desc: string;
  location: string;
  time: string;
  upcoming: boolean;
}

export const EVENTS: SchoolEvent[] = [
  {
    img: IMAGES.school,
    date: { day: "15", month: "Oct", year: "2026" },
    title: "Parent-Teacher Meeting",
    desc: "An important session for parents and teachers to review student progress and discuss term targets.",
    location: "Main Hall, The Rock School",
    time: "9:00 AM – 12:00 PM",
    upcoming: true,
  },
  {
    img: IMAGES.sports_team,
    date: { day: "28", month: "Oct", year: "2026" },
    title: "School Sports Day",
    desc: "Annual inter-class athletics competition featuring track events, field sports and team relays.",
    location: "School Sports Ground",
    time: "8:00 AM – 4:00 PM",
    upcoming: true,
  },
  {
    img: IMAGES.culture,
    date: { day: "20", month: "Nov", year: "2026" },
    title: "Cultural Day Celebration",
    desc: "A vibrant celebration of Ghanaian culture — traditional dress, music, dance and cuisine from all regions.",
    location: "School Assembly Ground",
    time: "10:00 AM – 3:00 PM",
    upcoming: true,
  },
  {
    img: IMAGES.graduates_celebrate,
    date: { day: "12", month: "Dec", year: "2026" },
    title: "Graduation Ceremony",
    desc: "Annual graduation ceremony celebrating the achievements of our graduating class. Families warmly invited.",
    location: "Main Auditorium",
    time: "2:00 PM – 6:00 PM",
    upcoming: true,
  },
  {
    img: IMAGES.hero,
    date: { day: "14", month: "Aug", year: "2026" },
    title: "Open Day & School Tour",
    desc: "Prospective families explored the school, met teachers and learned about our academic programmes.",
    location: "The Rock School Campus",
    time: "9:00 AM – 1:00 PM",
    upcoming: false,
  },
  {
    img: IMAGES.graduation_award,
    date: { day: "30", month: "Jul", year: "2026" },
    title: "End of Term Awards",
    desc: "Students recognised for outstanding academic achievement, leadership and exemplary character.",
    location: "School Assembly Hall",
    time: "11:00 AM – 2:00 PM",
    upcoming: false,
  },
];
