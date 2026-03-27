
"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function AccessoriesPage() {
  return (
    <main className="pt-20">
      <Section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
            <span className="eyebrow">The Finishing Touches</span>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal leading-tight">
              jimmy choo & jade oi studio
            </h1>
            <div className="sage-rule sage-rule-center" />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-24 text-charcoal/80 font-body text-lg leading-relaxed">
            <p>
              At The Bridal Courtyard, we love to help you pull your entire bridal look together. For us that means a few things on the must have list, beautiful veil, statement earrings and show stopping shoes. Request your appointment to view our accessories via the Booking Request page, choose &apos;Styling Appointment&apos;.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="eyebrow !text-sage">Brooklyn Based</span>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal">
                  JADE OI STUDIO
                </h2>
              </div>
              <p className="text-charcoal/80 font-body text-base md:text-lg leading-relaxed">
                The team at Brooklyn-based Jade Oi are obsessed with designing and curating pieces with their signature effortless and approachable style. Constantly inspired by the diversity, colours, and love of the bridal community, Jade Oi Studio aims to bring a breath of femininity and sophistication to brides. Bold in simplicity, their collection transcends conventions, infusing each piece with contemporary details, sophistication and an undercurrent of playful charm.
              </p>
            </motion.div>
            <div className="relative aspect-square bg-sage-light shadow-2xl overflow-hidden">
               <Image 
                 src="/silk.png" 
                 alt="Jade Oi Studio accessories"
                 fill
                 className="object-cover opacity-90"
               />
               <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-24 items-center">
             <div className="relative aspect-square bg-sage-light shadow-2xl overflow-hidden order-2 md:order-1 flex items-center justify-center p-12">
                <div className="relative w-full h-full border border-sage/20 flex items-center justify-center">
                  <span className="font-display italic text-3xl text-sage/40 tracking-wider">I do in Choo</span>
                </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-1 md:order-2"
            >
              <div className="space-y-4">
                <span className="eyebrow !text-sage">The Iconic Label</span>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal">
                  JIMMY CHOO
                </h2>
              </div>
              <p className="text-charcoal/80 font-body text-base md:text-lg leading-relaxed">
                Pull together your full look by trying on the Jimmy Choo bridal collection shoes with all of our gowns. If you love what you see, then our friends at Jimmy Choo will then do the rest by taking great care of you your own appointment.
                <br /><br />
                Is there anything more special than saying &apos;I do in Choo&apos;?
              </p>
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-4 bg-charcoal text-white px-10 py-4 text-[13px] uppercase tracking-[0.2em] font-light hover:bg-sage transition-all duration-500 group"
                >
                  Book Styling Appointment <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
                <a 
                  href="https://www.jimmychoo.com"
                  target="_blank"
                  className="btn-outline-sage text-center"
                >
                  Explore Collection
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </main>
  );
}
