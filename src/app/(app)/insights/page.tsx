"use client";

import Link from "next/link";
import { insights } from "@/lib/mock-data";
import { AiLabel } from "@/components/ui/ai-label";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/ui/tilt-card";
import { cn } from "@/lib/utils";

const toneStyles = {
  positive: "shadow-[0_0_30px_rgba(46,230,200,0.12)]",
  information: "",
  attention: "shadow-[0_0_30px_rgba(255,200,87,0.12)]",
};

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-4xl text-navy md:text-6xl">
          Health <span className="gradient-text">Insights</span>
        </h2>
        <p className="text-sm text-muted">
          Calm observations from your records. CarePilot does not diagnose.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {insights.map((insight) => (
          <TiltCard
            key={insight.id}
            as="article"
            className={cn("p-6", toneStyles[insight.tone])}
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
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
