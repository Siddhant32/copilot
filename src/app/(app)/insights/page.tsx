"use client";

import Link from "next/link";
import { insights } from "@/lib/mock-data";
import { AiLabel } from "@/components/ui/ai-label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const toneStyles = {
  positive: "border-teal/20 bg-white",
  information: "border-border bg-white",
  attention: "border-amber/30 bg-white",
};

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-4xl text-navy">Health Insights</h2>
        <p className="text-sm text-muted">
          Calm observations from your records. CarePilot does not diagnose.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {insights.map((insight) => (
          <article
            key={insight.id}
            className={cn(
              "rounded-[1.35rem] border p-6 card-shadow",
              toneStyles[insight.tone],
            )}
          >
            <div className="flex items-center justify-between">
              <Badge
                variant={
                  insight.tone === "attention"
                    ? "amber"
                    : insight.tone === "positive"
                      ? "default"
                      : "muted"
                }
              >
                {insight.tone}
              </Badge>
              <AiLabel />
            </div>
            <h3 className="mt-4 font-display text-2xl text-navy">{insight.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{insight.body}</p>
            {insight.href && (
              <Link href={insight.href} className="mt-3 inline-block text-sm font-semibold text-teal-dark">
                Open related records
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
