"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo1.png"
            alt="Alaxit Logo"
            width={160}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation */}
        <nav className="relative">
          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <>
              {/* Overlay to Close Menu */}
              <div
                className="fixed inset-0 bg-black opacity-50 z-40"
                onClick={() => setIsMenuOpen(false)}
              ></div>

              {/* Mobile Navigation */}
              <ul className="fixed top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white p-6 rounded-lg shadow-lg z-50">
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="relative">
                  {/* Dropdown Toggle */}
                  <button
                    className="flex items-center px-4 py-3 w-full"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <ul className="bg-gray-100 shadow-lg rounded-md mt-2">
                      <li>
                        <Link
                          href="/Digitalservice"
                          className="block px-4 py-3 hover:bg-gray-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Digital Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Appdev"
                          className="block px-4 py-3 hover:bg-gray-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Application Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Proj"
                          className="block px-4 py-3 hover:bg-gray-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Project & Process Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Buisness"
                          className="block px-4 py-3 hover:bg-gray-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Business Advisory Services
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link
                    href="/ContactForm"
                    className="block px-4 py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </>
          )}

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link href="/" className="px-4 py-3">
                Home
              </Link>
            </li>
            <li className="relative group">
              <button
                className="flex items-center px-4 py-3"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <ul className="absolute top-12 left-0 bg-white shadow-lg w-56 z-50 rounded-md">
                  <li>
                    <Link href="/Digitalservice" className="block px-4 py-3 hover:bg-gray-100">
                      Digital Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/Appdev" className="block px-4 py-3 hover:bg-gray-100">
                      Application Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Proj" className="block px-4 py-3 hover:bg-gray-100">
                      Project & Process Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/Buisness" className="block px-4 py-3 hover:bg-gray-100">
                      Business Advisory Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/ContactForm" className="px-4 py-3">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <Link href="/ContactForm">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 hover:animate-pulseGrow">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  );
}
