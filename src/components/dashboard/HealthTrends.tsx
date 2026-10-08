"use client";

import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trendData } from "@/lib/mock-data";

const metrics = [
  { id: "hemoglobin", label: "Hemoglobin", color: "#5c6b73", unit: "g/dL" },
  { id: "glucose", label: "Blood glucose", color: "#253237", unit: "mg/dL" },
  { id: "vitaminD", label: "Vitamin D", color: "#9db4c0", unit: "ng/mL" },
] as const;

type MetricId = (typeof metrics)[number]["id"];

export function HealthTrends() {
  const [metric, setMetric] = useState<MetricId>("hemoglobin");
  const [range, setRange] = useState<"1" | "3" | "6">("6");

  const data = useMemo(() => {
    const slice = range === "1" ? 1 : range === "3" ? 3 : 6;
    return trendData.slice(-slice);
  }, [range]);

  const active = metrics.find((item) => item.id === metric)!;

  return (
    <Card className="min-w-0">
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <CardTitle className="font-display text-3xl font-bold">Health trends</CardTitle>
          <CardDescription>Changes across your recent records</CardDescription>
        </div>
        <div className="flex flex-wrap gap-2">
          <Tabs value={metric} onValueChange={(value) => setMetric(value as MetricId)}>
            <TabsList>
              {metrics.map((item) => (
                <TabsTrigger key={item.id} value={item.id}>
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <Tabs value={range} onValueChange={(value) => setRange(value as "1" | "3" | "6")}>
            <TabsList>
              <TabsTrigger value="1">1 mo</TabsTrigger>
              <TabsTrigger value="3">3 mo</TabsTrigger>
              <TabsTrigger value="6">6 mo</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="h-[280px] overflow-x-auto">
        <div className="h-full min-w-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#5c6b73", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#5c6b73", fontSize: 12 }} axisLine={false} tickLine={false} width={40} />
              <Tooltip
                contentStyle={{
                  borderRadius: 16,
                  border: "1px solid rgba(92,107,115,0.35)",
                  background: "#253237",
                  color: "#e0fbfc",
                  boxShadow: "none",
                }}
                formatter={(value) => [`${value} ${active.unit}`, active.label]}
              />
              <Line
                type="monotone"
                dataKey={metric}
                stroke={active.color}
                strokeWidth={3}
                dot={{ r: 4, fill: active.color }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
