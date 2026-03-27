
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BoutiqueContent() {
  return (
    <>
      <Section id="boutique-intro" className="bg-white py-24 md:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="eyebrow">The Experience</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
                OUR BOUTIQUE
              </h2>
            </div>
            <p className="text-charcoal/80 font-body text-base md:text-lg leading-relaxed max-w-xl">
              Step inside our stunning boutique for an unrivalled bridal experience. Our surroundings within the historic and beautiful Tannery Building of St Andrews Square are chic and elegant, yet always relaxed to reflect our own personal style. At your appointment enjoy a glass of fizz and a chat sharing your bridal vision with us. Browse our hand picked selection of gowns from some of the most creative designers and take your time to settle in and enjoy yourself. The appointment is about you and the boutique will be exclusive to you and your guests, so don&apos;t forget to take a spin, strike a pose and have fun.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-sage-light overflow-hidden shadow-2xl relative"
          >
             <Image 
              src="/boutique.png" 
              alt="The Boutique Interior" 
              fill
              className="object-cover"
             />
             <div className="absolute inset-0 bg-black/5" />
          </motion.div>
        </div>
      </Section>

      <Section id="vision" className="bg-charcoal py-24 md:py-32 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="eyebrow !text-sage">Our Philosophy</span>
            <h2 className="font-display text-4xl md:text-6xl text-white italic">
              Our VISION
            </h2>
            <div className="sage-rule sage-rule-center" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="font-body text-lg md:text-2xl font-light leading-relaxed text-white/90">
              Our vision is to share your vision. Every woman sees herself and her wedding day in a different way and it is our aim to understand your goal. Whatever version of yourself you want to be on the big day, we will help you to achieve that.
            </p>
            <p className="font-body text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              For those who aren&apos;t quite sure what this looks like, we can work this out with you. Our vision is simply to see you achieve your goal. We support. We share. We listen.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
