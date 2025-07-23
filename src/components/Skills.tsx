const skills = {
  "Programming Languages": ["Python", "JavaScript", "Java", "C++", "TypeScript"],
  "Web Technologies": ["React", "Node.js", "Express", "HTML/CSS", "RESTful APIs"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
  "Tools & Frameworks": ["Git", "Docker", "AWS", "Next.js", "Tailwind CSS"],
  "AI/ML": ["Machine Learning", "Deep Learning", "TensorFlow", "Scikit-learn"],
  "Other": ["Problem Solving", "System Design", "Agile", "Team Collaboration"]
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-portfolio-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-portfolio-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I've developed through education and hands-on experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div 
              key={index} 
              className="bg-portfolio-project-card p-6 rounded-lg border border-border/20 hover:bg-portfolio-project-hover transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-portfolio-text-primary mb-4 border-b border-border/20 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}