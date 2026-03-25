
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
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="https://bridalcourtyard.com/wp-content/uploads/2022/09/JAS_99241-SS23-scaled.jpg"
              alt="Bridal gown editorial photography"
              fill
              className="object-cover object-[center_20%]"
              priority
              loading="eager"
              sizes="100vw"
            />
          </motion.div>
          {/* Flat overlay with specific opacity for clarity */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-7xl md:text-9xl !text-white mb-2 leading-[0.9] tracking-tighter drop-shadow-sm">
              Confidently
            </h1>
            <h1 className="font-display text-7xl md:text-9xl !text-white mb-8 leading-[0.9] italic tracking-tighter drop-shadow-sm">
              Chic.
            </h1>
          </motion.div>

          {/* Elegant gold rule with animation */}
          <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 1.5, delay: 0.8 }}
             className="w-32 h-[1px] bg-luxury-gold mx-auto mb-10 origin-center" 
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="text-lg md:text-xl font-body font-light text-white/80 mb-12 max-w-lg mx-auto leading-relaxed tracking-wide"
          >
            For the chic bride with attitude. Intuitive styling, zero pressure, and dresses you never knew you&apos;d love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.6 }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-4 border border-white text-white px-12 py-5 text-[13px] uppercase tracking-[0.3em] font-light hover:bg-white hover:text-charcoal transition-all duration-700 group backdrop-blur-sm"
            >
              Book Appointment <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>

        {/* Subtle scroll indicator */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.5 }}
           transition={{ delay: 3, duration: 1 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Reviews Strip */}
      <div className="bg-duck-egg w-full py-5 text-center border-y border-luxury-gold/20 shadow-sm relative z-20">
        <p className="font-body text-xs md:text-[13px] uppercase tracking-[0.2em] text-charcoal font-medium">
          <span className="text-luxury-gold mr-2 text-sm italic">★★★★★</span> 143 Five-Star Google Reviews &middot; Exclusively by Appointment &middot; Glasgow City Centre
        </p>
      </div>
    </div>
  );
}
