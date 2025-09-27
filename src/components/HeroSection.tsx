import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-subtle" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="badge-primary">Since 2021</span>
            <span className="badge-secondary">CI/CD Ready</span>
            <span className="badge-primary">TypeScript</span>
            <span className="badge-success">LLM Curious</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Burchin Ismail
            <span className="block text-3xl lg:text-4xl font-medium text-muted-foreground mt-2">
              Full-Stack JavaScript Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Building clean, fast, and scalable web apps with React, Next.js, and
            Node.js.
          </p>

          {/* Quick Facts */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              Based in Plovdiv, Bulgaria (EU Timezone)
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              3+ years experience
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Exploring LLMs & intelligent agents
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a target="_blank" href="https://github.com/burcinismail8">
              <Button variant="hero" size="lg" className="group">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button variant="professional" size="lg">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a href="https://github.com/burcinismail8" target="_blank">
              <Button variant="minimal" size="icon" className="hover-lift">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/burchin-ismail-8289b7195/"
              target="_blank"
            >
              <Button variant="minimal" size="icon" className="hover-lift">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href="mailto:burcinismail8@gmail.com">
              <Button variant="minimal" size="icon" className="hover-lift">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
