import DesignerLayout from "@/components/DesignerLayout";
import { Metadata } from "next";
import DESIGNERS_DATA from "@/data/content/designers.json";
const DESIGNERS = Array.isArray(DESIGNERS_DATA) ? DESIGNERS_DATA : DESIGNERS_DATA.items;

const designer = DESIGNERS.find(d => d.slug === "justin-alexander")!;

export const metadata: Metadata = {
  title: `${designer.name} | Luxury Bridal Gowns Glasgow | Bridal Courtyard`,
  description: designer.description,
};

export default function JustinAlexanderPage() {
  return (
    <DesignerLayout 
      name={designer.name}
      description={designer.description}
      persona={designer.persona}
      priceRange={designer.priceRange}
      externalLink={designer.externalLink}
      image={designer.image}
      gallery={[
        "/images/home/justin-alexander-signature-pl/JAS_99241  SS23.jpg",
        "/images/home/justin-alexander-signature-pl/99143DT_FC_Charlie_Train_Justin-Alexander-Signature.jpg",
        "/images/home/justin-alexander-signature-pl/99144_FC_Hampton_Justin-Alexander-Signature.jpg",
        "/images/home/justin-alexander-signature-pl/99179_FF_Charleston_Justin-Alexander-Signature.jpg",
      ]}
    />
  );
}
