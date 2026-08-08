import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSessionFromCookies } from "@/lib/auth";
import LogoutButton from "./logout-button";

export const metadata = { title: "Account | Tactika" };

export default async function AccountPage() {
  const cookieStore = await cookies();
  const session = await getSessionFromCookies(cookieStore);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-semibold">Account</h1>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <dl className="space-y-4">
          <div>
            <dt className="text-sm text-neutral-500">Email</dt>
            <dd className="text-lg font-semibold">{session.email}</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500">Premium status</dt>
            <dd className={session.isPremium ? "text-lg font-semibold text-primary-light" : "text-lg font-semibold text-accent"}>
              {session.isPremium ? "Active" : "Inactive"}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          {!session.isPremium && (
            <Link
              href="/premium"
              className="rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-white shadow-glow"
            >
              Upgrade to Premium
            </Link>
          )}
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
