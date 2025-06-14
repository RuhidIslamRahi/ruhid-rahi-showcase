import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Brain, Bot, Globe, Code, Database, ChartBar, Box, BarChart3 } from 'lucide-react';
import SectionHeader from "@/components/SectionHeader";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: React.ReactNode;
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skills: Skill[] = [
    // Programming
    {
      name: 'Python',
      level: 85,
      category: 'programming',
      icon: <Box className="text-blue-500" strokeWidth={1.5} />
    }, 
    {
      name: 'Data Structures & Algorithms',
      level: 75,
      category: 'programming',
      icon: <Code className="text-green-500" strokeWidth={1.5} />
    }, 
    {
      name: 'Object-Oriented Programming',
      level: 80,
      category: 'programming',
      icon: <Code className="text-yellow-500" strokeWidth={1.5} />
    },
    
    // Math & Statistics
    {
      name: 'Linear Algebra',
      level: 70,
      category: 'math',
      icon: <Brain className="text-purple-400" strokeWidth={1.5} />
    }, 
    {
      name: 'Calculus',
      level: 65,
      category: 'math',
      icon: <Brain className="text-purple-300" strokeWidth={1.5} />
    }, 
    {
      name: 'Probability & Statistics',
      level: 80,
      category: 'math',
      icon: <BarChart3 className="text-purple-500" strokeWidth={1.5} />
    },
    
    // Data Tools
    {
      name: 'NumPy',
      level: 85,
      category: 'tools',
      icon: <Box className="text-blue-400" strokeWidth={1.5} />
    }, 
    {
      name: 'Pandas',
      level: 90,
      category: 'tools',
      icon: <Database className="text-blue-300" strokeWidth={1.5} />
    }, 
    {
      name: 'Matplotlib',
      level: 75,
      category: 'tools',
      icon: <BarChart3 className="text-green-400" strokeWidth={1.5} />
    }, 
    {
      name: 'Scikit-learn',
      level: 70,
      category: 'tools',
      icon: <Brain className="text-orange-400" strokeWidth={1.5} />
    }, 
    {
      name: 'Jupyter',
      level: 85,
      category: 'tools',
      icon: <Box className="text-orange-300" strokeWidth={1.5} />
    },
    
    // Advanced ML
    {
      name: 'Machine Learning',
      level: 75,
      category: 'ml',
      icon: <Bot className="text-blue-500" strokeWidth={1.5} />
    }, 
    {
      name: 'Deep Learning',
      level: 65,
      category: 'ml',
      icon: <Brain className="text-blue-600" strokeWidth={1.5} />
    }, 
    {
      name: 'Regression Analysis',
      level: 80,
      category: 'ml',
      icon: <BarChart3 className="text-purple-500" strokeWidth={1.5} />
    }, 
    {
      name: 'Bayesian Statistics',
      level: 60,
      category: 'ml',
      icon: <Bot className="text-purple-400" strokeWidth={1.5} />
    },
    
    // Domains
    {
      name: 'NLP',
      level: 65,
      category: 'domains',
      icon: <Globe className="text-green-500" strokeWidth={1.5} />
    }, 
    {
      name: 'Spatial Analytics',
      level: 60,
      category: 'domains',
      icon: <Globe className="text-blue-400" strokeWidth={1.5} />
    }, 
    {
      name: 'Data Visualization',
      level: 80,
      category: 'domains',
      icon: <ChartBar className="text-purple-400" strokeWidth={1.5} />
    }, 
    {
      name: 'Database Systems',
      level: 75,
      category: 'domains',
      icon: <Database className="text-blue-500" strokeWidth={1.5} />
    }
  ];
  
  const filteredSkills = activeCategory === 'all' ? skills : skills.filter(skill => skill.category === activeCategory);
  
  return <section id="skills" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <SectionHeader>My Skills</SectionHeader>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">Applications across data science, programming, and system design.</p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto">
            <TabsList className="bg-gray-800/60 p-1 rounded-lg">
              <TabsTrigger value="all" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2" onClick={() => setActiveCategory('all')}>
                All Skills
              </TabsTrigger>
              <TabsTrigger value="programming" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2" onClick={() => setActiveCategory('programming')}>
                Programming
              </TabsTrigger>
              <TabsTrigger value="math" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2" onClick={() => setActiveCategory('math')}>
                Mathematics
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2" onClick={() => setActiveCategory('tools')}>
                Tools
              </TabsTrigger>
              <TabsTrigger value="ml" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2" onClick={() => setActiveCategory('ml')}>
                Machine Learning
              </TabsTrigger>
              <TabsTrigger value="domains" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2" onClick={() => setActiveCategory('domains')}>
                Domains
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSkills.map(skill => (
                <div 
                  key={skill.name} 
                  className="bg-gray-800/30 rounded-xl p-4 hover:bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all animate-fade-in"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-gray-900 p-2 rounded-lg">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-sm md:text-base">{skill.name}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div 
                          key={star}
                          className={`h-1.5 w-4 rounded-full ${
                            Math.round(skill.level / 20) >= star ? 'bg-purple-500' : 'bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-purple-300">{skill.level}%</span>
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
                  <Bot className="text-purple-400" size={24} />
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
            {['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter', 'SQL', 'Git', 'TensorFlow', 'PyTorch', 'Tableau', 'Power BI'].map(tool => (
              <div 
                key={tool} 
                className="bg-gray-800/20 p-4 rounded-lg text-center hover:bg-purple-900/20 border border-gray-700 hover:border-purple-500 transition-all flex items-center justify-center gap-2"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {tool === 'Python' && <Box className="text-blue-500" size={18} />}
                  {tool === 'NumPy' && <Box className="text-blue-400" size={18} />}
                  {tool === 'Pandas' && <Database className="text-blue-300" size={18} />}
                  {tool === 'Matplotlib' && <BarChart3 className="text-green-400" size={18} />}
                  {tool === 'Scikit-learn' && <Brain className="text-orange-400" size={18} />}
                  {tool === 'Jupyter' && <Box className="text-orange-300" size={18} />}
                  {tool === 'SQL' && <Database className="text-purple-400" size={18} />}
                  {tool === 'Git' && <Code className="text-red-400" size={18} />}
                  {tool === 'TensorFlow' && <Bot className="text-yellow-500" size={18} />}
                  {tool === 'PyTorch' && <Bot className="text-red-500" size={18} />}
                  {tool === 'Tableau' && <ChartBar className="text-blue-500" size={18} />}
                  {tool === 'Power BI' && <ChartBar className="text-yellow-400" size={18} />}
                </div>
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};

export default SkillsSection;
