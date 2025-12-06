# Vercel Deployment Troubleshooting Guide

## ✅ Good News
Your app **builds successfully locally** (confirmed with `npm run build` - exit code 0). This means the code itself is not the issue.

## 🚨 Most Likely Deployment Blockers

### 1. Missing Environment Variables
Vercel won't have access to your `.env.local` file. **You must set these in Vercel Project Settings → Environment Variables:**

#### Required Variables
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
```

#### Demo Mode (Optional)
If deploying without a backend:
```
NEXT_PUBLIC_DEMO_MODE=true
```

### 2. Database Migration Not Applied
The `donations` table doesn't exist yet. **Action Required:**
1. Go to your Supabase SQL Editor
2. Run the SQL from `supabase-migrations.sql`

### 3. Stripe Webhook Configuration
After deploying, update your Stripe webhook endpoint:
- Old: `http://localhost:3000/api/webhook/stripe`
- New: `https://your-app.vercel.app/api/webhook/stripe`

## ⚠️ Minor Issues

### TypeScript Configuration Warning
`apps/shell/tsconfig.json` line 12 has an invalid value:
```json
"ignoreDeprecations": "6.0"  // Should be "5.0" or removed
```

**Fix:** Remove this line or change to `"5.0"`

## 📋 Deployment Checklist

- [ ] Set all environment variables in Vercel
- [ ] Run database migration in Supabase
- [ ] Push latest code to GitHub (master branch auto-deploys)
- [ ] After deploy, update Stripe webhook URL
- [ ] Test the deployed app

## 🔍 How to Debug Vercel Deployment

1. **Check Vercel Build Logs**: Deploy → View Deployment → Build Logs
2. **Look for**:
   - "Missing environment variable" errors
   - TypeScript compilation errors
   - Module not found errors
3. **Common Error Messages**:
   - `Error: Supabase not configured` → Missing env vars
   - `Database connection failed` → Check Supabase env vars or run migration
   - Build timeout → May need to simplify build or upgrade Vercel plan
