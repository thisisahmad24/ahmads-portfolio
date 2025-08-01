import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* Matrix-style animated background */}
        <div className="absolute inset-0 matrix-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-matrix-rain"></div>
        </div>
        
        {/* Main loader content */}
        <div className="relative z-10">
          {/* Animated logo/name */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary text-glow mb-8 animate-glow-pulse">
            AHMAD HASSAN
          </h1>
          
          {/* Progress bar */}
          <div className="w-80 h-2 bg-muted rounded-full overflow-hidden mx-auto mb-4">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Progress percentage */}
          <p className="text-muted-foreground font-mono text-lg">
            Loading... {progress}%
          </p>
          
          {/* Loading animation dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
        
        {/* Terminal-style text */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 font-mono text-xs text-muted-foreground">
          <p className="animate-fade-in">$ Initializing portfolio system...</p>
          <p className="animate-fade-in" style={{ animationDelay: '1s' }}>$ Loading malware defense protocols...</p>
          <p className="animate-fade-in" style={{ animationDelay: '2s' }}>$ Ready to hack the future.</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;