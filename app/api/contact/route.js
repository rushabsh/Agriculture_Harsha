import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // 1. Validate required fields
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return Response.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return Response.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 3. Resolve SMTP credentials (supporting Gmail app passwords with or without spaces)
    const smtpUser = (process.env.SMTP_USER || process.env.EMAIL_USER || "").trim();
    const rawPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || "";
    // Clean spaces and quotes from Google App Password (e.g., 'oxoc gucm jsnp elem' -> 'oxocgucmjsnpelem')
    const smtpPass = rawPass.replace(/["'\s]/g, "").trim();

    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL?.trim() ||
      process.env.TO_EMAIL?.trim() ||
      smtpUser ||
      "greenglobeimports@gmail.com";

    if (!smtpUser || !smtpPass) {
      console.error(
        "Nodemailer configuration error: SMTP_USER or SMTP_PASS is missing in environment variables."
      );
      return Response.json(
        {
          success: false,
          error:
            "Email service is not configured yet. Please configure SMTP credentials in .env.",
        },
        { status: 500 }
      );
    }

    // 4. Create Nodemailer Transport
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

    // 5. Sanitize user inputs to prevent HTML injection in emails
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

    // =========================================================================
    // 6. Email 1: Notification sent to GreenGlobe Admin (Inquiry Alert)
    // =========================================================================
    const adminMailOptions = {
      from: `"GreenGlobe Inquiries" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: safeEmail,
      subject: `[Website Inquiry] ${safeSubject} - ${safeName}`,
      text:
        `New Contact Form Inquiry from GreenGlobe Website\n\n` +
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

    // =========================================================================
    // 7. Email 2: Professional Auto-Reply sent to User (Acknowledgement)
    // =========================================================================
    const autoReplyMailOptions = {
      from: `"GreenGlobe Agrochemical Industries" <${smtpUser}>`,
      to: safeEmail,
      replyTo: receiverEmail,
      subject: `Inquiry Received: Thank you for contacting GreenGlobe Agrochemical Industries`,
      text:
        `Dear ${name.trim()},\n\n` +
        `Thank you for reaching out to GreenGlobe Agrochemical Industries.\n\n` +
        `We have successfully received your inquiry regarding "${subject.trim()}". ` +
        `Our commercial and technical team is currently reviewing your message and will get back to you shortly (typically within 1 business day).\n\n` +
        `Summary of your submitted details:\n` +
        `- Subject: ${subject.trim()}\n` +
        `- Phone: ${phone ? phone.trim() : "Not provided"}\n` +
        `- Date: ${sentTime}\n\n` +
        `If your inquiry is urgent, please feel free to reach us directly:\n` +
        `Phone: +91 72619 83131 / +91 93254 66881\n` +
        `Email: ${receiverEmail}\n` +
        `Website: https://greenglobeagro.com\n\n` +
        `Warm regards,\n` +
        `Customer Sourcing & Support Team\n` +
        `GreenGlobe Agrochemical Industries\n` +
        `Pune, Maharashtra, India\n`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              background-color: #f4f6f3;
              margin: 0;
              padding: 24px 12px;
              color: #2b2b2b;
            }
            .wrapper {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 8px 30px rgba(0,0,0,0.06);
              border: 1px solid #e5e7eb;
            }
            .header {
              background: linear-gradient(135deg, #0D4E22 0%, #175e2f 100%);
              padding: 36px 32px 30px;
              color: #ffffff;
              text-align: left;
            }
            .brand-badge {
              display: inline-block;
              background: rgba(255, 255, 255, 0.15);
              color: #FDF0B4;
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
              padding: 4px 10px;
              border-radius: 999px;
              margin-bottom: 12px;
            }
            .header h1 {
              margin: 0 0 6px;
              font-size: 22px;
              font-weight: 700;
              color: #ffffff;
              letter-spacing: -0.3px;
            }
            .header p {
              margin: 0;
              font-size: 13px;
              color: #d1fae5;
              font-weight: 400;
            }
            .content {
              padding: 32px;
            }
            .greeting {
              font-size: 16px;
              font-weight: 600;
              color: #111827;
              margin-bottom: 12px;
            }
            .body-text {
              font-size: 14px;
              line-height: 1.65;
              color: #4b5563;
              margin-bottom: 20px;
            }
            .status-pill {
              background: #ecfdf5;
              border-left: 4px solid #10b981;
              padding: 14px 16px;
              border-radius: 8px;
              margin: 20px 0;
            }
            .status-pill-title {
              font-size: 13px;
              font-weight: 700;
              color: #065f46;
              margin: 0 0 4px;
            }
            .status-pill-text {
              font-size: 13px;
              color: #047857;
              margin: 0;
              line-height: 1.5;
            }
            .summary-card {
              background: #FAF8F2;
              border: 1px solid #ede8dc;
              border-radius: 12px;
              padding: 20px;
              margin: 24px 0;
            }
            .summary-title {
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              color: #0D4E22;
              margin-bottom: 12px;
            }
            .summary-table {
              width: 100%;
              border-collapse: collapse;
              font-size: 13px;
            }
            .summary-table td {
              padding: 6px 0;
              vertical-align: top;
            }
            .summary-table .s-label {
              width: 100px;
              color: #6b7280;
              font-weight: 500;
            }
            .summary-table .s-val {
              color: #1f2937;
              font-weight: 600;
            }
            .contact-box {
              background: #f9fafb;
              border-radius: 10px;
              padding: 18px 20px;
              margin-top: 24px;
              border: 1px solid #f3f4f6;
            }
            .contact-box h4 {
              margin: 0 0 8px;
              font-size: 13px;
              font-weight: 700;
              color: #111827;
            }
            .contact-box p {
              margin: 4px 0;
              font-size: 12px;
              color: #4b5563;
              line-height: 1.6;
            }
            .signoff {
              margin-top: 28px;
              padding-top: 20px;
              border-top: 1px solid #f3f4f6;
              font-size: 13px;
              color: #374151;
              line-height: 1.6;
            }
            .signoff strong {
              color: #0D4E22;
            }
            .footer {
              background: #f8fafc;
              padding: 20px 32px;
              text-align: center;
              font-size: 11px;
              color: #9ca3af;
              border-top: 1px solid #e5e7eb;
              line-height: 1.6;
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <span class="brand-badge">GreenGlobe Agrochemical Industries</span>
              <h1>We Received Your Inquiry!</h1>
              <p>Thank you for getting in touch with our team.</p>
            </div>
            
            <div class="content">
              <div class="greeting">Hello ${safeName},</div>
              
              <p class="body-text">
                Thank you for contacting <strong>GreenGlobe Agrochemical Industries</strong>. We appreciate your interest in our agricultural raw materials and fertilizer solutions.
              </p>

              <div class="status-pill">
                <div class="status-pill-title">✓ Inquiry Registered</div>
                <div class="status-pill-text">
                  Our commercial and technical team has received your submission and is reviewing your requirement. We typically respond within <strong>1 business day</strong>.
                </div>
              </div>

              <div class="summary-card">
                <div class="summary-title">Summary of Your Inquiry</div>
                <table class="summary-table">
                  <tr>
                    <td class="s-label">Subject:</td>
                    <td class="s-val">${safeSubject}</td>
                  </tr>
                  <tr>
                    <td class="s-label">Contact Phone:</td>
                    <td class="s-val">${safePhone}</td>
                  </tr>
                  <tr>
                    <td class="s-label">Date:</td>
                    <td class="s-val">${sentTime}</td>
                  </tr>
                  <tr>
                    <td class="s-label">Message:</td>
                    <td class="s-val" style="font-weight: 400; color: #4b5563; line-height: 1.5;">${safeMessage}</td>
                  </tr>
                </table>
              </div>

              <div class="contact-box">
                <h4>Need Immediate Assistance?</h4>
                <p>📞 <strong>Phone:</strong> +91 72619 83131 / +91 93254 66881</p>
                <p>✉️ <strong>Direct Email:</strong> <a href="mailto:${receiverEmail}" style="color: #0D4E22; text-decoration: none;">${receiverEmail}</a></p>
                <p>📍 <strong>Office:</strong> D-503, Pristine Pronext, Wakad, Pune, Maharashtra 411057</p>
              </div>

              <div class="signoff">
                Warm regards,<br>
                <strong>Customer Relations & Sourcing Team</strong><br>
                GreenGlobe Agrochemical Industries<br>
                <span style="font-size: 11px; color: #6b7280;">Certified Wholesale Fertilizer & Bulk Sourcing Partner</span>
              </div>
            </div>

            <div class="footer">
              This is an automated confirmation sent to ${safeEmail} because you contacted us via <a href="https://greenglobeagro.com" style="color: #6b7280; text-decoration: underline;">greenglobeagro.com</a>.<br>
              &copy; ${new Date().getFullYear()} GreenGlobe Agrochemical Industries. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 8. Dispatch Admin Notification
    await transporter.sendMail(adminMailOptions);

    // 9. Dispatch Customer Auto-Reply
    try {
      await transporter.sendMail(autoReplyMailOptions);
    } catch (autoReplyError) {
      // Log auto-reply failure without breaking the form submission for the user
      console.warn("Auto-reply confirmation email could not be sent:", autoReplyError);
    }

    return Response.json(
      {
        success: true,
        message: "Thank you! Your inquiry has been sent successfully. A confirmation email has also been sent to your address, and our team will get back to you shortly.",
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
