import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { personalData } from '@/utils/data/personal-data';
import { isValidEmail } from '@/utils/check-email';

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Please submit a valid message.' },
      { status: 400 }
    );
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return NextResponse.json(
      { success: false, message: 'Please submit a valid message.' },
      { status: 400 }
    );
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!name || name.length > 100 || !isValidEmail(email) || email.length > 254 || !message || message.length > 500) {
    return NextResponse.json(
      { success: false, message: 'Enter a name, valid email address, and message (up to 500 characters).' },
      { status: 400 }
    );
  }

  const sender = process.env.EMAIL_ADDRESS;
  const passkey = process.env.GMAIL_PASSKEY;

  if (!sender || !passkey) {
    console.error('Contact email delivery is unavailable: EMAIL_ADDRESS or GMAIL_PASSKEY is not configured.');
    return NextResponse.json(
      { success: false, message: 'Email is not configured yet. Please try again later.' },
      { status: 503 }
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: sender, pass: passkey },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${sender}>`,
      to: personalData.email,
      replyTo: email,
      subject: `Portfolio message from ${name.replace(/[\r\n]/g, ' ')}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;color:#142015"><h2>New portfolio message</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong></p><p>${safeMessage}</p></div>`,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Portfolio email delivery failed:', error);
    return NextResponse.json(
      { success: false, message: 'Could not send your message. Please try again later.' },
      { status: 500 }
    );
  }
}
