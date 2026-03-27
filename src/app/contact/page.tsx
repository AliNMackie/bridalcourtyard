import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book | Bridal Appointment Request Glasgow",
  description: "Request your private bridal appointment at The Bridal Courtyard. We offer exclusive use of our boutique for a memorable and stress-free search for your dream gown.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  );
}
