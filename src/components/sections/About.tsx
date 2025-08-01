import { Code, Brain, Shield, Zap, Award, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = {
    "Programming Languages": ["JavaScript", "Python", "C++", "Java", "SQL"],
    "Web Technologies": ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    "AI/ML Tools": ["Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
    "Design & Media": ["Adobe Premiere Pro", "DaVinci Resolve", "Photoshop", "Canva"],
    "Development Tools": ["Git", "GitHub", "VS Code", "Postman"],
    "Soft Skills": ["Leadership", "Communication", "Team Collaboration"]
  };

  const achievements = [
    {
      icon: Award,
      title: "CGPA 3.22",
      description: "BS Software Engineering - University of Central Punjab",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led multiple university software projects",
      color: "text-blue-400"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "MERN & PERN stack expertise",
      color: "text-green-400"
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Deep learning & sentiment analysis",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg mb-6 font-mono text-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">$</span>
            <span className="text-primary">cat about.txt</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about cybersecurity, AI, and building robust digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="malware-card hover:malware-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>My Journey</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  As a final-year Software Engineering student, I've immersed myself in the world of 
                  cybersecurity and AI-driven development. My passion lies in creating secure, scalable 
                  applications that solve real-world problems.
                </p>
                <p>
                  From building sentiment analysis models to developing full-stack web applications, 
                  I constantly push myself to learn new technologies and methodologies. My experience 
                  spans across multiple domains including machine learning, web development, and 
                  graphic design.
                </p>
                <p>
                  I believe in the power of technology to transform lives, and I'm committed to using 
                  my skills to build a more secure and connected digital future.
                </p>
              </CardContent>
            </Card>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="malware-card hover:scale-105 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Icon className={`w-6 h-6 ${achievement.color} mt-1`} />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <Card className="malware-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-primary" />
                  <span>Technical Arsenal</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-muted/50 hover:bg-primary/20 transition-colors duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="malware-card bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground">Lahore, Pakistan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education:</span>
                    <span className="text-foreground">BS Software Engineering</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-primary font-medium">Available for Opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;