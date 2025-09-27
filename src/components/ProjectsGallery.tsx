import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.png";

const ProjectsGallery = () => {
  const projects = [
    {
      title: "ThreeJS T-Shirt Customizer",
      image: project1,
      demo: "https://nextjs-threejs-tshirt-6pucxzsav-burcinismail8.vercel.app/",
      code: "https://github.com/burcinismail8/nextjs-threejs-tshirt-app?tab=readme-ov-file",
      alt: "3D T-shirt customizer with color and texture options",
    },
    {
      title: "E-Commerce Dashboard",
      image: project2,
      demo: "https://example.com/demo2",
      code: "https://github.com/yourusername/project2",
      alt: "E-commerce dashboard with product management and analytics",
    },
    {
      title: "Travel App Landing Page",
      image: project3,
      demo: "https://nextjs-travel-app-langing-page.vercel.app/",
      code: "https://github.com/burcinismail8/nextjs-travel-app-langing-page",
      alt: "Landing page for a travel app with incredible design",
    },
  ];

  return (
    <section className="py-14 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projects Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
            A visual showcase of selected projects — focused, fast, and
            functional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-slide-up project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg bg-card border border-border shadow-md hover-lift">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>

                  <div className="flex gap-3 justify-center">
                    <Button
                      variant="default"
                      size="sm"
                      className="hover-scale"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      className="hover-scale"
                      asChild
                    >
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Want to explore more of my work?
          </p>
          <Button
            variant="professional"
            className="hover-glow hover-bounce"
            asChild
          >
            <a
              href="https://github.com/burcinismail8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
