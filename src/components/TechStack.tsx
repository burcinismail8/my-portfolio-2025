import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Settings, Sparkles } from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-5 h-5" />,
      technologies: [
        {
          name: "React",
          tooltip: "Built 15+ production apps with advanced hooks and patterns",
        },
        {
          name: "Next.js",
          tooltip: "SSR/SSG expert - optimized for Core Web Vitals",
        },
        {
          name: "TypeScript",
          tooltip: "Type-safe development across all projects since 2022",
        },
        {
          name: "Tailwind CSS",
          tooltip: "Custom design systems and component libraries",
        },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      technologies: [
        {
          name: "Node.js",
          tooltip: "Scalable APIs handling 10k+ concurrent users",
        },
        {
          name: "Express",
          tooltip: "RESTful APIs with comprehensive middleware",
        },
        {
          name: "PostgreSQL",
          tooltip: "Complex queries and database optimization",
        },
        {
          name: "MongoDB",
          tooltip: "Document-based architectures for rapid prototyping",
        },
      ],
    },
    {
      title: "Tools & Infrastructure",
      icon: <Settings className="w-5 h-5" />,
      technologies: [
        {
          name: "Git",
          tooltip: "Advanced workflows with feature branches and rebasing",
        },
        {
          name: "Docker",
          tooltip: "Containerized applications for consistent deployments",
        },
        {
          name: "Vercel",
          tooltip: "Deployed 20+ apps with automatic previews",
        },
        {
          name: "Playwright",
          tooltip: "End-to-end testing for critical user journeys",
        },
      ],
    },
    {
      title: "Currently Exploring",
      icon: <Sparkles className="w-5 h-5" />,
      technologies: [
        {
          name: "LLMs",
          tooltip:
            "Building intelligent features with OpenAI and Anthropic APIs",
        },
        {
          name: "CrewAI",
          tooltip: "Multi-agent workflows for complex automation tasks",
        },
        {
          name: "LangChain",
          tooltip: "RAG implementations and document processing",
        },
        {
          name: "Supabase",
          tooltip: "Real-time databases with built-in authentication",
        },
      ],
    },
  ];

  return (
    <section className="py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build production-ready applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="group relative">
                    <Badge
                      variant="outline"
                      className="w-full justify-start hover:bg-card-hover cursor-help transition-colors"
                    >
                      {tech.name}
                    </Badge>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-0 mb-2 p-3 bg-foreground text-background text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-64">
                      {tech.tooltip}
                      <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
