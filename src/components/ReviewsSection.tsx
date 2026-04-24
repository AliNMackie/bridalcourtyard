
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";

const REVIEWS = [
  {
    text: "From the moment I arrived, I felt completely at ease. No pressure, just warmth and genuine expertise. Lindsay pulled a dress I never would have chosen — it was perfect.",
    author: "Google Review ★★★★★"
  },
  {
    text: "Lindsay has an incredible eye. She listened to everything I said, then handed me something totally different — and I cried. That was the one.",
    author: "Google Review ★★★★★"
  },
  {
    text: "Shopping with a friend is the best way I can describe it. The whole experience felt like it was designed around me, not around selling me a dress.",
    author: "Google Review ★★★★★"
  }
];

export default function ReviewsSection() {
  return (
    <Section id="reviews" className="bg-duck-egg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <span className="eyebrow !text-charcoal/60">What our brides say</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">143 Five-Star Reviews on Google</h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 border border-[#e0d8d0] shadow-sm flex flex-col justify-between"
            >
              <p className="font-body text-[15px] leading-relaxed text-charcoal/80 mb-8 italic">
                &quot;{review.text}&quot;
              </p>
              <p className="font-body text-[11px] uppercase tracking-[0.2em] text-charcoal/60 font-medium">
                {review.author}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="https://www.google.com/maps/search/The+Bridal+Courtyard+48+St+Andrews+Square+Glasgow+G1+5PP" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-luxury-gold text-luxury-gold px-10 py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-luxury-gold hover:text-white transition-all duration-300"
          >
            Read all reviews on Google &rarr;
          </Link>
        </div>
      </div>
    </Section>
  );
}
