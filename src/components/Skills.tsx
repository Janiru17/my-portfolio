"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    title: "Backend & Programming",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "REST API", level: 80 },
    ],
  },
  {
    title: "Soft Skills & Tools",
    skills: [
      { name: "Leadership", level: 85 },
      { name: "Communication", level: 90 },
      { name: "Presentations", level: 80 },
      { name: "Git", level: 80 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
      { name: "Testing", level: 70 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  category,
  isInView,
  index,
}: {
  category: SkillCategory;
  isInView: boolean;
  index: number;
}) {
  return (
    <motion.div
      className="bg-gray-800/80 dark:bg-gray-900/80 p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:border-blue-500/50"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white tracking-tight">
        {category.title}
      </h3>
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-200 text-sm md:text-base">
                {skill.name}
              </span>
              <span className="text-sm text-blue-400 font-medium">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-700/50 dark:bg-gray-800/50 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full"
                initial={{ width: "0%" }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: index * 0.1 + i * 0.1,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
