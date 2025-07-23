export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-portfolio-text-secondary leading-relaxed">
            A dedicated Computer Science student with a passion for technology and innovation. 
            Currently pursuing M.Tech while gaining practical experience through various internships and projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-portfolio-project-card p-6 rounded-lg border border-border/20">
              <h3 className="text-xl font-semibold text-portfolio-text-primary mb-4">
                Current Focus
              </h3>
              <ul className="space-y-2 text-portfolio-text-secondary">
                <li>• M.Tech in Computer Science at RV College of Engineering</li>
                <li>• Full-stack web development with modern frameworks</li>
                <li>• AI and Machine Learning applications</li>
                <li>• Building scalable and user-friendly solutions</li>
              </ul>
            </div>
            
            <div className="bg-portfolio-project-card p-6 rounded-lg border border-border/20">
              <h3 className="text-xl font-semibold text-portfolio-text-primary mb-4">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AI/ML", "Web Development", "Software Architecture", "Open Source", "Problem Solving"].map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Ready to Collaborate
              </h3>
              <p className="text-portfolio-text-secondary leading-relaxed">
                I'm always excited to work on challenging projects and contribute to innovative solutions. 
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}