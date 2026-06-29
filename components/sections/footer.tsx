import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-[10px] font-bold text-white">
            ZN
          </span>
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
        </div>
        <p className="text-xs">
          Built with Next.js, Tailwind & Framer Motion · Designed & coded with AI
        </p>
      </div>
    </footer>
  );
}
