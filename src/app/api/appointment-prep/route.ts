import { getAppointmentPrep } from "@/lib/services/health";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id") ?? undefined;
  return NextResponse.json(await getAppointmentPrep(id));
}
