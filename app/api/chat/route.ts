import { NextResponse } from "next/server";
import OpenAI from "openai";
import { getSession } from "@/lib/auth";
import { lessons, positions, formations } from "@/data/content";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const question = body?.question as string | undefined;
  const match = body?.match as { opponent?: string; league?: string; gameState?: string } | undefined;

  if (!question) {
    return NextResponse.json({ error: "Question is required" }, { status: 400 });
  }

  const session = getSession();
  if (!session?.isPremium) {
    return NextResponse.json({ error: "Premium required" }, { status: 403 });
  }

  const contextSnippets = [
    ...lessons.map((l) => `${l.title}: ${l.content}`),
    ...positions.map((p) => `${p.role}: ${p.zone}`),
    ...formations.map((f) => `${f.name}: ${f.summary}`)
  ].join("\n");

  try {
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content:
            "You are Tactika Coach, a concise tactical analyst. Always reference provided context first. " +
            "Return short bullet points with rationale and risk checks."
        },
        {
          role: "user",
          content: [
            `Context:\n${contextSnippets}`,
            `Match Meta: ${JSON.stringify(match || {})}`,
            `Question: ${question}`
          ].join("\n\n")
        }
      ]
    });

    const answer = completion.choices[0]?.message?.content || "No response";
    return NextResponse.json({ answer });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Chat failed" }, { status: 500 });
  }
}
