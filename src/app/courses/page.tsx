import { redirect } from 'next/navigation';

export default function CoursesHome() {
  redirect('/courses/modules');
  return null;
} 