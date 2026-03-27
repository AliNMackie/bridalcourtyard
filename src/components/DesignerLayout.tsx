
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, ExternalLink } from "lucide-react";

interface DesignerLayoutProps {
  name: string;
  body: string;
  priceRange: string;
  externalLink: string;
  image: string;
}

export default function DesignerLayout({ name, body, priceRange, externalLink, image }: DesignerLayoutProps) {
  return (
    <div className="pt-20">
      <Section className="bg-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <Link href="/designers" className="font-body text-[10px] uppercase tracking-[0.3em] text-luxury-gold hover:text-charcoal transition-colors flex items-center gap-2 mb-8">
                  &larr; All Designers
                </Link>
                <span className="eyebrow">Our Collections</span>
                <h1 className="font-display text-5xl md:text-7xl text-charcoal leading-tight">
                  {name}
                </h1>
              </div>
              
              <div className="space-y-6 text-charcoal/80 font-body text-base md:text-lg leading-relaxed max-w-xl whitespace-pre-line">
                {body}
              </div>
            </div>

            <div className="space-y-6 pt-8 border-t border-gray-100">
              <div className="space-y-1">
                <span className="font-body text-[11px] uppercase tracking-[0.2em] text-charcoal/40 font-medium">Price Range</span>
                <p className="font-display text-2xl text-charcoal">{priceRange}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <a 
                  href={externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-charcoal text-white px-10 py-4 text-[13px] uppercase tracking-[0.2em] font-light hover:bg-luxury-gold transition-all duration-500 group"
                >
                  Visit Designer Website <ExternalLink className="w-4 h-4" />
                </a>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-4 border border-charcoal text-charcoal px-10 py-4 text-[13px] uppercase tracking-[0.2em] font-light hover:bg-charcoal hover:text-white transition-all duration-500 group"
                >
                  Book Appointment <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="sticky top-32"
          >
            <div className="relative aspect-[3/4] bg-duck-egg overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={`${name} bridal collection`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
