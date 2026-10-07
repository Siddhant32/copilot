"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import type { MedicalReport } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

export function ReportCard({ report }: { report: MedicalReport }) {
  return (
    <article className="flex flex-col rounded-[1.35rem] border border-border bg-white p-5 card-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-soft text-teal-dark">
          <FileText className="h-5 w-5" />
        </div>
        {report.needsReview && <Badge variant="amber">Needs review</Badge>}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy">{report.title}</h3>
      <p className="text-sm text-muted">{formatDate(report.date)}</p>
      <p className="text-xs text-muted">{report.typeLabel}</p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
        {report.summary}
      </p>
      <div className="mt-4">
        <Button asChild size="sm">
          <Link href={`/reports/${report.id}`}>View</Link>
        </Button>
      </div>
    </article>
  );
}
