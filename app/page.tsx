import { About } from "@/components/landing/abount/about";
import { Experience } from "@/components/landing/experience/experience";
import { Gallery } from "@/components/landing/gallery/gallery";
import { Hero } from "@/components/landing/hero/hero-section";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Experience />
      <Gallery />
    </main>
  );
}
