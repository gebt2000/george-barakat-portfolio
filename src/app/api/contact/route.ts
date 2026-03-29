import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().trim().min(1).max(60),
  lastName: z.string().trim().min(1).max(60),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(10).max(4000),
  category: z.string().trim().max(40).optional(),
});

export async function POST(req: Request) {
  try {
    const body = schema.parse(await req.json());

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Server is missing RESEND_API_KEY." },
        { status: 500 },
      );
    }
    if (!to) {
      return NextResponse.json(
        { ok: false, error: "Server is missing CONTACT_TO_EMAIL." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const fullName = `${body.firstName} ${body.lastName}`.trim();
    const cat = body.category?.trim() || "General";
    const subject = `New inquiry (${cat}) — ${fullName}`;

    await resend.emails.send({
      from,
      to,
      replyTo: body.email,
      subject,
      text: [
        `Name: ${fullName}`,
        `Email: ${body.email}`,
        `Category: ${cat}`,
        "",
        body.message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "Please check your fields and try again." },
        { status: 400 },
      );
    }
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
