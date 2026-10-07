"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { timeline } from "@/lib/mock-data";
import type { TimelineCategory, TimelineEvent } from "@/lib/types";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const filters: { id: "all" | TimelineCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "reports", label: "Reports" },
  { id: "appointments", label: "Appointments" },
  { id: "medications", label: "Medications" },
  { id: "symptoms", label: "Symptoms" },
];

export function HealthTimeline() {
  const [filter, setFilter] = useState<"all" | TimelineCategory>("all");
  const [selected, setSelected] = useState<TimelineEvent | null>(null);

  const events = useMemo(
    () => (filter === "all" ? timeline : timeline.filter((event) => event.category === filter)),
    [filter],
  );

  return (
    <div>
      <Tabs value={filter} onValueChange={(value) => setFilter(value as typeof filter)}>
        <TabsList className="flex flex-wrap">
          {filters.map((item) => (
            <TabsTrigger key={item.id} value={item.id}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <ol className="relative mt-8 space-y-4 border-l border-teal/30 pl-6">
        {events.map((event, index) => (
          <motion.li
            key={event.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.04 }}
          >
            <button
              type="button"
              onClick={() => setSelected(event)}
              className={cn(
                "glass-panel w-full rounded-[1.35rem] p-4 text-left transition hover:border-teal/50",
              )}
            >
              <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-2 border-[#050510] bg-teal shadow-[0_0_12px_#2ee6c8]" />
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {event.meta}
              </p>
              <p className="mt-1 font-semibold text-navy">{event.title}</p>
              <p className="text-sm text-muted">{event.description}</p>
            </button>
          </motion.li>
        ))}
      </ol>
      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent className="p-6">
          {selected && (
            <div className="pr-8">
              <p className="text-xs uppercase tracking-wide text-muted">{selected.meta}</p>
              <h3 className="mt-2 font-display text-3xl text-navy">{selected.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{selected.description}</p>
              <p className="mt-4 text-xs capitalize text-muted">Category: {selected.category}</p>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
