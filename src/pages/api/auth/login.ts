import { NextApiRequest, NextApiResponse } from 'next';
import { createSession } from '../../../utils/session';
import { setSessionCookie } from '../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // In a real application, you would validate the credentials against your database
    // For now, we'll use a simple check
    if (email === 'test@example.com' && password === 'password') {
      const sessionId = await createSession('1', email);
      setSessionCookie(res, sessionId);
      return res.status(200).json({ message: 'Login successful' });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 