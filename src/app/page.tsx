
import Hero from "@/components/Hero";
import About from "@/components/About";
import Designers from "@/components/Designers";
import ReviewsSection from "@/components/ReviewsSection";
import MeetLindsay from "@/components/MeetLindsay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Bridal Courtyard | Luxury Bridal Boutique Glasgow | Designer Wedding Gowns",
  description: "Glasgow's premier bridal boutique in the historic St Andrew's Square. Exclusive designer collections including Justin Alexander Signature, Truvelle, and Alyssa Kristin. Book your private appointment today.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Designers />
      <ReviewsSection />
      <MeetLindsay />
    </main>
  );
}
