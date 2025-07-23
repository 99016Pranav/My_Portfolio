import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    institution: "RV College of Engineering, Bangalore",
    degree: "M.Tech in Computer Science",
    period: "Sep 2023 - Aug 2025",
    grade: "CGPA: 8.3",
    status: "Currently Pursuing"
  },
  {
    institution: "MVJ College of Engineering, Bangalore",
    degree: "BE in Computer Science",
    period: "Sep 2019 - Aug 2023",
    grade: "CGPA: 7.5",
    status: "Completed"
  },
  {
    institution: "Aryabhatta PU Science College, Dharwad",
    degree: "Class 12",
    period: "May 2017 - Apr 2019",
    grade: "Percentage: 87%",
    status: "Completed"
  },
  {
    institution: "Sri Sai Marathi High Primary School",
    degree: "Class 10",
    period: "Jun 2011 - Apr 2017",
    grade: "Percentage: 80%",
    status: "Completed"
  }
]

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-portfolio-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-portfolio-project-card border-border/20 hover:bg-portfolio-project-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-portfolio-text-primary">
                        {edu.institution}
                      </CardTitle>
                      <p className="text-primary font-medium">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-portfolio-text-secondary">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="font-medium">{edu.grade}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  edu.status === "Currently Pursuing" 
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                }`}>
                  {edu.status}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}