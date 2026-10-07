import { buildComparisonReply, buildDiscussReply, medications } from "@/lib/mock-data";
import type { ChatMessage } from "@/lib/types";

function assistant(partial: Omit<ChatMessage, "id" | "role" | "createdAt">): ChatMessage {
  return {
    id: `asst-${crypto.randomUUID()}`,
    role: "assistant",
    createdAt: new Date().toISOString(),
    basedOnRecords: true,
    ...partial,
  };
}

export async function generateChatReply(prompt: string): Promise<ChatMessage> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  const q = prompt.toLowerCase();

  if (
    q.includes("changed") ||
    q.includes("comparison") ||
    q.includes("compare") ||
    q.includes("blood report") ||
    q.includes("test results")
  ) {
    const reply = buildComparisonReply();
    if (q.includes("explain") || q.includes("test results")) {
      reply.content =
        "Based on your records, here is a plain-language view of values from your latest laboratory report compared with June 14.";
    }
    return { ...reply, id: `asst-${crypto.randomUUID()}` };
  }

  if (q.includes("discuss") || q.includes("doctor") || q.includes("questions")) {
    const reply = buildDiscussReply();
    reply.content = `${reply.content}

1. Should my recent Vitamin D result be discussed?
2. Should I repeat the fasting glucose test?
3. Are there lifestyle factors I should consider alongside these numbers?
4. How should I continue my current medications before the visit?`;
    return { ...reply, id: `asst-${crypto.randomUUID()}` };
  }

  if (q.includes("medication") || q.includes("summarize my med")) {
    const list = medications
      .map(
        (med) =>
          `• ${med.name} ${med.dosage} — ${med.frequency}${med.instructions ? `, ${med.instructions.toLowerCase()}` : ""}`,
      )
      .join("\n");
    return assistant({
      content: `Based on your records, you currently have ${medications.length} active medications:\n\n${list}`,
      closing:
        "This list is organized from your prescription records. How and whether to take any medicine should be confirmed with your healthcare provider.",
      sources: [
        {
          label: "Prescription — Sep 18, 2026",
          detail: "Page 1",
          href: "/reports/rpt-rx-sep-18",
        },
      ],
    });
  }

  if (q.includes("prepare") || q.includes("appointment")) {
    return assistant({
      content:
        "I can help you prepare for tomorrow’s visit with Dr. Ananya Mehta at 10:30 AM. Your records include recent laboratory changes, three active medications, and two symptoms you’ve logged.",
      closing:
        "Open the appointment brief for a structured one-page summary you can take to CityCare Clinic. CarePilot is an organization tool, not a diagnosis.",
      sources: [
        {
          label: "Appointment brief",
          detail: "Prepared by CarePilot",
          href: "/appointments/prepare",
        },
      ],
    });
  }

  return assistant({
    content:
      "I can help you understand information already in your CarePilot records — reports, medications, appointments, and timeline events. Try asking what changed in your latest blood report, or how to prepare for your next appointment.",
    closing: "CarePilot cannot replace professional medical advice.",
  });
}
