import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Book | Luxury Bridal Appointments Glasgow | The Bridal Courtyard",
  description: "Book your private bridal consultation at The Bridal Courtyard, 48 St Andrew's Square, Glasgow. Call 0141 237 8680 or email info@bridalcourtyard.com.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center space-y-6 mb-20">
            <span className="eyebrow">Get In Touch</span>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal leading-tight">
              Book Your <br />
              <span className="italic font-serif">Appointment</span>
            </h1>
            <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              We operate on a strictly appointment-only basis to ensure every bride has our undivided attention. Reserve your private consultation today.
            </p>
            <div className="gold-rule gold-rule-center" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-duck-egg/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-xl text-charcoal">Visit Us</h3>
                    <p className="font-body text-charcoal/70 leading-relaxed">
                      48 St Andrew&apos;s Square<br />
                      Glasgow G1 5PP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-duck-egg/50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-xl text-charcoal">Call Us</h3>
                    <a 
                      href="tel:01412378680"
                      className="font-body text-charcoal/70 hover:text-luxury-gold transition-colors"
                    >
                      0141 237 8680
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-duck-egg/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-xl text-charcoal">Email Us</h3>
                    <a 
                      href="mailto:info@bridalcourtyard.com"
                      className="font-body text-charcoal/70 hover:text-luxury-gold transition-colors"
                    >
                      info@bridalcourtyard.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-duck-egg/50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-xl text-charcoal">Opening Hours</h3>
                    <div className="font-body text-charcoal/70 leading-relaxed text-sm space-y-1">
                      <p>Tuesday – Friday: 10:00am – 5:00pm</p>
                      <p>Saturday: 10:00am – 4:00pm</p>
                      <p>Sunday & Monday: Closed</p>
                      <p className="text-luxury-gold text-xs uppercase tracking-wider mt-2">By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Fee Note */}
              <div className="bg-duck-egg/30 p-8 space-y-3">
                <h4 className="font-display text-lg text-charcoal">Consultation Fee</h4>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  We charge a consultation fee of <strong className="text-charcoal">£30</strong>, fully redeemable against the purchase of your wedding gown. If you don&apos;t find your dress, we issue a credit note for the same amount towards shoes or accessories.
                </p>
              </div>
            </div>

            {/* Map / CTA */}
            <div className="space-y-8">
              {/* Map Embed */}
              <div className="relative aspect-square bg-duck-egg/20 border border-gray-100 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.1842735842854!2d-4.247!3d55.856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDUxJzIxLjYiTiA0wrAxNCc0OS4yIlc!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Bridal Courtyard Location"
                  className="absolute inset-0"
                />
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <a
                  href="tel:01412378680"
                  className="block w-full text-center bg-charcoal text-white py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-luxury-gold transition-all duration-300"
                >
                  Call to Book: 0141 237 8680
                </a>
                <a
                  href="mailto:info@bridalcourtyard.com"
                  className="block w-full text-center border border-luxury-gold text-luxury-gold py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-luxury-gold hover:text-white transition-all duration-300"
                >
                  Email Us
                </a>
              </div>

              {/* Parking */}
              <div className="pt-4">
                <h4 className="font-display text-lg text-charcoal mb-2">Parking</h4>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  On-street metered parking is available directly in St Andrew&apos;s Square. The St Enoch Centre and Mercat Cross car parks are within a few minutes&apos; walk.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
