'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment processing, user authentication, and product management.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    codeUrl: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A drag-and-drop task management application with team collaboration features.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'DnD'],
    liveUrl: '#',
    codeUrl: '#',
    featured: false,
  },
  {
    title: 'Real Estate Marketplace',
    description: 'A property listing platform with search, filtering, and user account management.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Cloudinary'],
    liveUrl: '#',
    codeUrl: '#',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
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

function ProjectCard({ project }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 ${project.featured ? 'border-2 border-primary/30' : ''}`}>
      <div className="relative h-48">
        {!isLoaded && <div className="absolute inset-0 bg-background-secondary animate-pulse" />}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
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
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-text-secondary mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded transition-all duration-300 hover:scale-110"
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
            className="flex items-center text-text-secondary hover:text-text-primary font-medium transition-all duration-300 ease-in-out hover:scale-105"
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