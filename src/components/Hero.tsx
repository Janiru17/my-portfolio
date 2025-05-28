"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Enhanced particle animation with responsive particle count
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Responsive canvas sizing
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Adjust particle count based on screen width
    const particleCount =
      window.innerWidth < 640 ? 30 : window.innerWidth < 1024 ? 60 : 100;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];
    const colorsLight = ["#3B82F6", "#10B981", "#6366F1"]; // Blue, green, indigo for light mode
    const colorsDark = ["#06B6D4", "#8B5CF6", "#EC4899"]; // Cyan, purple, pink for dark mode

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (window.innerWidth < 640 ? 2 : 3) + 1,
        speedX: Math.random() * 0.6 - 0.3,
        speedY: Math.random() * 0.6 - 0.3,
        color: document.documentElement.classList.contains("dark")
          ? colorsDark[Math.floor(Math.random() * colorsDark.length)]
          : colorsLight[Math.floor(Math.random() * colorsLight.length)],
      });
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      particles.forEach((particle, i) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = window.innerWidth < 640 ? 3 : 6;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw lines to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const distance = Math.hypot(
            particle.x - other.x,
            particle.y - other.y
          );
          const maxDistance = window.innerWidth < 640 ? 60 : 80;
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(${particle.color.slice(
              1,
              3
            )}, ${particle.color.slice(3, 5)}, ${particle.color.slice(5, 7)}, ${
              1 - distance / maxDistance
            })`;
            ctx.lineWidth = window.innerWidth < 640 ? 0.3 : 0.5;
            ctx.stroke();
          }
        }

        // Subtle color shift
        const colorIndex = Math.floor(
          (time + i * 0.1) %
            (document.documentElement.classList.contains("dark")
              ? colorsDark.length
              : colorsLight.length)
        );
        particle.color = document.documentElement.classList.contains("dark")
          ? colorsDark[colorIndex]
          : colorsLight[colorIndex];
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
      // Reinitialize particles on resize to adjust count
      particles.length = 0;
      const newParticleCount =
        window.innerWidth < 640 ? 30 : window.innerWidth < 1024 ? 60 : 100;
      for (let i = 0; i < newParticleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (window.innerWidth < 640 ? 2 : 3) + 1,
          speedX: Math.random() * 0.6 - 0.3,
          speedY: Math.random() * 0.6 - 0.3,
          color: document.documentElement.classList.contains("dark")
            ? colorsDark[Math.floor(Math.random() * colorsDark.length)]
            : colorsLight[Math.floor(Math.random() * colorsLight.length)],
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center pt-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.3 }}
      />
      <style jsx>{`
        html {
          transition: background-color 0.5s ease, color 0.5s ease;
        }
        .transition-colors {
          transition: all 0.5s ease;
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-4 sm:gap-6 md:gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            variants={itemVariants}
          >
            <motion.p
              className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base mb-1 sm:mb-2 transition-colors duration-500"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent transition-colors duration-500 leading-tight"
              variants={itemVariants}
            >
              Janiru Wickramage
            </motion.h1>
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200 transition-colors duration-500"
              variants={itemVariants}
            >
              Software Engineer Intern
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-sm sm:max-w-md md:max-w-lg mx-auto md:mx-0 text-sm sm:text-base leading-relaxed transition-colors duration-500"
              variants={itemVariants}
            >
              I'm a Software Engineering undergraduate at the University of
              Westminster, interning at Swivel Tech. I create fast, accessible,
              and responsive web applications with a passion for innovation.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center md:justify-start"
              variants={itemVariants}
            >
              <Link
                href="#projects"
                className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium transition-all duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base"
                onClick={(e) => handleScroll(e, "#projects")}
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 dark:hover:bg-blue-400/10 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium transition-all duration-300 ease-in-out hover:scale-105 text-sm sm:text-base"
                onClick={(e) => handleScroll(e, "#contact")}
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-3 sm:border-4 border-blue-500/50 dark:border-blue-400/50 shadow-xl transition-colors duration-500">
              <Image
                src="/1711870131686.jpeg"
                alt="Janiru"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Link
            href="#about"
            aria-label="Scroll down"
            onClick={(e) => handleScroll(e, "#about")}
          >
            <ArrowDown
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-500"
              size={20}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
