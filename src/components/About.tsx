import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Lightbulb, Users, Zap, Download, ExternalLink } from "lucide-react";
import ElectricBorder from "@/animations/ElectricBorder";
import SpotlightCard from '@/animations/SpotlightCard';

export const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Electronics & Programming",
      description: "Experienced in embedded systems, VLSI design, and software development"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about finding intelligent solutions to complex engineering challenges"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Research Collaboration",
      description: "Working on real-world AI research projects at NIT Puducherry"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hardware-Software Integration",
      description: "Committed to building efficient systems bridging hardware and software"
    }
  ];

  const skills = [
    "Python", "C++", "C", "JavaScript", "LabVIEW", "Verilog HDL",
    "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain", 
    "Streamlit", "Bootstrap", "HTML5", "CSS3", "Jupyter Notebook", 
    "GitHub", "Ansys Icepak", "Digital Logic Design", "Embedded Systems",
    "VLSI Design", "Machine Learning", "Deep Learning", "NLP"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30 dark:bg-muted/20 relative">
      {/* Elegant Section Divider */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/60"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/60"></div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with experience in creating robust web applications 
            and solving complex technical challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold dark:text-white">My Journey</h3>
            <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
              I'm currently pursuing my Bachelor of Technology in Electronics and Computer Engineering at SRM Institute 
              of Science and Technology (SRMIST) with a CGPA of 9.72. My journey 
              in tech began with a strong foundation in electronics and programming fundamentals and has evolved 
              through various AI/ML projects and hands-on experience with embedded systems and cutting-edge technologies.
            </p>
            <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying updated with industry trends. Through 
              platforms like IBM, NPTEL, Scaler, and Udemy, I've gained certifications 
              in software development, machine learning, digital logic design, and hardware description languages. I'm passionate about 
              building intelligent solutions that bridge the gap between hardware and software, contributing to the ECE and AI/ML community through innovative projects.
            </p>
            
            {/* Resume Download Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                variant="hero"
                size="lg"
                className="group hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                onClick={() => {
                  // Create a link to download the updated resume
                  const downloadLink = document.createElement('a');
                  downloadLink.href = "/Balaji.S resume.pdf";
                  downloadLink.download = "Balaji_S_Resume.pdf";
                  document.body.appendChild(downloadLink);
                  downloadLink.click();
                  document.body.removeChild(downloadLink);
                }}
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group glass hover:bg-primary/5 hover:text-primary border-primary/20 hover:border-primary/50 transition-all duration-300"
                onClick={() => {
                  // Open email client
                  window.open("mailto:bs8315@srmist.edu.in", "_blank");
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <SpotlightCard
                key={index}
                backgroundColor="hsl(var(--card))"
                spotlightColor="rgba(16, 185, 129, 0.35)"
                className="border border-border/20 dark:border-border/30"
              >
                <div className="text-primary dark:text-primary mb-3">{highlight.icon}</div>
                <h4 className="font-semibold dark:text-white mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">{highlight.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <Card className="p-8 glass dark:bg-card/50 dark:border-border/20">
          <h3 className="text-2xl font-semibold dark:text-white mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground dark:bg-secondary/80 dark:text-secondary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground transition-all cursor-pointer"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};