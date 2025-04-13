export default function Education() {
    return (
      <section id="education" className="py-16 bg-background-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
          </h2>
          
          <div className="space-y-8">
            {/* Education Item 1 */}
            <div className="transition-all duration-300 hover:scale-[1.02] bg-background-secondary/50 p-8 rounded-2xl shadow-lg border-l-4 border-primary">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-bold">BSc, Computer Software Engineering</h4>
                  <p className="text-text-secondary mt-1">University of Westminster (Jan 2023 - Nov 2026)</p>
                </div>
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="text-2xl">🎓</span>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="font-medium text-lg text-primary mb-2">Activities:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 ml-5">
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Member, Leo Club of IIT (2022-2023)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Member, Rotaract Club of IIT (2022-2023)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Team Member, IIT Badminton Team
                  </li>
                </ul>
              </div>
  
              <div className="mt-4">
                <p className="font-medium text-lg text-primary mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {['Leadership', 'Strategy', 'Presentations', 'Software Development', 'Information Technology', 
                    'Communication', 'English', 'Object-Oriented Programming (OOP)', 'Java', 'React.js', 'Web Development'].map((skill, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Education Item 2 */}
            <div className="transition-all duration-300 hover:scale-[1.02] bg-background-secondary/50 p-8 rounded-2xl shadow-lg border-l-4 border-secondary">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-bold">Foundation Certificate in Higher Education, Information Technology</h4>
                  <p className="text-text-secondary mt-1">Informatics Institute of Technology (May 2022 - Dec 2022, Distinction)</p>
                </div>
                <div className="bg-secondary/10 p-2 rounded-full">
                  <span className="text-2xl">🎓</span>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="font-medium text-lg text-secondary mb-2">Activities:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 ml-5">
                  <li className="flex items-center">
                    <span className="mr-2 text-secondary">•</span>
                    Member, Leo Club of IIT (2022-2023)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-secondary">•</span>
                    Member, Rotaract Club of IIT (2022-2023)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-secondary">•</span>
                    Team Member, IIT Badminton Team
                  </li>
                </ul>
              </div>
  
              <div className="mt-4">
                <p className="font-medium text-lg text-secondary mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {['Leadership', 'Strategy', 'Presentations', 'Software Development', 'Information Technology', 
                    'Communication', 'English'].map((skill, index) => (
                    <span key={index} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Education Item 3 */}
            <div className="transition-all duration-300 hover:scale-[1.02] bg-background-secondary/50 p-8 rounded-2xl shadow-lg border-l-4 border-primary">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-bold">D.S. Senanayake College</h4>
                  <p className="text-text-secondary mt-1">High School (2010 - Dec 2023)</p>
                </div>
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="text-2xl">🏫</span>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="font-medium text-lg text-primary mb-2">Activities:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 ml-5">
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Team Member, Athletic Team
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Team Member, Badminton Team
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Vice President, Science Society (2022-2023)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Assistant Treasurer, Astronomy Society (2022-2023)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Organizer, Automobile Engineering Society (2022-2023)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Committee Member, Aeronautical Society (2022-2023)
                  </li>
                </ul>
              </div>
  
              <div className="mt-4">
                <p className="font-medium text-lg text-primary mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Communication', 'Leadership', 'Presentations', 'Strategy'].map((skill, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }