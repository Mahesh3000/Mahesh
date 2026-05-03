import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export const runtime = "nodejs";

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
    const requiredEnvVars = [
      "SES_REGION",
      "SES_ACCESS_KEY_ID",
      "SES_SECRET_ACCESS_KEY",
      "SES_FROM_EMAIL",
      "CONTACT_TO_EMAIL",
    ];

    const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

    if (missingEnvVars.length > 0) {
      console.error("Missing environment variables:", missingEnvVars);

      return NextResponse.json(
        {
          message: `Missing environment variables: ${missingEnvVars.join(", ")}`,
        },
        { status: 500 },
      );
    }

    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (name.length < 2) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Valid email is required" },
        { status: 400 },
      );
    }

    if (subject.length < 3) {
      return NextResponse.json(
        { message: "Subject is required" },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { message: "Message is too short" },
        { status: 400 },
      );
    }

    const sesClient = new SESClient({
      region: process.env.SES_REGION,
      credentials: {
        accessKeyId: process.env.SES_ACCESS_KEY_ID!,
        secretAccessKey: process.env.SES_SECRET_ACCESS_KEY!,
      },
    });

    const fromEmail = process.env.SES_FROM_EMAIL!;
    const toEmail = process.env.CONTACT_TO_EMAIL!;

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
