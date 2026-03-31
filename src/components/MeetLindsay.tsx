
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";

import Image from "next/image";

export default function MeetLindsay() {
  return (
    <Section id="lindsay" className="bg-blush py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Image Column (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] md:aspect-auto md:h-[600px] bg-duck-egg flex items-center justify-center shadow-xl order-2 md:order-1 overflow-hidden"
        >
          <Image
            src="/images/lindsay.jpg"
            alt="Lindsay, founder of The Bridal Courtyard"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle light leak for cinematic feel */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-luxury-gold/5 pointer-events-none mix-blend-screen" />
        </motion.div>

        {/* Text Column (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 order-1 md:order-2"
        >
          <div className="space-y-4">
            <span className="eyebrow !text-charcoal/60">The woman behind the boutique</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-charcoal leading-tight italic">
              Lindsay
            </h2>
            <p className="font-body text-[12px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
              Founder & Lead Stylist
            </p>
            <div className="w-16 h-[1px] bg-luxury-gold" />
          </div>
          
          <div className="space-y-6 text-charcoal/80 font-body text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              I opened The Bridal Courtyard because I wanted brides to have an appointment that actually felt like them &mdash; not a production, not a sales pitch, just an honest conversation and a really good eye.
            </p>
            <p>
              I&apos;ve been styling brides for years and I still get the same feeling every time. The moment a bride puts on the right dress &mdash; even the one she said she&apos;d never try &mdash; everything changes. That&apos;s what we&apos;re here for.
            </p>
            <p>
              Every appointment with me is personal. You get my full attention, my honest opinion, and a glass of fizz.
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-body text-[15px] italic text-charcoal/70">
              Mentioned by name in over 100 of our 143 Google reviews.
            </p>
            <Link 
              href="#contact" 
              className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-luxury-gold font-medium border-b border-transparent hover:border-luxury-gold transition-all py-1 inline-block"
            >
              Book With Lindsay &rarr;
            </Link>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
