
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01.",
    title: "Enquire",
    body: "Fill in the short form below or call us. Lindsay will confirm your appointment within 24 hours and tell you everything you need to know beforehand.",
    icon: (
      <svg className="w-8 h-8 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: "02.",
    title: "Your Appointment",
    body: "Allow around 90 minutes. Arrive, relax, have a glass of fizz. Lindsay will guide you through the collection — and trust her on the wildcards.",
    icon: (
      <svg className="w-8 h-8 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
      </svg>
    )
  },
  {
    number: "03.",
    title: "Say Yes",
    body: "No pressure, no hard sell. When you find the one, you'll know. Lindsay handles all the ordering, fittings, and aftercare from there.",
    icon: (
      <svg className="w-8 h-8 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  return (
    <Section id="process" className="bg-white py-24 md:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 space-y-4">
          <span className="eyebrow">The Experience</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">Your Appointment, Step by Step</h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 relative group"
            >
              {/* Divider (Desktop Only) */}
              {index < 2 && (
                <div className="hidden md:block absolute -right-6 top-12 bottom-12 w-[1px] bg-luxury-gold/20" />
              )}
              
              <div className="space-y-2">
                <span className="font-display text-5xl text-luxury-gold block">{step.number}</span>
                <div className="pt-2">{step.icon}</div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl md:text-2xl text-charcoal">{step.title}</h3>
                <p className="font-body text-[15px] leading-relaxed text-charcoal/70">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
