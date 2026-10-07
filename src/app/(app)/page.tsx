"use client";

import Link from "next/link";
import { Bell, Sparkles } from "lucide-react";
import { HealthOverview } from "@/components/dashboard/HealthOverview";
import { HealthTrends } from "@/components/dashboard/HealthTrends";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { AIInsight } from "@/components/dashboard/AIInsight";
import { AppointmentCard } from "@/components/dashboard/AppointmentCard";
import { Button } from "@/components/ui/button";
import { patient } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-4xl text-navy">
            Good morning, {patient.firstName} 👋
          </h2>
          <p className="mt-1 text-muted">
            Here&apos;s a simple view of your health journey.
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="ai">
            <Link href="/copilot">
              <Sparkles className="h-4 w-4" />
              Ask CarePilot
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/appointments" aria-label="Open notifications and appointments">
              <Bell className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <HealthOverview />
      <div className="grid gap-5 xl:grid-cols-[1.4fr_0.8fr]">
        <HealthTrends />
        <div className="space-y-5">
          <AIInsight />
          <AppointmentCard />
        </div>
      </div>
      <RecentActivity />
    </div>
  );
}
