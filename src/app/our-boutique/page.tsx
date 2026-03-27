import BoutiqueContent from "@/components/BoutiqueContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Boutique | Luxury Bridal Shopping Glasgow | Bridal Courtyard",
  description: "Step inside our stunning boutique for an unrivalled bridal experience. Exclusive use for your private appointment in the historic Tannery Building.",
};

export default function OurBoutiquePage() {
  return (
    <main className="pt-20">
      <BoutiqueContent />
    </main>
  );
}
