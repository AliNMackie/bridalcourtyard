
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function MeetLindsay() {
  return (
    <Section id="lindsay" className="bg-sage-light py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Image Column (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] md:aspect-auto md:h-[600px] bg-white flex items-center justify-center shadow-xl order-2 md:order-1 overflow-hidden"
        >
          <Image 
            src="/about-cinematic.png" 
            alt="Lindsay at The Bridal Courtyard" 
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-sage/5" />
          <div className="absolute bottom-6 left-6 z-10">
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-white/80 bg-charcoal/40 backdrop-blur-sm px-4 py-2">
              Lindsay &mdash; Founder
            </span>
          </div>
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
              Our Story
            </h2>
            <div className="sage-rule mb-4" />
          </div>
          
          <div className="space-y-6 text-charcoal/80 font-body text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Hi There ! I love meeting women who come from various walks of life, all looking to fulfil the common goal of finding one dress to make them feel beautiful. No two appointments are ever the same so this inspires me to work hard to make each bride feel as unique as she is. Enthusiastic, organised and mildly rebellious, I focus on delivering a memorable and special experience for every bride who visits The Bridal Courtyard. 
            </p>
            <p>
              I am a Mum of 2 spirited (also rebellious) kids, I also love down time with my husband and family, enjoying the worlds of dinosaurs and dolls. Travel, food, wine and 80&apos;s movies complete my love list of life.
            </p>
          </div>

          <div className="space-y-6">
            <Link 
              href="/contact" 
              className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-sage font-medium border-b border-sage hover:text-charcoal hover:border-charcoal transition-all py-1 inline-block"
            >
              Book With Lindsay &rarr;
            </Link>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
