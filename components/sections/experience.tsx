"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/magic/section-heading";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Experience"
          title="The journey so far"
          subtitle="A timeline of roles, projects and the craft I've built along the way."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-white/10 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {EXPERIENCE.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="relative pl-12 sm:pl-0"
                >
                  {/* Dot */}
                  <span className="absolute left-4 top-1.5 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-violet-500 ring-4 ring-violet-500/20 sm:left-1/2">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-violet-500/60" />
                  </span>

                  <div
                    className={`sm:w-[calc(50%-2rem)] ${
                      left ? "sm:mr-auto sm:pr-8 sm:text-right" : "sm:ml-auto sm:pl-8"
                    }`}
                  >
                    <div className="rounded-2xl glass p-5 transition-transform duration-300 hover:-translate-y-1">
                      <span className="text-xs font-medium uppercase tracking-wider text-violet-300">
                        {item.period}
                      </span>
                      <h3 className="mt-1.5 text-lg font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <div
                        className={`mt-3 flex flex-wrap gap-1.5 ${
                          left ? "sm:justify-end" : ""
                        }`}
                      >
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-white/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
