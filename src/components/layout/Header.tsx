import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo_new.jpg" alt="InnovateAI Robotics" width={36} height={36} style={{ objectFit: 'contain', borderRadius: '50%' }} />
            <span className="text-xl font-bold text-[rgb(60,152,251)]">InnovateAI Robotics</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-[rgb(60,152,251)] transition-colors">Home</Link>
            <Link href="/programs" className="hover:text-[rgb(60,152,251)] transition-colors">Programs</Link>
            <Link href="/programs/curriculum" className="hover:text-[rgb(60,152,251)] transition-colors">Curriculum</Link>
            <Link href="/resources" className="hover:text-[rgb(60,152,251)] transition-colors">Resources</Link>
            <Link href="/contact" className="hover:text-[rgb(60,152,251)] transition-colors">Contact</Link>

            {/* Dashboards */}
            <div className="ml-8 flex space-x-2">
              <Link 
                href="/student" 
                className="px-4 py-2 bg-[rgb(60,152,251)]/[0.1] text-[rgb(60,152,251)] rounded-lg hover:bg-[rgb(60,152,251)]/[0.2] transition-colors"
              >
                Student
              </Link>
              <Link 
                href="/dashboard" 
                className="px-4 py-2 bg-[rgb(60,152,251)]/[0.1] text-[rgb(60,152,251)] rounded-lg hover:bg-[rgb(60,152,251)]/[0.2] transition-colors"
              >
                Teacher
              </Link>
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 shadow-inner">
            <div className="container mx-auto px-4 space-y-2">
              <Link href="/" className="block w-full py-2 px-4 rounded-lg hover:bg-gray-100">Home</Link>
              <Link href="/programs" className="block w-full py-2 px-4 rounded-lg hover:bg-gray-100">Programs</Link>
              <Link href="/programs/curriculum" className="block w-full py-2 px-4 rounded-lg hover:bg-gray-100">Curriculum</Link>
              <Link href="/resources" className="block w-full py-2 px-4 rounded-lg hover:bg-gray-100">Resources</Link>
              <Link href="/contact" className="block w-full py-2 px-4 rounded-lg hover:bg-gray-100">Contact</Link>

              <hr className="my-2 border-t border-gray-200" />

              <Link 
                href="/student" 
                className="block w-full py-2 px-4 rounded-lg bg-[rgb(60,152,251)]/[0.1] text-[rgb(60,152,251)] hover:bg-[rgb(60,152,251)]/[0.2] transition-colors"
              >
                Student
              </Link>
              <Link 
                href="/dashboard" 
                className="block w-full py-2 px-4 rounded-lg bg-[rgb(60,152,251)]/[0.1] text-[rgb(60,152,251)] hover:bg-[rgb(60,152,251)]/[0.2] transition-colors"
              >
                Teacher
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}