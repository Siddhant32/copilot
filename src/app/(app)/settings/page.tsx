"use client";

import { patient } from "@/lib/mock-data";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <h2 className="font-display text-4xl text-navy">Health Profile</h2>
        <p className="text-sm text-muted">Demo patient used for this walkthrough.</p>
      </div>
      <section className="rounded-[1.35rem] border border-border bg-white p-6">
        <h3 className="font-semibold text-navy">Personal information</h3>
        <dl className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
          <Field label="Name" value={patient.fullName} />
          <Field label="Age" value={String(patient.age)} />
          <Field label="Gender" value={patient.gender} />
        </dl>
      </section>
      <section className="rounded-[1.35rem] border border-border bg-white p-6">
        <h3 className="font-semibold text-navy">Medical information</h3>
        <dl className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
          <Field label="Blood group" value={patient.bloodGroup} />
          <Field label="Allergies" value={patient.allergies.join(", ")} />
          <Field label="Existing conditions" value={patient.conditions.join(", ")} />
        </dl>
      </section>
      <section className="rounded-[1.35rem] border border-amber/30 bg-amber-soft/40 p-6">
        <h3 className="font-semibold text-navy">Emergency information</h3>
        <p className="mt-1 text-xs text-muted">Kept visually separate because it is sensitive.</p>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
          <Field label="Emergency contact" value={patient.emergencyContact.name} />
          <Field
            label="Relation / phone"
            value={`${patient.emergencyContact.relation} · ${patient.emergencyContact.phone}`}
          />
        </dl>
      </section>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-1 font-medium text-navy">{value}</dd>
    </div>
  );
}
