
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className, light }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center transition-all duration-500", className)}>
      <Image
        src="/logo-transparent.png"
        alt="The Bridal Courtyard"
        width={220}
        height={70}
        priority
        className={cn(
          "h-auto object-contain transition-all duration-500",
          light && "invert"
        )}
      />
    </div>
  );
}
