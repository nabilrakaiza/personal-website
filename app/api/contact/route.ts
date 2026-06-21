import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // replace with your verified domain later
      to: process.env.CONTACT_EMAIL!,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 2rem; background: #0a0a0f; color: #e2e8f0; border: 1px solid #1e2035; border-radius: 8px;">
          <h2 style="color: #00ff9d; margin-bottom: 1.5rem;">New message from your portfolio</h2>
          <p><span style="color: #64748b;">From:</span> ${name} &lt;${email}&gt;</p>
          <p><span style="color: #64748b;">Subject:</span> ${subject}</p>
          <hr style="border-color: #1e2035; margin: 1.5rem 0;" />
          <p style="line-height: 1.8; white-space: pre-wrap;">${message}</p>
          <hr style="border-color: #1e2035; margin: 1.5rem 0;" />
          <p style="color: #64748b; font-size: 0.75rem;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}