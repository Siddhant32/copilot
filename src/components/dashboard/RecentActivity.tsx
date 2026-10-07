"use client";

import { CalendarCheck, FileUp, Pill, RefreshCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentActivity } from "@/lib/mock-data";

const icons = [Pill, FileUp, CalendarCheck, RefreshCcw];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-2xl font-normal">
          Recent health activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          {recentActivity.map((event, index) => {
            const Icon = icons[index] ?? Pill;
            return (
              <li key={event.id} className="flex gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-soft text-teal-dark">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{event.title}</p>
                  <p className="text-xs text-muted">{event.meta}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}
