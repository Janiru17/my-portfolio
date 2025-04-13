'use client';

import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
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
    <section id="skills" className="py-20 bg-gray-900 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-800 dark:bg-gray-900 p-6 rounded-xl shadow-md transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-bold mb-6 text-gray-100">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-300">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: isHovered ? `${skill.level}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}