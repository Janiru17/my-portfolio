import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Janiru17', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/janiru-wickramage/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#hero" className="text-2xl font-bold gradient-text">
              JANIRU WICKRAMAGE
            </Link>
            <p className="mt-2 text-slate-400 max-w-md">
              Software Engineer Intern at Swivel Tech, crafting innovative web solutions with a focus on performance and
              user experience.
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-slate-800 hover:bg-primary p-3 rounded-full transition-all duration-300 hover:scale-105"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© {currentYear} Janiru Wickramage. All rights reserved.</p>

          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-white transition-all duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-all duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-all duration-300">
                Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}