import { Webhook } from 'svix';
// Use the incoming Request.headers instead of Next's request-scoped headers() helper
import { WebhookEvent } from '@clerk/nextjs/server';
import { userService } from '@/lib/database';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Add CLERK_WEBHOOK_SECRET to .env');
  }

  const headerPayload = req.headers;
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing headers', { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    // Log verification failure with safe context (do not log secrets)
    // eslint-disable-next-line no-console
    console.warn('Svix verification failed for webhook', { svix_id, svix_timestamp });
    return new Response('Verification failed', { status: 400 });
  }

  if (evt.type === 'user.created') {
    const { id: clerkId, email_addresses, first_name, last_name, image_url, public_metadata } = evt.data;

    const email = email_addresses?.[0]?.email_address || '';
    const name = `${first_name || ''} ${last_name || ''}`.trim() || 'User';
    const role = (public_metadata?.role as any) || 'student';
    const avatar = image_url;

    try {
      // If a user with the same email exists, update it. Otherwise create a new user.
      if (email) {
        const existing = await userService.getByEmail(email);
        if (existing) {
          await userService.update(existing.id, { name, role, avatar });
          return new Response('', { status: 200 });
        }
      }

      // No existing user found by email — create a new one using Clerk id as the DB id
      await userService.create({
        id: clerkId,
        email,
        name,
        role,
        avatar,
      });
    } catch (err) {
      // Log and return 500 for DB-related errors
      // (don't expose internal error details to the caller)
      // eslint-disable-next-line no-console
      console.error('Failed to create/update user from Clerk webhook', err);
      return new Response('Database error', { status: 500 });
    }
  }

  return new Response('', { status: 200 });
}
