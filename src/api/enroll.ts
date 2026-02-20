import { Hono } from 'hono';
import { Resend } from 'resend';

interface Env {
  RESEND_API_KEY: string;
  GOOGLE_SHEET_ID: string;
  GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
  GOOGLE_PRIVATE_KEY: string;
}

const app = new Hono<{ Bindings: Env }>();

// ─── Google Sheets JWT Auth (Web Crypto API — works in Cloudflare Workers) ───

async function getGoogleAccessToken(
  serviceAccountEmail: string,
  privateKeyPem: string
): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: serviceAccountEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const encode = (obj: object) =>
    btoa(JSON.stringify(obj))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

  const signingInput = `${encode(header)}.${encode(payload)}`;

  // Parse PEM private key
  const pemBody = privateKeyPem
    .replace(/-----BEGIN PRIVATE KEY-----/g, '')
    .replace(/-----END PRIVATE KEY-----/g, '')
    .replace(/\s/g, '');
  const binaryKey = Uint8Array.from(atob(pemBody), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey.buffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(signingInput)
  );

  const sig = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const jwt = `${signingInput}.${sig}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  const tokenData = (await tokenRes.json()) as { access_token: string };
  return tokenData.access_token;
}

async function appendToSheet(
  sheetId: string,
  serviceAccountEmail: string,
  privateKeyPem: string,
  row: string[]
): Promise<void> {
  const accessToken = await getGoogleAccessToken(serviceAccountEmail, privateKeyPem);

  const range = 'Enrollments!A:O';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [row] }),
  });
}

// ─── POST /api/enroll ─────────────────────────────────────────────────────────

app.post('/', async (c) => {
  try {
    const body = await c.req.json();
    const {
      name,
      email,
      phone,
      dob,
      city,
      education,
      college,
      yearOfPassout,
      currentStatus,
      course,
      batchTiming,
      hearAboutUs,
      message,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !course) {
      return c.json({ error: 'Name, email, phone, and course are required.' }, 400);
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const statusStr = Array.isArray(currentStatus) ? currentStatus.join(', ') : currentStatus || '';

    // ── 1. Save to Google Sheets ──
    try {
      const sheetId = c.env?.GOOGLE_SHEET_ID || '';
      const saEmail = c.env?.GOOGLE_SERVICE_ACCOUNT_EMAIL || '';
      const privateKey = (c.env?.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

      if (sheetId && saEmail && privateKey) {
        const row = [
          timestamp,
          name,
          email,
          phone,
          dob || '',
          city || '',
          education || '',
          college || '',
          yearOfPassout || '',
          statusStr,
          course,
          batchTiming || '',
          hearAboutUs || '',
          message || '',
        ];
        await appendToSheet(sheetId, saEmail, privateKey, row);
      }
    } catch (sheetError) {
      // Log but don't fail — email still goes through
      console.error('Google Sheets error:', sheetError);
    }

    // ── 2. Send notification email to team ──
    const resend = new Resend(c.env.RESEND_API_KEY);

    const teamEmailHtml = `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 32px 32px 24px; text-align: center;">
          <h1 style="color: white; font-size: 24px; font-weight: 800; margin: 0 0 6px;">🎓 New Enrollment!</h1>
          <p style="color: rgba(255,255,255,0.85); font-size: 14px; margin: 0;">${timestamp}</p>
        </div>

        <!-- Course Badge -->
        <div style="background: #fef2f2; border-bottom: 1px solid #fee2e2; padding: 16px 32px; text-align: center;">
          <span style="display: inline-block; background: #dc2626; color: white; padding: 6px 20px; border-radius: 999px; font-size: 13px; font-weight: 700;">
            📚 ${course}
          </span>
        </div>

        <!-- Personal Details -->
        <div style="padding: 28px 32px 0;">
          <h3 style="font-size: 13px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px;">Personal Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ['👤 Full Name', name],
              ['📧 Email', email],
              ['📞 Phone', `+91 ${phone}`],
              ['🎂 Date of Birth', dob || '—'],
              ['📍 City', city || '—'],
            ].map(([label, value]) => `
              <tr>
                <td style="padding: 8px 12px; background: #f9fafb; border-radius: 8px; font-size: 13px; color: #6b7280; font-weight: 500; width: 40%; margin-bottom: 6px;">${label}</td>
                <td style="padding: 8px 12px; font-size: 13px; color: #111827; font-weight: 600;">${value}</td>
              </tr>
              <tr><td colspan="2" style="height: 4px;"></td></tr>
            `).join('')}
          </table>
        </div>

        <!-- Education -->
        <div style="padding: 24px 32px 0;">
          <h3 style="font-size: 13px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px;">Education & Status</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ['🎓 Education', education || '—'],
              ['🏫 College', college || '—'],
              ['📅 Passout Year', yearOfPassout || '—'],
              ['💼 Current Status', statusStr || '—'],
            ].map(([label, value]) => `
              <tr>
                <td style="padding: 8px 12px; background: #f9fafb; border-radius: 8px; font-size: 13px; color: #6b7280; font-weight: 500; width: 40%;">${label}</td>
                <td style="padding: 8px 12px; font-size: 13px; color: #111827; font-weight: 600;">${value}</td>
              </tr>
              <tr><td colspan="2" style="height: 4px;"></td></tr>
            `).join('')}
          </table>
        </div>

        <!-- Course Preferences -->
        <div style="padding: 24px 32px 0;">
          <h3 style="font-size: 13px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px;">Course Preferences</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ['📚 Course', course],
              ['⏰ Batch Timing', batchTiming || '—'],
              ['📣 Heard Via', hearAboutUs || '—'],
            ].map(([label, value]) => `
              <tr>
                <td style="padding: 8px 12px; background: #f9fafb; border-radius: 8px; font-size: 13px; color: #6b7280; font-weight: 500; width: 40%;">${label}</td>
                <td style="padding: 8px 12px; font-size: 13px; color: #111827; font-weight: 600;">${value}</td>
              </tr>
              <tr><td colspan="2" style="height: 4px;"></td></tr>
            `).join('')}
          </table>
        </div>

        ${message ? `
        <!-- Message -->
        <div style="padding: 24px 32px 0;">
          <h3 style="font-size: 13px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 12px;">Message / Requirements</h3>
          <div style="background: #f9fafb; border-left: 3px solid #dc2626; padding: 14px 16px; border-radius: 0 8px 8px 0; font-size: 13px; color: #374151; line-height: 1.6;">
            ${message}
          </div>
        </div>
        ` : ''}

        <!-- Footer -->
        <div style="padding: 24px 32px 32px; text-align: center; margin-top: 28px; border-top: 1px solid #f3f4f6;">
          <p style="font-size: 12px; color: #9ca3af; margin: 0;">This enrollment was submitted via <strong>Slonix Solutions</strong> website</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'Slonix Enrollments <onboarding@resend.dev>',
      to: 'slonixbim.team@gmail.com',
      subject: `🎓 New Enrollment: ${name} → ${course}`,
      html: teamEmailHtml,
    });

    // ── 3. Send confirmation email to student ──
    const studentEmailHtml = `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb;">
        <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 40px 32px; text-align: center;">
          <div style="width: 72px; height: 72px; background: rgba(255,255,255,0.15); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 36px;">🎉</div>
          <h1 style="color: white; font-size: 26px; font-weight: 800; margin: 0 0 8px;">You're Enrolled!</h1>
          <p style="color: rgba(255,255,255,0.85); font-size: 15px; margin: 0;">Welcome to Slonix Solutions</p>
        </div>

        <div style="padding: 32px;">
          <p style="font-size: 16px; color: #374151; margin: 0 0 8px;">Hi <strong>${name.split(' ')[0]}</strong>,</p>
          <p style="font-size: 14px; color: #6b7280; line-height: 1.7; margin: 0 0 24px;">
            Thank you for enrolling in <strong style="color: #dc2626;">${course}</strong>! We've received your application and our team will reach out to you within <strong>24 hours</strong> to confirm your batch details.
          </p>

          <div style="background: #fef2f2; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
            <h3 style="font-size: 13px; font-weight: 700; color: #dc2626; margin: 0 0 14px; text-transform: uppercase; letter-spacing: 0.06em;">Your Enrollment Details</h3>
            <table style="width: 100%;">
              <tr>
                <td style="font-size: 13px; color: #9ca3af; padding: 4px 0; width: 45%;">Course</td>
                <td style="font-size: 13px; color: #111827; font-weight: 600; padding: 4px 0;">${course}</td>
              </tr>
              ${batchTiming ? `<tr>
                <td style="font-size: 13px; color: #9ca3af; padding: 4px 0;">Preferred Batch</td>
                <td style="font-size: 13px; color: #111827; font-weight: 600; padding: 4px 0;">${batchTiming}</td>
              </tr>` : ''}
              <tr>
                <td style="font-size: 13px; color: #9ca3af; padding: 4px 0;">Registered Email</td>
                <td style="font-size: 13px; color: #111827; font-weight: 600; padding: 4px 0;">${email}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 28px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #111827; margin: 0 0 16px;">What happens next?</h3>
            ${[
              ['📞', 'Counselor Call', 'Our team will call you to confirm details and answer questions.'],
              ['📧', 'Schedule Email', "You'll receive your batch schedule and joining instructions."],
              ['🚀', 'Start Learning', 'Join your first class and begin your transformation!'],
            ].map(([icon, title, text]) => `
              <div style="display: flex; gap: 14px; margin-bottom: 14px;">
                <div style="width: 36px; height: 36px; background: #fef2f2; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0;">${icon}</div>
                <div>
                  <div style="font-size: 13px; font-weight: 700; color: #111827; margin-bottom: 2px;">${title}</div>
                  <div style="font-size: 12px; color: #6b7280; line-height: 1.5;">${text}</div>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="text-align: center; padding: 20px; background: #f9fafb; border-radius: 12px;">
            <p style="font-size: 13px; color: #6b7280; margin: 0 0 4px;">Need help? Contact us</p>
            <a href="mailto:slonixbim.team@gmail.com" style="font-size: 14px; color: #dc2626; font-weight: 600; text-decoration: none;">slonixbim.team@gmail.com</a>
          </div>
        </div>

        <div style="padding: 20px 32px; text-align: center; background: #f9fafb; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 11px; color: #9ca3af; margin: 0;">© 2025 Slonix Solutions · Building careers, transforming futures</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'Slonix Solutions <onboarding@resend.dev>',
      to: email,
      subject: `🎓 Enrollment Confirmed — ${course} | Slonix Solutions`,
      html: studentEmailHtml,
    });

    return c.json({ success: true, message: 'Enrollment submitted successfully!' });
  } catch (error) {
    console.error('Enrollment error:', error);
    return c.json({ error: 'Failed to submit enrollment. Please try again.' }, 500);
  }
});

export default app;
