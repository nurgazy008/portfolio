"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { SectionHeading } from "@/components/magic/section-heading";

const STATS = [
  { value: "5+", label: "Production Apps" },
  { value: "1500+", label: "Bot Users Served" },
  { value: "3+", label: "Years Building" },
  { value: "∞", label: "AI-Assisted Velocity" },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About" title="Turning ideas into shipped products" />

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m a mobile developer who builds{" "}
            <span className="text-white">native iOS apps with Swift</span> and{" "}
            <span className="text-white">cross-platform apps with Flutter</span>.
            I pair clean architecture with an AI-first workflow — using tools like
            Claude Code and Cursor to design, build and ship{" "}
            <span className="text-white">production-ready MVPs</span> at startup
            speed. From the first wireframe to the App Store, I love taking
            products the whole way.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <RevealItem key={s.label}>
              <div className="glass rounded-2xl p-5 text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="text-3xl font-semibold text-gradient-accent sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {s.label}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
