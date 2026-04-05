import type { Stripe } from 'stripe';
import { supabaseAdmin } from '../supabase/admin';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleDonation(session: Stripe.Checkout.Session) {
  if (session.payment_status === 'paid') {
    try {
      const { error } = await supabaseAdmin
        .from('donations')
        .insert({
          stripe_session_id: session.id,
          amount: session.amount_total ? session.amount_total / 100 : 0,
          currency: session.currency,
          donor_email: session.customer_details?.email || session.customer_email,
          status: 'succeeded',
        });

      if (error) {
        console.error('Error persisting donation:', error);
        throw error;
      }

      console.log('Donation persisted successfully:', session.id);
    } catch (err) {
      console.error('Failed to record donation in database:', err);
      // Don't throw here to avoid failing the webhook if DB insert fails
      // In a real app, you might want to queue this for retry
    }
  }
}

export async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;
  const status = subscription.status;
  const priceId = subscription.items.data[0]?.price.id;

  console.log('Subscription update:', {
    subscriptionId: subscription.id,
    customerId,
    status,
    priceId,
  });

  // TODO: Implement subscription persistence logic here
}

export async function sendThankYouEmail({ email, amount, donationId }: {
  email: string;
  amount: number;
  donationId: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    console.log('RESEND_API_KEY not set — skipping thank-you email for donation:', donationId);
    return;
  }

  await resend.emails.send({
    from: 'InnovateAI Robotics <info@innovateairobotics.com>',
    to: email,
    subject: 'Thank you for your donation to InnovateAI Robotics!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <div style="background: linear-gradient(135deg, #06b6d4, #3b82f6); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Thank You!</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0;">Your generosity changes lives</p>
        </div>
        <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
          <p style="font-size: 16px; line-height: 1.6;">
            We received your donation of <strong style="color: #06b6d4;">$${amount.toFixed(2)}</strong> to InnovateAI Robotics.
            Your support helps us bring hands-on robotics education to students in Kenya and the US.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            Every dollar goes directly toward EV3 Mindstorms kits, curriculum materials, and instructor training
            — putting real robots in the hands of young engineers.
          </p>
          <div style="background: white; border-left: 4px solid #06b6d4; padding: 16px; border-radius: 4px; margin: 24px 0;">
            <p style="margin: 0; font-size: 14px; color: #64748b;">Donation reference: <strong>${donationId}</strong></p>
            <p style="margin: 4px 0 0; font-size: 12px; color: #94a3b8;">Keep this for your records. InnovateAI Robotics is a 501(c)(3) nonprofit (TaxID: 99-2801688).</p>
          </div>
          <p style="font-size: 14px; color: #64748b;">
            Questions? Reply to this email or contact us at
            <a href="mailto:info@innovateairobotics.com" style="color: #06b6d4;">info@innovateairobotics.com</a>
          </p>
          <p style="font-size: 14px; color: #64748b; margin-top: 24px;">
            With gratitude,<br/>
            <strong>The InnovateAI Robotics Team</strong>
          </p>
        </div>
      </div>
    `,
  });
}