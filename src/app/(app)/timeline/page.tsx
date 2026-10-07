"use client";

import { HealthTimeline } from "@/components/timeline/HealthTimeline";

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h2 className="font-display text-4xl text-navy md:text-6xl">
          Your health <span className="gradient-text">journey</span>
        </h2>
        <p className="mt-1 text-muted">
          Everything important, organized in one place.
        </p>
      </div>
      <HealthTimeline />
    </div>
  );
}
