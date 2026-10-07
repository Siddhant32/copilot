"use client";

import type { Medication } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/ui/tilt-card";
import { formatDate } from "@/lib/utils";

export function MedicationCard({ medication }: { medication: Medication }) {
  return (
    <TiltCard as="article" className="p-5">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-navy">{medication.name}</h3>
        <Badge variant={medication.reminderStatus === "due" ? "amber" : "default"}>
          {medication.reminderStatus === "due" ? "Reminder due" : "Reminders on"}
        </Badge>
      </div>
      <p className="mt-2 font-display text-3xl text-navy">{medication.dosage}</p>
      <p className="text-sm text-muted">{medication.frequency}</p>
      <p className="text-sm text-muted">{medication.instructions}</p>
      <p className="mt-3 text-xs text-muted">Started {formatDate(medication.startDate)}</p>
    </TiltCard>
  );
}
