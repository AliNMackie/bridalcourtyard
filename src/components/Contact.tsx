
import { Section } from "./ui/Section";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-gray-100 dark:border-white/10 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-light uppercase tracking-wide dark:text-white">Visit Us</h2>
            <p className="text-xl font-light text-gray-600 dark:text-gray-400">We are exclusively by appointment.</p>
          </div>

          <div className="space-y-6 text-gray-600 dark:text-gray-400 font-light">
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

        <form className="space-y-6">
          <h3 className="text-2xl font-light mb-6 dark:text-white">Request Appointment</h3>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-0 py-3 focus:outline-none focus:border-black dark:focus:border-luxury-gold transition-colors dark:text-white" />
            <input type="text" placeholder="Last Name" className="w-full bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-0 py-3 focus:outline-none focus:border-black dark:focus:border-luxury-gold transition-colors dark:text-white" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-0 py-3 focus:outline-none focus:border-black dark:focus:border-luxury-gold transition-colors dark:text-white" />
          <input type="text" placeholder="Preferred Date" className="w-full bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-0 py-3 focus:outline-none focus:border-black dark:focus:border-luxury-gold transition-colors dark:text-white" />
          <button className="bg-black dark:bg-white text-white dark:text-black w-full py-4 uppercase tracking-widest text-xs hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex justify-center items-center gap-2">
            Send Request <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}
