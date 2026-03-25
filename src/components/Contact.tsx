
import { Section } from "./ui/Section";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-gray-100 dark:border-white/10 bg-white dark:bg-charcoal transition-colors duration-500">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 px-4 md:px-0">
        <div className="space-y-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wide dark:text-white">Visit Us</h2>
            <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400">We are exclusively by appointment.</p>
          </div>

          <div className="space-y-6 text-gray-600 dark:text-gray-400 font-light text-center md:text-left">
            <div>
              <p className="uppercase text-xs tracking-widest text-black dark:text-luxury-gold mb-2">Address</p>
              <p>48 St Andrew&apos;s Square<br />Glasgow G1 5PP</p>
            </div>

            <div>
              <p className="uppercase text-xs tracking-widest text-black dark:text-luxury-gold mb-2">Phone</p>
              <p>0141 237 8680</p>
            </div>

            <div>
              <p className="uppercase text-xs tracking-widest text-black dark:text-luxury-gold mb-2">Email</p>
              <p>info@bridalcourtyard.com</p>
            </div>
          </div>
        </div>

        <form className="space-y-6 bg-luxury-gray/50 dark:bg-black/20 p-6 md:p-10 border border-gray-100 dark:border-white/5 shadow-xl">
          <h3 className="text-xl md:text-2xl font-light mb-6 dark:text-white text-center md:text-left uppercase tracking-widest">Request Appointment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full bg-white/50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors dark:text-white" />
            <input type="text" placeholder="Last Name" className="w-full bg-white/50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors dark:text-white" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full bg-white/50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors dark:text-white" />
          <input type="text" placeholder="Preferred Date" className="w-full bg-white/50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors dark:text-white" />
          <button className="bg-charcoal dark:bg-white text-white dark:text-black w-full py-4 uppercase tracking-[0.2em] text-xs hover:bg-luxury-gold hover:text-white transition-all duration-300 flex justify-center items-center gap-2 shadow-lg group">
            Send Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </Section>
  );
}
