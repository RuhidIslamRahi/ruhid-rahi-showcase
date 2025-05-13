
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Brain, Robot, Globe, Code, Database, ChartBar } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skills: Skill[] = [
    // Programming
    { name: 'Python', level: 85, category: 'programming' },
    { name: 'Data Structures & Algorithms', level: 75, category: 'programming' },
    { name: 'Object-Oriented Programming', level: 80, category: 'programming' },
    
    // Math & Statistics
    { name: 'Linear Algebra', level: 70, category: 'math' },
    { name: 'Calculus', level: 65, category: 'math' },
    { name: 'Probability & Statistics', level: 80, category: 'math' },
    
    // Data Tools
    { name: 'NumPy', level: 85, category: 'tools' },
    { name: 'Pandas', level: 90, category: 'tools' },
    { name: 'Matplotlib', level: 75, category: 'tools' },
    { name: 'Scikit-learn', level: 70, category: 'tools' },
    { name: 'Jupyter', level: 85, category: 'tools' },
    
    // Advanced ML
    { name: 'Machine Learning', level: 75, category: 'ml' },
    { name: 'Deep Learning', level: 65, category: 'ml' },
    { name: 'Regression Analysis', level: 80, category: 'ml' },
    { name: 'Bayesian Statistics', level: 60, category: 'ml' },
    
    // Domains
    { name: 'NLP', level: 65, category: 'domains' },
    { name: 'Spatial Analytics', level: 60, category: 'domains' },
    { name: 'Data Visualization', level: 80, category: 'domains' },
    { name: 'Database Systems', level: 75, category: 'domains' },
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
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            My program blends foundational theory with practical applications across data science, programming, and system design.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-gray-800/60 p-1 rounded-lg">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2"
                onClick={() => setActiveCategory('all')}
              >
                All Skills
              </TabsTrigger>
              <TabsTrigger 
                value="programming" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2"
                onClick={() => setActiveCategory('programming')}
              >
                Programming
              </TabsTrigger>
              <TabsTrigger 
                value="math" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2"
                onClick={() => setActiveCategory('math')}
              >
                Mathematics
              </TabsTrigger>
              <TabsTrigger 
                value="tools" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2"
                onClick={() => setActiveCategory('tools')}
              >
                Tools
              </TabsTrigger>
              <TabsTrigger 
                value="ml" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2"
                onClick={() => setActiveCategory('ml')}
              >
                Machine Learning
              </TabsTrigger>
              <TabsTrigger 
                value="domains" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2"
                onClick={() => setActiveCategory('domains')}
              >
                Domains
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeCategory} className="mt-0">
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
          </TabsContent>
        </Tabs>
        
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-900/50 p-3 rounded-lg">
                  <Brain className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Core Areas</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Python Programming (incl. OOP, Data Structures & Algorithms)</li>
                <li>Mathematics for Data Science – Linear Algebra, Calculus, Probability & Statistics</li>
                <li>Database Systems, Data Visualization, Simulation & Modeling</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-900/50 p-3 rounded-lg">
                  <Robot className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Advanced ML & Analytics</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Machine Learning, Deep Learning, Regression, and Bayesian Statistics</li>
                <li>Applied projects on Data Wrangling, NLP, Computer Vision, and Recommender Systems</li>
                <li>Capstone Project Series (3 phases) focused on solving real-world data challenges</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-900/50 p-3 rounded-lg">
                  <Globe className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Domain Interests & Tools</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Exploring NLP, Spatial Analytics, Health Informatics, and Marketing Analytics</li>
                <li>Skilled with tools like NumPy, Pandas, Matplotlib, Scikit-learn, and Jupyter</li>
                <li>This program is equipping me with the technical and analytical skills to thrive in data-driven roles</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold gradient-text">Technologies & Tools</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter',
              'SQL', 'Git', 'TensorFlow', 'PyTorch', 'Tableau', 'Power BI'].map(tool => (
              <div key={tool} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-purple-900/40 hover:border-purple-500 border border-gray-700 transition-all">
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
