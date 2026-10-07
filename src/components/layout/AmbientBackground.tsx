"use client";

export function AmbientBackground() {
  return (
    <div className="ambient-layer pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_10%_-10%,rgba(46,230,200,0.18),transparent_55%),radial-gradient(900px_600px_at_90%_0%,rgba(167,139,250,0.22),transparent_50%),radial-gradient(800px_500px_at_50%_110%,rgba(244,114,182,0.14),transparent_45%),#050510]" />
      <div className="orb left-[-8%] top-[12%] h-[28rem] w-[28rem] bg-teal/40" />
      <div
        className="orb right-[-10%] top-[8%] h-[32rem] w-[32rem] bg-violet/45"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="orb bottom-[-12%] left-[30%] h-[26rem] w-[26rem] bg-magenta/30"
        style={{ animationDelay: "-11s" }}
      />
      <div className="noise-overlay" />
    </div>
  );
}
