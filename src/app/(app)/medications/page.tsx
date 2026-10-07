"use client";

import { Plus } from "lucide-react";
import { medications } from "@/lib/mock-data";
import { MedicationCard } from "@/components/medications/MedicationCard";
import { AdherenceChart } from "@/components/medications/AdherenceChart";
import { Button } from "@/components/ui/button";

export default function MedicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-display text-4xl text-navy md:text-6xl">Medications</h2>
          <p className="text-sm text-muted">Active medicines from your prescription records.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" /> Add medication
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {medications.map((medication) => (
          <MedicationCard key={medication.id} medication={medication} />
        ))}
      </div>
      <AdherenceChart />
    </div>
  );
}
