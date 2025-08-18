'use client';

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Nisreen Sabir
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/about-me" className="text-gray-700 hover:text-blue-600 transition duration-300 dark:text-gray-300 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="/skills" className="text-gray-700 hover:text-blue-600 transition duration-300 dark:text-gray-300 dark:hover:text-blue-400">
            Skills
          </Link>
          <Link href="/work-experience" className="text-gray-700 hover:text-blue-600 transition duration-300 dark:text-gray-300 dark:hover:text-blue-400">
            Experience
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition duration-300 dark:text-gray-300 dark:hover:text-blue-400">
            Projects
          </Link>
          <Link href="/interests" className="text-gray-700 hover:text-blue-600 transition duration-300 dark:text-gray-300 dark:hover:text-blue-400">
            Interests
          </Link>
          <Link href="/contact-me" className="text-gray-700 hover:text-blue-600 transition duration-300 dark:text-gray-300 dark:hover:text-blue-400">
            Contact
          </Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none ml-4 dark:text-gray-300">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-2 dark:bg-gray-800">
          <Link href="/about-me" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/skills" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link href="/work-experience" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            Experience
          </Link>
          <Link href="/projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/interests" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            Interests
          </Link>
          <Link href="/contact-me" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
