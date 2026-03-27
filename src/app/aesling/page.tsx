
import DesignerLayout from "@/components/DesignerLayout";
import { Metadata } from "next";
import { DESIGNERS } from "@/data/designers";

const designer = DESIGNERS.find(d => d.slug === "aesling")!;

export const metadata: Metadata = {
  title: `${designer.name} | Minimalist Bridal Gowns Glasgow | Bridal Courtyard`,
  description: designer.description,
};

export default function AeslingPage() {
  return (
    <DesignerLayout 
      name={designer.name}
      body={`${designer.description}\n\n${designer.persona}`}
      priceRange={designer.priceRange}
      externalLink={designer.externalLink}
      image={designer.image}
    />
  );
}
