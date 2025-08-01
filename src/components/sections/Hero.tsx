import { useState, useEffect } from "react";
import { Terminal, Download, ExternalLink, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "AI / Full-Stack / SQA / Graphic Design Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadCV = () => {
    // Create a downloadable CV file or link to your CV
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('CV content here...');
    link.download = 'Ahmad_Hassan_CV.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 matrix-bg">
        <div className="absolute top-20 left-10 w-2 h-20 bg-primary/20 animate-matrix-rain" style={{ animationDelay: '0s' }} />
        <div className="absolute top-32 right-20 w-1 h-16 bg-accent/30 animate-matrix-rain" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/4 w-1 h-12 bg-primary/10 animate-matrix-rain" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Terminal-style greeting */}
        <div className="inline-flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg mb-8 font-mono text-sm">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">$</span>
          <span className="text-primary">whoami</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
          AHMAD HASSAN
        </h1>

        {/* Animated subtitle */}
        <div className="h-12 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Bio */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up">
          Final-year Software Engineering student skilled in AI-driven web apps, full-stack development, 
          and UI/UX design. Passionate about building secure, scalable solutions that push the boundaries 
          of modern technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button 
            size="lg" 
            className="malware-gradient text-primary-foreground px-8 py-3 font-semibold hover:scale-105 transition-transform duration-300 animate-glow-pulse"
            onClick={handleDownloadCV}
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 font-semibold hover:scale-105 transition-all duration-300"
            onClick={() => window.scrollTo({ top: document.getElementById('projects')?.offsetTop, behavior: 'smooth' })}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6">
          <a 
            href="https://github.com/ahmadhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          
          <a 
            href="https://linkedin.com/in/ahmadhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;