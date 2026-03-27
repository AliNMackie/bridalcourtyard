import MeetLindsay from "@/components/MeetLindsay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our People | In-House Stylists Glasgow | Bridal Courtyard",
  description: "Meet Lindsay and our team of expert bridal consultants. Experienced, organized, and attentive, we're dedicated to helping you find your perfect dress.",
};

export default function OurPeoplePage() {
  return (
    <main className="pt-20">
      <MeetLindsay />
    </main>
  );
}
