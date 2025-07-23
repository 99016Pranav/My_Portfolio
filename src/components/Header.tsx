import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-portfolio-nav-bg/80 glass-effect border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            Pranav R. Magadum
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-portfolio-text-secondary hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-portfolio-text-secondary hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-portfolio-text-secondary hover:text-primary transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-portfolio-text-secondary hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-portfolio-text-secondary hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-portfolio-text-secondary hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-portfolio-text-secondary hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}