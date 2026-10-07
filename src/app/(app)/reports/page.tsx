"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { reports } from "@/lib/mock-data";
import { ReportCard } from "@/components/reports/ReportCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { TiltCard } from "@/components/ui/tilt-card";

export default function ReportsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-4xl text-navy md:text-6xl">
            Medical <span className="gradient-text">Reports</span>
          </h2>
          <p className="text-sm text-muted">Upload, review, and ask CarePilot about documents.</p>
        </div>
        <Button onClick={() => setOpen(true)}>
          <Plus className="h-4 w-4" /> Upload report
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Stat label="Total reports" value="12" />
        <Stat label="Recent" value="3" />
        <Stat label="Need review" value="2" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reports
          .filter((report) => report.id !== "rpt-blood-jun-14")
          .map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-6">
          <DialogTitle>Upload a report</DialogTitle>
          <p className="mt-2 text-sm text-muted">
            Demo mode stores files locally in a later release. This version uses synthetic records only.
          </p>
          <div className="mt-4 rounded-2xl border border-dashed border-white/20 p-8 text-center text-sm text-muted">
            Drop a PDF here, or choose a file.
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <TiltCard className="px-5 py-4">
      <p className="font-display text-4xl text-navy">{value}</p>
      <p className="text-sm text-muted">{label}</p>
    </TiltCard>
  );
}
