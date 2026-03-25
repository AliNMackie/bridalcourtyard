
"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import ParallaxWrapper from "./ui/ParallaxWrapper";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gray-900 border-b border-white/10">
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-60 scale-105 animate-slow-drift"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-bridal-dress-close-up-17721-large.mp4" type="video/mp4" />
                    {/* Fallback Image */}
                    <Image
                        src="/hero-cinematic.png"
                        alt="Luxury Bridal Boutique"
                        fill
                        className="object-cover"
                    />
                </video>
            </div>

            {/* Light Leak / Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/10 via-transparent to-white/5 mix-blend-screen pointer-events-none animate-light-leak" />

            {/* Gold Leaf Overlay Texture */}
            <div className="absolute inset-0 bg-black/40 z-0 bg-[url('/gold-foil.png')] bg-cover opacity-10 mix-blend-overlay pointer-events-none" />

            <ParallaxWrapper offset={-100} className="relative z-10 max-w-5xl mx-auto text-center px-4 md:px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl lg:text-9xl font-display font-light tracking-tight mb-6 md:mb-8 text-white mix-blend-difference leading-tight"
                >
                    Confidently<br /> Chic.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="text-base md:text-xl font-body font-light leading-relaxed max-w-2xl mx-auto text-white/90 mb-8 md:mb-12 mix-blend-difference tracking-wide"
                >
                    For the chic and elegant bride with attitude. We help you find a dress that you won&apos;t ever want to take off. Contemporary, crisp, and full of intended minimalism.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 md:gap-3 bg-white text-charcoal px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] font-body font-light hover:bg-luxury-gold hover:text-white transition-all duration-300 shadow-2xl relative overflow-hidden group"
                    >
                        <span className="relative z-10">Book Appointment</span>
                        <MoveRight className="w-4 h-4 relative z-10" />
                        <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                    </Link>
                </motion.div>
            </ParallaxWrapper>
        </div>
    );
}
