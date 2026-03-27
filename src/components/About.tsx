
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] bg-luxury-gray"
        >
          <Image 
            src="/about-cinematic.png" 
            alt="Bridal Courtyard Atmosphere" 
            fill
            className="object-cover p-4"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-sage/20 -z-10" />
        </motion.div>

        <div className="flex flex-col justify-center space-y-12">
          <div className="space-y-6">
            <span className="eyebrow">Philosophy</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              An Elegant Rehearsal For Your Big Day
            </h2>
          </div>

          <div className="space-y-8 font-body font-light text-charcoal/80 text-lg leading-relaxed">
            <p>
              At The Bridal Courtyard, we want to help the modern bride create a wedding day look which is elegant, sophisticated and reflects their personality.
            </p>
            <p>
              Our beautifully curated collection of wedding gowns are exclusive to us here in Glasgow. We carefully source our designers to offer our brides something fresh, chic and truly unique.
            </p>
          </div>

          <div className="pt-4">
            <div className="sage-rule mb-8" />
            <div className="space-y-2">
              <p className="font-display text-2xl text-charcoal">Lindsay Jackson</p>
              <p className="font-body text-[11px] uppercase tracking-widest text-sage">Founder & Creative Director</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
