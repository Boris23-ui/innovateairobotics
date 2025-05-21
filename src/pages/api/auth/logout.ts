import { NextApiRequest, NextApiResponse } from 'next';
import { getSessionCookie } from '../../../utils/auth';
import { deleteSession } from '../../../utils/session';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const sessionId = getSessionCookie(req as any);
    if (sessionId) {
      await deleteSession(sessionId);
    }

    // Clear the session cookie
    res.setHeader('Set-Cookie', 'session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 