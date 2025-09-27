import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Linkedin,
  Github,
  Download,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const faqs = [
    {
      question: "Open to freelance?",
      answer: "Yes — part-time or project-based work welcomed.",
    },
    {
      question: "Team player or solo?",
      answer: "Both. I adapt to project needs and team dynamics.",
    },
    {
      question: "When can you start?",
      answer: "Available with 2 weeks notice for most projects.",
    },
    {
      question: "Preferred project size?",
      answer: "Anything from MVPs to enterprise applications.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project or just want to chat about tech?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="space-y-4 animate-slide-up">
            <Button
              variant="hero"
              size="lg"
              className="w-full justify-start group hover-glow"
              asChild
            >
              <a
                href="mailto:burcinismail8@gmail.com"
                className="inline-flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                burcinismail8@gmail.com
              </a>
            </Button>

            <Button
              variant="professional"
              size="lg"
              className="w-full justify-start"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/burchin-ismail-8289b7195/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full justify-start"
              asChild
            >
              <a
                href="https://github.com/burcinismail8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <Github className="w-5 h-5" />
                GitHub Profile
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full justify-start"
              asChild
            >
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download CV (PDF)
              </a>
            </Button>
          </div>

          {/* Response Time */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-muted-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-success" />
              <span className="font-medium">Response time: 24-48h</span>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <div>📧 Email: Within 24 hours</div>
              <div>💼 LinkedIn: 2-3 business days</div>
              <div>📞 Project calls: 2-3 business days</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Whether you're looking to build an LLM app, an e-commerce
              dashboard, or explore AI-powered frontends — I'd love to chat
              about your project.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover-bounce"
              asChild
            >
              <a
                href="mailto:burcinismail8@gmail.com"
                className="inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
