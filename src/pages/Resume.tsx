
import React from 'react';
import Layout from '@/components/Layout';
import { Book, Briefcase, Calendar, Download, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const Resume = () => {
  const education = [
    {
      id: 1,
      school: "BSC In CSE United International University",
      period: "2022 — Present",
      description: "Studying at UIU has helped me grow as a CSE student, team player, and problem-solver, sharpening my technical skills and passion for innovation.",
      details: "Relevant Coursework: OOP (Java), Data Structures & Algorithms (C++), Artificial Intelligence, Database Management Systems, Computer Networks, Digital Logic Design & Microprocessors"
    },
    {
      id: 2,
      school: "Higher Secondary At Police Lines School And College, Rangpur",
      period: "2018 — 2020",
      description: "Completed my HSC exam with a Golden A+ (GPA 5.00) and also gaining strong analytical, problem-solving, and lab skills, while maintaining high academic standards and participating in extracurricular activities."
    },
    {
      id: 3,
      school: "Secondary At Kaliganj H.A High School",
      period: "2018",
      description: "Completed Secondary Education with a Golden A+(GPA 5.00) and also laying a strong academic foundation with a focus on Science. Actively participated in school activities and consistently maintained a high level of academic achievement."
    }
  ];

  const experience = [
    {
      id: 1,
      position: "Organizer, Robotics Segment",
      company: "UIU CSE FEST 2025",
      period: "2025",
      description: "Led the organization of the robotics segment, coordinating activities, managing logistics, and ensuring smooth execution of the robotics-related events."
    },
    {
      id: 2,
      position: "Senior Executive Of Event",
      company: "UIU Robotics Club",
      period: "2024 — Present",
      description: "Assisted in organizing and executing robotics events and competitions, collaborating with team members to ensure smooth operations, and contributing to the growth and success of the club."
    },
    {
      id: 3,
      position: "Junior Executive Of Event And Logistics",
      company: "UIU Robotics Club",
      period: "2023 — 2024",
      description: "Supported the planning and execution of robotics events, handling logistics and coordination to ensure smooth operations and participant engagement."
    }
  ];

  const personalInfo = {
    name: "Khaled Hasan Milu",
    title: "BscCSE | I T E",
    email: "khmilu339@gmail.com",
    phone: "+880 1784-000-533",
    birthday: "August 3",
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
              {/* Profile image placeholder */}
              <div className="w-full h-full bg-purple-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{personalInfo.name.charAt(0)}</span>
              </div>
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
                    <p className="text-purple-500 my-1">{edu.period}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                    {edu.details && (
                      <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
                    )}
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
