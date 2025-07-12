import { redirect } from 'next/navigation';

export default function AssignmentsHome() {
  redirect('/assignments/dashboard');
  return null;
} 