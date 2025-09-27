import HeroSection from "@/components/HeroSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TechStack />
      <ProjectsGallery />
      {/* <Testimonials /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
