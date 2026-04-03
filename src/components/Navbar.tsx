
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Logo from "./ui/Logo";

const NAV_LINKS = [
  { href: "/our-boutique", label: "Our Boutique" },
  { href: "/designers", label: "Designers" },
  { href: "/accessories", label: "Accessories" },
  { href: "/your-views", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On inner pages, always show dark styling
  const showDark = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);


  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
        {/* Announcement Bar */}
        <div className="bg-duck-egg w-full py-2 px-4 text-center border-b border-luxury-gold/10">
          <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.15em] text-charcoal">
            Glasgow&apos;s Premier Bridal Boutique &middot; 48 St Andrew&apos;s Square &middot; <a href="tel:01412378680" className="hover:underline hover:text-luxury-gold transition-colors">0141 237 8680</a>
          </p>
        </div>

        {/* Main Nav */}
        <div 
          className={cn(
            "w-full transition-all duration-500 border-b",
            isScrolled 
              ? "bg-white border-luxury-gold py-3 shadow-sm" 
              : showDark 
                ? "bg-white border-gray-100 py-5 shadow-sm"
                : "bg-white/0 border-transparent py-5"
          )}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative flex items-center group">
              <Logo light={!showDark} className="scale-90 md:scale-100 origin-left" />
            </Link>

            {/* Desktop Links */}
            <div className={cn(
              "hidden lg:flex items-center space-x-8 text-[12px] uppercase tracking-[0.15em] font-light transition-colors duration-500",
              showDark ? "text-charcoal" : "text-white"
            )}>
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="hover:text-luxury-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Book Now + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  "hidden md:inline-block border px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.15em] font-light transition-all duration-300",
                  showDark 
                    ? "border-charcoal bg-white text-charcoal hover:bg-luxury-gold hover:border-luxury-gold hover:text-white" 
                    : "border-white bg-transparent text-white hover:bg-white hover:text-charcoal"
                )}
              >
                Book Now
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className={cn(
                  "lg:hidden p-2 transition-colors",
                  showDark ? "text-charcoal" : "text-white"
                )}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] transition-all duration-500",
          isMobileOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity duration-500",
            isMobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[85%] max-w-sm bg-charcoal text-white transition-transform duration-500 ease-out flex flex-col",
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Close */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Logo light={true} className="scale-75 origin-left" />
            <button
              onClick={() => setIsMobileOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col py-8 px-6 space-y-1">
            <Link
              href="/"
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 text-[13px] uppercase tracking-[0.2em] font-light text-white/70 hover:text-luxury-gold transition-colors border-b border-white/5"
            >
              Home
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block py-3 text-[13px] uppercase tracking-[0.2em] font-light text-white/70 hover:text-luxury-gold transition-colors border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="p-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="block w-full text-center bg-luxury-gold text-white py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
