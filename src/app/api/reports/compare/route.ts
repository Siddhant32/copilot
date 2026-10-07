import { compareReports } from "@/lib/services/health";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const previous = request.nextUrl.searchParams.get("previous") ?? undefined;
  const latest = request.nextUrl.searchParams.get("latest") ?? undefined;
  return NextResponse.json(await compareReports(previous, latest));
}
