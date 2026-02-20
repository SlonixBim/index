import { Hono } from 'hono';
import { Resend } from 'resend';

const app = new Hono<{ Bindings: { RESEND_API_KEY: string } }>();

app.post('/', async (c) => {
  try {
    const { name, email, phone, message, course } = await c.req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ error: 'Name, email, and message are required' }, 400);
    }

//    const resend = new Resend(c.env.RESEND_API_KEY);
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email to your team
    await resend.emails.send({
      from: 'Slonix Solutions <onboarding@resend.dev>', // Resend verified sender
      to: 'slonixbim.team@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">New Contact Form Submission</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Course:</strong> ${course || 'Not selected'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">This message was sent from the Slonix Solutions contact form.</p>
        </div>
      `
    });

    return c.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return c.json({ error: 'Failed to send email' }, 500);
  }
});

export default app;
