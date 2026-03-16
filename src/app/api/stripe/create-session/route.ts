import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
    console.log('=== Stripe Create Session API Called ===');
    console.log('STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY);
    console.log('STRIPE_SECRET_KEY starts with:', process.env.STRIPE_SECRET_KEY?.substring(0, 10));

    if (!process.env.STRIPE_SECRET_KEY) {
        console.error('ERROR: Stripe secret key not configured');
        return NextResponse.json(
            { error: 'Stripe secret key not configured' },
            { status: 500 }
        );
    }

    try {
        console.log('Initializing Stripe...');
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2024-11-20.acacia',
        });

        console.log('Parsing request body...');
        const { amount, donorEmail } = await req.json();
        console.log('Received amount:', amount, 'donorEmail:', donorEmail);

        if (!amount || amount <= 0) {
            console.error('ERROR: Invalid donation amount:', amount);
            return NextResponse.json(
                { error: 'Invalid donation amount' },
                { status: 400 }
            );
        }

        const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        console.log('Origin URL:', origin);

        console.log('Creating Stripe checkout session...');
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
                        unit_amount: Math.round(amount * 100), // Convert to cents
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

        console.log('Checkout session created successfully:', session.id);
        return NextResponse.json({ sessionId: session.id });
    } catch (err) {
        console.error('=== ERROR creating checkout session ===');
        console.error('Error type:', err instanceof Error ? err.constructor.name : typeof err);
        console.error('Error message:', err instanceof Error ? err.message : String(err));
        console.error('Full error:', err);

        return NextResponse.json(
            {
                error: 'Error creating checkout session',
                details: err instanceof Error ? err.message : String(err)
            },
            { status: 500 }
        );
    }
}
