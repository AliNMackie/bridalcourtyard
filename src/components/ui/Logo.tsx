
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className, light }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center text-center leading-[1.1] transition-colors duration-500", className)}>
      {/* "THE" — small, ultra-spaced, understated */}
      <span className={cn(
        "font-body text-[8px] md:text-[9px] tracking-[0.55em] mb-1 font-light uppercase",
        light ? "text-white" : "text-charcoal"
      )}>
        THE
      </span>

      {/* Main name — natural weight, luxury tracking */}
      <div className="flex flex-col items-center -space-y-1 mb-2">
        <span className={cn(
          "font-display text-base md:text-xl tracking-[0.22em] uppercase",
          light ? "text-white" : "text-charcoal"
        )}>
          BRIDAL
        </span>
        <span className={cn(
          "font-display text-base md:text-xl tracking-[0.22em] uppercase",
          light ? "text-white" : "text-charcoal"
        )}>
          COURTYARD
        </span>
      </div>

      {/* Location line — slightly more legible, still whisper-quiet */}
      <span className={cn(
        "font-body text-[7px] md:text-[8px] tracking-[0.35em] font-light uppercase opacity-60 mt-1 border-t pt-1 w-full text-center",
        light ? "text-white border-white/20" : "text-charcoal border-charcoal/20"
      )}>
        ST ANDREW&apos;S SQUARE
      </span>
    </div>
  );
}
