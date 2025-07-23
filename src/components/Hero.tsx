import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
            <img 
              src="https://pranav108.netlify.app/lovable-uploads/5689c22f-ae7c-451b-b22c-2db53c72830c.png" 
              alt="Pranav R. Magadum"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Pranav R. Magadum
          </h1>
          
          <h2 className="text-xl md:text-2xl text-portfolio-text-primary mb-4 font-semibold">
            M.Tech Computer Science Student
          </h2>
          
          <p className="text-lg md:text-xl text-primary mb-6 font-medium">
            Software Developer & AI Enthusiast
          </p>
          
          <p className="text-base md:text-lg text-portfolio-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate about building scalable solutions and exploring cutting-edge technologies in{" "}
            <span className="text-primary font-semibold">AI</span>, {" "}
            <span className="text-primary font-semibold">Web Development</span>, and{" "}
            <span className="text-primary font-semibold">Machine Learning</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <Button 
            size="lg" 
            className="hero-gradient text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a 
              href="https://drive.google.com/uc?export=download&id=1utsVyJpqIYkt2ejK0uFm7wiHePchkg3P"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
          
          <div className="flex items-center gap-6 text-portfolio-text-secondary">
            <a 
              href="mailto:pm3073900@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">pm3073900@gmail.com</span>
            </a>
            <a 
              href="tel:+919591812943"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 9591812943</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Bangalore, India</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-portfolio-project-card hover:bg-portfolio-project-hover transition-colors border border-border/20"
          >
            <Linkedin className="w-6 h-6 text-primary" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-portfolio-project-card hover:bg-portfolio-project-hover transition-colors border border-border/20"
          >
            <Github className="w-6 h-6 text-portfolio-text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}