"use client";

import Link from "next/link";
import { Bell, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { HealthOverview } from "@/components/dashboard/HealthOverview";
import { HealthCore } from "@/components/dashboard/HealthCore";
import { HealthTrends } from "@/components/dashboard/HealthTrends";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { AIInsight } from "@/components/dashboard/AIInsight";
import { AppointmentCard } from "@/components/dashboard/AppointmentCard";
import { Button } from "@/components/ui/button";
import { patient } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1500px] space-y-8">
      <section className="surface-float relative overflow-hidden rounded-[2rem] p-6 md:p-10 lg:min-h-[430px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_420px_at_75%_45%,rgba(92,107,115,0.12),transparent),radial-gradient(500px_300px_at_10%_0%,rgba(37,50,55,0.06),transparent)]" />
        <div className="relative grid items-center gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="z-10 max-w-xl">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">Tuesday · October 8, 2026</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-4 font-display text-5xl leading-[0.9] md:text-7xl">Your health,<span className="gradient-text block">understood.</span></motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">Good morning, {patient.firstName}. Your signals are steady. Here&apos;s the clearest view of what your body is telling you today.</motion.p>
            <div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg" variant="ai"><Link href="/copilot"><Sparkles className="h-4 w-4" /> Ask CarePilot</Link></Button><Button asChild size="lg" variant="secondary"><Link href="/appointments"><Bell className="h-4 w-4" /> Tomorrow 10:30</Link></Button></div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.7 }}><HealthCore /></motion.div>
        </div>
      </section>
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
