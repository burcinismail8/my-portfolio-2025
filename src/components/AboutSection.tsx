const AboutSection = () => {
  return (
    <section className="py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="text-muted-foreground leading-relaxed space-y-4 animate-slide-up">
              <p>
                I've been a JavaScript developer since 2021, focused on building
                real-world web apps that make people's lives easier. Whether
                it's getting the UX right or scaling backend systems, I care
                deeply about both quality and clarity.
              </p>
              <p>
                Lately, I've been exploring how LLMs and autonomous agents can
                be used to create real developer tools, not just demos. Outside
                work, I enjoy running in Berlin parks and reading sci-fi.
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div
            className="space-y-4 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-sm text-muted-foreground space-y-2">
              <div>
                <strong>Based in:</strong> Plovdiv, Bulgaria
              </div>
              <div>
                <strong>Since:</strong> Nov 2021
              </div>
              <div>
                <strong>Contact Email:</strong> burcinismail8@gmail.com
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <a
                href="https://github.com/burcinismail8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-muted rounded text-xs hover:bg-muted-hover transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/burchin-ismail-8289b7195/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-muted rounded text-xs hover:bg-muted-hover transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
