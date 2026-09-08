import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, services, budget, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtppro.zoho.com";
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USERNAME;
    const pass = process.env.SMTP_PASSWORD;
    const from = process.env.EMAIL_FROM || user;
    const to = process.env.CONTACT_EMAIL_TO || "contact@stratvals.com";

    if (!user || !pass) {
      console.error("Missing SMTP credentials in environment variables.");
      return NextResponse.json(
        { error: "Email service is temporarily unavailable. Please email contact@stratvals.com directly." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const safeName = escapeHtml(name.trim());
    const safeCompany = company && typeof company === "string" ? escapeHtml(company.trim()) : "";
    const safeEmail = escapeHtml(email.trim());
    const safePhone = phone && typeof phone === "string" ? escapeHtml(phone.trim()) : "";
    const safeBudget = budget && typeof budget === "string" ? escapeHtml(budget.trim()) : "Not specified";
    const safeMessage = message && typeof message === "string" ? escapeHtml(message.trim()) : "";

    const selectedServicesArray: string[] = Array.isArray(services)
      ? services.map((s) => String(s).trim()).filter(Boolean)
      : [];

    const servicesSummary = selectedServicesArray.length > 0
      ? selectedServicesArray.join(", ")
      : "General Inquiry";

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/New_York",
    }).format(new Date());

    const subject = `New Inquiry: ${safeName}${safeCompany ? ` · ${safeCompany}` : ""} (${selectedServicesArray[0] || "General Consultation"})`;

    // Simple, clean, dark-mode safe HTML template without nested inversions
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
</head>
<body style="font-family: Arial, Helvetica, sans-serif; margin: 0; padding: 20px; line-height: 1.6;">
  <div style="max-width: 580px; margin: 0 auto; padding: 20px; border: 1px solid #d1d5db; border-radius: 8px;">
    
    <h2 style="color: #0284c7; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">
      Strategic Value Solutions &bull; New Inquiry
    </h2>

    <p style="margin: 6px 0;"><strong>Name:</strong> ${safeName}</p>
    <p style="margin: 6px 0;"><strong>Company:</strong> ${safeCompany || "Individual / Not specified"}</p>
    <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #0284c7;">${safeEmail}</a></p>
    <p style="margin: 6px 0;"><strong>Phone:</strong> ${safePhone ? `<a href="tel:${safePhone}" style="color: inherit;">${safePhone}</a>` : "Not provided"}</p>
    <p style="margin: 6px 0;"><strong>Services:</strong> ${servicesSummary}</p>
    <p style="margin: 6px 0;"><strong>Budget:</strong> ${safeBudget}</p>

    <div style="margin-top: 16px; padding: 14px; border: 1px solid #d1d5db; border-radius: 6px; background-color: rgba(0, 0, 0, 0.02);">
      <strong style="display: block; margin-bottom: 6px;">Project Description:</strong>
      <div style="white-space: pre-wrap;">${safeMessage || "No additional message provided."}</div>
    </div>

    <p style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
      Submitted via stratvals.com contact form on ${formattedDate} (EST) &bull; Reply to <a href="mailto:${safeEmail}" style="color: #0284c7;">${safeEmail}</a>
    </p>

  </div>
</body>
</html>
    `.trim();

    const textContent = `
New Inquiry - Strategic Value Solutions
----------------------------------------
Name:     ${name}
Company:  ${company || "Individual / Not specified"}
Email:    ${email}
Phone:    ${phone || "Not provided"}
Services: ${servicesSummary}
Budget:   ${budget || "Not specified"}

Project Description:
${message || "No additional message provided."}

Submitted: ${formattedDate} (EST)
Quick Reply: mailto:${email}
    `.trim();

    await transporter.sendMail({
      from: `"Strategic Value Solutions" <${from}>`,
      to,
      replyTo: email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: "An error occurred while sending your message. Please email contact@stratvals.com directly." },
      { status: 500 }
    );
  }
}
