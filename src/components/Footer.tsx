
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-20 px-6 md:px-12 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        
        {/* Column 1: Brand & Contact */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <div className="relative w-48 h-12 md:w-56 md:h-14 brightness-0 invert">
                <Image 
                  src="/logo/logo.png" 
                  alt="Bridal Courtyard Logo" 
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
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
                className="text-white hover:text-sage hover:underline transition-all cursor-pointer"
              >
                0141 237 8680
              </a>
              <a 
                href="mailto:info@bridalcourtyard.com" 
                className="text-white hover:text-sage hover:underline transition-all cursor-pointer"
              >
                info@bridalcourtyard.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-8">
          <h4 className="font-display text-[11px] uppercase tracking-[0.25em] text-sage font-medium">
            Navigate
          </h4>
          <nav className="flex flex-col space-y-3 font-body text-sm font-light text-white/70">
            <Link href="/" className="hover:text-sage transition-colors">Home</Link>
            <Link href="/our-people" className="hover:text-sage transition-colors">Our People</Link>
            <Link href="/our-boutique" className="hover:text-sage transition-colors">The Boutique</Link>
            <Link href="/designers" className="hover:text-sage transition-colors">Our Designers</Link>
            <Link href="/accessories" className="hover:text-sage transition-colors">Accessories</Link>
            <Link href="/your-views" className="hover:text-sage transition-colors">Your Views</Link>
            <Link href="/faq" className="hover:text-sage transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-sage transition-colors">Contact & Book</Link>
            <Link href="/privacy-and-cookies" className="hover:text-sage transition-colors">Privacy & Cookies</Link>
          </nav>
        </div>

        {/* Column 3: Social */}
        <div className="space-y-8">
          <h4 className="font-display text-[11px] uppercase tracking-[0.25em] text-sage font-medium">
            Social
          </h4>
          <nav className="flex flex-col space-y-3 font-body text-sm font-light text-white/70">
            <a href="https://www.instagram.com/thebridalcourtyard/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">Instagram</a>
            <a href="https://www.facebook.com/TheBridalCourtyard/" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">Facebook</a>
            <a href="#" className="hover:text-sage transition-colors">Pinterest</a>
          </nav>
          
          <div className="pt-8 border-t border-white/5">
            <p className="text-[10px] font-body font-light uppercase tracking-widest text-white/40">
              © 2020 BRIDAL COURT YARD. ALL RIGHTS RESERVED
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
