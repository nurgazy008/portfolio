"use client";

import { motion } from "framer-motion";
import { ArrowDown, FolderGit2, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pt-24 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">Zhangozy</span>{" "}
          <span className="text-gradient-accent">Nurgazy</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          variants={item}
          className="mt-5 flex items-center gap-2 text-base font-medium text-white/80 sm:text-lg"
        >
          <Sparkles size={16} className="text-violet-400" />
          <span>Mobile Developer</span>
          <span className="text-violet-400">•</span>
          <span>AI Vibe Coder</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          {SITE.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#projects">
            <Button variant="primary" size="lg">
              <FolderGit2 size={18} />
              View Projects
            </Button>
          </a>
          <a href={SITE.resume} download>
            <Button variant="accent" size="lg">
              <Download size={18} />
              Download Resume
            </Button>
          </a>
          <a href="#contact">
            <Button variant="glass" size="lg">
              <Mail size={18} />
              Contact Me
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
