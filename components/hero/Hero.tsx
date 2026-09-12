import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SealBadge } from "@/components/ui/SealBadge";
import { project } from "@/data/project";
import { HeroFlow } from "./HeroFlow";

export function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-navy-950 pb-20 pt-36 sm:pb-28 sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-radial-fade" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            {/* Government / SSB identity */}
            <div className="flex items-center gap-4">
              <SealBadge src="/assets/logos/goi-emblem.png" alt="State Emblem of India" size={64} />
              <SealBadge src="/assets/logos/ssb-crest.png" alt="Sashastra Seema Bal crest" size={64} />
              <div className="h-12 w-px bg-white/15" aria-hidden />
              <div className="font-mono text-[11.5px] uppercase leading-relaxed tracking-[0.2em] text-white/55">
                <p>{project.ministry}</p>
                <p>{project.department}</p>
                <p>{project.force}</p>
              </div>
            </div>

            <h1 className="mt-9 text-balance font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {project.heroHeadline}
            </h1>
            <p className="mt-5 max-w-xl text-balance font-display text-xl font-medium leading-snug text-cyan-300/90 sm:text-2xl">
              {project.heroSub}
            </p>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/60 sm:text-[17px]">
              {project.heroStatement}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#system"
                className="group inline-flex items-center gap-2 rounded-sm bg-cyan-400 px-6 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-navy-950 transition-transform hover:translate-x-0.5"
              >
                {project.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a
                href="#ai-pipeline"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-6 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                {project.ctaSecondary}
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-white/10 pt-7">
              <span className="inline-flex items-center rounded-sm bg-white px-4 py-2.5">
                <Image
                  src="/assets/logos/sih-logo.png"
                  alt="Smart India Hackathon 2026"
                  width={132}
                  height={60}
                  className="h-9 w-auto"
                />
              </span>
              <span className="h-8 w-px bg-white/15" aria-hidden />
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/45">
                {project.event}
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-cyan-400/80">
                {project.problemStatementId}
              </span>
            </div>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <div className="w-full max-w-xs rounded-md border border-white/10 bg-white/[0.02] p-7 sm:p-8">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
                Screening Flow
              </p>
              <HeroFlow />
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <ChevronDown className="h-5 w-5 animate-bounce text-white/25" aria-hidden />
      </div>
    </section>
  );
}
