
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      <div className="bg-sage-light w-full py-2 px-4 text-center border-b border-sage/10">
        <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.15em] text-charcoal">
          Glasgow&apos;s Premier Bridal Boutique &middot; 48 St Andrew&apos;s Square &middot; <a href="tel:01412378680" className="hover:underline hover:text-sage transition-colors">0141 237 8680</a>
        </p>
      </div>

      {/* Main Nav - Transitions on Scroll */}
      <div 
        className={cn(
          "w-full transition-all duration-500 border-b",
          isScrolled 
            ? "bg-white border-sage py-4 shadow-sm" 
            : "bg-white/0 border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link 
            href="/" 
            className="transition-opacity hover:opacity-80"
          >
            <div className={cn(
              "relative w-48 h-12 md:w-56 md:h-14 transition-all duration-500",
              !isScrolled && "brightness-0 invert"
            )}>
              <Image 
                src="/logo/logo.png" 
                alt="Bridal Courtyard Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <div className={cn(
            "hidden lg:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-light transition-colors duration-500",
            isScrolled ? "text-charcoal" : "text-white"
          )}>
            <Link href="/" className="hover:text-sage transition-colors">Home</Link>
            <Link href="/our-people" className="hover:text-sage transition-colors">Our People</Link>
            <Link href="/our-boutique" className="hover:text-sage transition-colors">The Boutique</Link>
            <Link href="/designers" className="hover:text-sage transition-colors">Designers</Link>
            <Link href="/your-views" className="hover:text-sage transition-colors">Reviews</Link>
            <Link href="/faq" className="hover:text-sage transition-colors">FAQ</Link>
          </div>

          <Link
            href="/contact"
            className={cn(
              "border px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.15em] font-light transition-all duration-300",
              isScrolled 
                ? "border-charcoal bg-white text-charcoal hover:bg-sage hover:border-sage hover:text-white" 
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
