"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { reports } from "@/lib/mock-data";
import { ReportViewer } from "@/components/reports/ReportViewer";
import { Button } from "@/components/ui/button";

export default function ReportDetailPage() {
  const params = useParams<{ id: string }>();
  const report = reports.find((item) => item.id === params.id);

  if (!report) {
    return (
      <div className="glass-panel rounded-[1.6rem] p-8">
        <h2 className="font-display text-2xl">Report not found</h2>
        <Button asChild className="mt-4">
          <Link href="/reports">Back to reports</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-muted">{report.typeLabel}</p>
          <h2 className="font-display text-4xl text-navy">{report.title}</h2>
        </div>
        {report.type === "laboratory" && (
          <Button asChild variant="secondary">
            <Link href="/reports/compare">Compare with previous</Link>
          </Button>
        )}
      </div>
      <ReportViewer report={report} />
    </div>
  );
}
