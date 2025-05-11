
import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skills: Skill[] = [
    { name: 'HTML', level: 95, category: 'frontend' },
    { name: 'CSS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'React', level: 80, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 75, category: 'frontend' },
    { name: 'Node.js', level: 70, category: 'backend' },
    { name: 'Express.js', level: 65, category: 'backend' },
    { name: 'MongoDB', level: 60, category: 'backend' },
    { name: 'Figma', level: 85, category: 'design' },
    { name: 'Adobe XD', level: 70, category: 'design' },
    { name: 'UI/UX Design', level: 80, category: 'design' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
    
  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent mt-2"></div>
        </div>
        
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {['all', 'frontend', 'backend', 'design'].map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 capitalize rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid gap-y-6">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="animate-fade-in">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="h-3 w-full bg-gray-800 rounded-full">
                <div 
                  className="skill-bar" 
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-white border-4 border-purple-600"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold gradient-text">Tools & Technologies</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'MongoDB', 'Figma', 'Git', 'Firebase', 'Redux', 'Next.js', 'Express.js', 'Jest'].map(tool => (
              <div key={tool} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
