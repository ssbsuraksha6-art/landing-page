import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  id,
  tone = "light",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: "light" | "dark" | "paper";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-28",
        tone === "dark" && "bg-navy-950 text-white",
        tone === "light" && "bg-white",
        tone === "paper" && "bg-paper-100",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
