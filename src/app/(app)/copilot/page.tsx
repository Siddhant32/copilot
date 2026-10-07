"use client";

import { ChatWindow } from "@/components/copilot/ChatWindow";
import { HealthContext } from "@/components/copilot/HealthContext";

export default function CopilotPage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-3xl text-navy md:text-4xl">AI Health Copilot</h2>
        <p className="mt-1 max-w-2xl text-sm text-muted">
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
