import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { db } from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";
export const COOKIE_NAME = "tactika_session";

export type Session = {
  id: string;
  email: string;
  isPremium: boolean;
};

type CookieStore = Awaited<ReturnType<typeof cookies>>;

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signSession(payload: Session) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set({
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getSessionFromCookies(cookieStore: Pick<CookieStore, "get">) {
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const session = jwt.verify(token, JWT_SECRET) as Session;

    if (process.env.POSTGRES_URL) {
      const res = await db`SELECT email, ispremium FROM users WHERE id = ${session.id} LIMIT 1`;
      if (res.rowCount === 0) return null;

      return {
        id: session.id,
        email: res.rows[0].email as string,
        isPremium: res.rows[0].ispremium as boolean
      };
    }

    return session;
  } catch {
    return null;
  }
}
