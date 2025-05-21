import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">RoboEd</h3>
            <p className="text-sm text-gray-300">
              Empowering K–12 students through innovative robotics education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-[rgb(60,152,251)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/programs" className="text-sm hover:text-[rgb(60,152,251)] transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/curriculum" className="text-sm hover:text-[rgb(60,152,251)] transition-colors">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="/resources" className="text-sm hover:text-[rgb(60,152,251)] transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-[rgb(60,152,251)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-[rgb(60,152,251)] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[rgb(60,152,251)] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[rgb(60,152,251)] transition-colors">
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Stay Updated */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for updates on programs and resources.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[rgb(60,152,251)] hover:bg-[rgb(45,130,220)] text-white px-4 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} RoboEd. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 