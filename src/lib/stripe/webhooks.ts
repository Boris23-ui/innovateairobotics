import type { Stripe } from 'stripe';

export async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;
  const status = subscription.status;
  const priceId = subscription.items.data[0]?.price.id;
  // Persist subscription changes as needed. Placeholder log for now.
  console.log('Subscription update:', {
    subscriptionId: subscription.id,
    customerId,
    status,
    priceId,
    currentPeriodEnd: (subscription as any).current_period_end,
    cancelAtPeriodEnd: subscription.cancel_at_period_end,
  });
}

export async function sendThankYouEmail({ email, amount, donationId }: {
  email: string;
  amount: number;
  donationId: string;
}) {
  // Implement your email sending logic here
  // You could use services like SendGrid, Amazon SES, etc.
  console.log('Sending thank you email to:', email, 'for donation:', donationId);
}