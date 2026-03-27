
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const domaineSans = localFont({
  src: "../../public/Fonts/DomaineSansDisplay-Thin.otf",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Bridal Courtyard | Luxury Bridal Boutique Glasgow",
  description: "Exclusive stockists of Justin Alexander Signature, Truvelle, Laudae, and more. Glasgow's premier bridal boutique at St Andrew's Square.",
  openGraph: {
    title: "Bridal Courtyard | Luxury Bridal Boutique Glasgow",
    description: "Exclusive stockists of Justin Alexander Signature, Truvelle, Laudae, and more. Glasgow's premier bridal boutique at St Andrew's Square.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridal Courtyard | Luxury Bridal Boutique Glasgow",
    description: "Exclusive stockists of Justin Alexander Signature, Truvelle, Laudae, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${domaineSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "The Bridal Courtyard",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "48 St Andrew's Square",
                "addressLocality": "Glasgow",
                "postalCode": "G1 5PP",
                "addressCountry": "GB"
              },
              "telephone": "+441412378680",
              "url": "https://bridalcourtyard.com",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "143"
              }
            }),
          }}
        />
        <meta name="theme-color" content="#8fa28f" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="font-body">
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
