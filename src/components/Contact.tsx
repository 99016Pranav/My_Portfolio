import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-portfolio-text-secondary max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-portfolio-project-card border-border/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-portfolio-text-primary flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-portfolio-text-secondary leading-relaxed">
                  I'm currently looking for new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll do my best to get back to you!
                </p>
                <Button 
                  size="lg" 
                  className="hero-gradient text-white font-semibold w-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="mailto:pm3073900@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="bg-portfolio-project-card border-border/20 hover:bg-portfolio-project-hover transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-portfolio-text-primary">Email</h3>
                      <a 
                        href="mailto:pm3073900@gmail.com" 
                        className="text-portfolio-text-secondary hover:text-primary transition-colors"
                      >
                        pm3073900@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-portfolio-project-card border-border/20 hover:bg-portfolio-project-hover transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-portfolio-text-primary">Phone</h3>
                      <a 
                        href="tel:+919591812943" 
                        className="text-portfolio-text-secondary hover:text-primary transition-colors"
                      >
                        +91 9591812943
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-portfolio-project-card border-border/20 hover:bg-portfolio-project-hover transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-portfolio-text-primary">Location</h3>
                      <p className="text-portfolio-text-secondary">Bangalore, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}