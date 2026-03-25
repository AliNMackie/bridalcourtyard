
"use client";

import { Section } from "./ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <Section id="boutique" className="bg-white py-24 md:py-32 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="eyebrow">The Boutique</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
              Step Inside
            </h2>
          </div>
          
          <div className="space-y-6 text-charcoal/80 font-body text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Our home is the historic Tannery Building at St Andrew&apos;s Square &mdash; a chic, elegant setting that always feels relaxed. From the moment you arrive, we want you to feel at ease.
            </p>
            <p>
              We listen to your vision, then we take you somewhere unexpected. Lindsay has a gift for pulling the wildcard dress &mdash; the one you&apos;d never have chosen yourself, that turns out to be the one you&apos;ll never want to take off.
            </p>
            <p>
              Fizz, good conversation, and no pressure. That&apos;s the appointment.
            </p>
          </div>

          {/* Quote Block */}
          <div className="bg-duck-egg p-8 md:p-10 border-l-[3px] border-luxury-gold shadow-sm">
            <p className="font-display text-lg md:text-xl italic text-charcoal leading-relaxed">
              &quot;She pulled a dress I never would have picked. It was perfect. I said yes on the spot.&quot;
            </p>
            <p className="font-body text-[13px] uppercase tracking-[0.15em] text-charcoal mt-4 font-medium">
              &mdash; Google Review ★★★★★
            </p>
          </div>

          <div>
            <Link 
              href="#contact" 
              className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-luxury-gold font-medium border-b border-transparent hover:border-luxury-gold transition-all py-1 inline-block"
            >
              Book Your Appointment &rarr;
            </Link>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative aspect-[3/4] bg-luxury-gray overflow-hidden shadow-2xl"
        >
          <Image
            src="https://bridalcourtyard.com/wp-content/uploads/2022/09/WINDOW-683x1024.jpg"
            alt="The Bridal Courtyard boutique at St Andrew's Square Glasgow"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
        </motion.div>
      </div>
    </Section>
  );
}
