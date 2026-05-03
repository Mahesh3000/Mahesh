import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export const runtime = "nodejs";

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
});

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!name || name.length < 2) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 },
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Valid email is required" },
        { status: 400 },
      );
    }

    if (!subject || subject.length < 3) {
      return NextResponse.json(
        { message: "Subject is required" },
        { status: 400 },
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { message: "Message is too short" },
        { status: 400 },
      );
    }

    const fromEmail = process.env.SES_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!fromEmail || !toEmail) {
      return NextResponse.json(
        { message: "Email configuration is missing" },
        { status: 500 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await sesClient.send(
      new SendEmailCommand({
        Source: fromEmail,
        Destination: {
          ToAddresses: [toEmail],
        },
        ReplyToAddresses: [email],
        Message: {
          Subject: {
            Charset: "UTF-8",
            Data: `Portfolio Contact: ${subject}`,
          },
          Body: {
            Text: {
              Charset: "UTF-8",
              Data: `
New message from portfolio

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
              `,
            },
            Html: {
              Charset: "UTF-8",
              Data: `
                <h2>New Portfolio Message</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Subject:</strong> ${safeSubject}</p>
                <p><strong>Message:</strong></p>
                <p>${safeMessage}</p>
              `,
            },
          },
        },
      }),
    );

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 },
    );
  }
}
