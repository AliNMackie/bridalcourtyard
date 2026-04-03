
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className, light }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center text-center leading-[1.1] transition-colors duration-500", className)}>
      <span className={cn(
        "font-body text-[7px] md:text-[9px] tracking-[0.5em] mb-1 font-light uppercase",
        light ? "text-white" : "text-charcoal"
      )}>
        THE
      </span>
      <div className="flex flex-col items-center -space-y-1 mb-2">
        <span className={cn(
          "font-display text-base md:text-xl tracking-[0.25em] font-medium uppercase",
          light ? "text-white" : "text-charcoal"
        )}>
          BRIDAL
        </span>
        <span className={cn(
          "font-display text-base md:text-xl tracking-[0.25em] font-medium uppercase",
          light ? "text-white" : "text-charcoal"
        )}>
          COURTYARD
        </span>
      </div>
      <span className={cn(
        "font-body text-[5px] md:text-[7px] tracking-[0.4em] font-light uppercase opacity-60 mt-1 border-t pt-1 w-full text-center",
        light ? "text-white border-white/20" : "text-charcoal border-charcoal/20"
      )}>
        ST ANDREW&apos;S SQUARE
      </span>
    </div>
  );
}
