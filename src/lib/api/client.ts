import type { ChatMessage, TimelineCategory } from "@/lib/types";

/**
 * Thin client over local API routes. Swap these fetch calls for Firebase/Gemini later.
 */
async function json<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const response = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export const api = {
  healthSummary: () => json("/api/health-summary"),
  reports: () => json("/api/reports"),
  report: (id: string) => json(`/api/reports/${id}`),
  compareReports: (previousId?: string, latestId?: string) =>
    json(
      `/api/reports/compare?previous=${previousId ?? "rpt-blood-jun-14"}&latest=${latestId ?? "rpt-blood-sep-12"}`,
    ),
  medications: () => json("/api/medications"),
  appointments: () => json("/api/appointments"),
  appointmentPrep: (id?: string) =>
    json(`/api/appointment-prep${id ? `?id=${id}` : ""}`),
  timeline: (category: TimelineCategory | "all" = "all") =>
    json(`/api/timeline?category=${category}`),
  chat: (message: string, history: ChatMessage[] = []) =>
    json<ChatMessage>("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message, history }),
    }),
  search: (q: string) => json(`/api/search?q=${encodeURIComponent(q)}`),
};
