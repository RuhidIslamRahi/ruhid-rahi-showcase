
import { Github, Linkedin, Download, Mail, Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const HeroSection = () => {
  const handleDownload = () => {
    // Open Google Drive link in a new tab
    window.open('https://drive.google.com/drive/folders/yourfolderid', '_blank');
  };

  const stats = [
    { number: "15+", label: "Projects", color: "text-blue-500" },
    { number: "1.5+", label: "Years Experience", color: "text-blue-500" },
    { number: "BSc", label: "Data Science", color: "text-blue-500" }
  ];

  const skills = [
    { name: "Python", level: 85 },
    { name: "Data Analysis", level: 90 },
    { name: "Machine Learning", level: 75 },
    { name: "SQL", level: 80 },
    { name: "Pandas", level: 90 },
    { name: "NumPy", level: 85 },
    { name: "Matplotlib", level: 75 },
    { name: "Scikit-learn", level: 70 }
  ];
  
  return (
    <section id="home" className="relative min-h-screen bg-background">
      <div className="container px-4 py-20">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <Avatar className="w-48 h-48 border-4 border-primary shadow-2xl">
              <AvatarImage 
                src="/lovable-uploads/eb347c00-c06d-4953-a4ed-17e725cacabc.png" 
                alt="Ruhid Islam Rahi"
                className="object-cover"
              />
              <AvatarFallback className="text-4xl bg-primary text-primary-foreground">RIR</AvatarFallback>
            </Avatar>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I'm <span className="gradient-text">Ruhid Islam Rahi!</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-6">
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-2">
              <span className="text-primary font-semibold">Data Science Student</span> with a strong foundation in React.js, Python and the Data Science stack.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experienced in creating data-driven solutions, user-friendly web applications with clean, efficient code and 
              modern technologies. Passionate about AI, machine learning, and solving real-world problems through data.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-primary" />
              <span>+880-XXXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              <span>ruhidislamrahi@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Github size={20} />
            </Button>
          </div>

          {/* Download Resume Button */}
          <Button 
            onClick={handleDownload}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg font-medium"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programming Languages Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Programming Languages</h2>
          <p className="text-center text-muted-foreground mb-12">
            I am proficient in the following programming languages and always eager to explore new ones: 🚀
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
