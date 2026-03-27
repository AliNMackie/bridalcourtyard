
"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyCookiesPage() {
  const lastUpdated = "27 March 2026";

  return (
    <main className="pt-20">
      <Section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="eyebrow">Legal Information</span>
              <h1 className="font-display text-5xl md:text-7xl text-charcoal leading-tight">
                Privacy & Cookies
              </h1>
              <p className="font-body text-sm text-charcoal/40 uppercase tracking-widest">
                Last updated: {lastUpdated}
              </p>
              <div className="gold-rule mt-8" />
            </div>

            <div className="prose prose-luxury font-body text-charcoal/80 leading-relaxed space-y-12">
              
              <section className="space-y-6">
                <p>
                  This Privacy Policy explains how The Bridal Courtyard (“we”, “us”, “our”) collects, uses and protects your personal information when you visit our website, make an enquiry, or book an appointment.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-charcoal">Who we are</h2>
                <p>
                  The Bridal Courtyard<br />
                  48 St Andrew&apos;s Square<br />
                  Glasgow, G1 5PP<br />
                  Email: info@bridalcourtyard.com<br />
                  Telephone: 0141 237 8680
                </p>
                <p>
                  We are the data controller for the personal data we collect through our website and in the course of our business.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-charcoal">What information we collect</h2>
                <p>We may collect:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Contact details: name, email address, phone number.</li>
                  <li>Appointment details: preferred dates, wedding date, basic information about your wedding plans and dress preferences.</li>
                  <li>Communication data: emails, messages and any information you choose to share with us.</li>
                  <li>Website usage data: IP address, device and browser type, pages visited and interactions, collected via cookies and similar technologies.</li>
                  <li>Transaction data: records of consultation fees and dress purchases (no card details are stored on our website systems).</li>
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-charcoal">How we use your information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Respond to enquiries and manage appointment bookings.</li>
                  <li>Provide our bridal consultation services and process your orders.</li>
                  <li>Send essential updates about your appointment, orders or changes to our services.</li>
                  <li>Improve our website, services and customer experience.</li>
                  <li>Comply with legal and regulatory obligations.</li>
                </ul>
                <p>
                  We rely on the following legal bases under UK data protection law: performance of a contract, legitimate interests (to run and grow our business), and compliance with legal obligations.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-charcoal">Sharing your information</h2>
                <p>We do not sell your personal data. We may share it with:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Service providers who help us operate our website, appointment system, email or payment processing (for example, website hosting, email providers, payment processors).</li>
                  <li>Professional advisers (such as accountants or legal advisors) where reasonably necessary.</li>
                  <li>Authorities or regulators where required by law.</li>
                </ul>
                <p>
                  These third parties are only allowed to use your data in line with our instructions and applicable data protection laws.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-charcoal">International transfers</h2>
                <p>
                  If any of our service providers are located outside the UK/EEA, we will take appropriate steps to ensure your data is protected, such as using standard contractual clauses or other safeguards recognised by UK data protection law.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-charcoal">How long we keep your information</h2>
                <p>
                  We keep your personal data only for as long as necessary for the purposes set out in this policy, including to meet legal, accounting or reporting requirements. After this, data is securely deleted or anonymised.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-charcoal">Your rights</h2>
                <p>You have rights over your personal data, including to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access a copy of the personal data we hold about you.</li>
                  <li>Correct inaccurate or incomplete information.</li>
                  <li>Request deletion of your data, where we have no lawful reason to keep it.</li>
                  <li>Object to certain types of processing, including direct marketing.</li>
                  <li>Restrict how we use your data in certain circumstances.</li>
                  <li>Request transfer of your data to another organisation (data portability).</li>
                </ul>
                <p>
                  To exercise these rights, contact us at <a href="mailto:info@bridalcourtyard.com" className="text-luxury-gold hover:underline">info@bridalcourtyard.com</a>.
                </p>
                <p>
                  If you are unhappy with how we use your data, you can also complain to the UK Information Commissioner’s Office (ICO) at <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-luxury-gold hover:underline">www.ico.org.uk</a>.
                </p>
              </section>

              <section id="cookies" className="space-y-6 pt-12 border-t border-gray-100">
                <h2 className="font-display text-3xl md:text-4xl text-charcoal text-luxury-gold">Cookies</h2>
                <p>We use cookies and similar technologies on our website to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Make the site work properly (for example, navigation and forms).</li>
                  <li>Understand how visitors use our site so we can improve it (analytics).</li>
                  <li>Occasionally support marketing and social media features.</li>
                </ul>
                <p>
                  You can control cookies through your browser settings. By continuing to use our website, or by clicking ‘Accept’ on our cookie banner, you agree to our use of cookies in line with this policy.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-charcoal">Changes to this policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last updated” date. We recommend you review this page periodically.
                </p>
                <p>
                  If you have any questions about this policy, please contact us at <a href="mailto:info@bridalcourtyard.com" className="text-luxury-gold hover:underline">info@bridalcourtyard.com</a>.
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
