// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 w-full fixed top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={logo} // Placeholder logo image
            alt="Logo"
            className="w-20 h-20 rounded-full"
          />
          <div className="flex items-center justify-evenly space-x-4">
            <div className="text-white text-2xl font-semibold">
              <span>SaveMy</span>
              <span className="text-blue-500">Reels</span>
            </div>
          </div>
        </div>

        {/* Menu (Responsive) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-blue-500">
            About Us
          </Link>
          <Link className="hover:text-blue-500">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-blue text-white p-4 space-y-4 bg-transparent drop-shadow-lg ">
          <Link to="/" className="block hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="block hover:text-blue-500">
            About Us
          </Link>
          <Link className="block hover:text-blue-500">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
