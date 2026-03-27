
"use client";

import { Section } from "./ui/Section";

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
              <p className="font-medium text-xs uppercase tracking-widest text-sage">Address</p>
              <p className="text-lg leading-relaxed">
                48 St Andrew&apos;s Square<br />Glasgow G1 5PP
              </p>
              <a 
                href="https://maps.google.com/maps?q=48+St+Andrews+Square+Glasgow+G1+5PP" 
                target="_blank" 
                className="inline-block text-[13px] text-sage hover:underline tracking-wider"
              >
                Open in Google Maps &rarr;
              </a>
            </div>

            <div className="space-y-3">
              <p className="font-medium text-xs uppercase tracking-widest text-sage">Phone</p>
              <a 
                href="tel:01412378680" 
                className="text-lg text-sage hover:underline transition-all cursor-pointer block"
              >
                0141 237 8680
              </a>
            </div>

            <div className="space-y-3">
              <p className="font-medium text-xs uppercase tracking-widest text-sage">Email</p>
              <a 
                href="mailto:info@bridalcourtyard.com" 
                className="text-lg text-sage hover:underline transition-all cursor-pointer block"
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
          <div className="w-full h-72 bg-sage-light relative overflow-hidden border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
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
        <div className="flex-1 bg-white py-24 px-8 md:px-12 lg:px-20 flex flex-col justify-center">
          <div className="w-full space-y-10">
            <div className="space-y-4">
              <h3 className="font-display text-3xl md:text-4xl text-charcoal">Request an Appointment</h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                Please complete the form below to request a private consultation at our Glasgow boutique.
              </p>
            </div>
            
            <div className="w-full border border-gray-100 shadow-sm rounded-sm overflow-hidden">
              <iframe 
                src="https://app.bridallive.com/bl-server/appointmentRequest/c8a61cc3.shtml?lang=en" 
                width="100%" 
                height="1100" 
                className="w-full"
                style={{ border: 0 }}
                title="Bridal Live Appointment Request"
              />
            </div>

            <p className="text-center font-body text-[13px] italic text-charcoal/50">
              Lindsay will be in touch &apos;tout-suite&apos;.<br />
              (CHECK YOUR JUNK MAIL IF YOU DON&apos;T HEAR FROM US !)
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
}
