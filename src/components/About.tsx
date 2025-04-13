export default function About() {
    return (
      <section id="about" className="section-padding bg-white dark:bg-slate-800">
        <div className="container">
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Background</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                I'm a passionate full-stack developer with 5+ years of experience creating modern web applications. I specialize in JavaScript, TypeScript, React, and Node.js.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                After graduating with a Computer Science degree, I've worked with startups and established companies to build accessible, responsive, and performant web applications.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                I believe in continuous learning and staying up-to-date with the latest technologies and best practices in web development.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Experience', value: '1+ Years' },
                { label: 'Projects', value: '30+' },
                { label: 'Clients', value: '15+' },
                { label: 'Location', value: 'Colombo , Sri Lanka' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-slate-500 dark:text-slate-400">{item.label}</h4>
                  <p className="text-2xl font-bold mt-2 gradient-text">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }