
"use client";

import { Section } from "./ui/Section";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { DESIGNERS } from "@/data/designers";

export default function Designers() {
  return (
    <Section id="designers" className="bg-white py-24 md:py-32 overflow-hidden border-b border-gray-100">

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 relative z-10">
        <span className="eyebrow">Designers</span>
        <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-charcoal">Our Designers</h2>
        <div className="sage-rule sage-rule-center" />
        <p className="font-body text-charcoal/50 text-sm md:text-base font-light italic mt-4">carefully curated for the modern bride</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12 relative z-10">
        {DESIGNERS.map((designer, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={designer.name}
            className="group"
          >
            <Link href={`/${designer.slug}`} className="block space-y-6 text-center">
              <div className="aspect-[3/4] bg-sage-light relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border border-transparent group-hover:border-sage/30">
                <Image
                  src={designer.image}
                  alt={`${designer.name} bridal gown`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Optimized Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-white text-[13px] font-light leading-relaxed mb-6 italic opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-4 group-hover:translate-y-0 text-balance">
                      &quot;{designer.persona}&quot;
                    </p>
                    <div className="w-12 h-[1px] bg-sage mx-auto mb-6" />
                    <span className="text-white font-body text-[10px] uppercase tracking-[0.25em] border border-white/20 px-6 py-3 hover:bg-white hover:text-charcoal transition-all">
                      View Collection
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 transition-colors duration-300">
                <h3 className="text-base md:text-lg font-display tracking-wide uppercase text-charcoal group-hover:text-sage">{designer.name}</h3>
                <p className="text-[13px] text-charcoal/50 font-body font-light px-8 md:px-12 leading-relaxed">Starting from {designer.priceRange.split('-')[0].trim()}</p>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Accessories Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="group"
        >
          <Link href="/accessories" className="block space-y-6 text-center">
            <div className="aspect-[3/4] bg-charcoal relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              <Image
                src="/silk.png"
                alt="Accessories collection"
                fill
                className="object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white space-y-4">
                <span className="eyebrow !text-sage">The Extras</span>
                <span className="text-2xl font-display uppercase tracking-widest text-center">Accessories</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-light border border-white/20 px-4 py-2">Explore All</span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
