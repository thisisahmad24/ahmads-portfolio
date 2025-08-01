import { useState } from "react";
import { Phone, Mail, MessageCircle, Send, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp",
      detail: "+92 311-4512268",
      action: () => window.open("https://wa.me/923114512268", "_blank"),
      gradient: "from-green-500 to-emerald-600",
      description: "Direct chat on WhatsApp"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "thisisahmad07@gmail.com",
      action: () => window.open("mailto:thisisahmad07@gmail.com", "_blank"),
      gradient: "from-red-500 to-pink-600",
      description: "Send me an email"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Lahore, Pakistan",
      action: () => {},
      gradient: "from-blue-500 to-cyan-600",
      description: "102 Ali Block, Iteffaq Town"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppMessage = () => {
    if (!formData.name || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and message.",
        variant: "destructive"
      });
      return;
    }

    const message = `Hi Ahmad! 

My name is ${formData.name}.

${formData.message}

${formData.email ? `You can reach me back at: ${formData.email}` : ''}`;

    const whatsappUrl = `https://wa.me/923114512268?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting to WhatsApp with your message..."
    });
  };

  const handleEmailMessage = () => {
    if (!formData.name || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and message.",
        variant: "destructive"
      });
      return;
    }

    const subject = `Portfolio Contact: Message from ${formData.name}`;
    const body = `Hi Ahmad,

${formData.message}

Best regards,
${formData.name}
${formData.email ? `Email: ${formData.email}` : ''}`;

    const mailtoUrl = `mailto:thisisahmad07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");
    
    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with the message..."
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg mb-6 font-mono text-sm">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">$</span>
            <span className="text-primary">./contact.sh</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="malware-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Contact Methods</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={index}
                      onClick={method.action}
                      className={`p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 ${
                        method.title !== "Location" ? "cursor-pointer hover:scale-105" : ""
                      } group`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${method.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {method.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            {method.detail}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="malware-card bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-green-400">Available for Work</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Open to internship and job opportunities in AI, software engineering, 
                  design, and quality assurance.
                </p>
                <div className="flex items-center space-x-2 mt-3 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>Usually responds within 24 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="malware-card">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill out the form and choose how you'd like to send your message
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    rows={6}
                    className="bg-background/50 resize-none"
                  />
                </div>

                {/* Send Options */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button
                    onClick={handleWhatsAppMessage}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </Button>
                  
                  <Button
                    onClick={handleEmailMessage}
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send via Email
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  Your message will open in your preferred app with the content pre-filled
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;