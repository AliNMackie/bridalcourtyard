
import Hero from "@/components/Hero";
import About from "@/components/About";
import Designers from "@/components/Designers";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Designers />
      <Contact />
    </main>
  );
}
