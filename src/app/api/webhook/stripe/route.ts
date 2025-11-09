import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { handleSubscriptionChange, sendThankYouEmail } from '../../../../lib/stripe/webhooks'

export async function POST(req: Request) {
  // Defer environment validation to request time so the module can be
  // imported during Next.js build without throwing. If required env
  // vars are missing, return an error response instead of crashing the
  // build server.
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    // eslint-disable-next-line no-console
    console.error('Stripe webhook called but required env vars are not set');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
        try {
          await sendThankYouEmail({
            email: session.customer_email || 'anonymous',
            amount: session.amount_total ? session.amount_total / 100 : 0,
            donationId: session.id,
          });
        } catch (error) {
          console.error('Error sending thank you email:', error);
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