import { About } from "@/components/landing/abount/about";
import { Contact } from "@/components/landing/contact/contact";
import { Events } from "@/components/landing/events/events";
import { Experience } from "@/components/landing/experience/experience";
import Footer from "@/components/landing/footer/footer";
import { Gallery } from "@/components/landing/gallery/gallery";
import { Hero } from "@/components/landing/hero/hero-section";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Experience />
      <Gallery />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
