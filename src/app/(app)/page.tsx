"use client";

import Link from "next/link";
import { Bell, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { HealthOverview } from "@/components/dashboard/HealthOverview";
import { HealthTrends } from "@/components/dashboard/HealthTrends";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { AIInsight } from "@/components/dashboard/AIInsight";
import { AppointmentCard } from "@/components/dashboard/AppointmentCard";
import { Button } from "@/components/ui/button";
import { patient } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 p-6 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_0%_0%,rgba(46,230,200,0.18),transparent),radial-gradient(600px_280px_at_100%_20%,rgba(167,139,250,0.2),transparent)]" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-teal"
            >
              Live health OS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-3 font-display text-5xl leading-[0.95] md:text-7xl"
            >
              Good morning,
              <span className="gradient-text block">{patient.firstName}.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18 }}
              className="mt-4 max-w-xl text-base text-muted md:text-lg"
            >
              Here&apos;s a simple view of your health journey — records, signals, and
              the next conversation with your clinician, in one cinematic cockpit.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" variant="ai">
                <Link href="/copilot">
                  <Sparkles className="h-4 w-4" />
                  Ask CarePilot
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/appointments" aria-label="Open notifications and appointments">
                  <Bell className="h-4 w-4" />
                  Tomorrow 10:30
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative mx-auto grid h-56 w-56 place-items-center md:h-72 md:w-72"
          >
            <span className="pulse-ring absolute inset-6 rounded-full border border-teal/40" />
            <span
              className="pulse-ring absolute inset-0 rounded-full border border-violet/30"
              style={{ animationDelay: "0.9s" }}
            />
            <div className="grid h-36 w-36 place-items-center rounded-full bg-gradient-to-br from-teal/30 via-violet/20 to-magenta/30 shadow-[0_0_60px_rgba(46,230,200,0.35)] md:h-44 md:w-44">
              <div className="text-center">
                <p className="font-display text-4xl text-navy">86%</p>
                <p className="text-[11px] uppercase tracking-widest text-muted">
                  Adherence
                </p>
              </div>
            </div>
          </motion.div>
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
