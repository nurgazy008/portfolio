"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/magic/section-heading";
import { Reveal } from "@/components/magic/reveal";
import { SOCIALS } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project, an MVP idea, or just want to say hi? My inbox is always open."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SOCIALS.map((s, i) => {
              const Icon = s.icon;
              const isDownload = s.label === "Resume";
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  download={isDownload ? true : undefined}
                  whileHover={{ y: -4 }}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl glass p-5"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/10 text-violet-300 ring-1 ring-white/10 transition-colors group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-white">
                      {s.label}
                    </div>
                    <div className="truncate text-xs text-muted-foreground">
                      {s.handle}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </motion.a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
