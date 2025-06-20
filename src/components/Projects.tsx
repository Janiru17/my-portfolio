"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

// Define Project interface
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "TENETS Web Application",
    description:
      "A mentorship and leadership development platform built with Next.js 15.3.1, TypeScript, and Tailwind CSS. Features a responsive 'Coming Soon' landing page with a newsletter signup, countdown timer, and a section detailing the TENETS framework. Optimized for SEO, scalability, and a modern UI with animations and a blue/orange color scheme, inspired by tenets.lk.",
    image: "/images/tenets.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SCSS", "Redux", "Webpack"],
    liveUrl: "https://www.tenets.lk",
    codeUrl: "https://github.com/tenets-project/tenets-web",
    featured: true,
  },
  {
    title: "Health Check Web Application",
    description:
      "A web application for team health monitoring, built with Django, SQLite, and Bootstrap. Features user registration, secure login, and vote aggregation with traffic light coding for team leaders. Includes interactive dashboards with Chart.js visualizations and Flatpickr for date selection.",
    image: "/images/health-check.png",
    tags: ["Django", "SQLite", "Bootstrap", "Chart.js", "Flatpickr"],
    liveUrl: "https://health-check-demo.com",
    codeUrl: "https://github.com/user/health-check-web",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing professional projects and skills. Built with Next.js and Tailwind CSS, it features a responsive design, smooth animations, and optimized performance to highlight web development expertise.",
    image: "/images/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://portfolio-demo.com",
    codeUrl: "https://github.com/user/portfolio-website",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`bg-gray-800 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 ${
        project.featured ? "border-2 border-primary/50" : ""
      }`}
    >
      <div className="relative h-48">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse" />
        )}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-100">
          {project.title}
        </h3>
        <p className="text-gray-200 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded transition-all duration-300 hover:scale-110"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <Link
            href={project.liveUrl}
            className="flex items-center text-primary hover:text-primary-dark font-medium transition-all duration-300 ease-in-out hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-1">Live Demo</span>
            <ExternalLink size={16} />
          </Link>
          <Link
            href={project.codeUrl}
            className="flex items-center text-gray-200 hover:text-white font-medium transition-all duration-300 ease-in-out hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-1">Code</span>
            <Github size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
