
import Hero from "@/components/Hero";
import About from "@/components/About";
import BrandPhilosophy from "@/components/BrandPhilosophy";
import MeetLindsay from "@/components/MeetLindsay";
import Designers from "@/components/Designers";
import JimmyChooSection from "@/components/JimmyChooSection";
import ReviewsSection from "@/components/ReviewsSection";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Bridal Courtyard | Luxury Bridal Boutique Glasgow | Designer Wedding Gowns",
  description: "Glasgow's premier bridal boutique in the historic St Andrew's Square. Exclusive designer collections including Justin Alexander Signature, Truvelle, and Alyssa Kristin. Book your private appointment today.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <BrandPhilosophy />
      <MeetLindsay />
      <Designers />
      <JimmyChooSection />
      <ReviewsSection />
      <HowItWorks />
      <FAQ />
      <Contact />
    </main>
  );
}
