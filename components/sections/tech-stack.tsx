"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/magic/section-heading";
import { Marquee } from "@/components/magic/marquee";
import { Reveal } from "@/components/magic/reveal";
import { TECH_STACK, type Tech } from "@/lib/data";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "Languages",
  "Mobile",
  "Architecture",
  "Backend & Data",
  "Tools",
  "AI",
] as const;

const CATEGORY_ACCENT: Record<string, string> = {
  Languages: "hover:border-violet-400/40 hover:text-violet-200",
  Mobile: "hover:border-sky-400/40 hover:text-sky-200",
  Architecture: "hover:border-emerald-400/40 hover:text-emerald-200",
  "Backend & Data": "hover:border-amber-400/40 hover:text-amber-200",
  Tools: "hover:border-rose-400/40 hover:text-rose-200",
  AI: "hover:border-fuchsia-400/40 hover:text-fuchsia-200",
};

function TechChip({ tech }: { tech: Tech }) {
  return (
    <div
      className={cn(
        "flex h-12 select-none items-center whitespace-nowrap rounded-xl glass px-5 text-sm font-medium text-white/80 transition-all duration-300",
        CATEGORY_ACCENT[tech.category]
      )}
    >
      {tech.name}
    </div>
  );
}

export function TechStack() {
  const row1 = TECH_STACK.filter((_, i) => i % 2 === 0);
  const row2 = TECH_STACK.filter((_, i) => i % 2 === 1);

  return (
    <section id="stack" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build with"
          subtitle="A modern toolkit spanning native mobile, cross-platform, backend and AI."
        />

        {/* Marquee rows */}
        <Reveal delay={0.1} className="mt-14 space-y-4">
          <Marquee className="mask-fade-edges py-1" duration="38s">
            {row1.map((t) => (
              <TechChip key={t.name} tech={t} />
            ))}
          </Marquee>
          <Marquee reverse className="mask-fade-edges py-1" duration="44s">
            {row2.map((t) => (
              <TechChip key={t.name} tech={t} />
            ))}
          </Marquee>
        </Reveal>

        {/* Category grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, idx) => (
            <Reveal key={cat} delay={idx * 0.05}>
              <div className="h-full rounded-2xl glass p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {cat}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {TECH_STACK.filter((t) => t.category === cat).map((t) => (
                    <motion.span
                      key={t.name}
                      whileHover={{ scale: 1.06 }}
                      className={cn(
                        "rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/75 transition-colors",
                        CATEGORY_ACCENT[cat]
                      )}
                    >
                      {t.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
