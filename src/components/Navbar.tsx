"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`pointer-events-auto transition-all duration-300 ${
            scrolled || isOpen 
              ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-full py-3 px-6 md:px-8 max-w-2xl w-full"
              : "bg-transparent border-transparent py-4 px-0 w-full max-w-[1400px]"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative font-bold text-xl tracking-tighter flex items-center">
                JIN<span className="text-secondary">YH</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center gap-1 ${scrolled ? "" : "bg-black/20 backdrop-blur-lg border border-white/5 rounded-full px-2 py-1 ml-auto"}`}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="px-4 py-2 text-sm font-medium hover:text-white text-gray-300 hover:bg-white/10 rounded-full transition-all relative group"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-1/2 transition-all duration-300"></span>
                </Link>
              ))}
              <Link 
                href="#contact" 
                className="ml-2 px-5 py-2 bg-white text-black hover:bg-gray-200 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 flex items-center gap-2"
              >
                <Sparkles className="w-3 h-3" />
                Let's Talk
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className={`md:hidden p-2 rounded-full hover:bg-white/10 transition-colors ${scrolled ? "text-white" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl md:hidden transition-all duration-500 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ y: 20, opacity: 0 }}
              animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform inline-block"
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
