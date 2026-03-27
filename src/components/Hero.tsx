
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 group">
        <Image 
          src="/hero-cinematic.png" 
          alt="The Bridal Courtyard" 
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/20" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-10 px-6"
      >
        <div className="space-y-4">
          <span className="block text-[13px] uppercase tracking-[0.3em] text-white/80 font-light">
            Glasgow G1 5PP
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
            The Bridal Courtyard
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-4">
          <Link 
            href="/contact"
            className="bg-white text-charcoal px-10 py-5 text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-sage hover:text-white transition-all duration-300 shadow-xl"
          >
            Request Appointment
          </Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-down from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
