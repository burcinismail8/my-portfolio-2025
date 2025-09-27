import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Heart } from "lucide-react";

const ProjectsGrid = () => {
  const projects = [
    {
      name: "PromptCraft",
      description: "Built an intelligent LLM prompt optimization tool to help teams craft better AI interactions.",
      stack: ["Next.js", "OpenAI API", "Tailwind", "Vercel"],
      outcome: "500+ prompts optimized daily",
      type: "LLM Project",
      icon: "✨",
      isLLM: true
    },
    {
      name: "E-commerce Analytics Dashboard",
      description: "Built real-time analytics platform for mid-size retailer to track customer behavior and sales metrics.",
      stack: ["React", "D3.js", "Express", "MongoDB"],
      outcome: "Increased conversion insights by 60%",
      type: "Client Work",
      icon: "📊"
    },
    {
      name: "DevJokes API",
      description: "Weekend fun project — RESTful API serving programming jokes with rate limiting and caching.",
      stack: ["Node.js", "Express", "Redis", "Jest"],
      outcome: "10k+ jokes served daily",
      type: "Fun Project",
      icon: "😄",
      isFun: true
    },
    {
      name: "Developer Portfolio CMS",
      description: "Built headless CMS for developers to showcase projects with automatic GitHub integration.",
      stack: ["TypeScript", "Prisma", "PostgreSQL", "GitHub API"],
      outcome: "Used by 200+ developers",
      type: "Open Source",
      icon: "💼"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Other Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of work showcasing different skills and problem-solving approaches
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={project.isLLM ? "badge-primary" : "badge-secondary"}>{project.type}</span>
                      {project.isFun && (
                        <Heart className="w-4 h-4 text-destructive fill-current" />
                      )}
                      {project.isLLM && (
                        <span className="text-primary" title="AI/LLM Project">🧠</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-muted-foreground">Result: </span>
                  <span className="font-medium text-success">{project.outcome}</span>
                </div>
                
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="minimal" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="minimal" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;