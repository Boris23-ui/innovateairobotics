import { redirect } from 'next/navigation';

export default function ProgressHome() {
  redirect('/progress/tracker');
  return null;
} 