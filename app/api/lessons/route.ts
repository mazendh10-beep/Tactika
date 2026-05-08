import { NextResponse } from "next/server";
import { lessons } from "@/data/content";
import { getSession } from "@/lib/auth";

export async function GET() {
  const session = getSession();
  const isPremium = session?.isPremium ?? false;

  const filtered = lessons.filter((l) => l.type === "free" || isPremium);
  return NextResponse.json({ lessons: filtered });
}
