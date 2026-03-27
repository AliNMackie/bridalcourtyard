
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-charcoal text-white p-6 md:p-8 shadow-2xl border border-white/10 backdrop-blur-md bg-opacity-95 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1 space-y-2">
              <h4 className="font-display text-lg tracking-wide text-luxury-gold">Cookie Notice</h4>
              <p className="font-body text-sm text-white/70 leading-relaxed max-w-2xl">
                We use cookies and similar technologies on our website to make the site work properly, understand how visitors use our site, and occasionally support marketing features. 
                Read our full <Link href="/privacy-and-cookies" className="text-luxury-gold hover:underline">Privacy & Cookies Policy</Link> for more details.
              </p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-white text-charcoal px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-luxury-gold hover:text-white transition-all duration-300"
              >
                Accept
              </button>
              <Link
                href="/privacy-and-cookies#cookies"
                className="flex-1 md:flex-none border border-white/20 text-white/60 px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-medium hover:text-white hover:border-white transition-all duration-300 text-center"
              >
                Settings
              </Link>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
