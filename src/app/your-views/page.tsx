
import YourViewsContent from "@/components/YourViewsContent";
import { Metadata } from "next";
import TESTIMONIALS_DATA from "@/data/content/testimonials.json";
const TESTIMONIALS = Array.isArray(TESTIMONIALS_DATA) ? TESTIMONIALS_DATA : TESTIMONIALS_DATA.items;

export const metadata: Metadata = {
  title: "Your Views | Recent Bride Reviews Glasgow | Bridal Courtyard",
  description: "Read what our brides say about their experience at The Bridal Courtyard. Proud to hold 143 five-star Google reviews.",
};

export default function YourViewsPage() {
  return (
    <main className="pt-20">
      <YourViewsContent reviews={TESTIMONIALS} />
    </main>
  );
}
