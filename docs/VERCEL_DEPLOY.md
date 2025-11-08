# Deploying apps/shell to Vercel (monorepo)

This project is a monorepo. The Next.js app you want to deploy is located at `apps/shell`.

This guide explains the recommended Vercel configuration and required environment variables.

## Recommended Vercel setup

1. Go to Vercel and create a new project (Import from Git).
2. When prompted for the Root Directory, set it to: `apps/shell`
3. Build & Output Settings (use defaults if left blank):
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: `.next`
4. Environment Variables: set the variables listed below in the Project > Settings > Environment Variables (Preview and Production as needed).
5. Add any required Secrets (e.g., `CLERK_WEBHOOK_SECRET`) in Vercel Secrets or as env vars.
6. Deploy. Vercel will run the build and publish the app from `apps/shell`.

## Files added to this repo to help Vercel

- `vercel.json` — a minimal root config that instructs Vercel about the Next.js build for `apps/shell`, includes minor route/header defaults and git settings.
- `.vercelignore` — reduces uploaded files during deployment.

> Note: Vercel also supports configuring & connecting individual projects to subdirectories of a monorepo; you can set the project Root Directory to `apps/shell` in the Vercel UI when importing the repository.

## Required environment variables

At minimum you should configure these variables in Vercel (the names below match usage in the codebase):

- `NEXT_PUBLIC_SUPABASE_URL` — Your Supabase project URL (public).
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon/public key used by client-side code.
- `SUPABASE_SERVICE_KEY` (optional) — Server-side service key if any server logic needs it (keep as `Secret` in Vercel).
- `CLERK_WEBHOOK_SECRET` — Secret used to verify Clerk webhooks (svix signature secret).
- `CLERK_PUBLISHABLE_KEY` — Clerk publishable key for client-side.
- `CLERK_SECRET_KEY` — Clerk server-side API key (secret).
- Any third-party API keys (e.g., Stripe) used by your app, e.g. `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`.

Tip: mark server-only secrets as `Environment Variable Type: Secret` (Vercel UI) so they are not exposed in logs or the UI.

## Webhooks

- The Clerk webhook route is implemented at `apps/shell/app/api/webhooks/clerk/route.ts` and expects `CLERK_WEBHOOK_SECRET` to verify incoming svix-signed requests.
- In Vercel, add the webhook endpoint URL in Clerk (e.g., `https://<your-vercel-domain>/api/webhooks/clerk`).

## Troubleshooting

- If you see build errors about module resolution (path aliases like `@/lib/...`), make sure the project Root Directory is `apps/shell` when importing the repo in Vercel so it reads the app-level tsconfig which maps aliases to the correct locations.
- If the build is slow or installs too many dependencies, consider using a package manager workspace-aware setup (pnpm, Yarn workspaces) and/or a monorepo build cache (turbo/pnpm store).

## Optional: CI & Preview

- Vercel creates preview deployments automatically for PRs. Keep your env variables and secrets in the Vercel Project settings for consistent previews.

If you want, I can also:

- Add a GitHub Action to run `npm run type-check` and `npm test` on PRs.
- Add scripts to `package.json` to make monorepo builds faster or to produce a production-ready output build for other hosts.
