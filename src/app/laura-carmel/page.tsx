import DesignerLayout from "@/components/DesignerLayout";
import { Metadata } from "next";
import DESIGNERS_DATA from "@/data/content/designers.json";
const DESIGNERS = Array.isArray(DESIGNERS_DATA) ? DESIGNERS_DATA : DESIGNERS_DATA.items;

const designer = DESIGNERS.find(d => d.slug === "laura-carmel")!;

export const metadata: Metadata = {
  title: `${designer.name} | Modern Luxury Bridal Gowns Glasgow | Bridal Courtyard`,
  description: designer.description,
};

export default function LauraCarmelPage() {
  return (
    <DesignerLayout 
      name={designer.name}
      description={designer.description}
      persona={designer.persona}
      priceRange={designer.priceRange}
      externalLink={designer.externalLink}
      image={designer.image}
      gallery={[
        "/images/Laura Carmel/LAURA_CARMEL_BRIDAL_AMARA2.jpg",
        "/images/Laura Carmel/LAURA_CARMEL_BRIDAL_ECHO3.jpg",
        "/images/Laura Carmel/LAURA_CARMEL_BRIDAL_EVER4.jpg",
        "/images/Laura Carmel/LAURA_CARMEL_BRIDAL_SLOANE5.jpg",
      ]}
    />
  );
}
