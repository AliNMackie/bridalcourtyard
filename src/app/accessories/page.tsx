import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessories | Jimmy Choo Bridal Shoes Glasgow | The Bridal Courtyard",
  description: "Complete your bridal look with Jimmy Choo shoes and carefully curated accessories at The Bridal Courtyard, Glasgow.",
};

export default function AccessoriesPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-charcoal text-white py-24 md:py-32 overflow-hidden">
        <Image
          src="/boutique.png"
          alt="Jimmy Choo Bridal Accessories"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
        />
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8">
          <span className="eyebrow !text-luxury-gold">A Unique Partnership</span>
          <h1 className="font-display text-5xl md:text-7xl leading-tight">
            Jimmy Choo <br />
            <span className="italic font-serif">&amp; Accessories</span>
          </h1>
          <div className="gold-rule gold-rule-center" />
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            At The Bridal Courtyard, we love to help you pull your entire bridal look together. For us, that means show-stopping shoes.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <div className="relative aspect-square bg-duck-egg overflow-hidden shadow-2xl">
            <Image
              src="/gallery-detail.png"
              alt="Bridal shoe detail"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="eyebrow">&apos;I Do&apos; in Choo</span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
                The Perfect <br />
                <span className="italic font-serif">Finishing Touch</span>
              </h2>
              <div className="gold-rule" />
            </div>

            <div className="space-y-6 font-body text-charcoal/70 text-base md:text-lg leading-relaxed">
              <p>
                Pull together your full bridal look by trying on the Jimmy Choo bridal collection with all of our gowns. We carry a curated selection of their most beautiful styles in-store.
              </p>
              <p>
                Once you&apos;ve found your perfect pair, we can arrange a private appointment for you at the Jimmy Choo boutique to place your order.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <span className="font-display text-3xl text-luxury-gold">Try</span>
                <p className="font-body text-xs uppercase tracking-widest text-charcoal/50">In-store with your gown</p>
              </div>
              <div className="space-y-2">
                <span className="font-display text-3xl text-luxury-gold">Order</span>
                <p className="font-body text-xs uppercase tracking-widest text-charcoal/50">Via private appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veils & Extras */}
      <section className="bg-duck-egg/30 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-10">
          <span className="eyebrow">Beyond The Dress</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            Veils &amp; Finishing Touches
          </h2>
          <div className="gold-rule gold-rule-center" />
          <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            We also offer a beautiful selection of veils and hair accessories to complete your bridal look. From cathedral-length drama to delicate fingertip veils, we&apos;ll help you find the perfect complement to your gown.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-charcoal text-white px-8 py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-luxury-gold transition-all duration-300 group"
          >
            Book Your Appointment <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
