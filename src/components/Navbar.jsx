"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Program", href: "#program" },
    { name: "About us", href: "#about" },
    { name: "Campus", href: "#campus" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact us", href: "#contact", isButton: true },
  ];

  return (
    <>
      <nav
        className={`w-full ${
          sticky ? "bg-[#212ea0]" : "bg-transparent"
        } text-white px-6 md:px-24 lg:px-32 md:py-3 py-4 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Edusity" width={180} height={60} />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-x-12 items-center font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className={`${
                  link.isButton
                    ? "bg-white text-[#0c0c3f] px-6 py-3 rounded-full text-sm"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle  */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar (Right Side) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[240px] bg-[#212ea0] z-40 shadow-lg transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="p-6 pt-24 space-y-6 text-white font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className={`block ${
                  link.isButton
                    ? "bg-white text-[#0c0c3f] px-4 py-2 rounded-full text-center"
                    : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
