import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-text-secondary">
              Full Stack Developer
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto md:mx-0">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="#projects" 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work
              </Link>
              <Link 
                href="#contact" 
                className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image 
                src="/api/placeholder/400/400"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="text-primary" size={36} />
          </Link>
        </div>
      </div>
    </section>
  );
}