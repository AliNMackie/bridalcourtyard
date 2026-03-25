
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {/* Announcement Bar - Constant across scroll */}
      <div className="bg-duck-egg w-full py-2 px-4 text-center border-b border-luxury-gold/10">
        <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.15em] text-charcoal">
          Glasgow&apos;s Premier Bridal Boutique &middot; 48 St Andrew&apos;s Square &middot; <a href="tel:01412378680" className="hover:underline">0141 237 8680</a>
        </p>
      </div>

      {/* Main Nav - Transitions on Scroll */}
      <div 
        className={cn(
          "w-full transition-all duration-500 border-b",
          isScrolled 
            ? "bg-white border-luxury-gold py-4 shadow-sm" 
            : "bg-white/0 border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link 
            href="/" 
            className={cn(
               "font-display text-xl md:text-2xl uppercase tracking-[0.1em] whitespace-nowrap transition-colors duration-500",
               isScrolled ? "text-charcoal" : "text-white"
            )}
          >
            Bridal Courtyard
          </Link>

          <div className={cn(
            "hidden md:flex items-center space-x-10 text-[13px] uppercase tracking-[0.15em] font-light transition-colors duration-500",
            isScrolled ? "text-charcoal" : "text-white"
          )}>
            <Link href="#boutique" className="hover:text-luxury-gold transition-colors">Our Boutique</Link>
            <Link href="#designers" className="hover:text-luxury-gold transition-colors">Designers</Link>
            <Link href="#contact" className="hover:text-luxury-gold transition-colors">Contact</Link>
          </div>

          <Link
            href="#contact"
            className={cn(
              "border px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.15em] font-light transition-all duration-300",
              isScrolled 
                ? "border-charcoal bg-white text-charcoal hover:bg-luxury-gold hover:border-luxury-gold hover:text-white" 
                : "border-white bg-transparent text-white hover:bg-white hover:text-charcoal"
            )}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
