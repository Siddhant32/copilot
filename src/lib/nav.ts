import {
  Calendar,
  FileText,
  LayoutDashboard,
  Pill,
  Settings,
  Sparkles,
  Stethoscope,
  History,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/copilot", label: "AI Copilot", icon: Sparkles },
  { href: "/timeline", label: "Health Timeline", icon: History },
  { href: "/reports", label: "Medical Reports", icon: FileText },
  { href: "/medications", label: "Medications", icon: Pill },
  { href: "/appointments", label: "Appointments", icon: Calendar },
  { href: "/insights", label: "Health Insights", icon: Stethoscope },
  { href: "/settings", label: "Settings", icon: Settings },
];

export const pageTitles: Record<string, { title: string; subtitle?: string }> = {
  "/": { title: "Dashboard", subtitle: "Your health at a glance" },
  "/copilot": {
    title: "AI Health Copilot",
    subtitle: "Ask questions about your records",
  },
  "/timeline": { title: "Health Timeline", subtitle: "Your health journey" },
  "/reports": { title: "Medical Reports", subtitle: "Documents in one place" },
  "/reports/compare": { title: "Compare reports" },
  "/medications": { title: "Medications" },
  "/appointments": { title: "Appointments" },
  "/appointments/prepare": { title: "Appointment brief" },
  "/insights": { title: "Health Insights" },
  "/settings": { title: "Health Profile" },
};
