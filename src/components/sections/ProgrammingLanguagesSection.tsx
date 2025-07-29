import { Code, Database, BarChart3, Bot, Brain, Box } from 'lucide-react';

const ProgrammingLanguagesSection = () => {
  const languages = [
    { name: 'Python', level: 90, icon: <Box className="w-5 h-5 text-blue-500" /> },
    { name: 'JavaScript', level: 75, icon: <Code className="w-5 h-5 text-yellow-500" /> },
    { name: 'SQL', level: 80, icon: <Database className="w-5 h-5 text-green-500" /> },
    { name: 'R', level: 70, icon: <BarChart3 className="w-5 h-5 text-blue-600" /> },
    { name: 'TensorFlow', level: 65, icon: <Bot className="w-5 h-5 text-orange-500" /> },
    { name: 'PyTorch', level: 60, icon: <Brain className="w-5 h-5 text-red-500" /> },
    { name: 'Pandas', level: 85, icon: <Database className="w-5 h-5 text-purple-500" /> },
    { name: 'NumPy', level: 85, icon: <Box className="w-5 h-5 text-blue-400" /> },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Programming Languages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I am proficient in the following programming languages and always eager to explore new ones: 🚀
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {languages.map((lang) => (
            <div key={lang.name} className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                {lang.icon}
                <span className="font-medium text-foreground">{lang.name}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${lang.level}%` }}
                ></div>
              </div>
              <span className="text-xs text-muted-foreground mt-1 block">{lang.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammingLanguagesSection;