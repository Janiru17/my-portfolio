'use client';

import { useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 75 },
    ],
  },
  {
    title: 'Backend & Programming',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 70 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'REST API', level: 80 },
    ],
  },
  {
    title: 'Soft Skills & Tools',
    icon: '🛠️',
    skills: [
      { name: 'Leadership', level: 85 },
      { name: 'Communication', level: 90 },
      { name: 'Presentations', level: 80 },
      { name: 'Git', level: 80 },
      { name: 'Docker', level: 65 },
      { name: 'AWS', level: 60 },
      { name: 'Testing', level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-card p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-primary/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-6">
        <span className="text-3xl mr-3">{category.icon}</span>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {category.title}
        </h3>
      </div>
      
      <div className="space-y-5">
        {category.skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-text-primary">{skill.name}</span>
              <span className="text-sm text-text-tertiary font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
              <div
                className={`bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-700 ease-out ${isHovered ? 'w-0' : ''}`}
                style={{ 
                  width: isHovered ? '0%' : `${skill.level}%`,
                  transitionDelay: isHovered ? '0s' : `${i * 0.1}s`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}