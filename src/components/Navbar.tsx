'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-400 ease-in-out ${
        scrolled
          ? 'bg-gray-800 dark:bg-gray-950/95 backdrop-blur-md shadow-md'
          : 'bg-gray-900/20 dark:bg-gray-950/30 backdrop-blur-sm'
      }`}
    >
      <div className="container flex justify-between items-center py-4">
        <Link
          href="#hero"
          className="text-xl font-bold gradient-text transition-all duration-300 hover:scale-105"
          onClick={(e) => handleLinkClick(e, '#hero')}
        >
          JANIRU WICKRAMAGE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-200 hover:text-primary transition-all duration-300 ease-in-out hover:scale-105"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-gray-200 transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-gray-800 dark:bg-gray-950 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64' : 'max-h-0'
        } overflow-hidden`}
      >
        <div className="container py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-gray-200 hover:text-primary transition-all duration-300 ease-in-out hover:scale-105"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    );
}