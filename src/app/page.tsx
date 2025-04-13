// @/app/page.jsx
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}