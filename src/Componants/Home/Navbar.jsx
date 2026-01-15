"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../Logo";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero")?.offsetHeight || 0;
      setIsSticky(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`max-w-screen z-50 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 bg-black/80 shadow-md"
          : "absolute top-0 bg-transparent"
      }`}
    >
      {/* Inner container */}
      <nav
        className={`max-w-7xl mx-auto px-6 py-1 flex items-center justify-between transition-all duration-300 ${
          isSticky ? "rounded-none" : "rounded-full"
        }`}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link href="/" className="hover:text-secondary transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-secondary transition">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-secondary transition">
              Login
            </Link>
          </li>
          <li>
            <Link href="/add-item" className="btn-primary ">
              Add Item
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary text-white px-6 py-6 space-y-4 shadow-lg">
          <Link href="/" onClick={() => setIsOpen(false)} className="block">
            Home
          </Link>
          <Link href="/menu" onClick={() => setIsOpen(false)} className="block">
            Menu
          </Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="block">
            Login
          </Link>
          <Link
            href="/add-item"
            onClick={() => setIsOpen(false)}
            className="btn-primary "
          >
            Add Item
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
