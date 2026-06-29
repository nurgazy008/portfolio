import {
  Github,
  Linkedin,
  Send,
  Mail,
  FileDown,
  type LucideIcon,
} from "lucide-react";

// On GitHub Pages the site lives under /<repo>, so static assets need the prefix.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const SITE = {
  name: "Zhangozy Nurgazy",
  title: "Mobile Developer • AI Vibe Coder",
  subtitle:
    "I build production-ready MVPs with Swift, Flutter and AI.",
  email: "nurgazy.zhangozy@jihc.edu.kz",
  github: "https://github.com/", // update with your handle
  linkedin: "https://linkedin.com/in/", // update with your handle
  telegram: "https://t.me/", // update with your handle
  resume: `${BASE_PATH}/resume.pdf`,
};

export type TechCategory =
  | "Languages"
  | "Mobile"
  | "Architecture"
  | "Backend & Data"
  | "Tools"
  | "AI";

export interface Tech {
  name: string;
  category: TechCategory;
}

export const TECH_STACK: Tech[] = [
  { name: "Swift", category: "Languages" },
  { name: "Dart", category: "Languages" },
  { name: "SwiftUI", category: "Mobile" },
  { name: "UIKit", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "MVVM", category: "Architecture" },
  { name: "MVC", category: "Architecture" },
  { name: "BLoC", category: "Architecture" },
  { name: "Provider", category: "Architecture" },
  { name: "Firebase", category: "Backend & Data" },
  { name: "Flask", category: "Backend & Data" },
  { name: "Django", category: "Backend & Data" },
  { name: "REST API", category: "Backend & Data" },
  { name: "CoreData", category: "Backend & Data" },
  { name: "UserDefaults", category: "Backend & Data" },
  { name: "SQLite", category: "Backend & Data" },
  { name: "PostgreSQL", category: "Backend & Data" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Claude Code", category: "AI" },
  { name: "Cursor", category: "AI" },
  { name: "OpenAI API", category: "AI" },
  { name: "Gemini", category: "AI" },
  { name: "GitHub Copilot", category: "AI" },
];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  accent: string; // tailwind gradient classes
  emoji: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Dary-Tan",
    tagline: "Medication adherence platform",
    description:
      "A medication-adherence monitoring system: a Flutter patient app (QR pairing, dose tracking, K-score) plus a doctor web portal for real-time patient monitoring, prescriptions and alerts. Diploma project.",
    tech: ["Flutter", "Firebase", "BLoC", "Riverpod"],
    github: "https://github.com/nurgazy008",
    demo: "https://dary-tan-diplomka-web-portal-production.up.railway.app/",
    accent: "from-violet-500/30 to-fuchsia-500/10",
    emoji: "💊",
  },
  {
    name: "Dental X",
    tagline: "Clinic management platform",
    description:
      "End-to-end dental clinic app: patient records, appointment scheduling and treatment tracking with a clean, clinical UI.",
    tech: ["Flutter", "BLoC", "Firebase", "REST API"],
    github: "https://github.com/",
    demo: "#",
    accent: "from-sky-500/30 to-cyan-500/10",
    emoji: "🦷",
  },
  {
    name: "QonaqStay",
    tagline: "Booking & hospitality",
    description:
      "A boutique stay-booking experience with real-time availability, secure payments and rich property discovery.",
    tech: ["Flutter", "Provider", "PostgreSQL", "Django"],
    github: "https://github.com/",
    demo: "#",
    accent: "from-emerald-500/30 to-teal-500/10",
    emoji: "🏡",
  },
  {
    name: "EventHub",
    tagline: "Events that move",
    description:
      "Discover, host and manage events with live ticketing, QR check-in and social sharing baked in.",
    tech: ["Swift", "UIKit", "MVC", "Firebase"],
    github: "https://github.com/",
    demo: "#",
    accent: "from-amber-500/30 to-orange-500/10",
    emoji: "🎟️",
  },
  {
    name: "Telegram Bot",
    tagline: "1500+ active users",
    description:
      "A production Telegram bot serving 1500+ users with automated workflows, AI replies and a Python backend.",
    tech: ["Python", "Flask", "OpenAI API", "PostgreSQL"],
    github: "https://github.com/",
    demo: "#",
    accent: "from-blue-500/30 to-indigo-500/10",
    emoji: "🤖",
  },
];

export interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  description: string;
  tags: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "AI Vibe Coder & Indie Developer",
    org: "Freelance",
    description:
      "Shipping production MVPs end-to-end using AI-assisted workflows (Claude Code, Cursor). From idea to App Store in record time.",
    tags: ["Claude Code", "Cursor", "MVP", "AI"],
  },
  {
    period: "2023 — 2024",
    role: "Flutter Developer",
    org: "Product Teams",
    description:
      "Built cross-platform apps with Flutter and BLoC/Provider. Integrated Firebase, REST APIs and payment systems.",
    tags: ["Flutter", "Dart", "Firebase", "BLoC"],
  },
  {
    period: "2022 — 2023",
    role: "iOS Developer",
    org: "Mobile Projects",
    description:
      "Developed native iOS apps with Swift, SwiftUI and UIKit following MVVM. Focused on performance and polished UX.",
    tags: ["Swift", "SwiftUI", "UIKit", "MVVM"],
  },
  {
    period: "2021 — 2022",
    role: "Backend & Automation",
    org: "Side Projects",
    description:
      "Created the 1500+ user Telegram bot and backend services with Python, Flask, Django and PostgreSQL.",
    tags: ["Python", "Flask", "Django", "PostgreSQL"],
  },
];

export interface Service {
  title: string;
  description: string;
  iconName: string;
  bullets: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Startup MVP",
    description:
      "From idea to a polished, production-ready MVP — fast. Validate, launch and iterate.",
    iconName: "Rocket",
    bullets: ["Rapid prototyping", "App Store ready", "Scalable foundations"],
  },
  {
    title: "iOS Development",
    description:
      "Native iOS apps with Swift, SwiftUI & UIKit. Smooth, fast and Apple-grade.",
    iconName: "Apple",
    bullets: ["SwiftUI / UIKit", "MVVM architecture", "App Store deployment"],
  },
  {
    title: "Flutter Development",
    description:
      "One codebase, every platform. Beautiful cross-platform apps with Flutter.",
    iconName: "Smartphone",
    bullets: ["iOS + Android", "BLoC / Provider", "Pixel-perfect UI"],
  },
  {
    title: "Backend Development",
    description:
      "Robust APIs and data layers with Flask, Django, PostgreSQL and Firebase.",
    iconName: "Server",
    bullets: ["REST APIs", "Databases", "Auth & payments"],
  },
  {
    title: "AI Integration",
    description:
      "Ship AI-powered features with OpenAI, Gemini and modern LLM tooling.",
    iconName: "Sparkles",
    bullets: ["LLM features", "AI workflows", "Smart automation"],
  },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  handle: string;
}

export const SOCIALS: SocialLink[] = [
  {
    label: "GitHub",
    href: SITE.github,
    icon: Github,
    handle: "View my code",
  },
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    icon: Linkedin,
    handle: "Let's connect",
  },
  {
    label: "Telegram",
    href: SITE.telegram,
    icon: Send,
    handle: "Message me",
  },
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    icon: Mail,
    handle: SITE.email,
  },
  {
    label: "Resume",
    href: SITE.resume,
    icon: FileDown,
    handle: "Download PDF",
  },
];
