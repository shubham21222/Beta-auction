'use client';
import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import LoginModal from './LoginModal';
import SignupModal from "./SignupModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-0 z-[9999] right-0 transition-all duration-300 w-full max-w-screen-xl mx-auto ${isScrolled
          ? "bg-white/5 shadow-lg rounded-full text-black border border-white/18"
          : "bg-transparent text-white"
        }`}
        style={{
          padding: isScrolled
            ? isMobile
              ? "3px"
              : "18px"
            : isMobile
              ? "5px"
              : "20px",
          boxShadow: isScrolled ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : "none",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0">
            <div className="flex items-center w-full md:w-auto justify-center md:justify-start relative">
              <Link href="/" className="flex-grow-0">
                <Image
                  src="https://img1.wsimg.com/isteam/ip/05b280c7-f839-4e4d-9316-4bf01d28f2df/logo/b9e8f767-116c-4444-aab2-66386e072ec2.png"
                  alt="NY Elizabeth"
                  width={100}
                  height={100}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                className="md:hidden absolute right-0 p-2 text-black font-semibold"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <HiX className="text-2xl" />
                ) : (
                  <HiMenu className="text-2xl" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav
              className={`hidden md:flex space-x-6 text-sm sm:text-base items-center font-medium ${isScrolled ? "text-black" : "text-black"
                }`}
            >
              <Link href="/Auctions" className="hover:text-purple-600">
                Auctions
              </Link>
              <Link href="/Buy-now" className="hover:text-purple-600">
                Buy Now
              </Link>
              <Link
                href="https://www.liveauctioneers.com/auctioneer/6177/ny-elizabeth/"
                target="_blank"
                className="hover:text-purple-600"
              >
                Private Sales
              </Link>
              <Link href="/Sell" className="hover:text-purple-600">
                Sell
              </Link>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
              <nav className="absolute top-full left-0 w-full bg-white text-black rounded-lg shadow-lg z-50 md:hidden">
                <div className="flex flex-col items-center text-sm font-medium space-y-4 px-6 py-4">
                  <Link href="/Auctions" className="hover:text-purple-600">
                    Auctions
                  </Link>
                  <Link href="/Buy-now" className="hover:text-purple-600">
                    Buy Now
                  </Link>
                  <Link
                    href="https://www.liveauctioneers.com/auctioneer/6177/ny-elizabeth/"
                    target="_blank"
                    className="hover:text-purple-600"
                  >
                    Private Sales
                  </Link>
                  <Link href="/Sell" className="hover:text-purple-600">
                    Sell
                  </Link>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      setShowLoginModal(true);
                    }}
                    className="w-full rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Login
                  </button>
                  <button
                    className="w-full rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={() => {
                      setMenuOpen(false);
                      setShowSignupModal(true);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </nav>
            )}

            {/* Desktop Login & Signup Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setShowLoginModal(true)}
                className="rounded-full bg-purple-600 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Login
              </button>

              <button
                className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setShowSignupModal(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />
    </>
  );
};

export default Header;
