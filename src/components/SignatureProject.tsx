import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const SignatureProject = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Signature Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A deep dive into my most impactful work
          </p>
        </div>
        
        <Card className="p-8 lg:p-12 hover-lift animate-slide-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Details */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-bold text-foreground">TaskFlow Pro</h3>
                <span className="badge-primary">Featured</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A comprehensive project management platform built for distributed teams. 
                Solved real-time collaboration challenges for 500+ users across 15 companies.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">My Ownership:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full-stack development (Frontend & Backend)</li>
                  <li>• Real-time WebSocket architecture</li>
                  <li>• Database design & optimization</li>
                  <li>• CI/CD pipeline & deployment</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">WebSockets</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">Key Outcomes:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-success">40%</div>
                    <div className="text-sm text-muted-foreground">Faster Load Times</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">85%</div>
                    <div className="text-sm text-muted-foreground">User Satisfaction</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-warning">500+</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" className="group">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
                <Button variant="outline">
                  <Github className="w-4 h-4" />
                  View Code
                </Button>
                <Button variant="minimal">
                  <Play className="w-4 h-4" />
                  Watch Walkthrough
                </Button>
              </div>
            </div>
            
            {/* Project Visual */}
            <div className="relative">
              <div className="bg-gradient-hero rounded-xl p-8 shadow-elegant">
                <div className="bg-card rounded-lg p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                    <div className="h-8 bg-primary/20 rounded"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-muted rounded"></div>
                      <div className="h-12 bg-muted rounded"></div>
                      <div className="h-12 bg-muted rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* System Architecture Diagram */}
                <div className="text-center text-sm text-primary-foreground">
                  <div className="mb-2 font-medium">Real-time Architecture</div>
                  <div className="flex justify-center items-center gap-2 text-xs">
                    <span className="bg-primary-foreground/20 rounded px-2 py-1">Frontend</span>
                    <span>↔</span>
                    <span className="bg-primary-foreground/20 rounded px-2 py-1">WebSocket</span>
                    <span>↔</span>
                    <span className="bg-primary-foreground/20 rounded px-2 py-1">Backend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SignatureProject;