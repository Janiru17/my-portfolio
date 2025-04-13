'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gray-900 dark:bg-gray-950">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Janiru Wickramage</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100">
              Software Engineer Intern
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              I’m a Software Engineering undergraduate at the University of Westminster, interning at Swivel Tech. I
              create fast, accessible, and responsive web applications with a passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#projects"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out hover:scale-105"
                onClick={(e) => handleScroll(e, '#projects')}
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="border border-primary text-primary hover:bg-gray-800 dark:hover:bg-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out hover:scale-105"
                onClick={(e) => handleScroll(e, '#contact')}
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 transition-all duration-300 hover:scale-105">
              <Image
                src="/1711870131686.jpeg"
                alt="Janiru"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <Link href="#about" aria-label="Scroll down" onClick={(e) => handleScroll(e, '#about')}>
            <ArrowDown className="text-gray-200" size={36} />
          </Link>
        </div>
      </div>
    </section>
  );
}