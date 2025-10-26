# InnovateAI Robotics

Lightweight monorepo for an educational robotics platform (Next.js 14). This README focuses on getting the project running locally and deploying the primary app to Vercel.

## Contents
- What this repo contains
- Quickstart (dev, build, test)
- Environment variables (local & Vercel)
- Vercel deployment notes (monorepo)
- Troubleshooting & next steps

## What this repo contains
- apps/: multiple frontend apps (primary Next.js app is `apps/shell`)
- shared/: shared types and helpers
- components/, src/: UI and shared code used by the main app
- docker/: docker-compose manifests for local services
- SUPABASE_SETUP.md: instructions to provision Supabase locally / in production

## Quickstart (Windows / PowerShell)
Prerequisites: Node 18+ (Node 20 recommended), npm, and Git.

Install dependencies (root workspace):

```powershell
npm install
```

Run the primary app in development (from repo root):

```powershell
# If using the main Next app in root
npm run dev

# OR run the shell app directly (monorepo):
cd apps/shell; npm install; npm run dev
```

Open http://localhost:3000 in your browser.

Build for production (root or app folder):

```powershell
npm run build
npm start
# or for the shell app specifically:
cd apps/shell; npm run build; npm start
```

Run tests:

```powershell
npm run test
npm run test:e2e
```

Lint / type-check:

```powershell
npm run lint
npm run type-check
```

## Important project scripts
The root and `apps/shell` package.json include the typical Next.js scripts:
- dev: start development server
- build: build for production
- start: run the built app
- lint, test, test:e2e

Use the app folder (`apps/shell`) as the Vercel project root for deployments in a monorepo.

## Environment variables
Create a local `.env.local` file (copy from `.env.example` if present). Key variables used by the project include:

- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY (public)
- CLERK_SECRET_KEY (server)
- NEXT_PUBLIC_SUPABASE_URL (public)
- NEXT_PUBLIC_SUPABASE_ANON_KEY (public)
- SUPABASE_SERVICE_ROLE_KEY or SERVICE_KEY (server, keep secret)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY (public)
- STRIPE_SECRET_KEY (server)

Note: never commit secrets to Git. For Vercel, set these variables in the Project Settings > Environment Variables.

For Supabase-specific provisioning, see `SUPABASE_SETUP.md` at the repo root.

## Deploying to Vercel (recommended)
Because this repo is a monorepo, configure the Vercel project to use `apps/shell` as the Project Root. Suggested settings:

- Framework Preset: Next.js
- Project Root: `apps/shell`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave default (Next.js)
- Node Version: 20 (or 18+)

Environment variables: Add the same variables you use locally (see Environment variables section). Make sure to add server-only variables to the Production scope only.

Vercel will run `npm install` and then `npm run build` in `apps/shell`. If your deployment fails, check the Vercel build logs for missing env vars or TypeScript errors.

## Common issues & troubleshooting
- Missing env vars during build: double-check names and scopes (Vercel requires env vars to be set in the dashboard for each environment).
- Monorepo / workspace packages not found: ensure `package.json` in root includes workspace configuration and `apps/shell/package.json` uses workspace: dependencies. Vercel installs from the Project Root—if you deploy `apps/shell`, Vercel will run `npm install` there; ensure the workspace setup is compatible or add a preinstall that bootstraps workspaces.
- Image/sharp build issues on Windows: install the required build tools or use the prebuilt sharp binaries. Ensure you have Python and windows-build-tools if you must compile native modules.
- Locked `.next` folder on Windows: stop all node processes, delete `.next`, then rebuild. Running PowerShell as Admin can help.

## Next steps to make the app production-ready
1. Verify `apps/shell` builds cleanly: `cd apps/shell; npm run build`.
2. Run `npm run type-check` and fix TypeScript errors.
3. Add a `vercel.json` if you need custom routing or redirects.
4. Prepare an environment in Vercel and add secrets (Clerk, Supabase, Stripe).
5. Add CI to run tests and type-check on every PR.

## Contributing
Follow the usual GitHub flow: fork, branch, PR. Run tests and linters before submitting.

## Where to get help
- See `SUPABASE_SETUP.md` for provisioning instructions
- Open issues or discussions on GitHub if you get stuck

---

If you want, I can now:

1. Run a production build locally and fix any build-time errors.
2. Add a `vercel.json` with recommended defaults for this app.
3. Generate a short `docs/deployment.md` that lists the exact env vars and Vercel settings.

Tell me which of the above you'd like next and I'll proceed.

