"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import Logo from "../Logo";
import { usePathname } from "next/navigation";

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
const pathName = usePathname()
const isActive = (path)=>pathName === path
  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 bg-white/10  backdrop-blur-md shadow-md"
          : "absolute top-0 bg-transparent"
      }`}
    >
      {/* Inner container */}
      <nav
        className={`max-w-7xl mx-auto px-6 py-0 flex items-center justify-between transition-all duration-300 ${
          isSticky ? "rounded-none" : "rounded-full"
        }`}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link href="/"  className={`${isActive("/") ? "text-orange-300 font-bold" : "hover:text-secondary"} transition`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about"       className={`${isActive("/about") ? "text-orange-300 font-bold" : "hover:text-secondary"} transition`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/menu"  className={`${isActive("/menu") ? "text-orange-300 font-bold" : "hover:text-secondary"} transition`}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="/reservation"   className={`${isActive("/reservation") ? "text-orange-300 font-bold" : "hover:text-secondary"} transition`}>
              Reservation
            </Link>
          </li>
          <li>
            <Link href="/cart"  className={`${isActive("/cart") ? "text-orange-300 font-bold" : "hover:text-secondary"} transition`}>
              <ShoppingCart></ShoppingCart>
            </Link>
          </li>
          <li>
            <Link href="/login"   className={`${isActive("/login") ? "text-orange-300 font-bold" : "hover:text-secondary"} transition`}>
              Login
            </Link>
          </li>
          <li>
           
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
        <div className="md:hidden bg-black/30  backdrop-blur-md  text-white px-6 py-6 space-y-4 shadow-lg">
          <Link href="/" onClick={() => setIsOpen(false)} className="block">
            Home
          </Link>
          <Link href="/menu" onClick={() => setIsOpen(false)} className="block">
            Menu
          </Link>
          <Link href="/reservation" onClick={() => setIsOpen(false)} className="block">
            Reservation
          </Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="block">
            Login
          </Link>
        
        </div>
      )}
    </header>
  );
};

export default Navbar;
