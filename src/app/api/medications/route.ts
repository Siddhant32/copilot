import { getMedications } from "@/lib/services/health";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await getMedications());
}
