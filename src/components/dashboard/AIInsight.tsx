"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { AiLabel } from "@/components/ui/ai-label";
import { motion } from "framer-motion";

export function AIInsight() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="ai-surface relative overflow-hidden rounded-[1.6rem] p-6"
    >
      <div className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full bg-violet/30 blur-3xl" />
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-violet">
          <Sparkles className="h-5 w-5" />
        </div>
        <AiLabel />
      </div>
      <h3 className="mt-4 font-display text-3xl text-navy">CarePilot noticed something</h3>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
        Your latest report shows that your Vitamin D value has changed compared with
        your previous report. Based on your records, this may be worth reviewing
        before tomorrow’s visit.
      </p>
      <Link
        href="/reports/compare"
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-dark"
      >
        View comparison <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
