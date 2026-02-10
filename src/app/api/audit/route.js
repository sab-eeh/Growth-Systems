import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.json();

    const name = body?.name?.trim();
    const businessType = body?.businessType?.trim();
    const website = body?.website?.trim();
    const email = body?.email?.trim();
    const whatsapp = body?.whatsapp?.trim();
    const message = body?.message?.trim();

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY in env.");
      return Response.json(
        { error: "Server misconfigured (missing API key)." },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      console.error("Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL in env.");
      return Response.json(
        { error: "Server misconfigured (missing email config)." },
        { status: 500 }
      );
    }

    if (!name || name.length < 2) {
      return Response.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "Valid email is required." },
        { status: 400 }
      );
    }

    if (!whatsapp || whatsapp.length < 7) {
      return Response.json(
        { error: "WhatsApp number is required." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const subjectOwner = `Free Audit Request — ${
      businessType || "Service Business"
    }`;

    const textOwner = `
New Free Audit Request

Name: ${name}
Business Type: ${businessType || "-"}
Website: ${website || "-"}
Email: ${email}
WhatsApp: ${whatsapp}

Message:
${message || "-"}
    `.trim();

    // 1) Send to YOU (owner)
    const ownerResult = await resend.emails.send({
      from: `Growth Systems <${process.env.CONTACT_FROM_EMAIL}>`,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: subjectOwner,
      text: textOwner,
    });

    if (ownerResult?.error) {
      console.error("Resend owner email error:", ownerResult.error);
      return Response.json(
        { error: ownerResult.error.message || "Failed to send owner email." },
        { status: 500 }
      );
    }

    // 2) Send confirmation to CLIENT
    const subjectClient = "We received your audit request";

    const textClient = `
Hi ${name},

Thanks — we received your free audit request.

What happens next:
• We’ll review your website + booking flow
• We’ll identify where leads are getting lost
• We’ll reply with clear next steps

We usually respond within 24 hours via WhatsApp or email.

— Growth Systems
    `.trim();

    const clientResult = await resend.emails.send({
      from: `Growth Systems <${process.env.CONTACT_FROM_EMAIL}>`,
      to: [email],
      subject: subjectClient,
      text: textClient,
    });

    // NOTE: If client email fails, we still return success
    // because owner email already delivered.
    if (clientResult?.error) {
      console.warn("Resend client confirmation failed:", clientResult.error);
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("API /audit crash:", err);
    return Response.json(
      { error: "Server error. Check console logs." },
      { status: 500 }
    );
  }
}
