import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Presents an official emblem/crest on a small white card so the artwork
 * (often dark line-art or navy/gold on a transparent background) stays
 * legible regardless of the surface it sits on.
 */
export function SealBadge({
  src,
  alt,
  size = 56,
  className,
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-navy-900/10 bg-white p-2 shadow-md",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} width={size * 2} height={size * 2} className="h-full w-full object-contain" />
    </span>
  );
}
