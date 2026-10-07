"use client";

import { Check } from "lucide-react";
import { adherenceWeek } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function AdherenceChart() {
  const taken = adherenceWeek.filter((day) => day.taken).length;
  const pct = Math.round((taken / adherenceWeek.length) * 100);

  return (
    <section className="rounded-[1.35rem] border border-border bg-white p-6 card-shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-2xl text-navy">This week</h3>
          <p className="text-sm text-muted">Medication adherence</p>
        </div>
        <p className="font-display text-3xl text-teal-dark">{pct}%</p>
      </div>
      <ol className="mt-5 grid grid-cols-7 gap-2">
        {adherenceWeek.map((day) => (
          <li key={day.label} className="text-center">
            <span
              className={cn(
                "mx-auto grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold",
                day.taken ? "bg-teal-soft text-teal-dark" : "bg-[#eef1ee] text-muted",
              )}
              aria-label={`${day.label}: ${day.taken ? "taken" : "not yet logged"}`}
            >
              {day.taken ? <Check className="h-4 w-4" /> : "○"}
            </span>
            <span className="mt-1 block text-xs text-muted">{day.label}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
