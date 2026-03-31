import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DESIGNERS_DATA from "@/data/content/designers.json";
const DESIGNERS = Array.isArray(DESIGNERS_DATA) ? DESIGNERS_DATA : DESIGNERS_DATA.items;
import { MoveRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Designers | Luxury Bridal Collections Glasgow | The Bridal Courtyard",
  description: "Explore our curated collection of world-class bridal designers including Justin Alexander Signature, Truvelle, Aesling, Anne Barge, Alyssa Kristin, and LAUDAE.",
};

export default function DesignersPage() {
  return (
    <main className="pt-20">
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center space-y-6 mb-20">
            <span className="eyebrow">Our Collections</span>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal leading-tight">
              Our Designers
            </h1>
            <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Each designer in our boutique has been hand-selected for their exceptional craftsmanship, unique aesthetic, and unwavering commitment to quality.
            </p>
            <div className="gold-rule gold-rule-center" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESIGNERS.map((designer) => (
              <Link
                key={designer.slug}
                href={`/${designer.slug}`}
                className="group block bg-white border border-gray-100 hover:border-luxury-gold/30 transition-all duration-500 hover-lift overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={designer.image}
                    alt={designer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
                      {designer.eyebrow}
                    </span>
                    <h3 className="font-display text-2xl text-white mt-1">
                      {designer.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed line-clamp-3">
                    {designer.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-luxury-gold uppercase tracking-widest">
                      {designer.priceRange}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-charcoal/50 group-hover:text-luxury-gold transition-colors">
                      View Collection <MoveRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
