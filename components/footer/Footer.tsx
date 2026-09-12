import Image from "next/image";
import { project } from "@/data/project";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-12">
      <div className="mx-auto flex w-full max-w-8xl flex-col gap-8 px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/assets/logos/ssb-suraksha-mark.png" alt="" width={40} height={40} />
            <span className="font-display text-base font-bold text-white">{project.name}</span>
          </div>
          <span className="inline-flex items-center gap-2 rounded-sm bg-white px-3.5 py-2">
            <Image
              src="/assets/logos/sih-logo.png"
              alt="Smart India Hackathon 2026"
              width={132}
              height={60}
              className="h-7 w-auto"
            />
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Problem Statement
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-white/55">
              Issued by {project.department}, {project.force}, for {project.event} ({project.problemStatementId}).
            </p>
            <span className="mt-4 inline-flex items-center rounded-sm bg-white p-3">
              <Image
                src="/assets/logos/mha-logo.png"
                alt="Ministry of Home Affairs"
                width={600}
                height={188}
                className="h-10 w-auto"
              />
            </span>
          </div>
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Solution
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-white/55">
              {project.name} is an independent hackathon submission developed in response to that problem
              statement.
            </p>
          </div>
        </div>

        <p className="max-w-3xl border-t border-white/10 pt-6 text-[12px] leading-relaxed text-white/35">
          {project.disclaimer}
        </p>
      </div>
    </footer>
  );
}
