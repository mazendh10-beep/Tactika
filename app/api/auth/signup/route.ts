import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { hashPassword, signSession, setSessionCookie } from "@/lib/auth";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export async function POST(request: Request) {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json({
      error: "Auth coming soon"
    }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { email, password } = parsed.data;
  const passwordHash = await hashPassword(password);

  try {
    const existing = await db`SELECT id FROM users WHERE email = ${email}`;
    if (existing.rowCount > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const res =
      await db`INSERT INTO users (id, email, password_hash, ispremium, created_at) VALUES (uuid_generate_v4(), ${email}, ${passwordHash}, false, NOW()) RETURNING id, email, ispremium`;

    const token = signSession({
      id: res.rows[0].id as string,
      email: res.rows[0].email as string,
      isPremium: res.rows[0].ispremium as boolean
    });

    await setSessionCookie(token);
    return NextResponse.json({ message: "Signed up" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
