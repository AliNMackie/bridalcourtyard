
"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

interface Review {
  author: string;
  text: string;
}

interface YourViewsContentProps {
  reviews: Review[];
}

export default function YourViewsContent({ reviews }: YourViewsContentProps) {
  return (
    <Section className="bg-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8 mb-16">
        <span className="eyebrow">Your Stories</span>
        <h1 className="font-display text-5xl md:text-7xl text-charcoal leading-tight">
          Your Views
        </h1>
        <p className="text-charcoal/80 font-body text-lg leading-relaxed max-w-2xl mx-auto">
          We want everyone who visits The Bridal Courtyard to feel comfortable, welcome and special. Have a little read at the views posted on Google from previous brides. Check Google for the latest reviews. We can&apos;t wait to meet you !
        </p>
        <div className="sage-rule sage-rule-center" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-16">
        {reviews.map((review, index) => (
          <motion.div
            key={review.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 border-l-2 border-sage/30 pl-8 md:pl-12 py-4"
          >
            <p className="font-body text-xl md:text-2xl text-charcoal leading-relaxed italic">
              &quot;{review.text}&quot;
            </p>
            <p className="font-body text-[13px] uppercase tracking-[0.25em] text-sage font-medium">
              &mdash; {review.author}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-24">
        <a 
          href="https://g.co/kgs/bridal-courtyard" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-sage text-sage px-12 py-5 text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-sage hover:text-white transition-all duration-300 shadow-md"
        >
          Check Google for the latest reviews &rarr;
        </a>
      </div>
    </Section>
  );
}
