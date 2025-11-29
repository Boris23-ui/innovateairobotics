import type { Stripe } from 'stripe';
import { supabaseAdmin } from '../supabase/admin';

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
  // Implement your email sending logic here
  console.log('Sending thank you email to:', email, 'for donation:', donationId);
}