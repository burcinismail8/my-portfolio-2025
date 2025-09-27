import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Working with him was a developer's dream — clear thinking, fast execution, and total ownership.",
      author: "Senior Frontend Engineer",
      company: "TechStart Inc.",
      avatar: "👨‍💻",
    },
    {
      quote:
        "He took our vague idea and delivered a working MVP in under 3 weeks.",
      author: "Product Manager",
      company: "Growth Co",
      avatar: "👩‍💼",
    },
    {
      quote:
        "Always improving. His interest in LLMs is backed by real experimentation.",
      author: "Developer Mentor",
      company: "CodeCraft Academy",
      avatar: "🧠",
    },
  ];

  return (
    <section className="py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from teammates, managers, and mentors I've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover-lift animate-slide-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <footer className="flex items-center gap-3">
                <span className="text-2xl">{testimonial.avatar}</span>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
