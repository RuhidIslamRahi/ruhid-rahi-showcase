import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import SectionHeader from "@/components/SectionHeader";

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "B.Sc. in Data Science (BSDS)",
      institution: "United International University",
      duration: "2023 - 2027(Expected)",
      location: "Dhaka, Bangladesh",
      description: "Specialized in Data Science, Data Analytics and machine learning applications.",
      current: true
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "BAF Shaheen College Dhaka",
      duration: "2020 - 2022",
      location: "Dhaka, Bangladesh",
      description: "GPA:5.00",
      achievements: ["Secretary of Programming In SDITC", "Core focus on Science subjects and Programming."],
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <SectionHeader>Education Journey</SectionHeader>
          <p className="text-muted-foreground mt-4">My academic path and achievements</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            {education.map((edu, index) => (
              <div key={edu.id} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 ${edu.current ? 'bg-primary border-primary' : 'bg-primary border-primary'} relative z-10`}>
                  <GraduationCap className="text-white" size={24} />
                </div>
                
                {/* Content card */}
                <div className="ml-8 flex-1">
                  <div className={`p-6 rounded-lg border ${edu.current ? 'bg-gradient-to-br from-primary/5 to-secondary/5' : 'bg-card'} hover:shadow-lg transition-shadow`}>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${edu.current ? 'bg-primary text-white' : 'bg-secondary text-secondary-foreground'}`}>
                      {edu.current ? 'Current' : 'Completed'}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <h4 className="text-lg font-medium text-primary mb-3">{edu.institution}</h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    
                    {edu.achievements && (
                      <div>
                        <ul className="list-none space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">🎓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;