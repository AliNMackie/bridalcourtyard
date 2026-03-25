
import Hero from "@/components/Hero";
import About from "@/components/About";
import MeetLindsay from "@/components/MeetLindsay";
import Designers from "@/components/Designers";
import ReviewsSection from "@/components/ReviewsSection";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <MeetLindsay />
      <Designers />
      <ReviewsSection />
      <HowItWorks />
      <FAQ />
      <Contact />
    </main>
  );
}
