import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "mail.yourdomain.com", // Replace with your mail server
      port: 465, // Or 465 for SSL
      secure: true, // true for port 465, false for others
      auth: {
        user: process.env.MAIL_USER, // Your mail server username
        pass: process.env.MAIL_PASS, // Your mail server password
      },
      tls: {
        rejectUnauthorized: false, // Optional, useful for self-signed certs
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: "contact@yourdomain.com", // Designated recipient email
      subject: `Contact Us from ${name || "Anonymous"}`,
      text: message,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Email send failed:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
