import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="relative">
        <div className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative group overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300"
    >
      <Sun 
        className={`h-4 w-4 transition-all duration-500 ${
          isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`} 
      />
      <Moon 
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`} 
      />
      
      {/* Malware-style glow effect */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  );
};

export default ThemeToggle;