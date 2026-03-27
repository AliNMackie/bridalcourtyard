import Designers from "@/components/Designers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridal Designers Glasgow | Justin Alexander, Truvelle, Anne Barge",
  description: "Browse our handpicked selection of gowns from the world's most creative designers. Justin Alexander Signature, Truvelle, Laudae, and more.",
};

export default function DesignersPage() {
  return (
    <main className="pt-20">
      <Designers />
    </main>
  );
}
