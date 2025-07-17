import { redirect } from "next/navigation";

export default function SSOCallbackPage() {
  // Clerk SSO callback handler: simply redirect to dashboard
  redirect("/dashboard/student");
  return null;
} 