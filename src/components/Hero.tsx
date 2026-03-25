
"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop"
            alt="Bridal gown editorial photography"
            fill
            className="object-cover opacity-75"
            priority
            loading="eager"
          />
          {/* Subtle dark overlay for readability */}
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-tight"
          >
            Confidently <span className="italic">Chic.</span>
          </motion.h1>

          {/* Thin gold rule */}
          <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 1.5, delay: 0.5 }}
             className="w-20 h-[1px] bg-luxury-gold mx-auto mb-8" 
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-lg md:text-xl font-body font-light text-white/90 mb-12 max-w-lg mx-auto leading-relaxed"
          >
            For the chic bride with attitude. Intuitive styling, zero pressure, and dresses you never knew you&apos;d love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 border border-white text-white px-10 py-5 text-[13px] uppercase tracking-[0.2em] font-light hover:bg-white hover:text-charcoal transition-all duration-500 group"
            >
              Book Appointment <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Strip */}
      <div className="bg-duck-egg w-full py-4 text-center border-y border-luxury-gold/20">
        <p className="font-body text-xs md:text-[13px] uppercase tracking-[0.1em] text-charcoal font-normal">
          <span className="text-luxury-gold">★★★★★</span> 143 Five-Star Google Reviews &middot; Exclusively by Appointment &middot; Glasgow City Centre
        </p>
      </div>
    </div>
  );
}
