import { NextApiRequest, NextApiResponse } from 'next';
import { authenticator, handleAuthCallback } from '../../../../openauth-react-router/my-react-router-app/app/modules/auth/auth.server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Handle the OAuth callback
    const result = await handleAuthCallback(req as unknown as Request);
    
    // Set the session cookie
    if (result.headers) {
      const cookies = result.headers.get('Set-Cookie');
      if (cookies) {
        res.setHeader('Set-Cookie', cookies);
      }
    }

    // Redirect to the dashboard or home page
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Auth callback error:', error);
    res.redirect('/login?error=auth_failed');
  }
} 