import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { project } from "@/data/project";

export function ExploreQr() {
  return (
    <Section id="explore" tone="dark" className="py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden />
      <div className="relative flex flex-col items-center gap-8 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-400">
          {project.problemStatementId} · {project.event}
        </p>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Explore {project.name}
        </h2>
        <p className="max-w-md text-balance text-white/60">Scan to explore the complete solution.</p>

        <div className="mt-2 rounded-md border border-white/15 bg-white p-4">
          <Image
            src="/assets/qr/qr-code.jpg"
            alt={`QR code linking to ${project.name}`}
            width={168}
            height={168}
          />
        </div>
      </div>
    </Section>
  );
}
