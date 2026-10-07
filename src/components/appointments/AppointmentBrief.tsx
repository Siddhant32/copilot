"use client";

import { medications, reports, symptoms } from "@/lib/mock-data";
import { AiLabel } from "@/components/ui/ai-label";
import { Button } from "@/components/ui/button";
import { Disclaimer } from "@/components/Disclaimer";
import { formatDate } from "@/lib/utils";

export function AppointmentBrief() {
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <header className="rounded-[1.5rem] border border-border bg-white p-6 card-shadow no-print">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm text-muted">Prepared by CarePilot</p>
            <h2 className="font-display text-4xl text-navy">Your appointment brief</h2>
            <p className="mt-2 text-sm text-muted">
              A discussion aid for your visit with Dr. Ananya Mehta — not a medical diagnosis.
            </p>
          </div>
          <AiLabel />
        </div>
        <Button className="mt-4" onClick={() => window.print()}>
          Print / Export brief
        </Button>
      </header>

      <section className="rounded-[1.5rem] border border-border bg-white p-6 print:shadow-none">
        <h3 className="font-display text-2xl text-navy">Visit</h3>
        <p className="mt-2 text-sm">Tomorrow · 10:30 AM · CityCare Clinic</p>
        <p className="text-sm text-muted">Dr. Ananya Mehta · General Physician</p>
      </section>

      <section className="rounded-[1.5rem] border border-border bg-white p-6">
        <h3 className="font-display text-2xl text-navy">Recent health changes</h3>
        <ul className="mt-4 grid gap-3">
          {reports[0].values.slice(0, 3).map((value) => (
            <li key={value.name} className="rounded-2xl bg-[#f8faf7] px-4 py-3 text-sm">
              <span className="font-semibold text-navy">{value.name}</span>
              <span className="ml-2">
                {value.value} {value.unit}
              </span>
              {value.previous !== undefined && (
                <span className="ml-2 text-muted">previously {value.previous}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-[1.5rem] border border-border bg-white p-6">
        <h3 className="font-display text-2xl text-navy">Current medications</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {medications.map((med) => (
            <li key={med.id}>
              <p className="font-semibold text-navy">
                {med.name} · {med.dosage}
              </p>
              <p className="text-muted">
                {med.frequency} · {med.instructions}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-[1.5rem] border border-border bg-white p-6">
        <h3 className="font-display text-2xl text-navy">Recent reports</h3>
        <ul className="mt-4 space-y-2 text-sm">
          {reports.slice(0, 3).map((report) => (
            <li key={report.id} className="flex justify-between">
              <span>{report.title}</span>
              <span className="text-muted">{formatDate(report.date)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-[1.5rem] border border-border bg-white p-6">
        <h3 className="font-display text-2xl text-navy">Symptoms you&apos;ve reported</h3>
        <ul className="mt-4 space-y-2 text-sm">
          {symptoms.map((symptom) => (
            <li key={symptom.id}>
              {symptom.name} — {symptom.duration}
            </li>
          ))}
        </ul>
      </section>

      <section className="ai-surface rounded-[1.5rem] p-6">
        <h3 className="font-display text-2xl text-navy">Questions to discuss</h3>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>Should my recent Vitamin D result be discussed?</li>
          <li>Should I repeat the test?</li>
          <li>Are there lifestyle factors I should consider?</li>
        </ol>
        <Disclaimer className="mt-5" />
      </section>
    </article>
  );
}
