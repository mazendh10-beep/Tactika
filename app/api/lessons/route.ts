import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { lessons } from "@/data/content";
import { getSessionFromCookies } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const session = await getSessionFromCookies(cookieStore);
  const isPremium = session?.isPremium ?? false;

  const filtered = lessons.filter((l) => l.type === "free" || isPremium);
  return NextResponse.json({ lessons: filtered });
}
