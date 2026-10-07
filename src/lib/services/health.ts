import {
  adherenceWeek,
  appointments,
  healthContext,
  insights,
  medications,
  notifications,
  patient,
  reports,
  searchIndex,
  symptoms,
  timeline,
  trendData,
} from "@/lib/mock-data";
import type { TimelineCategory } from "@/lib/types";

const delay = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getPatient() {
  await delay();
  return patient;
}

export async function getHealthSummary() {
  await delay();
  return { patient, ...healthContext };
}

export async function getReports() {
  await delay();
  return reports;
}

export async function getReport(id: string) {
  await delay();
  return reports.find((report) => report.id === id) ?? null;
}

export async function compareReports(
  previousId = "rpt-blood-jun-14",
  latestId = "rpt-blood-sep-12",
) {
  await delay();
  const previous = reports.find((report) => report.id === previousId);
  const latest = reports.find((report) => report.id === latestId);
  const names = new Set([
    ...(latest?.values.map((value) => value.name) ?? []),
    ...(previous?.values.map((value) => value.name) ?? []),
  ]);

  const rows = [...names].map((name) => {
    const prev = previous?.values.find((value) => value.name === name);
    const next = latest?.values.find((value) => value.name === name);
    const delta =
      prev && next ? Number((next.value - prev.value).toFixed(1)) : null;
    return {
      name,
      unit: next?.unit ?? prev?.unit ?? "",
      previous: prev?.value ?? null,
      latest: next?.value ?? null,
      delta,
      direction:
        delta === null ? "stable" : delta > 0 ? "up" : delta < 0 ? "down" : "stable",
    };
  });

  return { previous, latest, rows };
}

export async function getMedications() {
  await delay();
  return { medications, adherenceWeek };
}

export async function getAppointments() {
  await delay();
  return appointments;
}

export async function getAppointmentPrep(id = "apt-mehta-oct-08") {
  await delay();
  const appointment = appointments.find((item) => item.id === id) ?? appointments[0];
  return {
    appointment,
    patient,
    medications,
    reports: reports.filter((report) =>
      ["rpt-blood-sep-12", "rpt-rx-sep-18", "rpt-xray-aug-21"].includes(report.id),
    ),
    symptoms,
    questions: reports[0].questions,
    changes: reports[0].values.slice(0, 3),
  };
}

export async function getTimeline(category: TimelineCategory | "all" = "all") {
  await delay();
  if (category === "all") return timeline;
  return timeline.filter((event) => event.category === category);
}

export async function getInsights() {
  await delay();
  return insights;
}

export async function getTrends() {
  await delay();
  return trendData;
}

export async function getNotifications() {
  await delay();
  return notifications;
}

export async function searchRecords(query: string) {
  await delay(60);
  const q = query.trim().toLowerCase();
  if (!q) return searchIndex.slice(0, 5);
  return searchIndex.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q),
  );
}
