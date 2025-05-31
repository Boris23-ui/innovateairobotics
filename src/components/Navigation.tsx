import { useAuth } from "@/utils/mockAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const { user, isLoaded, signOut } = useAuth();
  const pathname = usePathname();

  const isTeacher = user?.role === "teacher";
  const isStudent = user?.role === "student";

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">
                Innovate AI Robotics
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/programs"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === "/programs"
                    ? "border-blue-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Programs
              </Link>
              <Link
                href="/curriculum"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === "/curriculum"
                    ? "border-blue-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Curriculum
              </Link>
              <Link
                href="/resources"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === "/resources"
                    ? "border-blue-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === "/contact"
                    ? "border-blue-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isLoaded && (
              <>
                {user ? (
                  <div className="flex items-center space-x-4">
                    {isTeacher && (
                      <Link
                        href="/teacher/dashboard"
                        className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Teacher Dashboard
                      </Link>
                    )}
                    {isStudent && (
                      <Link
                        href="/student/dashboard"
                        className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Student Dashboard
                      </Link>
                    )}
                    <button
                      onClick={() => signOut()}
                      className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <Link
                      href="/sign-in"
                      className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/sign-up"
                      className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 