
import React from 'react';
import Layout from '@/components/Layout';
import { Award, BadgeCheck, GraduationCap, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      organization: "Coursera",
      date: "June 2023",
      description: "A comprehensive program covering modern web development technologies including React, Node.js, and MongoDB.",
      icon: <GraduationCap className="h-10 w-10 text-purple-600" />,
      credentialId: null,
      credentialUrl: null,
      image: null,
    },
    {
      id: 2,
      title: "AWS Certified Developer",
      organization: "Amazon Web Services",
      date: "March 2023",
      description: "Professional certification validating expertise in developing, deploying, and debugging cloud-based applications using AWS.",
      icon: <BadgeCheck className="h-10 w-10 text-purple-600" />,
      credentialId: null,
      credentialUrl: null,
      image: null,
    },
    {
      id: 3,
      title: "Machine Learning Specialization",
      organization: "Stanford Online",
      date: "December 2022",
      description: "Mastery of machine learning algorithms, data analysis, and implementation of ML solutions for real-world problems.",
      icon: <Award className="h-10 w-10 text-purple-600" />,
      credentialId: null,
      credentialUrl: null,
      image: null,
    },
    {
      id: 4,
      title: "Introduction to Python",
      organization: "DataCamp",
      date: "May 2025",
      description: "Comprehensive 4-hour course covering Python fundamentals and programming concepts for data science.",
      icon: <Code className="h-10 w-10 text-purple-600" />,
      credentialId: "6fa70eaf528cad8aeeb026db5524d39d8b335b9d",
      credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6fa70eaf528cad8aeeb026db5524d39d8b335b9d",
      image: "/lovable-uploads/a9dfc89e-3ec8-4231-9138-dabaf763d0be.png",
    },
  ];

  return (
    <Layout>
      <div className="container py-20 min-h-screen">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">My Certifications</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <Card key={cert.id} className="bg-secondary border-none h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {cert.image && (
                  <div className="p-4 pb-0">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} Certificate`} 
                        className="rounded-md object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                )}
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold">{cert.title}</CardTitle>
                    {cert.icon}
                  </div>
                  <CardDescription className="text-sm">
                    {cert.organization} · {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{cert.description}</p>
                  {cert.credentialId && (
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-1"><span className="font-medium">Credential ID:</span> {cert.credentialId}</p>
                      {cert.credentialUrl && (
                        <a 
                          href={cert.credentialUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1"
                        >
                          View Certificate <BadgeCheck className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certifications;
