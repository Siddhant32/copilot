"use client";

import { appointments } from "@/lib/mock-data";
import { AppointmentItem } from "@/components/appointments/AppointmentCard";

export default function AppointmentsPage() {
  const upcoming = appointments.filter((item) => item.status === "upcoming");
  const past = appointments.filter((item) => item.status === "completed");

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-4xl text-navy md:text-6xl">Appointments</h2>
        <p className="text-sm text-muted">Upcoming visits and recent history.</p>
      </div>
      <section className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          Upcoming
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {upcoming.map((appointment) => (
            <AppointmentItem key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Past appointments
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {past.map((appointment) => (
            <AppointmentItem key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </section>
    </div>
  );
}
