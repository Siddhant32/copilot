"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import type { MedicalReport } from "@/lib/types";
import { AiLabel } from "@/components/ui/ai-label";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { Disclaimer } from "@/components/Disclaimer";

export function ReportViewer({ report }: { report: MedicalReport }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[1.5rem] border border-border bg-white p-5 card-shadow">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          Document preview
        </p>
        <div className="mt-4 min-h-[520px] rounded-[1.2rem] border border-dashed border-border bg-[#fbfcf9] p-6">
          <div className="mx-auto max-w-md space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted">{report.provider}</p>
                <h2 className="font-display text-2xl text-navy">{report.title}</h2>
                <p className="text-sm text-muted">{formatDate(report.date)}</p>
              </div>
              <span className="rounded-full bg-teal-soft px-2 py-1 text-[11px] text-teal-dark">
                {report.pages} pages
              </span>
            </div>
            {report.values.length > 0 ? (
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-muted">
                    <th className="py-2 font-medium">Analyte</th>
                    <th className="font-medium">Result</th>
                    <th className="font-medium">Reference</th>
                  </tr>
                </thead>
                <tbody>
                  {report.values.map((value) => (
                    <tr key={value.name} className="border-t border-border">
                      <td className="py-2">{value.name}</td>
                      <td>
                        {value.value} {value.unit}
                      </td>
                      <td className="text-muted">{value.reference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-sm leading-relaxed text-muted">{report.summary}</p>
            )}
            <p className="text-xs text-muted">
              Synthetic document preview for demonstration. Not a real medical record.
            </p>
          </div>
        </div>
      </section>
      <aside className="ai-surface rounded-[1.5rem] p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-navy">AI Summary</h2>
          <AiLabel />
        </div>
        <section className="mt-5 space-y-4 text-sm">
          <div>
            <h3 className="font-semibold text-navy">Summary</h3>
            <p className="mt-1 leading-relaxed text-muted">{report.summary}</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy">Key findings</h3>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-muted">
              {report.keyFindings.map((finding) => (
                <li key={finding}>{finding}</li>
              ))}
            </ul>
          </div>
          {report.values.length > 0 && (
            <div>
              <h3 className="font-semibold text-navy">Important values</h3>
              <ul className="mt-2 space-y-2">
                {report.values.map((value) => (
                  <li key={value.name} className="rounded-2xl bg-white px-3 py-2">
                    <span className="font-medium text-navy">{value.name}</span>
                    <span className="ml-2 text-muted">
                      {value.value} {value.unit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {report.questions.length > 0 && (
            <div>
              <h3 className="font-semibold text-navy">Questions to ask your doctor</h3>
              <ol className="mt-1 list-decimal space-y-1 pl-4 text-muted">
                {report.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </div>
          )}
        </section>
        <Button asChild variant="ai" className="mt-6 w-full">
          <Link href="/copilot">
            <Sparkles className="h-4 w-4" />
            Ask CarePilot about this report
          </Link>
        </Button>
        <Disclaimer className="mt-4" />
      </aside>
    </div>
  );
}
