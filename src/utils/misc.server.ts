import { cookies } from 'next/headers';

export function getCookie(name: string): string | undefined {
  const cookieStore = cookies();
  return cookieStore.get(name)?.value;
}

export function setCookie(name: string, value: string, options?: { maxAge?: number; path?: string }) {
  const cookieStore = cookies();
  cookieStore.set(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    ...options,
  });
}

export function deleteCookie(name: string) {
  const cookieStore = cookies();
  cookieStore.delete(name);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function combineHeaders(...headersList: (Headers | undefined)[]) {
  const combined = new Headers();
  for (const headers of headersList) {
    if (!headers) continue;
    headers.forEach((value, key) => {
      combined.append(key, value);
    });
  }
  return combined;
} 