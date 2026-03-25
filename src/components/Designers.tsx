
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
    <Section id="designers" className="bg-luxury-gray dark:bg-charcoal relative overflow-hidden transition-colors duration-500">

      {/* Gallery Detail Cinematic Loop Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery-detail.png"
          alt="Lace Detail Background"
          fill
          className="object-cover opacity-10 dark:opacity-20 animate-breathing"
        />
      </div>

      {/* Silk Texture Background */}
      <div className="absolute inset-0 bg-[url('/silk.png')] bg-cover opacity-20 dark:opacity-5 pointer-events-none mix-blend-multiply dark:mix-blend-overlay z-1" />

      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide dark:text-white">Our Designers</h2>
        <p className="text-gray-500 dark:text-gray-400 font-light text-sm md:text-base">carefully curated for the modern bride</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-12 gap-x-8 relative z-10">
        {DESIGNERS.map((designer, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={designer.name}
          >
            <Link href="#" className="group block space-y-4 cursor-pointer">
              <div className="aspect-[3/4] bg-white w-full relative overflow-hidden border border-transparent dark:border-white/10 group-hover:border-luxury-gold transition-colors duration-500 shadow-lg">
                <Image
                  src={designer.img}
                  alt={designer.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-light uppercase tracking-widest text-sm border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">View Collection</span>
                </div>
              </div>
              <div className="space-y-2 text-center group-hover:text-luxury-gold transition-colors text-black dark:text-white">
                <h3 className="text-base md:text-lg font-normal tracking-wide uppercase">{designer.name}</h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light px-4">{designer.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
