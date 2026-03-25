
"use client";

import { useState } from "react";
import { Section } from "./ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Do I need an appointment?",
    answer: "Yes — we are exclusively by appointment. Walk-ins cannot be accommodated."
  },
  {
    question: "How long does an appointment last?",
    answer: "Around 90 minutes."
  },
  {
    question: "Can I bring guests?",
    answer: "Absolutely. We recommend bringing one or two people whose opinion you trust."
  },
  {
    question: "What price range are your gowns?",
    answer: "Our collection ranges from £1,500 to £4,500. We're happy to discuss this when you enquire."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend at least 9–12 months before your wedding date to allow for ordering and fittings."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-blush py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <span className="eyebrow !text-charcoal/60">Your Questions, Answered</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">FAQ</h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-luxury-gold last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-display text-xl md:text-2xl text-charcoal group-hover:text-luxury-gold transition-colors">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-luxury-gold" />
                ) : (
                  <Plus className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-[15px] md:text-base text-charcoal/70 leading-relaxed pb-8">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
