export default function Certifications() {
    return (
      <section id="certifications" className="py-16 bg-background-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Certification Item 1 */}
            <div className="transition-all duration-300 hover:scale-[1.05] bg-background-primary/70 p-6 rounded-2xl shadow-lg border-l-4 border-secondary h-full">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                  <span className="text-2xl">📜</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">The Ultimate React Course 2024</h4>
                  <p className="text-text-secondary mt-1">Udemy (Issued Oct 2024)</p>
                  <p className="text-xs text-text-tertiary mt-2">Credential ID: UC-5bbb73fd-63c3-4af1-8715-4ad74bf3ec6b</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['React.js', 'JavaScript', 'Web Development'].map((skill, index) => (
                      <span key={index} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
  
            {/* Certification Item 2 */}
            <div className="transition-all duration-300 hover:scale-[1.05] bg-background-primary/70 p-6 rounded-2xl shadow-lg border-l-4 border-primary h-full">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <span className="text-2xl">📜</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Python Is Easy</h4>
                  <p className="text-text-secondary mt-1">Pirple.com (Issued May 2022)</p>
                  <p className="text-xs text-text-tertiary mt-2">Credential ID: vmcmjok3gl</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Python', 'Programming', 'Data Structures'].map((skill, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
  
            {/* Certification Item 3 (example of a placeholder for future certifications) */}
            <div className="transition-all duration-300 hover:scale-[1.05] bg-background-primary/70 p-6 rounded-2xl shadow-lg border-l-4 border-gray-400 h-full border-dashed flex flex-col justify-center items-center">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="text-lg font-medium text-center">Future Certification</h4>
              <p className="text-text-secondary text-sm text-center mt-2">Always learning and expanding my skills...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }