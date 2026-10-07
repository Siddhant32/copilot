"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AppointmentCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-3xl font-bold">
          Next appointment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          Tomorrow
        </p>
        <p className="font-display text-4xl text-navy">10:30 AM</p>
        <p className="mt-3 text-base font-semibold text-navy">Dr. Ananya Mehta</p>
        <p className="text-sm text-muted">General Physician</p>
        <p className="mt-2 flex items-center gap-1 text-sm text-muted">
          <MapPin className="h-4 w-4" /> CityCare Clinic
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild variant="secondary">
            <Link href="/appointments">View details</Link>
          </Button>
          <Button asChild variant="ai">
            <Link href="/appointments/prepare">Prepare with AI</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
