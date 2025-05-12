
import React from 'react';
import Layout from '@/components/Layout';
import { Award, BadgeCheck, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      organization: "Coursera",
      date: "June 2023",
      description: "A comprehensive program covering modern web development technologies including React, Node.js, and MongoDB.",
      icon: <GraduationCap className="h-10 w-10 text-purple-600" />,
    },
    {
      id: 2,
      title: "AWS Certified Developer",
      organization: "Amazon Web Services",
      date: "March 2023",
      description: "Professional certification validating expertise in developing, deploying, and debugging cloud-based applications using AWS.",
      icon: <BadgeCheck className="h-10 w-10 text-purple-600" />,
    },
    {
      id: 3,
      title: "Machine Learning Specialization",
      organization: "Stanford Online",
      date: "December 2022",
      description: "Mastery of machine learning algorithms, data analysis, and implementation of ML solutions for real-world problems.",
      icon: <Award className="h-10 w-10 text-purple-600" />,
    },
  ];

  return (
    <Layout>
      <div className="container py-20 min-h-screen flex items-center">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">My Certifications</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <Card key={cert.id} className="bg-secondary border-none h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                  <p className="text-muted-foreground">{cert.description}</p>
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
