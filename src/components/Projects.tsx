import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment processing, user authentication, and product management.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A drag-and-drop task management application with team collaboration features.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'DnD'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Real Estate Marketplace',
    description: 'A property listing platform with search, filtering, and user account management.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Cloudinary'],
    liveUrl: '#',
    codeUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Link 
                    href={project.liveUrl} 
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1">Live Demo</span>
                    <ExternalLink size={16} />
                  </Link>
                  <Link 
                    href={project.codeUrl} 
                    className="flex items-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1">Code</span>
                    <Github size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
