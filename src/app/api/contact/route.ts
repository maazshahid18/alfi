import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Log enquiry — wire to Resend, SendGrid, or Formspree via env vars in production
    console.log("[Contact Enquiry]", {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "—",
      message: message.trim(),
      at: new Date().toISOString(),
    });

    // Optional: forward to email service when CONTACT_WEBHOOK_URL is set
    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your enquiry has been received. We'll be in touch soon.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 500 }
    );
  }
}