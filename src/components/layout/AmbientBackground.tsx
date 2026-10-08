"use client";

export function AmbientBackground() {
  return (
    <div className="ambient-layer pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_8%_0%,rgba(92,107,115,0.1),transparent_58%),radial-gradient(900px_600px_at_92%_8%,rgba(37,50,55,0.08),transparent_55%),#e0fbfc]" />
      <div className="orb left-[-12%] top-[12%] h-[26rem] w-[26rem] bg-teal/15" />
      <div
        className="orb right-[-14%] top-[8%] h-[28rem] w-[28rem] bg-teal-dark/12"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="orb bottom-[-16%] left-[30%] h-[22rem] w-[22rem] bg-teal/10"
        style={{ animationDelay: "-11s" }}
      />
      <div className="noise-overlay" />
    </div>
  );
}
