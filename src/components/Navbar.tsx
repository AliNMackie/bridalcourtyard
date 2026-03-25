
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-charcoal/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-white/10 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 md:px-12 h-16 md:h-20 flex items-center justify-between">
                <Link href="/" className="font-display text-lg md:text-2xl tracking-widest uppercase font-light dark:text-white whitespace-nowrap">
                    Bridal Courtyard
                </Link>

                <div className="hidden md:flex space-x-8 text-sm uppercase tracking-[0.2em] font-body font-light text-gray-600 dark:text-gray-300">
                    <Link href="#boutique" className="hover:text-luxury-gold transition-colors duration-300">Our Boutique</Link>
                    <Link href="#designers" className="hover:text-luxury-gold transition-colors duration-300">Designers</Link>
                    <Link href="#contact" className="hover:text-luxury-gold transition-colors duration-300">Appointments</Link>
                </div>

                <Link
                    href="#contact"
                    className="bg-luxury-gold text-white px-4 md:px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] font-body font-light hover:bg-luxury-gold-dim transition-colors duration-300 shadow-sm"
                >
                    Book Now
                </Link>
            </div>
        </nav>
    );
}
