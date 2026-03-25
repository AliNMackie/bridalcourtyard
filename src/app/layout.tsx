
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
