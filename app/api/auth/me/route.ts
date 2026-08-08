import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionFromCookies } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const session = await getSessionFromCookies(cookieStore);
  if (!session) return NextResponse.json({ user: null });
  return NextResponse.json({ user: session });
}
