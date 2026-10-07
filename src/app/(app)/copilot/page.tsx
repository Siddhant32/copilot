"use client";

import { ChatWindow } from "@/components/copilot/ChatWindow";
import { HealthContext } from "@/components/copilot/HealthContext";

export default function CopilotPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal">
          Hero feature
        </p>
        <h2 className="mt-2 font-display text-4xl text-navy md:text-6xl">
          AI Health <span className="gradient-text">Copilot</span>
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">
          Ask questions about your health records, reports, medications, and appointments.
        </p>
      </div>
      <div className="flex gap-5">
        <ChatWindow />
        <HealthContext />
      </div>
    </div>
  );
}
