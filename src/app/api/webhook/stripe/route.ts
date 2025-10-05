import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error('Required environment variables are not set');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Store the donation in the database
        try {
          await prisma.donation.create({
            data: {
              amount: session.amount_total ? session.amount_total / 100 : 0, // Convert from cents to dollars
              email: session.customer_email || 'anonymous',
              stripeSessionId: session.id,
              status: 'completed',
              metadata: session.metadata,
            },
          });

          // Send thank you email
          await sendThankYouEmail({
            email: session.customer_email!,
            amount: session.amount_total! / 100,
            donationId: session.id,
          });
        } catch (error) {
          console.error('Error processing successful donation:', error);
        }
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.error('Payment failed:', {
          paymentIntentId: paymentIntent.id,
          error: paymentIntent.last_payment_error,
        });
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        // Handle subscription changes
        try {
          await handleSubscriptionChange(subscription);
        } catch (error) {
          console.error('Error handling subscription change:', error);
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    );
  }
}