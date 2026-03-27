import DesignerLayout from "@/components/DesignerLayout";
import { Metadata } from "next";
import { DESIGNERS } from "@/data/designers";

const designer = DESIGNERS.find(d => d.slug === "justin-alexander")!;

export const metadata: Metadata = {
  title: `${designer.name} | Luxury Bridal Gowns Glasgow | Bridal Courtyard`,
  description: designer.description,
};

export default function JustinAlexanderPage() {
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
