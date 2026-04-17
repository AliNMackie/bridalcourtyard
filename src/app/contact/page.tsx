import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Book | Luxury Bridal Appointments Glasgow | The Bridal Courtyard",
  description: "Book your private bridal consultation at The Bridal Courtyard, 48 St Andrew's Square, Glasgow. Call 0141 237 8680 or email info@bridalcourtyard.com.",
};

export default function ContactPage() {
  return (
    <main className="pt-20 min-h-screen">
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
        
        {/* Left Column (Details) */}
        <div className="flex-1 bg-white py-24 px-8 md:px-20 lg:px-32 flex flex-col justify-center space-y-12">
          <div className="space-y-4">
            <span className="eyebrow">Find Us</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-charcoal leading-tight">Visit The Boutique</h1>
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
          <div className="w-full h-72 bg-luxury-gray relative overflow-hidden border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700 mt-8">
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
          <div className="max-w-lg mx-auto w-full space-y-10">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl text-charcoal uppercase">Request an Appointment</h2>
              
              <div className="space-y-4 font-body text-[13px] md:text-[14px] text-charcoal/80 leading-relaxed">
                <p className="font-medium text-charcoal uppercase tracking-widest text-[11px] mb-4">
                  Step by Step Guide to Visiting The Bridal Courtyard
                </p>
                <ol className="list-decimal list-inside space-y-2 pb-2">
                  <li>Complete this appointment request form.</li>
                  <li>Check your email and junk mail for our response regarding availability.</li>
                  <li>Reply back within 24 hours with booking fee payment to confirm your appointment.</li>
                </ol>
                <p>
                  Please have a look at our <Link href="/faq" className="text-luxury-gold hover:underline">FAQ guide</Link> before you book your appointment, loads of important info there about when is best to book. Appointments are subject to a £30 booking fee, this payment is redeemable from a purchase of a gown/accessories.
                </p>
                <p className="font-medium text-[11px] uppercase tracking-wider text-charcoal border-l-2 border-luxury-gold pl-4 py-1 my-4">
                  Remember appointments are not made until you reply to confirm your attendance and pay the appointment deposit.
                </p>
                <p className="italic pt-2">
                  Thanks and looking forward to meeting you soon.<br/>— Lindsay
                </p>
              </div>
            </div>
            
            <div className="w-full relative min-h-[1200px]">
              <iframe
                src="https://app.bridallive.com/bl-server/appointmentRequest/c8a61cc3.shtml?lang=en"
                title="Bridal appointment request form"
                width="100%"
                height="1200"
                frameBorder="0"
                loading="lazy"
                className="w-full border-0 min-h-[1200px]"
              ></iframe>
            </div>
            
            <div className="pt-2 text-center">
              <p className="font-body text-[12px] text-charcoal/70">
                Having trouble with the form?{" "}
                <a 
                  href="https://app.bridallive.com/bl-server/appointmentRequest/c8a61cc3.shtml?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxury-gold hover:underline"
                >
                  Click here to open it in a new tab.
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
