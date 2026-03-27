
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about" className="bg-sage-light py-24 md:py-32 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="eyebrow">Established 2017</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-charcoal leading-tight">
                Modern Elegance <br />
                <span className="italic">Redefined.</span>
              </h2>
              <div className="sage-rule" />
            </div>
            
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl font-light">
              We believe that finding your wedding dress should be as memorable as the day itself. Our collection is a tribute to the modern bride: confident, stylish, and unapologetically herself.
            </p>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="w-12 h-[1px] bg-sage" />
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-sage font-medium">
                The Bridal Courtyard
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] bg-white shadow-2xl overflow-hidden"
          >
            <Image
              src="/about-cinematic.png"
              alt="Inside our Glasgow Boutique"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-sage/5 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
