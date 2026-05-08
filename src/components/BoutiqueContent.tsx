
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BoutiqueContent() {
  return (
    <Section id="boutique-tour" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4 flex flex-col items-center">
              <span className="eyebrow">Our Space</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal">The Experience</h2>
              <div className="gold-rule" />
            </div>

            <div className="space-y-6 text-charcoal/70 font-body text-base md:text-lg leading-relaxed">
              <p>
                Our boutique is designed to be a sanctuary. Located in the historic St Andrew&apos;s Square, we offer a private, light-filled space where you can explore our collections in peace.
              </p>
              <p>
                When you book an appointment with us, you have exclusive use of the boutique. No crowds, no pressure — just you, your loved ones, and a curated selection of the world&apos;s finest bridal gowns.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <span className="font-display text-3xl text-luxury-gold">Private</span>
                <p className="font-body text-xs uppercase tracking-widest text-charcoal/50">Consultations</p>
              </div>
              <div className="space-y-2">
                <span className="font-display text-3xl text-luxury-gold">Exclusive</span>
                <p className="font-body text-xs uppercase tracking-widest text-charcoal/50">Collections</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Placeholder Image Grid for upcoming boutique photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-20 md:mt-32 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] bg-duck-egg overflow-hidden"
          >
            {/* TODO: Replace src with new boutique space photo once photoshoot is complete */}
            <Image
              src="/images/home/DSC06307.jpg"
              alt="Bridal gown editorial photography (Placeholder for Boutique space)"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] bg-duck-egg overflow-hidden md:mt-24"
          >
            {/* TODO: Replace src with new boutique interior photo once photoshoot is complete */}
            <Image
              src="/images/home/DSC06414.jpg"
              alt="Bridal gown editorial photography (Placeholder for Boutique interior)"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
