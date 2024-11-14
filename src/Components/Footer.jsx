import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div className="flex flex-col text-center md:justify-start">
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            We’re dedicated to providing an easy, fast, and reliable way to
            download Instagram Reels, videos, and photos. Our tool is free,
            secure, and simple to use, designed with you in mind.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col text-center md:justify-start">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col text-center md:justify-start">
          <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
          <p className="text-gray-400">Email: support@example.com</p>
          <div className="flex space-x-4 mt-4 justify-center">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 pt-4 text-gray-500 text-sm text-center mt-2">
        <p>
          &copy; {new Date().getFullYear()} Instagram Reels Downloader. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
