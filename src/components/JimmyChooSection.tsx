
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function JimmyChooSection() {
  return (
    <Section id="jimmy-choo" className="bg-charcoal py-24 md:py-32 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square border border-white/10 p-4 md:p-12 overflow-hidden order-2 md:order-1"
        >
           <Image 
             src="/boutique.png" 
             alt="Jimmy Choo Bridal Detail"
             fill
             className="object-cover opacity-60 mix-blend-overlay"
           />
           <div className="relative h-full w-full border border-white/20 flex flex-col items-center justify-center space-y-4">
              <span className="font-display italic text-4xl md:text-6xl text-white/40 tracking-tighter">&apos;I do&apos; in Choo</span>
              <div className="w-16 h-[1px] bg-sage" />
           </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8 order-1 md:order-2"
        >
          <div className="space-y-4">
            <span className="eyebrow !text-sage">A Unique Partnership</span>
            <h2 className="font-display text-5xl md:text-7xl leading-tight">Jimmy <br /> <span className="italic self-end">Choo</span></h2>
            <div className="sage-rule" />
          </div>

          <p className="font-body text-lg text-white/70 leading-relaxed font-light">
            At The Bridal Courtyard, we love to help you pull your entire bridal look together. For us, that means show stopping shoes. Pull together your full look by trying on the Jimmy Choo bridal collection with all of our gowns.
          </p>

          <Link
            href="/accessories"
            className="inline-flex items-center gap-4 bg-white text-charcoal px-8 py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-sage hover:text-white transition-all duration-300 group"
          >
            Explore Accessories <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </Section>
  );
}
