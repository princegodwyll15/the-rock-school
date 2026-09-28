export const NAV_LINKS = [
  "Home",
  "About",
  "Gallery",
  "Events",
  "Contact",
] as const;

export function scrollToSection(id: string) {
  document
    .getElementById(id.toLowerCase())
    ?.scrollIntoView({ behavior: "smooth" });
}
