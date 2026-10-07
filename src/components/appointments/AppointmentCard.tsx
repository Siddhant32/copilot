"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Appointment } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { formatDate, formatTime } from "@/lib/utils";

export function AppointmentItem({ appointment }: { appointment: Appointment }) {
  const upcoming = appointment.status === "upcoming";
  return (
    <article className="rounded-[1.35rem] border border-border bg-white p-5 card-shadow">
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-dark">
        {upcoming ? "Upcoming" : "Completed"}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-navy">{appointment.doctor}</h3>
      <p className="text-sm text-muted">{appointment.specialty}</p>
      <p className="mt-3 font-display text-2xl text-navy">
        {upcoming ? "Tomorrow" : formatDate(appointment.start)}
      </p>
      <p className="text-sm text-muted">{formatTime(appointment.start)}</p>
      <p className="mt-2 flex items-center gap-1 text-sm text-muted">
        <MapPin className="h-4 w-4" />
        Location: {appointment.location}
      </p>
      {upcoming && (
        <div className="mt-4 flex flex-wrap gap-2">
          <Button asChild variant="secondary">
            <Link href="/appointments">View details</Link>
          </Button>
          <Button asChild variant="ai">
            <Link href="/appointments/prepare">Prepare with AI</Link>
          </Button>
        </div>
      )}
    </article>
  );
}
