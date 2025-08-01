import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section === "home" ? "hero" : section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const elementId = section === "home" ? "hero" : section;
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © 2024 Ahmad Hassan. Built with React & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
