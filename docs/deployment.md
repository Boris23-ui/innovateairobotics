# Deployment Guide

This document covers deploying the InnovateAI Robotics platform to Vercel and maintaining a production environment.

## Requirements

### Node.js Version
- Required: Node.js >= 18.x (Node.js 20.x recommended)
- Required: npm >= 9.x (for workspace: dependency support)

To upgrade Node.js on Windows:
1. Download Node.js 20.x from https://nodejs.org/
2. Or use nvm-windows: `nvm install 20` then `nvm use 20`

### Environment Variables
Required variables in Vercel project settings:

```bash
# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Database (Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Payments (Stripe)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Next.js
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
```

Set these in Vercel → Project Settings → Environment Variables. Mark server-only variables (CLERK_SECRET_KEY, STRIPE_SECRET_KEY, etc.) as "Production" only to keep them secure.

### Vercel Project Configuration

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Framework Preset: Next.js
   - Root Directory: `apps/shell`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Node.js Version: 20.x

3. Enable:
   - Automatically expose System Environment Variables
   - Build and Development Settings → Include source maps

### Production Checks

Before deploying:
1. All tests pass: `npm test`
2. TypeScript checks pass: `npm run type-check`
3. Build succeeds locally: `npm run build`
4. Required env vars are set in Vercel
5. Database migrations are ready (see `SUPABASE_SETUP.md`)

### Deployment Process

#### First Deploy
1. Push to `main` or `master`
2. Vercel will:
   - Clone the repo
   - Use `apps/shell` as root
   - Install dependencies
   - Build the Next.js app
   - Deploy to production

#### Subsequent Deploys
- Automatic deploys on push to main/master
- Preview deploys for pull requests
- Manual promotion of preview to production via Vercel dashboard

### Troubleshooting

Common issues:

1. Build fails with workspace dependency errors:
   ```
   Error: Cannot find module '@shared/components'
   ```
   - Solution: Ensure you're using npm >= 9.x
   - Verify `package.json` has correct workspace configuration

2. TypeScript errors in production:
   ```
   Type error: Cannot find module ... or its corresponding type declarations
   ```
   - Run `npm run type-check` locally first
   - Check `tsconfig.json` includes all workspace packages

3. Environment variable errors:
   ```
   Error: Missing required environment variable: NEXT_PUBLIC_...
   ```
   - Double-check Vercel environment variables
   - Verify scopes (Development, Preview, Production)

4. Node.js version mismatch:
   ```
   Error: The engine "node" is incompatible with this module
   ```
   - Set Node.js Version to 20.x in Vercel project settings

### Monitoring

- Set up Vercel Analytics
- Enable Error monitoring
- Configure Slack/Discord notifications for deploy status

### Performance

Vercel automatically:
- Minifies JavaScript
- Optimizes images
- Enables caching
- Serves from edge locations

Additional optimizations:
1. Enable Vercel's Edge Config
2. Use Vercel KV for caching
3. Enable Vercel Image Optimization

### Security

1. Enable:
   - Two-factor authentication
   - Branch protection rules
   - Required status checks

2. Audit:
   - npm dependencies (`npm audit`)
   - Environment variable access
   - API route permissions

### Rollback Plan

To rollback a bad deploy:
1. Vercel Dashboard → Deployments
2. Find last good deployment
3. Click ⋮ → "Promote to Production"