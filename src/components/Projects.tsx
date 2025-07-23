import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "MERN Stack Ecommerce App",
    description: "An end-to-end e-commerce platform built using the MERN stack. It includes features like product listing, cart, checkout, user authentication, and admin dashboard.",
    github: "https://github.com/99016Pranav/MERN-Stack-Ecommerce-App.git",
    demo: "https://fusion-ecommerce-app.vercel.app/",
    tech: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 2,
    title: "React To-Do App",
    description: "A simple and responsive to-do application made with React. It allows users to add, delete, and mark tasks as completed.",
    github: "https://github.com/99016Pranav/react-to-do-app.git",
    demo: "https://react-cool-todo-app.netlify.app/",
    tech: ["React", "JavaScript", "CSS", "Local Storage"]
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "A full-featured task management app built using React and Node.js. It enables users to manage daily tasks with deadlines, edit options, and task filters.",
    github: "https://github.com/99016Pranav/Task-Manager-App.git",
    demo: "https://task-manager-ovck.vercel.app/",
    tech: ["React", "Node.js", "Express", "PostgreSQL"]
  },
  {
    id: 4,
    title: "Blog Website",
    description: "A clean and minimal blog website using HTML, CSS, and JS where users can read various blog posts. Optimized for readability and design aesthetics.",
    github: "https://github.com/99016Pranav/blog_website.git",
    demo: "https://zesty-churros-cc1011.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-portfolio-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-portfolio-text-secondary max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills in web development, 
            full-stack applications, and modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group bg-portfolio-project-card hover:bg-portfolio-project-hover border-border/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-portfolio-text-primary group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-portfolio-text-secondary leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn border-border/40 hover:border-primary/50 hover:bg-primary/5"
                    asChild
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4 group-hover/btn:text-primary transition-colors" />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    className="flex-1 hero-gradient text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-portfolio-text-secondary mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary/50 hover:bg-primary/5 font-medium"
            asChild
          >
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}