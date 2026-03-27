
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

export default function BrandPhilosophy() {
  return (
    <Section id="philosophy" className="bg-white py-24 md:py-32 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="eyebrow !text-luxury-gold">Our Philosophy</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Confident & <br />
              <span className="italic self-end font-serif">Prepared.</span>
            </h2>
            <div className="gold-rule" />
          </div>
          <p className="font-body text-lg text-charcoal/80 leading-relaxed font-light">
            We aren&apos;t your sweet and sugary types but we are always attentive and our service is laid back and designed to make you feel comfortable and special. We never pressure a bride into a dress as this makes no sense to us — when it&apos;s the right dress, it&apos;s easy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="eyebrow !text-luxury-gold">Relevance</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Chic with <br />
              <span className="italic font-serif">Attitude.</span>
            </h2>
            <div className="gold-rule" />
          </div>
          <p className="font-body text-lg text-charcoal/80 leading-relaxed font-light">
            For the chic and elegant bride with attitude. We are here to help you find a dress that you won&apos;t ever want to take off. Our collections are contemporary and crisp, full of clean lines and intended minimalism. Sip the fizz, find a gown, take a spin and have fun.
          </p>
        </motion.div>

      </div>
    </Section>
  );
}
