import type { Stripe } from 'stripe';
import { prisma } from '../db';

export async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;
  const status = subscription.status;
  const priceId = subscription.items.data[0]?.price.id;

  await prisma.subscription.upsert({
    where: { stripeSubscriptionId: subscription.id },
    update: {
      status,
      priceId,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
    },
    create: {
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: customerId,
      status,
      priceId,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
    },
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