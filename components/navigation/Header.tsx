"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/nav";
import { project } from "@/data/project";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "bg-navy-950/95 shadow-panel backdrop-blur" : "bg-navy-950",
      )}
    >
      {/* Identity strip */}
      <div className="hidden border-b border-white/10 sm:block">
        <div className="mx-auto flex w-full max-w-8xl items-center gap-2 px-6 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45 lg:px-12">
          <span>{project.ministry}</span>
          <span aria-hidden className="text-white/20">
            /
          </span>
          <span>{project.department}</span>
          <span aria-hidden className="text-white/20">
            /
          </span>
          <span>{project.force}</span>
        </div>
      </div>

      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-8xl items-center justify-between gap-4 px-6 py-3 lg:px-12"
      >
        <a
          href="#overview"
          onClick={handleNavClick("overview")}
          className="flex items-center gap-3"
        >
          <Image
            src="/assets/logos/ssb-suraksha-mark.png"
            alt=""
            width={44}
            height={44}
          />
          <span className="font-display text-[17px] font-bold tracking-tight text-white">
            {project.name}
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#system"
            onClick={handleNavClick("system")}
            className="inline-flex items-center rounded-sm border border-cyan-400/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-300 transition-colors hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            {project.ctaSecondary}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-white/15 p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleNavClick(item.id)}
                  className="block py-2.5 font-mono text-sm uppercase tracking-[0.12em] text-white/70"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
