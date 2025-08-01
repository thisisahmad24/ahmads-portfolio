import { ExternalLink, Github, Code, Database, Brain, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Interactive portfolio built using React, Node.js, MongoDB, and TailwindCSS showcasing projects and skills with modern UI/UX design.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      icon: Code,
      gradient: "from-blue-500 to-purple-600",
      status: "Live",
      github: "#",
      demo: "#"
    },
    {
      title: "SeasonSync – Date Planner",
      description: "A web app that helps manage seasonal schedules and events using full-stack development with real-time synchronization.",
      tech: ["MERN Stack", "Socket.io", "Calendar API"],
      icon: Database,
      gradient: "from-green-500 to-teal-600",
      status: "In Development",
      github: "#",
      demo: "#"
    },
    {
      title: "Movie Review Sentiment Analysis",
      description: "Built a deep learning model to classify movie reviews using BiLSTM and sentiment analysis techniques with high accuracy.",
      tech: ["Python", "TensorFlow", "BiLSTM", "NLP"],
      icon: Brain,
      gradient: "from-red-500 to-pink-600",
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      title: "Contact Management System",
      description: "Desktop application built with Java Swing for managing personal and professional contact details with advanced search.",
      tech: ["Java", "Swing", "SQLite", "MVC"],
      icon: Database,
      gradient: "from-orange-500 to-red-600",
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      title: "Book Collection App",
      description: "A cross-platform mobile application for organizing and managing personal book libraries with reading progress tracking.",
      tech: ["React Native", "Firebase", "REST API"],
      icon: Smartphone,
      gradient: "from-purple-500 to-indigo-600",
      status: "Beta",
      github: "#",
      demo: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Development": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Beta": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg mb-6 font-mono text-sm">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">$</span>
            <span className="text-primary">ls -la projects/</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="malware-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${getStatusColor(project.status)} font-medium`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    
                    <Button 
                      size="sm"
                      className="flex-1 malware-gradient hover:scale-105 transition-transform duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <Card className="malware-card max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to see more?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for more projects, contributions, and open-source work.
              </p>
              <Button 
                size="lg"
                className="malware-gradient hover:scale-105 transition-transform duration-300"
                asChild
              >
                <a href="https://github.com/ahmadhassan" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Visit GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;