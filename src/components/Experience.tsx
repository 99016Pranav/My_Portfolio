import { Briefcase, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    company: "EISystems Technologies",
    role: "Python Developer",
    description: "Contributed to Python development projects with a focus on scalable solutions and debugging.",
    type: "Internship"
  },
  {
    company: "INFOTRIXS",
    role: "Web Developer",
    description: "Worked on both frontend and backend development. Built user interfaces and server-side components.",
    type: "Internship"
  },
  {
    company: "Varcoons Technology",
    role: "Software Developer",
    description: "Participated in various software projects and applied theoretical knowledge to real-world tasks.",
    type: "Internship"
  },
  {
    company: "NxtWave Disruptive Technologies",
    role: "SDI",
    description: "Worked on frontend and backend technologies, enhancing practical skills through real-time collaboration.",
    type: "Internship"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Experience
          </h2>
          <p className="text-lg md:text-xl text-portfolio-text-secondary max-w-2xl mx-auto">
            My journey through various technology companies, gaining hands-on experience in different domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-portfolio-project-card border-border/20 hover:bg-portfolio-project-hover transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-xl font-semibold text-portfolio-text-primary group-hover:text-primary transition-colors">
                            {exp.company}
                          </CardTitle>
                          <p className="text-primary font-medium flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            {exp.role}
                          </p>
                        </div>
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-portfolio-text-secondary leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                4+ Internship Experience
              </h3>
              <p className="text-portfolio-text-secondary">
                Diverse experience across multiple technology domains
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}