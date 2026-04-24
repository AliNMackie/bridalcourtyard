import DesignerLayout from "@/components/DesignerLayout";
import { Metadata } from "next";
import DESIGNERS_DATA from "@/data/content/designers.json";
const DESIGNERS = Array.isArray(DESIGNERS_DATA) ? DESIGNERS_DATA : DESIGNERS_DATA.items;

const designer = DESIGNERS.find(d => d.slug === "truvelle")!;

export const metadata: Metadata = {
  title: `${designer.name} | Modern Bridal Gowns Glasgow | Bridal Courtyard`,
  description: designer.description,
};

export default function TruvellePage() {
  return (
    <DesignerLayout 
      name={designer.name}
      description={designer.description}
      persona={designer.persona}
      priceRange={designer.priceRange}
      externalLink={designer.externalLink}
      image={designer.image}
      gallery={[
        "/images/truvelle/Cassie-4.jpg",
        "/images/truvelle/Emmeline-1.jpg",
        "/images/truvelle/Iris-4.jpg",
        "/images/truvelle/Lillie-offwhite-7 (1).jpg",
      ]}
    />
  );
}
