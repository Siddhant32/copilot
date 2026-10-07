"use client";

import Link from "next/link";
import { ArrowDown, ArrowUp } from "lucide-react";
import { AiLabel } from "@/components/ui/ai-label";
import { Button } from "@/components/ui/button";
import { Disclaimer } from "@/components/Disclaimer";
import { reports } from "@/lib/mock-data";

const rows = [
  { name: "Vitamin D", previous: "26", latest: "19", change: "7", dir: "down" as const, unit: "ng/mL" },
  { name: "Glucose", previous: "98", latest: "108", change: "10", dir: "up" as const, unit: "mg/dL" },
  { name: "Hemoglobin", previous: "13.1", latest: "12.4", change: "0.7", dir: "down" as const, unit: "g/dL" },
];

export function ReportComparison() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl text-navy">Compare reports</h2>
          <p className="text-sm text-muted">
            Side-by-side view of values from your records — not a diagnosis.
          </p>
        </div>
        <div className="flex gap-2">
          <label className="text-sm text-muted">
            Previous
            <select defaultValue="rpt-blood-jun-14" className="ml-2 rounded-full border border-border bg-white px-3 py-2 text-navy">
              {reports
                .filter((report) => report.type === "laboratory")
                .map((report) => (
                  <option key={report.id} value={report.id}>
                    {report.title} · {report.date}
                  </option>
                ))}
            </select>
          </label>
          <label className="text-sm text-muted">
            Latest
            <select defaultValue="rpt-blood-sep-12" className="ml-2 rounded-full border border-border bg-white px-3 py-2 text-navy">
              {reports
                .filter((report) => report.type === "laboratory")
                .map((report) => (
                  <option key={report.id} value={report.id}>
                    {report.title} · {report.date}
                  </option>
                ))}
            </select>
          </label>
        </div>
      </div>

      <div className="hidden overflow-hidden rounded-[1.5rem] border border-border bg-white md:block card-shadow">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f8faf7] text-muted">
            <tr>
              <th className="px-5 py-3 font-medium">Measure</th>
              <th className="px-5 py-3 font-medium">Previous</th>
              <th className="px-5 py-3 font-medium">Latest</th>
              <th className="px-5 py-3 font-medium">Change</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-t border-border">
                <td className="px-5 py-4 font-semibold text-navy">{row.name}</td>
                <td className="px-5 py-4">
                  {row.previous} {row.unit}
                </td>
                <td className="px-5 py-4">
                  {row.latest} {row.unit}
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-soft px-2.5 py-1 text-amber">
                    {row.dir === "down" ? (
                      <ArrowDown className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowUp className="h-3.5 w-3.5" />
                    )}
                    {row.dir === "down" ? "↓" : "↑"} {row.change}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 md:hidden">
        {rows.map((row) => (
          <article key={row.name} className="rounded-[1.2rem] border border-border bg-white p-4">
            <p className="font-semibold text-navy">{row.name}</p>
            <p className="mt-1 text-sm text-muted">Previous {row.previous}</p>
            <p className="text-sm text-muted">Latest {row.latest}</p>
            <p className="mt-2 text-sm text-amber">
              {row.dir === "down" ? "↓" : "↑"} {row.change} {row.unit}
            </p>
          </article>
        ))}
      </div>

      <section className="ai-surface rounded-[1.5rem] p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl text-navy">AI interpretation</h3>
          <AiLabel />
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          Your latest report contains three notable changes. Vitamin D decreased from
          the previous measurement, while glucose increased slightly. Hemoglobin is
          also a little lower than in June. These observations come from your uploaded
          laboratory reports and should be interpreted with a healthcare professional.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button asChild variant="secondary">
            <Link href="/reports/rpt-blood-sep-12">View source</Link>
          </Button>
          <Button asChild variant="ai">
            <Link href="/copilot">Ask CarePilot</Link>
          </Button>
        </div>
        <Disclaimer className="mt-4" />
      </section>
    </div>
  );
}
