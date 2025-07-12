export const clerkConfig = {
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
  secretKey: process.env.CLERK_SECRET_KEY!,
  appearance: {
    elements: {
      formButtonPrimary: {
        backgroundColor: '#2563eb',
        '&:hover': {
          backgroundColor: '#1e40af',
        },
      },
      card: {
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      },
    },
  },
  userProfile: {
    signUpUrl: '/sign-up',
    signInUrl: '/sign-in',
  },
};

export default clerkConfig; 