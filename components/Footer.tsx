import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Assuming you're using react-icons
import Link from 'next/link'; // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-800 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We are a company committed to providing the best products and services to our customers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-sm hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/ContactForm" className="text-sm hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-xl hover:text-blue-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-pink-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Alaxit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
