import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { profile } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(10).max(2000),
  website: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Check your name, email and message (at least 10 characters), then try again." },
      { status: 400 },
    );
  }

  const { name, email, message, website } = parsed.data;
  if (website) return NextResponse.json({ ok: true }); // bots get a silent success

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "The contact form isn't set up yet." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL ?? profile.email,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "The message couldn't be sent." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
