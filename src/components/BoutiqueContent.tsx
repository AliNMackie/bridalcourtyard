
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BoutiqueContent() {
  return (
    <div className="bg-white">
      {/* Intro Section */}
      <Section id="boutique-intro" className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4 flex flex-col items-center">
                <span className="eyebrow">Our Space</span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal">An Unrivalled Experience</h2>
                <div className="gold-rule" />
              </div>

              <div className="space-y-6 text-charcoal/70 font-body text-base md:text-lg leading-relaxed">
                <p>
                  Step inside our stunning boutique for a bridal experience like no other. Nestled within the historic and beautiful Tannery Building of St Andrew&apos;s Square, our surroundings are chic and elegant, yet always relaxed to reflect our own personal style.
                </p>
                <p>
                  When you visit us, the boutique is exclusively yours. No crowds, no rushed moments &mdash; just a private sanctuary for you and your guests to explore our hand-picked selection of the world&apos;s most creative designers.
                </p>
              </div>


            </motion.div>
          </div>

        </div>
      </Section>

      {/* Image Grid with Narrative */}
      <Section id="boutique-vision" className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Image 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative aspect-[3/4] bg-duck-egg overflow-hidden shadow-sm"
            >
              {/* TODO: Replace src with new boutique space photo once photoshoot is complete */}
              <Image
                src="/images/home/DSC06307.jpg"
                alt="Bridal gown editorial photography (Placeholder for Boutique space)"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>

            {/* Right Column: Narrative + Image 2 */}
            <div className="lg:col-span-7 flex flex-col space-y-16 md:space-y-24">
              
              {/* Secondary Narrative */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 max-w-xl"
              >
                <h3 className="font-display text-3xl md:text-4xl text-charcoal">Sharing Your Vision</h3>
                <div className="w-12 h-[1px] bg-luxury-gold" />
                <div className="space-y-4 text-charcoal/70 font-body text-base leading-relaxed">
                  <p>
                    At your appointment, we start simply: enjoy a glass of fizz and a relaxed chat sharing your bridal vision with us. We want to know what inspires you, what makes you feel beautiful, and how you imagine your day.
                  </p>
                  <p>
                    Take your time to settle in, browse the rails, and enjoy yourself. The appointment is entirely about you. We encourage you to try on styles you never considered, take a spin, strike a pose, and most importantly, have fun finding the one.
                  </p>
                </div>
              </motion.div>

              {/* Image 2 (Offset) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] md:aspect-[16/9] w-full max-w-2xl self-end bg-duck-egg overflow-hidden shadow-sm"
              >
                {/* TODO: Replace src with new boutique interior photo once photoshoot is complete */}
                <Image
                  src="/images/home/DSC06414.jpg"
                  alt="Bridal gown editorial photography (Placeholder for Boutique interior)"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000 object-[center_30%]"
                />
              </motion.div>

            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 md:mt-32 text-center flex justify-center"
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center border border-luxury-gold text-charcoal px-10 py-4 text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium hover:bg-luxury-gold hover:text-white transition-all duration-500"
            >
              Book Your Private Appointment
            </Link>
          </motion.div>

        </div>
      </Section>
    </div>
  );
}
