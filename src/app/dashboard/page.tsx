import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';
import { getUserRole, getDashboardPath } from '@/utils/auth';

export default async function DashboardRedirect() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  // Get user role and redirect to appropriate dashboard
  const userRole = await getUserRole(userId);
  const dashboardPath = getDashboardPath(userRole);
  
  redirect(dashboardPath);
} 