"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass bg-background/70 py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gradient">
          JINYH
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="px-5 py-2.5 bg-primary text-white rounded-full hover:scale-105 transition-all text-sm font-bold shadow-lg shadow-primary/20"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-100 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-500 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors transform active:scale-95"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="px-8 py-4 bg-primary text-white rounded-full mt-4 text-xl"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
