
"use client";

import { Section } from "./ui/Section";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const DESIGNERS = [
  { name: "Justin Alexander Signature", desc: "Redefining luxury with showmanship and unrivaled attention to detail.", img: "https://bridalcourtyard.com/wp-content/uploads/2022/09/JAS_99241-SS23-scaled.jpg" },
  { name: "Truvelle", desc: "Romantic and modern, light weight fabrics and fresh lines from Vancouver.", img: "https://bridalcourtyard.com/wp-content/uploads/2023/08/TRUVELLE-4.jpg" },
  { name: "Laudae", desc: "Cool and sexy dresses created to make you look and feel your best.", img: "https://bridalcourtyard.com/wp-content/uploads/2023/08/LAUDAE-FP-200x300.jpg" },
  { name: "Anne Barge", desc: "Vintage glamour with timeless silhouettes and refined details.", img: "https://bridalcourtyard.com/wp-content/uploads/2023/08/ANNE-BARGE-FPn-1-200x300.jpg" },
  { name: "Alyssa Kristin", desc: "Considered and versatile. Soft structure and intended minimalism.", img: "https://bridalcourtyard.com/wp-content/uploads/2023/11/Celine-09.jpg_1699375882-200x300.jpeg" },
  { name: "Aesling", desc: "Sleek simplicity highlighting natural silhouettes and clean lines.", img: "https://bridalcourtyard.com/wp-content/uploads/2025/02/0G2A8290-bw-venus-scaled.jpg" },
];

export default function Designers() {
  return (
    <Section id="designers" className="bg-white py-24 md:py-32 overflow-hidden border-b border-gray-100">

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 relative z-10">
        <span className="eyebrow">Designers</span>
        <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-charcoal">Our Designers</h2>
        <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
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
            <Link href="#contact" className="block space-y-6 text-center">
              <div className="aspect-[3/4] bg-luxury-gray relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border border-transparent group-hover:border-luxury-gold/30">
                <Image
                  src={designer.img}
                  alt={`${designer.name} bridal gown`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                  <span className="text-white font-body text-[11px] uppercase tracking-[0.25em] border border-white/40 px-6 py-3 hover:bg-white hover:text-charcoal transition-all">
                    View Collection
                  </span>
                </div>
              </div>
              
              <div className="space-y-2 transition-colors duration-300 group-hover:text-luxury-gold">
                <h3 className="text-base md:text-lg font-display tracking-wide uppercase text-charcoal group-hover:text-luxury-gold">{designer.name}</h3>
                <p className="text-[13px] text-charcoal/50 font-body font-light px-8 leading-relaxed">{designer.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
