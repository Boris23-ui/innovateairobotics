import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, program, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log submission (replace with email service like Resend/SendGrid when configured)
    console.log('Contact form submission:', { name, email, phone, program, message, timestamp: new Date().toISOString() });

    // TODO: integrate email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@innovateairobotics.com',
    //   to: 'info@innovateairobotics.com',
    //   subject: `New inquiry from ${name} — ${program || 'General'}`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Program:</strong> ${program}</p><p><strong>Message:</strong> ${message}</p>`
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
