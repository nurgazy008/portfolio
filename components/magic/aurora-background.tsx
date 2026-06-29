export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated aurora blobs */}
      <div className="absolute -top-1/4 left-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px] animate-aurora" />
      <div
        className="absolute top-1/3 right-0 h-[36rem] w-[36rem] rounded-full bg-indigo-600/20 blur-[120px] animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-fuchsia-600/15 blur-[120px] animate-aurora"
        style={{ animationDelay: "-12s" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-60" />

      {/* Top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background" />
    </div>
  );
}
