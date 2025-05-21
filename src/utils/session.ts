import { cookies } from 'next/headers';

interface SessionData {
  userId: string;
  email: string;
  expiresAt: number;
}

export async function getSession(sessionId: string): Promise<SessionData | null> {
  try {
    // In a real application, you would fetch this from your database
    // For now, we'll use a simple in-memory store
    const session = global.sessions?.get(sessionId);
    if (!session) return null;

    if (session.expiresAt < Date.now()) {
      global.sessions?.delete(sessionId);
      return null;
    }

    return session;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
}

export async function createSession(userId: string, email: string): Promise<string> {
  const sessionId = crypto.randomUUID();
  const session: SessionData = {
    userId,
    email,
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 1 week
  };

  // In a real application, you would store this in your database
  if (!global.sessions) {
    global.sessions = new Map();
  }
  global.sessions.set(sessionId, session);

  return sessionId;
}

export async function deleteSession(sessionId: string): Promise<void> {
  // In a real application, you would delete this from your database
  global.sessions?.delete(sessionId);
}

// Add TypeScript declaration for global sessions
declare global {
  var sessions: Map<string, SessionData> | undefined;
} 