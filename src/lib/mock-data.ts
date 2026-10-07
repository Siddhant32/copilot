import type {
  AdherenceDay,
  Appointment,
  ChatMessage,
  HealthInsight,
  MedicalReport,
  Medication,
  NotificationItem,
  PatientProfile,
  SearchResult,
  TimelineEvent,
  TrendPoint,
} from "./types";

export const patient: PatientProfile = {
  id: "pt-alex-morgan",
  firstName: "Alex",
  lastName: "Morgan",
  fullName: "Alex Morgan",
  age: 35,
  gender: "Male",
  bloodGroup: "B+",
  conditions: ["Hypertension"],
  allergies: ["Penicillin"],
  emergencyContact: {
    name: "Jordan Morgan",
    relation: "Spouse",
    phone: "+1 (415) 555-0142",
  },
  address: "428 Harbor Lane, San Francisco, CA",
  primaryPhysician: "Dr. Ananya Mehta",
};

export const reports: MedicalReport[] = [
  {
    id: "rpt-blood-sep-12",
    title: "Blood Test",
    type: "laboratory",
    typeLabel: "Laboratory Report",
    date: "2026-09-12",
    provider: "CityCare Diagnostics",
    summary:
      "This laboratory report includes a complete blood count and a metabolic panel. Several values differ from the June 14 report and may be useful to review with a healthcare provider.",
    keyFindings: [
      "Vitamin D is 19 ng/mL, lower than the previous result of 26 ng/mL.",
      "Fasting glucose is 108 mg/dL, higher than the previous result of 98 mg/dL.",
      "Hemoglobin is 12.4 g/dL, slightly lower than 13.1 g/dL in June.",
    ],
    values: [
      {
        name: "Vitamin D",
        value: 19,
        unit: "ng/mL",
        previous: 26,
        reference: "30–100",
        direction: "down",
      },
      {
        name: "Glucose",
        value: 108,
        unit: "mg/dL",
        previous: 98,
        reference: "70–99",
        direction: "up",
      },
      {
        name: "Hemoglobin",
        value: 12.4,
        unit: "g/dL",
        previous: 13.1,
        reference: "13.0–17.0",
        direction: "down",
      },
      {
        name: "LDL cholesterol",
        value: 118,
        unit: "mg/dL",
        previous: 122,
        reference: "< 130",
        direction: "down",
      },
    ],
    questions: [
      "Should the Vitamin D result be discussed at my next visit?",
      "Would a repeat fasting glucose test be useful?",
      "Are there lifestyle factors worth reviewing alongside these numbers?",
    ],
    needsReview: true,
    pages: 3,
  },
  {
    id: "rpt-rx-sep-18",
    title: "Prescription",
    type: "prescription",
    typeLabel: "Prescription",
    date: "2026-09-18",
    provider: "Dr. Ananya Mehta",
    summary:
      "This prescription updates ongoing medications for blood pressure support and adds a Vitamin D supplement. It does not replace a conversation with your clinician about how to take these medicines.",
    keyFindings: [
      "Lisinopril 10 mg once daily is continued.",
      "Vitamin D3 2,000 IU once daily is added.",
      "Atorvastatin 20 mg at night is continued.",
    ],
    values: [],
    questions: [
      "Should I take Vitamin D3 with food?",
      "When should these medications be reviewed again?",
    ],
    pages: 1,
  },
  {
    id: "rpt-xray-aug-21",
    title: "Chest X-Ray",
    type: "radiology",
    typeLabel: "Radiology",
    date: "2026-08-21",
    provider: "CityCare Imaging",
    summary:
      "This imaging report describes a chest radiograph taken in August. CarePilot can help you locate the written impression so you can discuss it with your clinician.",
    keyFindings: [
      "The written impression notes no acute cardiopulmonary process.",
      "The study is available for comparison at future visits.",
    ],
    values: [],
    questions: ["Is any follow-up imaging recommended?"],
    pages: 2,
  },
  {
    id: "rpt-blood-jun-14",
    title: "Blood Test",
    type: "laboratory",
    typeLabel: "Laboratory Report",
    date: "2026-06-14",
    provider: "CityCare Diagnostics",
    summary:
      "This earlier laboratory report is the comparison baseline for the September 12 blood test.",
    keyFindings: [
      "Vitamin D was 26 ng/mL.",
      "Fasting glucose was 98 mg/dL.",
      "Hemoglobin was 13.1 g/dL.",
    ],
    values: [
      {
        name: "Vitamin D",
        value: 26,
        unit: "ng/mL",
        reference: "30–100",
      },
      {
        name: "Glucose",
        value: 98,
        unit: "mg/dL",
        reference: "70–99",
      },
      {
        name: "Hemoglobin",
        value: 13.1,
        unit: "g/dL",
        reference: "13.0–17.0",
      },
    ],
    questions: [],
    pages: 3,
  },
];

export const medications: Medication[] = [
  {
    id: "med-lisinopril",
    name: "Lisinopril",
    dosage: "10 mg",
    frequency: "Once daily",
    instructions: "After breakfast",
    startDate: "2026-08-12",
    reminderEnabled: true,
    reminderStatus: "on-track",
  },
  {
    id: "med-vitd",
    name: "Vitamin D3",
    dosage: "2,000 IU",
    frequency: "Once daily",
    instructions: "With breakfast",
    startDate: "2026-09-18",
    reminderEnabled: true,
    reminderStatus: "due",
  },
  {
    id: "med-atorva",
    name: "Atorvastatin",
    dosage: "20 mg",
    frequency: "Once at night",
    instructions: "At bedtime",
    startDate: "2026-03-04",
    reminderEnabled: true,
    reminderStatus: "on-track",
  },
];

export const appointments: Appointment[] = [
  {
    id: "apt-mehta-oct-08",
    doctor: "Dr. Ananya Mehta",
    specialty: "General Physician",
    start: "2026-10-08T10:30:00",
    location: "CityCare Clinic",
    status: "upcoming",
    notes: "Follow-up after September blood work.",
  },
  {
    id: "apt-mehta-sep-28",
    doctor: "Dr. Ananya Mehta",
    specialty: "General Physician",
    start: "2026-09-28T09:15:00",
    location: "CityCare Clinic",
    status: "completed",
    notes: "Medication review and prescription update.",
  },
  {
    id: "apt-chen-aug-02",
    doctor: "Dr. Priya Chen",
    specialty: "Cardiology",
    start: "2026-08-02T14:00:00",
    location: "Harbor Heart Center",
    status: "completed",
  },
];

export const timeline: TimelineEvent[] = [
  {
    id: "tl-med-today",
    date: "2026-10-07T08:12:00",
    title: "Medication reminder completed",
    description: "Morning Lisinopril marked as taken.",
    category: "medications",
    href: "/medications",
    meta: "Today · 8:12 AM",
  },
  {
    id: "tl-report-yesterday",
    date: "2026-10-06T16:40:00",
    title: "Blood report uploaded",
    description: "September laboratory report added to your records.",
    category: "reports",
    href: "/reports/rpt-blood-sep-12",
    meta: "Yesterday · 4:40 PM",
  },
  {
    id: "tl-apt-sep-28",
    date: "2026-09-28T09:15:00",
    title: "Doctor appointment completed",
    description: "Visit with Dr. Ananya Mehta at CityCare Clinic.",
    category: "appointments",
    href: "/appointments",
    meta: "Sep 28 · 9:15 AM",
  },
  {
    id: "tl-rx-sep-21",
    date: "2026-09-21T11:00:00",
    title: "Prescription updated",
    description: "Vitamin D3 added to the active medication list.",
    category: "medications",
    href: "/reports/rpt-rx-sep-18",
    meta: "Sep 21",
  },
  {
    id: "tl-blood-sep-21",
    date: "2026-09-21T08:30:00",
    title: "Blood test",
    description: "Laboratory collection completed.",
    category: "reports",
    href: "/reports/rpt-blood-sep-12",
    meta: "Sep 21",
  },
  {
    id: "tl-rx-sep-18",
    date: "2026-09-18T10:05:00",
    title: "Prescription updated",
    description: "New prescription from Dr. Ananya Mehta.",
    category: "medications",
    href: "/reports/rpt-rx-sep-18",
    meta: "Sep 18",
  },
  {
    id: "tl-upload-sep-12",
    date: "2026-09-12T18:20:00",
    title: "Blood report uploaded",
    description: "CityCare Diagnostics laboratory report.",
    category: "reports",
    href: "/reports/rpt-blood-sep-12",
    meta: "Sep 12",
  },
  {
    id: "tl-symptom-aug-30",
    date: "2026-08-30T19:10:00",
    title: "Symptom recorded",
    description: "Fatigue noted for three days.",
    category: "symptoms",
    href: "/timeline",
    meta: "Aug 30",
  },
  {
    id: "tl-med-aug-12",
    date: "2026-08-12T08:00:00",
    title: "Medication started",
    description: "Lisinopril 10 mg once daily.",
    category: "medications",
    href: "/medications",
    meta: "Aug 12",
  },
];

export const recentActivity: TimelineEvent[] = timeline.slice(0, 4);

export const insights: HealthInsight[] = [
  {
    id: "ins-complete",
    title: "Your health records are becoming more complete.",
    body: "Reports, medications, and appointments from the last 90 days are now in one timeline.",
    tone: "positive",
  },
  {
    id: "ins-reports",
    title: "You have 3 reports from the last 30 days.",
    body: "Keeping recent documents together makes it easier to prepare for visits.",
    tone: "information",
    href: "/reports",
  },
  {
    id: "ins-adherence",
    title: "Your medication adherence this week is 86%.",
    body: "Four of the logged doses this week are marked complete. Remaining days are still open.",
    tone: "positive",
    href: "/medications",
  },
  {
    id: "ins-compare",
    title: "Your latest report can be compared with your previous report.",
    body: "Vitamin D, glucose, and hemoglobin differ from the June laboratory results.",
    tone: "attention",
    href: "/reports/compare",
  },
];

export const notifications: NotificationItem[] = [
  {
    id: "n1",
    title: "Your appointment is tomorrow.",
    body: "Dr. Ananya Mehta · 10:30 AM at CityCare Clinic",
    time: "2h ago",
    unread: true,
    href: "/appointments",
  },
  {
    id: "n2",
    title: "CarePilot found a change between your latest reports.",
    body: "Vitamin D and glucose differ from the previous laboratory report.",
    time: "Yesterday",
    unread: true,
    href: "/reports/compare",
  },
  {
    id: "n3",
    title: "New report uploaded.",
    body: "Blood Test — Sep 12, 2026 is ready to review.",
    time: "Yesterday",
    unread: false,
    href: "/reports/rpt-blood-sep-12",
  },
  {
    id: "n4",
    title: "Medication reminder.",
    body: "Vitamin D3 is scheduled with breakfast.",
    time: "This morning",
    unread: false,
    href: "/medications",
  },
];

export const trendData: TrendPoint[] = [
  { month: "Apr", hemoglobin: 13.3, glucose: 94, vitaminD: 29 },
  { month: "May", hemoglobin: 13.2, glucose: 96, vitaminD: 28 },
  { month: "Jun", hemoglobin: 13.1, glucose: 98, vitaminD: 26 },
  { month: "Jul", hemoglobin: 12.9, glucose: 101, vitaminD: 24 },
  { month: "Aug", hemoglobin: 12.8, glucose: 104, vitaminD: 22 },
  { month: "Sep", hemoglobin: 12.4, glucose: 108, vitaminD: 19 },
];

export const adherenceWeek: AdherenceDay[] = [
  { label: "Mon", taken: true },
  { label: "Tue", taken: true },
  { label: "Wed", taken: true },
  { label: "Thu", taken: true },
  { label: "Fri", taken: false },
  { label: "Sat", taken: false },
  { label: "Sun", taken: false },
];

export const symptoms = [
  { id: "sx-headache", name: "Headache", duration: "5 days", recordedOn: "2026-10-02" },
  { id: "sx-fatigue", name: "Fatigue", duration: "3 days", recordedOn: "2026-08-30" },
];

export const healthContext = {
  records: 12,
  activeMedications: 3,
  upcomingLabel: "Tomorrow",
  upcomingDetail: "Dr. Mehta • 10:30 AM",
  recentReports: 3,
};

export const searchIndex: SearchResult[] = [
  {
    id: "s1",
    title: "Blood Report — Sep 12",
    subtitle: "Laboratory · Vitamin D, glucose, hemoglobin",
    kind: "report",
    href: "/reports/rpt-blood-sep-12",
  },
  {
    id: "s2",
    title: "Blood Report — Jun 14",
    subtitle: "Laboratory · comparison baseline",
    kind: "report",
    href: "/reports/rpt-blood-jun-14",
  },
  {
    id: "s3",
    title: "AI Insight — Sep 13",
    subtitle: "Vitamin D changed compared with the previous report",
    kind: "insight",
    href: "/reports/compare",
  },
  {
    id: "s4",
    title: "Vitamin D3",
    subtitle: "2,000 IU · once daily",
    kind: "medication",
    href: "/medications",
  },
  {
    id: "s5",
    title: "Dr. Ananya Mehta",
    subtitle: "Tomorrow · 10:30 AM · CityCare Clinic",
    kind: "appointment",
    href: "/appointments",
  },
  {
    id: "s6",
    title: "Fatigue",
    subtitle: "Symptom recorded Aug 30",
    kind: "symptom",
    href: "/timeline",
  },
  {
    id: "s7",
    title: "Prescription — Sep 18",
    subtitle: "Dr. Ananya Mehta",
    kind: "report",
    href: "/reports/rpt-rx-sep-18",
  },
];

export const suggestedPrompts = [
  "What changed in my latest blood report?",
  "Explain my recent test results",
  "Summarize my medications",
  "Prepare me for my next appointment",
  "What should I discuss with my doctor?",
];

export const medicalDisclaimer =
  "CarePilot organizes your records and highlights information from documents you upload. It cannot diagnose conditions, prescribe treatment, or replace professional medical advice.";

export function buildComparisonReply(): ChatMessage {
  return {
    id: "msg-compare",
    role: "assistant",
    createdAt: new Date().toISOString(),
    basedOnRecords: true,
    content:
      "Your latest blood report has a few notable changes compared with your previous report.",
    changes: [
      {
        name: "Vitamin D",
        current: "19 ng/mL",
        previous: "26 ng/mL",
        direction: "down",
      },
      {
        name: "Glucose",
        current: "108 mg/dL",
        previous: "98 mg/dL",
        direction: "up",
      },
      {
        name: "Hemoglobin",
        current: "12.4 g/dL",
        previous: "13.1 g/dL",
        direction: "down",
      },
    ],
    closing:
      "These values should be interpreted alongside the laboratory's reference ranges and your overall clinical context. This may be worth discussing with your healthcare provider.",
    sources: [
      {
        label: "Blood Report — Sep 12, 2026",
        detail: "Page 2",
        href: "/reports/rpt-blood-sep-12",
      },
      {
        label: "Prescription — Sep 18, 2026",
        detail: "Page 1",
        href: "/reports/rpt-rx-sep-18",
      },
    ],
  };
}

export function buildDiscussReply(): ChatMessage {
  return {
    id: "msg-discuss",
    role: "assistant",
    createdAt: new Date().toISOString(),
    basedOnRecords: true,
    content:
      "Based on your records, here are grounded topics you could bring to your visit with Dr. Mehta. These are conversation starters, not a diagnosis.",
    changes: [],
    closing:
      "CarePilot cannot replace professional medical advice. Use this list only as a way to organize what you already have in your records.",
    sources: [
      {
        label: "Blood Report — Sep 12, 2026",
        detail: "Page 2",
        href: "/reports/rpt-blood-sep-12",
      },
      {
        label: "Appointment — Oct 8, 2026",
        detail: "CityCare Clinic",
        href: "/appointments/prepare",
      },
    ],
  };
}
