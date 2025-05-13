
import React from 'react';
import Layout from '@/components/Layout';
import { Book, Briefcase, Calendar, Download, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const Resume = () => {
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

  return (
    <Layout>
      <div className="container py-8 md:py-16 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">
          <span className="gradient-text">Resume</span>
        </h1>
        <div className="w-16 h-1 bg-purple-600 mb-8"></div>
        
        {/* Personal Info Section */}
        <div className="bg-secondary rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-600 flex-shrink-0">
              {/* Profile image */}
              <img 
                src="/lovable-uploads/eb347c00-c06d-4953-a4ed-17e725cacabc.png" 
                alt="Ruhid Islam Rahi" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold gradient-text mb-2 text-center md:text-left">{personalInfo.name}</h2>
              <p className="text-muted-foreground mb-4 text-center md:text-left">{personalInfo.title}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">{personalInfo.birthday}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </div>
            
            {/* Download Resume Button */}
            <div className="self-center md:self-start flex-shrink-0">
              <Button variant="default" className="gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
        
        <ScrollArea className="h-full w-full">
          <div className="space-y-12 pb-8">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Book className="text-purple-600 w-6 h-6" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-6 border-l-2 border-purple-600 ml-3">
                    <div className="absolute w-3 h-3 bg-purple-600 rounded-full -left-[7px] top-2"></div>
                    <h3 className="text-xl font-semibold">{edu.school}</h3>
                    <p className="text-gray-400 my-1">{edu.degree}</p>
                    <p className="text-purple-500 my-1">{edu.period}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-purple-600 w-6 h-6" />
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>
              
              <div className="space-y-8">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-purple-600 ml-3">
                    <div className="absolute w-3 h-3 bg-purple-600 rounded-full -left-[7px] top-2"></div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-gray-400 my-1">{exp.company}</p>
                    <p className="text-purple-500 my-1">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </Layout>
  );
};

export default Resume;
