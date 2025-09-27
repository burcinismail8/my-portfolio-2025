import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Code, Terminal, Coffee } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleOpenConsole = () => {
    console.log("🎉 Easter egg found! Even the best devs hit 404s sometimes.");
    console.log("💡 Pro tip: This portfolio is built with React + TypeScript");
    console.log("🔗 Check out the source: https://github.com/burcinismail8");
    setShowEasterEgg(true);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Terminal-style 404 */}
        <div className="bg-card border border-border rounded-lg p-8 mb-8 font-mono">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <Terminal className="w-4 h-4" />
            <span className="text-sm">burchin@portfolio:~$</span>
          </div>

          <div className="text-left space-y-2 text-sm">
            <div className="text-destructive">
              <span className="text-muted-foreground">$</span> cd{" "}
              {location.pathname}
            </div>
            <div className="text-destructive">
              bash: cd: {location.pathname}: No such file or directory
            </div>
            <div className="text-muted-foreground">
              <span className="text-foreground">$</span> ls -la
              /available-routes
            </div>
            <div className="text-success">
              drwxr-xr-x 2 burchin staff 64 Dec 9 2024 /
            </div>
            <div className="text-muted-foreground">
              <span className="text-foreground">$</span> echo "Even the best
              devs hit 404s 🤷‍♂️"
            </div>
            <div>Even the best devs hit 404s 🤷‍♂️</div>
          </div>
        </div>

        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page doesn't exist, but my portfolio definitely does!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild variant="hero" size="lg">
            <Link to="/">
              <Home className="w-5 h-5" />
              Back to Portfolio
            </Link>
          </Button>

          <Button variant="outline" size="lg" onClick={handleOpenConsole}>
            <Code className="w-5 h-5" />
            Open Console
          </Button>

          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com/burcinismail8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Terminal className="w-5 h-5" />
              View Source
            </a>
          </Button>
        </div>

        <p className="text-muted-foreground text-sm">
          Lost? Try the search function or just
          <Link to="/" className="text-primary hover:underline">
            head home
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
