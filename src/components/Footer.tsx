import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side */}
          <div className="text-center md:text-left">
            <div className="text-sm text-muted-foreground mb-2">
              Last updated: September 2025
            </div>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-2">
            <Button
              variant="minimal"
              size="icon"
              className="hover-lift"
              asChild
            >
              <a
                href="https://github.com/burcinismail8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="minimal"
              size="icon"
              className="hover-lift"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/burchin-ismail-8289b7195/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="minimal"
              size="icon"
              className="hover-lift"
              asChild
            >
              <a href="mailto:burcinismail8@gmail.com">
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <div className="text-xs text-muted-foreground">
            © 2025 Burchin Ismail. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
