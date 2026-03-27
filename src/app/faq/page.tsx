import { Metadata } from "next";
import { FAQ_ITEMS } from "@/data/faqs";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions | The Bridal Courtyard Glasgow",
  description: "Everything you need to know before visiting The Bridal Courtyard. Appointments, pricing, what to wear, parking, and more.",
};

export default function FAQPage() {
  return (
    <main className="pt-20">
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <div className="text-center space-y-6 mb-20">
            <span className="eyebrow">Questions & Answers</span>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal leading-tight">
              FAQ
            </h1>
            <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know before your visit. If you have a question that&apos;s not answered here, please don&apos;t hesitate to get in touch.
            </p>
            <div className="gold-rule gold-rule-center" />
          </div>

          <FAQAccordion items={FAQ_ITEMS} />

        </div>
      </section>
    </main>
  );
}
