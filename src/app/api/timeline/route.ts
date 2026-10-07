import { getTimeline } from "@/lib/services/health";
import type { TimelineCategory } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const category = (request.nextUrl.searchParams.get("category") ??
    "all") as TimelineCategory | "all";
  return NextResponse.json(await getTimeline(category));
}
