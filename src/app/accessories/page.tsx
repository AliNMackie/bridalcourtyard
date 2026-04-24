import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessories | Bridal Shoes & Jewellery Glasgow | The Bridal Courtyard",
  description: "Complete your bridal look with Jimmy Choo shoes and Jade Oi Studio jewellery at The Bridal Courtyard, Glasgow. Request a Styling Appointment to view our full accessories collection.",
};

export default function AccessoriesPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-charcoal text-white py-24 md:py-32 overflow-hidden">
        <Image
          src="/boutique.png"
          alt="Bridal Accessories"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
        />
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8">
          <span className="eyebrow !text-luxury-gold">Complete Your Look</span>
          <h1 className="font-display text-5xl md:text-7xl leading-tight">
            Accessories
          </h1>
          <div className="gold-rule gold-rule-center" />
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            At The Bridal Courtyard, we love to help you pull your entire bridal look together. For us that means a few things on the must have list — a beautiful veil, statement earrings and show stopping shoes.
          </p>
          <p className="font-body text-sm text-white/50 uppercase tracking-[0.2em]">
            Request your appointment to view our accessories via the Booking Request page, choose &lsquo;Styling Appointment&rsquo;
          </p>
        </div>
      </section>

      {/* Jade Oi Studio */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="eyebrow">Jewellery & Accessories</span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
                Jade Oi Studio
              </h2>
              <div className="gold-rule" />
            </div>

            <div className="space-y-6 font-body text-charcoal/70 text-base md:text-lg leading-relaxed">
              <p>
                The team at Brooklyn-based Jade Oi are obsessed with designing and curating pieces with their signature effortless and approachable style.
              </p>
              <p>
                Constantly inspired by the diversity, colours, and love of the bridal community, Jade Oi Studio aims to bring a breath of femininity and sophistication to brides. Bold in simplicity, their collection transcends conventions, infusing each piece with contemporary details, sophistication and an undercurrent of playful charm.
              </p>
            </div>
          </div>

          <div className="relative aspect-[3/4] bg-duck-egg overflow-hidden shadow-2xl">
            {/* TODO: Add Jade Oi Studio image when supplied — place in /public/images/accessories/ */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-2xl text-charcoal/20 italic">Jade Oi Studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Jimmy Choo */}
      <section className="bg-duck-egg/30 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          <div className="relative aspect-square bg-duck-egg overflow-hidden shadow-2xl">
            <Image
              src="/images/home/accessories/Window Choo Shoes.webp"
              alt="Jimmy Choo bridal shoes at The Bridal Courtyard"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="eyebrow">&lsquo;I Do&rsquo; in Choo</span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
                Jimmy Choo
              </h2>
              <div className="gold-rule" />
            </div>

            <div className="space-y-6 font-body text-charcoal/70 text-base md:text-lg leading-relaxed">
              <p>
                Pull together your full look by trying on the Jimmy Choo bridal collection shoes with all of our gowns. If you love what you see, then our friends at Jimmy Choo will then do the rest by taking great care of you at your own appointment.
              </p>
              <p>
                Is there anything more special than saying &lsquo;I do&rsquo; in Choo?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Veils & Extras */}
      <section className="bg-white py-24 md:py-32">
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
            Book Your Styling Appointment <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
