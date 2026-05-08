import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { signSession, setSessionCookie, verifyPassword } from "@/lib/auth";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { email, password } = parsed.data;

  try {
    const res =
      await db`SELECT id, email, password_hash, ispremium FROM users WHERE email = ${email} LIMIT 1`;
    if (res.rowCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const user = res.rows[0];
    const valid = await verifyPassword(password, user.password_hash as string);
    if (!valid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = signSession({
      id: user.id as string,
      email: user.email as string,
      isPremium: user.ispremium as boolean
    });
    setSessionCookie(token);
    return NextResponse.json({ message: "Logged in" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
