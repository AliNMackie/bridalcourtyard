
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <Section id="home" className="relative h-screen min-h-[700px] p-0 overflow-hidden flex items-center">
      {/* Background Image with Parallax-like Zoom */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero.png"
          alt="Luxury Bridal Boutique Glasgow"
          fill
          className="object-cover"
          priority
        />
        {/* Multi-layered Premium Overlays */}
        <div className="absolute inset-0 bg-charcoal/30 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/20" />
        <div className="absolute inset-0 bg-sage/5 mix-blend-multiply" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="eyebrow !text-white !tracking-[0.3em] !text-[11px] drop-shadow-sm uppercase">Exclusive by Appointment &middot; Glasgow</span>
              <h1 className="text-7xl md:text-9xl !text-white mb-8 leading-[0.9] italic font-display tracking-tighter drop-shadow-2xl">
                Modern. <br />
                Elegant. <br />
                <span className="font-light">Confidently Chic.</span>
              </h1>
            </div>

            <p className="font-body text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light drop-shadow-md">
              A carefully curated collection of designer bridal gowns in the heart of Glasgow&apos;s historic St Andrew&apos;s Square.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link
                href="/contact"
                className="bg-white text-charcoal px-10 py-5 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-sage hover:text-white transition-all duration-300 shadow-xl text-center"
              >
                Request Appointment
              </Link>
              <Link
                href="/designers"
                className="bg-transparent border border-white/40 text-white backdrop-blur-sm px-10 py-5 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-charcoal transition-all duration-300 text-center"
              >
                Explore Designers
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </Section>
  );
}
