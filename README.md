# InnovateAI Robotics Platform

A comprehensive educational robotics platform built with Next.js 14, designed to teach students robotics concepts through interactive 3D simulations and course management.

## 🚀 Features

- **Interactive 3D Simulation**: Built with Three.js and React Three Fiber, allowing students to visualize and program robots in a browser-based environment.
- **Course Management**: Complete system for tracking student progress, assignments, and grades.
- **Role-Based Access**: Distinct dashboards for Students, Teachers, and Admins.
- **Authentication**: Secure user management via Clerk.
- **Demo Mode**: Frontend-only preview mode to explore the UI without backend dependencies.
- **Modern UI**: Polished, responsive interface built with Tailwind CSS and Material UI.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Material UI](https://mui.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Payments**: [Stripe](https://stripe.com/)
- **Testing**: Jest & Playwright

## 📂 Project Structure

This is a monorepo structure:

- `apps/shell`: The primary Next.js application containing the main platform logic.
- `shared/`: Shared libraries, types, and UI components used across applications.
- `docker/`: Docker configurations for local services.
- `public/`: Static assets.

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ (Node 20 recommended)
- npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd innovateairobotics
   ```

2. Install dependencies (from the root):
   ```bash
   npm install
   ```

### Running Locally

You can run the application in two modes: **Demo Mode** (frontend only) or **Full Development Mode** (with backend).

#### Option A: Demo Mode (Recommended for UI/UX)

Run the app without configuring Clerk or Supabase.

1. Create a `.env.local` file in the root (or `apps/shell`):
   ```bash
   NEXT_PUBLIC_DEMO_MODE=true
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

#### Option B: Full Development Mode

Requires setting up backend services.

1. Create a `.env.local` file based on `.env.example`.
2. Configure your environment variables (see below).
3. Start the server:
   ```bash
   npm run dev
   ```

### Building for Production

```bash
npm run build
npm start
```

## 🔐 Environment Variables

Create a `.env.local` file. Key variables include:

```bash
# Feature Flags
NEXT_PUBLIC_DEMO_MODE=true # Set to 'false' for full backend integration

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Database (Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# Payments (Stripe)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

*Note: See `DEPLOYMENT.md` for a detailed deployment guide and full environment variable list.*

## ☁️ Deployment

The application is optimized for deployment on **Vercel**.

1. **Project Root**: Configure Vercel to use `apps/shell` as the Root Directory.
2. **Environment Variables**: Add your production keys in the Vercel dashboard.
3. **Build Command**: `npm run build` (default).

👉 **[Read the full Deployment Guide](DEPLOYMENT.md)**

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.
