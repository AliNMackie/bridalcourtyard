
"use client";

import { Section } from "./ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <Section id="contact" className="p-0 overflow-hidden border-t border-gray-100">
      <div className="flex flex-col md:flex-row min-h-screen md:h-auto">
        
        {/* Left Column (Details) */}
        <div className="flex-1 bg-white py-24 px-8 md:px-20 lg:px-32 flex flex-col justify-center space-y-12">
          <div className="space-y-4">
            <span className="eyebrow">Find Us</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal">Visit The Boutique</h2>
          </div>

          <div className="space-y-10 text-charcoal font-body font-light">
            <div className="space-y-3">
              <p className="font-medium text-xs uppercase tracking-widest text-luxury-gold">Address</p>
              <p className="text-lg leading-relaxed">
                48 St Andrew&apos;s Square<br />Glasgow G1 5PP
              </p>
              <a 
                href="https://maps.google.com/maps?q=48+St+Andrews+Square+Glasgow+G1+5PP" 
                target="_blank" 
                className="inline-block text-[13px] text-charcoal hover:text-duck-egg transition-all cursor-pointer tracking-wider"
              >
                Open in Google Maps &rarr;
              </a>
            </div>

            <div className="space-y-3">
              <p className="font-medium text-xs uppercase tracking-widest text-luxury-gold">Phone</p>
              <a 
                href="tel:01412378680" 
                className="text-lg text-charcoal hover:text-duck-egg transition-all cursor-pointer block"
              >
                0141 237 8680
              </a>
            </div>

            <div className="space-y-3">
              <p className="font-medium text-xs uppercase tracking-widest text-luxury-gold">Email</p>
              <a 
                href="mailto:info@bridalcourtyard.com" 
                className="text-lg text-charcoal hover:text-duck-egg transition-all cursor-pointer block"
              >
                info@bridalcourtyard.com
              </a>
            </div>

            <div className="pt-4">
              <p className="text-sm text-charcoal/60 leading-relaxed font-body">
                Exclusively by appointment. <br className="hidden md:block" /> Lindsay typically responds to enquiries within one working day.
              </p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="w-full h-72 bg-luxury-gray relative overflow-hidden border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://maps.google.com/maps?q=48+St+Andrews+Square+Glasgow+G1+5PP&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Bridal Courtyard Location"
            />
          </div>
        </div>

        {/* Right Column (CTA) */}
        <div className="flex-1 bg-blush py-24 px-8 md:px-20 lg:px-32 flex flex-col justify-center text-center">
          <div className="max-w-lg mx-auto w-full space-y-10">
            <div className="space-y-6">
              <span className="eyebrow mx-auto">Book Your Experience</span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal uppercase leading-tight">
                READY TO FIND <br/>YOUR GOWN?
              </h2>
              
              <div className="space-y-4 font-body text-[14px] text-charcoal/70 leading-relaxed max-w-sm mx-auto pt-4 pb-8">
                <p>
                  We operate on a strictly appointment-only basis to ensure every bride has our undivided attention. 
                </p>
              </div>

              {/* Holiday Notice */}
              <div className="bg-white/80 p-6 border-l-[3px] border-luxury-gold text-left my-6 max-w-sm mx-auto shadow-sm">
                <p className="font-display text-base italic text-charcoal">Holiday Notice: 12th July – 2nd August</p>
                <p className="font-body text-xs text-charcoal/70 mt-2 leading-relaxed">
                  Please note: The boutique will be closed for holidays from 12th July to 2nd August. 
                  There will be a delay in getting back to you, but we will get back to you as soon as possible. Thank you for your patience.
                </p>
              </div>
              
              <Link
                href="/contact"
                className="inline-flex bg-charcoal text-white py-5 px-10 text-[13px] uppercase tracking-[0.2em] font-body font-medium hover:bg-luxury-gold transition-all duration-300 shadow-lg items-center justify-center gap-2 group"
              >
                Request an Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
