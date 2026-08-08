import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSessionFromCookies } from "@/lib/auth";
import ChatClient from "./chat-client";

export const metadata = { title: "AI Coach | Tactika" };

export default async function ChatPage() {
  const cookieStore = await cookies();
  const session = await getSessionFromCookies(cookieStore);

  if (!session) {
    redirect("/login");
  }

  if (!session.isPremium) {
    redirect("/premium");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-3 text-3xl font-semibold">AI Tactical Coach</h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-300">
        Ask for pressing plans, role tweaks, or match-up adjustments using Tactika's lesson library as context.
      </p>
      <ChatClient />
    </div>
  );
}
