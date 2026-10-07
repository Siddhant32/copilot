"use client";

import { Calendar, FileStack, FileText, Pill } from "lucide-react";
import { motion } from "framer-motion";
import { healthContext } from "@/lib/mock-data";
import { TiltCard } from "@/components/ui/tilt-card";

const cards = [
  {
    icon: FileStack,
    value: String(healthContext.records),
    label: "Health Records",
    hint: "Records available",
    accent: "from-teal/40",
  },
  {
    icon: Pill,
    value: String(healthContext.activeMedications),
    label: "Active Medications",
    hint: "Currently active",
    accent: "from-violet/40",
  },
  {
    icon: Calendar,
    value: healthContext.upcomingLabel,
    label: "Upcoming Appointment",
    hint: healthContext.upcomingDetail,
    accent: "from-magenta/40",
  },
  {
    icon: FileText,
    value: String(healthContext.recentReports),
    label: "Recent Reports",
    hint: "Updated this month",
    accent: "from-amber/40",
  },
];

export function HealthOverview() {
  return (
    <section aria-labelledby="overview-heading">
      <h2 id="overview-heading" className="sr-only">
        Health overview
      </h2>
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.07 }}
            >
              <TiltCard className="relative overflow-hidden p-5">
                <div
                  className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${card.accent} to-transparent blur-2xl`}
                />
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-teal-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-display text-4xl text-navy">{card.value}</p>
                <p className="mt-1 text-sm font-semibold text-navy">{card.label}</p>
                <p className="text-xs text-muted">{card.hint}</p>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
