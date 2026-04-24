import DesignerLayout from "@/components/DesignerLayout";
import { Metadata } from "next";
import DESIGNERS_DATA from "@/data/content/designers.json";
const DESIGNERS = Array.isArray(DESIGNERS_DATA) ? DESIGNERS_DATA : DESIGNERS_DATA.items;

const designer = DESIGNERS.find(d => d.slug === "aesling")!;

export const metadata: Metadata = {
  title: `${designer.name} | Minimalist Bridal Gowns Glasgow | Bridal Courtyard`,
  description: designer.description,
};

export default function AeslingPage() {
  return (
    <DesignerLayout 
      name={designer.name}
      description={designer.description}
      persona={designer.persona}
      priceRange={designer.priceRange}
      externalLink={designer.externalLink}
      image={designer.image}
    />
  );
}
