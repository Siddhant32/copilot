export type ReportType =
  | "laboratory"
  | "prescription"
  | "radiology"
  | "clinical-note";

export type TimelineCategory =
  | "reports"
  | "appointments"
  | "medications"
  | "symptoms"
  | "activity";

export type InsightTone = "positive" | "information" | "attention";

export type SearchResultKind =
  | "report"
  | "medication"
  | "appointment"
  | "symptom"
  | "insight"
  | "timeline";

export interface PatientProfile {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  gender: string;
  bloodGroup: string;
  conditions: string[];
  allergies: string[];
  emergencyContact: {
    name: string;
    relation: string;
    phone: string;
  };
  address: string;
  primaryPhysician: string;
}

export interface LabValue {
  name: string;
  value: number;
  unit: string;
  previous?: number;
  reference: string;
  direction?: "up" | "down" | "stable";
}

export interface MedicalReport {
  id: string;
  title: string;
  type: ReportType;
  typeLabel: string;
  date: string;
  provider: string;
  summary: string;
  keyFindings: string[];
  values: LabValue[];
  questions: string[];
  needsReview?: boolean;
  pages: number;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  instructions: string;
  startDate: string;
  reminderEnabled: boolean;
  reminderStatus: "on-track" | "due" | "missed";
}

export interface Appointment {
  id: string;
  doctor: string;
  specialty: string;
  start: string;
  location: string;
  status: "upcoming" | "completed";
  notes?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: TimelineCategory;
  href?: string;
  meta?: string;
}

export interface HealthInsight {
  id: string;
  title: string;
  body: string;
  tone: InsightTone;
  href?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  time: string;
  unread: boolean;
  href?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  kind: SearchResultKind;
  href: string;
}

export interface TrendPoint {
  month: string;
  hemoglobin: number;
  glucose: number;
  vitaminD: number;
}

export interface ChatSource {
  label: string;
  detail: string;
  href: string;
}

export interface StructuredChange {
  name: string;
  current: string;
  previous: string;
  direction: "up" | "down" | "stable";
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
  basedOnRecords?: boolean;
  changes?: StructuredChange[];
  sources?: ChatSource[];
  closing?: string;
}

export interface AdherenceDay {
  label: string;
  taken: boolean;
}
