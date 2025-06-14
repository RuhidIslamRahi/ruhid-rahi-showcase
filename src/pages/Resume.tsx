import React, { useRef } from 'react';
import Layout from '@/components/Layout';
import { Book, Briefcase, Calendar, Download, Mail, MapPin, Phone, ChevronRight, Award, Brain, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { toast } from '@/hooks/use-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      id: 1,
      school: "United International University",
      degree: "Bachelor's Degree, Data Science",
      period: "February 2025 — February 2029",
      description: "Currently pursuing a Bachelor's degree in Data Science, focusing on building strong foundations in data analysis, machine learning, and AI technologies."
    },
    {
      id: 2,
      school: "Govt. Shah Sultan College, Bogura",
      degree: "Higher Secondary Certificate (HSC), Science",
      period: "2021 — 2023",
      description: "Completed Higher Secondary education with a focus on Science subjects, establishing a strong foundation for further studies in Data Science."
    },
    {
      id: 3,
      school: "Bogra Zilla School, Bogra",
      degree: "Science",
      period: "2013 — 2021",
      description: "Completed Secondary education with a strong academic foundation in Science."
    }
  ];

  const experience = [
    {
      id: 1,
      position: "General Member",
      company: "UIU Data Science Club",
      period: "March 2025 — Present",
      description: "Actively participating in UIU Data Science Club activities, collaborating with peers on data science projects and initiatives to enhance practical skills and knowledge in the field."
    }
  ];

  const personalInfo = {
    name: "Ruhid Islam Rahi",
    title: "Python || Data Science @UIU || Learning AI & ML",
    email: "ruhidislamrahi@gmail.com",
    phone: "+880 1779059579",
    birthday: "10 November",
    location: "Dhaka, Bangladesh"
  };

  const skills = [
    { name: "Python", value: 85, category: "Programming" },
    { name: "Data Structures", value: 75, category: "Programming" },
    { name: "OOP", value: 80, category: "Programming" },
    { name: "NumPy", value: 85, category: "Libraries" },
    { name: "Pandas", value: 90, category: "Libraries" },
    { name: "Matplotlib", value: 75, category: "Libraries" },
    { name: "Machine Learning", value: 75, category: "Advanced" },
    { name: "Deep Learning", value: 65, category: "Advanced" },
    { name: "Data Visualization", value: 80, category: "Domain" },
    { name: "Database Systems", value: 75, category: "Domain" }
  ];

  const skillsConfig = {
    Programming: { color: "#8B5CF6" },
    Libraries: { color: "#3B82F6" },
    Advanced: { color: "#10B981" },
    Domain: { color: "#EC4899" }
  };

  const downloadResume = async () => {
    if (!resumeRef.current) return;
    
    toast({
      title: "Generating PDF",
      description: "Please wait while we prepare your resume...",
    });
    
    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      
      pdf.addImage(imgData, 'JPEG', imgX, 0, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Ruhid_Islam_Rahi_Resume.pdf');
      
      toast({
        title: "Resume Downloaded!",
        description: "Your resume has been successfully downloaded.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "There was an error generating your resume PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="container py-8 md:py-16 min-h-screen">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="gradient-text">Resume</span>
            </h1>
            <div className="w-16 h-1 bg-primary mb-4"></div>
            <p className="text-muted-foreground">My education, experience, and skills</p>
          </div>
          <Button 
            variant="default" 
            className="gap-2 mt-4 md:mt-0 bg-primary hover:bg-primary/90"
            onClick={downloadResume}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6" ref={resumeRef}>
          {/* Personal Info Section - Modern Card */}
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-6 bg-gradient-to-br from-primary/10 to-background flex flex-col items-center justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary mb-6">
                    <img 
                      src="/lovable-uploads/eb347c00-c06d-4953-a4ed-17e725cacabc.png" 
                      alt="Ruhid Islam Rahi" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold gradient-text mb-2 text-center">Ruhid Islam Rahi</h2>
                  <p className="text-muted-foreground mb-4 text-center">Python || Data Science @UIU || Learning AI & ML</p>
                  <div className="space-y-3 w-full">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">ruhidislamrahi@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">+880 1779059579</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">10 November</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                      <Brain className="mr-2 text-primary" />
                      Skills Visualization
                    </h3>
                    <div className="h-[300px] w-full">
                      <ChartContainer
                        config={skillsConfig}
                        className="h-full w-full"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={skills}
                            layout="vertical"
                            margin={{ top: 20, right: 30, left: 70, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                            <XAxis 
                              type="number" 
                              domain={[0, 100]}
                              tickCount={6}
                              tick={{ fill: 'currentColor' }}
                            />
                            <YAxis 
                              dataKey="name" 
                              type="category" 
                              scale="band" 
                              width={70}
                              tickLine={false}
                              axisLine={false}
                              tick={{ fill: 'currentColor' }}
                            />
                            <Tooltip 
                              content={({ active, payload, label }) => {
                                if (!active || !payload || payload.length === 0) return null;
                                return (
                                  <ChartTooltipContent 
                                    nameKey="category"
                                    labelKey="name"
                                    active={active}
                                    payload={payload}
                                    label={label}
                                  />
                                );
                              }}
                            />
                            <Bar 
                              dataKey="value" 
                              fill="#8B5CF6" 
                              radius={[0, 4, 4, 0]}
                              barSize={20}
                              name="Skill Level"
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-primary mb-2">Core Skills</h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-center text-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mr-2" />
                          Python Programming
                        </li>
                        <li className="flex items-center text-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mr-2" />
                          Data Structures & Algorithms
                        </li>
                        <li className="flex items-center text-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mr-2" />
                          Object-Oriented Programming
                        </li>
                        <li className="flex items-center text-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mr-2" />
                          Mathematics for Data Science
                        </li>
                      </ul>
                    </div>
                    <div className="bg-muted rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-primary mb-2">Tools & Libraries</h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-center text-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mr-2" />
                          NumPy, Pandas, Matplotlib
                        </li>
                        <li className="flex items-center text-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mr-2" />
                          Scikit-learn, TensorFlow
                        </li>
                        <li className="flex items-center text-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mr-2" />
                          Database Systems
                        </li>
                        <li className="flex items-center text-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mr-2" />
                          Data Visualization Tools
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <ScrollArea className="h-full w-full">
            <div className="space-y-8 pb-8">
              {/* Education Section */}
              <div className="bg-muted rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Book className="text-primary w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Education</h2>
                </div>
                <div className="space-y-8">
                  {education.map((edu) => (
                    <div key={edu.id} className="relative pl-6 border-l-2 border-primary ml-3">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5"></div>
                      <div className="bg-card p-5 rounded-lg border border-border hover:border-primary/40 transition-all">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{edu.school}</h3>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs inline-flex items-center mt-2 md:mt-0">
                            <Calendar className="w-3 h-3 mr-1" />
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-2">{edu.degree}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Experience Section */}
              <div className="bg-muted rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Briefcase className="text-primary w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Experience</h2>
                </div>
                <div className="space-y-8">
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative pl-6 border-l-2 border-primary ml-3">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5"></div>
                      <div className="bg-card p-5 rounded-lg border border-border hover:border-primary/40 transition-all">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs inline-flex items-center mt-2 md:mt-0">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-2">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Key Areas of Study */}
              <div className="bg-muted rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="text-primary w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Key Areas of Study</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-card border-border hover:bg-muted/80 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Code className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Core Programming</h3>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li>Python Programming</li>
                        <li>Data Structures & Algorithms</li>
                        <li>Object-Oriented Programming</li>
                        <li>Software Development Fundamentals</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border-border hover:bg-muted/80 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Brain className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Data Analytics</h3>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li>Statistical Analysis</li>
                        <li>Data Wrangling & Preparation</li>
                        <li>Visualization Techniques</li>
                        <li>Predictive Modeling</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border-border hover:bg-muted/80 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Database className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Technologies</h3>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li>Database Systems</li>
                        <li>Machine Learning Libraries</li>
                        <li>Big Data Technologies</li>
                        <li>Cloud Computing Platforms</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
