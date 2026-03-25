
"use client";

import { Section } from "./ui/Section";
import { ArrowRight } from "lucide-react";

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
                className="inline-block text-[13px] text-luxury-gold hover:underline tracking-wider"
              >
                Open in Google Maps &rarr;
              </a>
            </div>

            <div className="space-y-3">
              <p className="font-medium text-xs uppercase tracking-widest text-luxury-gold">Phone</p>
              <a 
                href="tel:01412378680" 
                className="text-lg text-luxury-gold hover:underline transition-all cursor-pointer block"
              >
                0141 237 8680
              </a>
            </div>

            <div className="space-y-3">
              <p className="font-medium text-xs uppercase tracking-widest text-luxury-gold">Email</p>
              <a 
                href="mailto:info@bridalcourtyard.com" 
                className="text-lg text-luxury-gold hover:underline transition-all cursor-pointer block"
              >
                info@bridalcourtyard.com
              </a>
            </div>

            <div className="pt-4">
              <p className="text-sm italic text-charcoal/60 leading-relaxed font-body">
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

        {/* Right Column (Form) */}
        <div className="flex-1 bg-blush py-24 px-8 md:px-20 lg:px-32 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full space-y-10">
            <h3 className="font-display text-3xl md:text-4xl text-charcoal">Request an Appointment</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-white border border-[#d0c8c0] px-4 py-4 font-body text-[15px] focus:outline-none focus:border-luxury-gold transition-colors" 
                  required
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-white border border-[#d0c8c0] px-4 py-4 font-body text-[15px] focus:outline-none focus:border-luxury-gold transition-colors" 
                  required
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white border border-[#d0c8c0] px-4 py-4 font-body text-[15px] focus:outline-none focus:border-luxury-gold transition-colors" 
                required
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-white border border-[#d0c8c0] px-4 py-4 font-body text-[15px] focus:outline-none focus:border-luxury-gold transition-colors" 
                required
              />
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-widest text-charcoal/40 ml-1">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full bg-white border border-[#d0c8c0] px-4 py-4 font-body text-[15px] focus:outline-none focus:border-luxury-gold transition-colors" 
                  required
                />
              </div>
              <textarea 
                placeholder="Anything you'd like Lindsay to know?" 
                rows={3}
                className="w-full bg-white border border-[#d0c8c0] px-4 py-4 font-body text-[15px] focus:outline-none focus:border-luxury-gold transition-colors resize-none"
              />
              
              <div className="pt-4 space-y-4">
                <button 
                  type="submit"
                  className="w-full bg-charcoal text-white py-5 text-[13px] uppercase tracking-[0.2em] font-body font-medium hover:bg-luxury-gold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
                >
                  Send Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center font-body text-[13px] italic text-charcoal/50">
                  Lindsay will be in touch within one working day.
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </Section>
  );
}
