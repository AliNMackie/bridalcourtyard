
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-20 px-6 md:px-12 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        
        {/* Column 1: Brand & Contact */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-display text-2xl md:text-3xl uppercase tracking-widest text-white">
              Bridal Courtyard
            </h3>
            <p className="font-body text-[13px] uppercase tracking-[0.15em] text-white/60 font-light">
              Glasgow&apos;s Premier Bridal Boutique
            </p>
          </div>
          
          <div className="space-y-6 text-sm md:text-base font-body font-light text-white/70 leading-relaxed">
            <p>
              48 St Andrew&apos;s Square<br />
              Glasgow G1 5PP
            </p>
            <div className="flex flex-col space-y-3">
              <a 
                href="tel:01412378680" 
                className="text-white hover:text-luxury-gold hover:underline transition-all cursor-pointer"
              >
                0141 237 8680
              </a>
              <a 
                href="mailto:info@bridalcourtyard.com" 
                className="text-white hover:text-luxury-gold hover:underline transition-all cursor-pointer"
              >
                info@bridalcourtyard.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-8">
          <h4 className="font-body text-[12px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
            Navigate
          </h4>
          <nav className="flex flex-col space-y-4 font-body text-sm md:text-base font-light text-white/70">
            <Link href="#boutique" className="hover:text-white transition-colors">Our Boutique</Link>
            <Link href="#lindsay" className="hover:text-white transition-colors">Meet Lindsay</Link>
            <Link href="#designers" className="hover:text-white transition-colors">Our Designers</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Book Appointment</Link>
          </nav>
        </div>

        {/* Column 3: Social / Hours (Placeholder) */}
        <div className="space-y-8">
          <h4 className="font-body text-[12px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
            Social
          </h4>
          <nav className="flex flex-col space-y-4 font-body text-sm md:text-base font-light text-white/70">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          </nav>
          
          <div className="pt-8 border-t border-white/5">
            <p className="text-[11px] font-body font-light uppercase tracking-widest text-white/60">
              © {new Date().getFullYear()} The Bridal Courtyard. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
