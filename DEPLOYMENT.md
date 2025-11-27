# Vercel Deployment Guide

## Quick Start - Demo Mode

To deploy the frontend without backend services (demo mode):

### 1. Environment Variables Setup

In your Vercel project settings, add these environment variables:

```bash
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

### 2. Deploy

```bash
git push origin main
```

Vercel will automatically build and deploy your app.

---

## Full Deployment - With Backend Services

For a fully functional app with authentication and database:

### Required Services

1. **Clerk** (Authentication)
   - Sign up at https://dashboard.clerk.com
   - Create a new application
   - Copy the API keys

2. **Supabase** (Database)
   - Sign up at https://supabase.com
   - Create a new project
   - Run the schema from `supabase-schema.sql`
   - Copy the API keys

3. **Stripe** (Payments - Optional)
   - Sign up at https://dashboard.stripe.com
   - Copy the API keys

### Environment Variables

Add these to your Vercel project:

```bash
# Required
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...
SUPABASE_SERVICE_ROLE_KEY=eyJhbG...
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
NODE_ENV=production

# Optional
NEXT_PUBLIC_DEMO_MODE=false
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

---

## Deployment Checklist

- [ ] Environment variables configured in Vercel
- [ ] Demo mode enabled (or backend services set up)
- [ ] Repository connected to Vercel
- [ ] Build command: `npm run build`
- [ ] Output directory: `.next`
- [ ] Framework preset: Next.js

---

## Testing Locally

Test demo mode locally:

```bash
# Create .env.local
echo "NEXT_PUBLIC_DEMO_MODE=true" > .env.local

# Run dev server
npm run dev
```

---

## Demo Mode Features

When `NEXT_PUBLIC_DEMO_MODE=true`:
- Mock user authentication
- Sample courses and assignments
- No database required
- No Clerk/Supabase setup needed
- Perfect for showcasing UI/UX

## Limitations

Demo mode does NOT support:
- User registration/login
- Data persistence
- Real payment processing
- Multi-user functionality
