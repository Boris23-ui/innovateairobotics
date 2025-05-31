"use client";

import { useAuth } from "@/utils/mockAuth";
import Link from "next/link";

export default function Home() {
  const { user, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-semibold text-gray-900">Loading...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Welcome to Innovate AI Robotics
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Empowering the next generation through AI and robotics education
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                href="/sign-in"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome back, {user.firstName}!
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            {user.role === "teacher"
              ? "Manage your courses and track student progress"
              : "Continue your learning journey"}
          </p>
          <div className="mt-8">
            <Link
              href={user.role === "teacher" ? "/teacher/dashboard" : "/student/dashboard"}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 