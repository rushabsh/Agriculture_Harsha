import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return Response.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return Response.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL ||
      process.env.TO_EMAIL ||
      smtpUser ||
      "greenglobeimports@gmail.com";

    if (!smtpUser || !smtpPass) {
      console.error(
        "Nodemailer configuration error: SMTP_USER/EMAIL_USER or SMTP_PASS/EMAIL_PASS is missing in environment variables."
      );
      return Response.json(
        {
          success: false,
          error:
            "Email service is not configured yet. Please configure SMTP credentials in .env.local.",
        },
        { status: 500 }
      );
    }

    // Create transport
    const transporter = nodemailer.createTransport(
      smtpHost
        ? {
            host: smtpHost,
            port: smtpPort || (smtpSecure ? 465 : 587),
            secure: smtpSecure,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          }
        : {
            service: "gmail",
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          }
    );

    // Clean input values to prevent HTML injection in rendered template
    const sanitize = (str = "") =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const safeName = sanitize(name.trim());
    const safeEmail = sanitize(email.trim());
    const safePhone = sanitize(phone ? phone.trim() : "Not provided");
    const safeSubject = sanitize(subject.trim());
    const safeMessage = sanitize(message.trim()).replace(/\n/g, "<br/>");
    const sentTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const mailOptions = {
      from: `"${safeName} via GreenGlobe" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: safeEmail,
      subject: `[Website Inquiry] ${safeSubject}`,
      text: `New Contact Form Inquiry from GreenGlobe Website\n\n` +
        `Name: ${name.trim()}\n` +
        `Email: ${email.trim()}\n` +
        `Phone: ${phone ? phone.trim() : "Not provided"}\n` +
        `Subject: ${subject.trim()}\n` +
        `Received: ${sentTime}\n\n` +
        `Message:\n${message.trim()}\n`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f3; margin: 0; padding: 24px; color: #222; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #0D4E22 0%, #1e6b35 100%); padding: 28px 32px; color: #ffffff; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0; font-size: 13px; color: #bbf7d0; font-weight: 500; }
            .content { padding: 32px; }
            .field-grid { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .field-grid td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
            .field-grid .label { width: 120px; font-weight: 600; color: #64748b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
            .field-grid .value { color: #0f172a; font-weight: 500; }
            .message-box { background: #FAF8F2; border: 1px solid #e5e0d3; border-radius: 12px; padding: 20px; margin-top: 16px; }
            .message-label { font-size: 11px; font-weight: 700; color: #0D4E22; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
            .message-text { font-size: 14px; line-height: 1.6; color: #334155; margin: 0; }
            .footer { background: #f8fafc; padding: 18px 32px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
            .badge { display: inline-block; background-color: #5BC242; color: white; padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌿 GreenGlobe Contact Inquiry</h1>
              <p>You have received a new inquiry from your website contact form.</p>
            </div>
            <div class="content">
              <table class="field-grid">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value"><strong>${safeName}</strong></td>
                </tr>
                <tr>
                  <td class="label">Email</td>
                  <td class="value"><a href="mailto:${safeEmail}" style="color: #0D4E22; text-decoration: none; font-weight: 600;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone</td>
                  <td class="value"><a href="tel:${safePhone}" style="color: #0D4E22; text-decoration: none;">${safePhone}</a></td>
                </tr>
                <tr>
                  <td class="label">Subject</td>
                  <td class="value">${safeSubject}</td>
                </tr>
                <tr>
                  <td class="label">Received On</td>
                  <td class="value">${sentTime}</td>
                </tr>
              </table>

              <div class="message-box">
                <div class="message-label">Inquiry Message</div>
                <div class="message-text">${safeMessage}</div>
              </div>
            </div>
            <div class="footer">
              Sent via GreenGlobe Contact Form &bull; Reply to this email directly to respond to ${safeName}.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json(
      {
        success: true,
        message: "Your message has been sent successfully. We will get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email via Nodemailer:", error);
    return Response.json(
      {
        success: false,
        error:
          error?.message ||
          "Failed to send your message. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
