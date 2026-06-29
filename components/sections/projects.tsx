"use client";

import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/magic/section-heading";
import { SpotlightCard } from "@/components/magic/spotlight-card";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've shipped"
          subtitle="Production apps and tools, from native iOS to cross-platform Flutter and AI-powered backends."
        />

        <RevealGroup
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {PROJECTS.map((p, i) => (
            <RevealItem
              key={p.name}
              className={cn(
                // make first card span 2 columns on large screens for rhythm
                i === 0 && "lg:col-span-2",
                i === 4 && "md:col-span-2 lg:col-span-1"
              )}
            >
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col">
                  {/* Visual */}
                  <div
                    className={cn(
                      "relative flex h-44 items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br",
                      p.accent
                    )}
                  >
                    <div className="absolute inset-0 bg-dot opacity-40" />
                    <span className="relative text-6xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
                      {p.emoji}
                    </span>
                    <div className="absolute right-3 top-3 rounded-full glass px-2.5 py-1 text-[11px] font-medium text-white/80">
                      {p.tagline}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-semibold text-white">
                        {p.name}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    {/* Tech */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-5 flex gap-2">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <Github size={14} />
                          GitHub
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-medium text-black transition-colors hover:bg-white/90"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
