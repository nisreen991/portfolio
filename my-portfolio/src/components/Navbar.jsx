'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current pathname

  const navLinks = [
    { href: "/about-me", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/work-experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/interests", label: "Interests" },
    { href: "/contact-me", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-color">
          Nisreen Sabir
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                transition duration-300
                ${pathname === link.href
                  ? "text-primary-color border-b-2 border-primary-color"
                  : "text-text-color hover:text-primary-color hover:border-b-2 hover:border-primary-color"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
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
        <div className="md:hidden bg-card shadow-lg py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                block px-4 py-2 transition duration-300
                ${pathname === link.href
                  ? "text-primary-color bg-background"
                  : "text-text-color hover:bg-background hover:text-primary-color"
                }
              `}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
