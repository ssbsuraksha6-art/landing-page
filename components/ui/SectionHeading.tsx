import { cn } from "@/lib/utils";
import { Kicker } from "./Kicker";

export function SectionHeading({
  kicker,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: {
  kicker?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {kicker && (
        <Kicker tone={tone} className={cn("mb-4", align === "center" && "justify-center")}>
          {kicker}
        </Kicker>
      )}
      <h2
        className={cn(
          "text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-navy-950" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-balance text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-navy-700/80" : "text-white/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
