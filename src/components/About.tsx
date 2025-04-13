// @/components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-background-primary/50 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 border-b border-primary/20 pb-3">My Background</h3>
            <p className="text-text-secondary mb-5 leading-relaxed">
              I'm <span className="font-semibold text-primary">Janiru Wickramage</span>, a Software Engineering undergraduate at the University of Westminster and a Software
              Engineer Intern at Swivel Tech (July 2024 - Present). I specialize in building modern web applications using
              JavaScript, TypeScript, React, Next.js, and Node.js, with a focus on accessibility and performance.
            </p>
            <p className="text-text-secondary mb-5 leading-relaxed">
              My passion for technology drives me to create innovative solutions. At Swivel Tech, I contribute to
              full-stack development projects, while my involvement in university clubs like the Leo Club and Rotaract
              Club at IIT has honed my leadership and communication skills.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I'm committed to lifelong learning, holding certifications in React.js and Python, and I stay updated with
              industry trends to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Experience', value: '1+ Year', icon: '🚀' },
              { label: 'Projects', value: '10+', icon: '💻' },
              { label: 'Certifications', value: '2', icon: '🏆' },
              { label: 'Location', value: 'Colombo, SL', icon: '📍' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-primary/10"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <h4 className="text-lg font-semibold text-text-tertiary">{item.label}</h4>
                  <p className="text-2xl font-bold mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}