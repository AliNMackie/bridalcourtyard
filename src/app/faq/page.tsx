import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | The Bridal Courtyard",
  description: "Find out more about our bridal appointments, sample sizes, Lead times, Alterations, and payment procedures.",
};

export default function FAQPage() {
  return (
    <main className="pt-20">
      <FAQ />
    </main>
  );
}
