
"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import { TESTIMONIALS } from "@/data/testimonials";

export default function ReviewsSection() {
  const featuredReviews = TESTIMONIALS.slice(0, 3);

  return (
    <Section id="reviews" className="bg-sage-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <span className="eyebrow !text-charcoal/60">What our brides say</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">143 Five-Star Reviews on Google</h2>
          <div className="sage-rule sage-rule-center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 border border-sage/10 shadow-sm flex flex-col justify-between"
            >
              <p className="font-body text-[15px] leading-relaxed text-charcoal/80 mb-8 italic">
                &quot;{review.text}&quot;
              </p>
              <p className="font-body text-[11px] uppercase tracking-[0.2em] text-sage font-medium">
                {review.author}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/your-views" 
            className="inline-block border border-sage text-sage px-10 py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-sage hover:text-white transition-all duration-300"
          >
            Read all reviews &rarr;
          </Link>
        </div>
      </div>
    </Section>
  );
}
