"use client";

import { Calendar, FileStack, FileText, Pill } from "lucide-react";
import { motion } from "framer-motion";
import { healthContext } from "@/lib/mock-data";

const cards = [
  {
    icon: FileStack,
    value: String(healthContext.records),
    label: "Health Records",
    hint: "Records available",
  },
  {
    icon: Pill,
    value: String(healthContext.activeMedications),
    label: "Active Medications",
    hint: "Currently active",
  },
  {
    icon: Calendar,
    value: healthContext.upcomingLabel,
    label: "Upcoming Appointment",
    hint: healthContext.upcomingDetail,
  },
  {
    icon: FileText,
    value: String(healthContext.recentReports),
    label: "Recent Reports",
    hint: "Updated this month",
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
            <motion.article
              key={card.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[1.35rem] border border-border bg-card p-5 card-shadow"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-soft text-teal-dark">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-display text-3xl text-navy">{card.value}</p>
              <p className="mt-1 text-sm font-semibold text-navy">{card.label}</p>
              <p className="text-xs text-muted">{card.hint}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
