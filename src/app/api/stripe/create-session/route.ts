import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
    if (!process.env.STRIPE_SECRET_KEY) {
        return NextResponse.json(
            { error: 'Stripe secret key not configured' },
            { status: 500 }
        );
    }

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2025-08-27.basil',
        });

        const { amount, donorEmail } = await req.json();

        if (!amount || amount <= 0) {
            return NextResponse.json(
                { error: 'Invalid donation amount' },
                { status: 400 }
            );
        }

        const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Donation to InnovateAI Robotics',
                            description: 'Supporting the next generation of engineers',
                        },
                        unit_amount: Math.round(amount * 100),
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/donate?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/donate?canceled=true`,
            customer_email: donorEmail,
            metadata: {
                type: 'donation',
            },
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (err) {
        console.error('Stripe checkout session error:', err instanceof Error ? err.message : 'Unknown error');

        return NextResponse.json(
            { error: 'Error creating checkout session' },
            { status: 500 }
        );
    }
}
