"use client";

import { healthContext, medications, patient, reports } from "@/lib/mock-data";
import { AiLabel } from "@/components/ui/ai-label";

export function HealthContext() {
  return (
    <aside className="hidden w-[300px] shrink-0 xl:block">
      <div className="sticky top-24 space-y-4 rounded-[1.5rem] border border-border bg-white p-5 card-shadow">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl text-navy">Your health context</h2>
          <AiLabel />
        </div>
        <p className="text-sm text-muted">
          {patient.fullName} · {patient.age} · {patient.bloodGroup}
        </p>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-[#f8faf7] p-3">
            <dt className="text-xs text-muted">Records</dt>
            <dd className="text-lg font-semibold text-navy">{healthContext.records}</dd>
          </div>
          <div className="rounded-2xl bg-[#f8faf7] p-3">
            <dt className="text-xs text-muted">Medications</dt>
            <dd className="text-lg font-semibold text-navy">
              {healthContext.activeMedications}
            </dd>
          </div>
        </dl>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Latest reports
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            {reports.slice(0, 3).map((report) => (
              <li key={report.id} className="text-navy">
                {report.title}
                <span className="block text-xs text-muted">{report.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Active medications
          </p>
          <ul className="mt-2 space-y-1 text-sm text-navy">
            {medications.map((med) => (
              <li key={med.id}>
                {med.name} · {med.dosage}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
