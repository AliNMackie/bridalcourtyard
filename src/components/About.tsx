
"use client";

import { Section } from "./ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="boutique" className="grid md:grid-cols-2 gap-12 md:gap-16 items-center bg-duck-egg dark:bg-charcoal transition-colors duration-500 relative overflow-hidden">

      {/* Storytelling Ambient Background */}
      <div className="absolute -right-20 -bottom-20 w-1/2 h-full opacity-0 dark:opacity-10 pointer-events-none">
        <Image
          src="/about-cinematic.png"
          alt="Salon Interior Detail"
          fill
          className="object-cover blur-sm animate-light-glow"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6 md:space-y-8 relative z-10"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide text-charcoal dark:text-white">Our Boutique</h2>
          <div className="w-12 h-[1px] bg-charcoal dark:bg-luxury-gold" />
        </div>
        <p className="text-charcoal/80 dark:text-gray-300 font-light leading-relaxed text-base md:text-lg text-pretty">
          Step inside our stunning boutique for an unrivalled bridal experience.
          Our surroundings within the historic and beautiful Tannery Building of St Andrews Square are chic and elegant, yet always relaxed to reflect our own personal style.
        </p>
        <p className="text-charcoal/80 dark:text-gray-300 font-light leading-relaxed text-base md:text-lg text-pretty">
          At your appointment enjoy a glass of fizz and a chat sharing your bridal vision with us.
          Browse our hand picked selection of gowns from some of the most creative designers and take your time to settle in.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative aspect-[3/4] bg-white dark:bg-gray-900 border border-white/20 shadow-2xl overflow-hidden group"
      >
        <Image
          src="https://bridalcourtyard.com/wp-content/uploads/2022/09/WINDOW-683x1024.jpg"
          alt="Bridal Courtyard Boutique Window"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-xs uppercase tracking-[0.3em] font-light">St Andrews Square</span>
        </div>
      </motion.div>
    </Section>
  );
}
