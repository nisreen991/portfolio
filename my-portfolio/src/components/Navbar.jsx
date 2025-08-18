'use client';

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-card-background shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-color">
          Nisreen Sabir
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/about-me" className="text-text-color hover:text-primary-color transition duration-300">
            About
          </Link>
          <Link href="/skills" className="text-text-color hover:text-primary-color transition duration-300">
            Skills
          </Link>
          <Link href="/work-experience" className="text-text-color hover:text-primary-color transition duration-300">
            Experience
          </Link>
          <Link href="/projects" className="text-text-color hover:text-primary-color transition duration-300">
            Projects
          </Link>
          <Link href="/interests" className="text-text-color hover:text-primary-color transition duration-300">
            Interests
          </Link>
          <Link href="/contact-me" className="text-text-color hover:text-primary-color transition duration-300">
            Contact
          </Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-color focus:outline-none ml-4">
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
        <div className="md:hidden bg-card-background shadow-lg py-2">
          <Link href="/about-me" className="block px-4 py-2 text-text-color hover:bg-background" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/skills" className="block px-4 py-2 text-text-color hover:bg-background" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link href="/work-experience" className="block px-4 py-2 text-text-color hover:bg-background" onClick={() => setIsOpen(false)}>
            Experience
          </Link>
          <Link href="/projects" className="block px-4 py-2 text-text-color hover:bg-background" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/interests" className="block px-4 py-2 text-text-color hover:bg-background" onClick={() => setIsOpen(false)}>
            Interests
          </Link>
          <Link href="/contact-me" className="block px-4 py-2 text-text-color hover:bg-background" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
