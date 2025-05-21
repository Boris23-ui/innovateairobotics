import { NextApiRequest, NextApiResponse } from 'next';
import { getSessionCookie } from '../../../utils/auth';
import { getSession } from '../../../utils/session';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const sessionId = getSessionCookie(req as any);
    if (!sessionId) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const session = await getSession(sessionId);
    if (!session) {
      return res.status(401).json({ message: 'Session expired' });
    }

    return res.status(200).json({
      id: session.userId,
      email: session.email,
    });
  } catch (error) {
    console.error('Get user info error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 