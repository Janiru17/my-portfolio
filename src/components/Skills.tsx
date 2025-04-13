const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 70 },
      { name: 'REST API', level: 85 },
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Testing', level: 75 },
      { name: 'CI/CD', level: 70 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background-secondary">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-text-secondary">{skill.name}</span>
                      <span className="text-sm text-text-tertiary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
