import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  className,
  duration = "40s",
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  duration?: string;
}) {
  return (
    <div
      className={cn("group flex overflow-hidden", className)}
      style={{ ["--duration" as string]: duration }}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center justify-around gap-4 pr-4 animate-marquee",
            reverse && "[animation-direction:reverse]",
            "group-hover:[animation-play-state:paused]"
          )}
          aria-hidden={i === 1}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
