import { generateChatReply } from "@/lib/services/chat";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { message?: string };
  if (!body.message) {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }
  const reply = await generateChatReply(body.message);
  return NextResponse.json(reply);
}
