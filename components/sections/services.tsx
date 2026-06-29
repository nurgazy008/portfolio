"use client";

import {
  Rocket,
  Apple,
  Smartphone,
  Server,
  Sparkles,
  Check,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/magic/section-heading";
import { SpotlightCard } from "@/components/magic/spotlight-card";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { SERVICES } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Rocket,
  Apple,
  Smartphone,
  Server,
  Sparkles,
};

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          subtitle="From a napkin sketch to a launched product — and everything in between."
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {SERVICES.map((s) => {
            const Icon = ICONS[s.iconName] ?? Sparkles;
            return (
              <RevealItem key={s.title}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/10 text-violet-300 ring-1 ring-white/10">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2 text-sm text-white/75"
                        >
                          <span className="grid h-4 w-4 place-items-center rounded-full bg-violet-500/20 text-violet-300">
                            <Check size={11} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
