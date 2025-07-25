import SectionHeader from "@/components/SectionHeader";

const SkillsSection = () => {
  const programmingLanguages = [
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "HTML", color: "bg-orange-600" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "Python", color: "bg-blue-700" },
  ];

  const frameworks = [
    { name: "React.js", color: "bg-cyan-500" },
    { name: "Next.js", color: "bg-black" },
    { name: "Express.js", color: "bg-gray-600" },
    { name: "Tailwind CSS", color: "bg-teal-500" },
    { name: "Pandas", color: "bg-blue-600" },
  ];

  const databases = [
    { name: "MongoDB", color: "bg-green-600" },
  ];

  const others = [
    { name: "NumPy", color: "bg-orange-500" },
    { name: "Scikit-learn", color: "bg-purple-600" },
    { name: "Matplotlib", color: "bg-green-600" },
    { name: "Jupyter", color: "bg-red-600" },
    { name: "Git", color: "bg-cyan-600" },
    { name: "VS Code", color: "bg-blue-600" },
    { name: "Postman", color: "bg-orange-600" },
    { name: "Power BI", color: "bg-yellow-600" },
  ];

  const SkillCard = ({ name, color }: { name: string; color: string }) => (
    <div className="bg-card rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow border">
      <div className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white font-bold text-lg">
          {name.substring(0, 2).toUpperCase()}
        </span>
      </div>
      <h3 className="font-medium text-center text-foreground">{name}</h3>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <SectionHeader>My Skills</SectionHeader>
        </div>

        {/* Programming Languages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-2 text-foreground">Programming Languages</h3>
          <p className="text-center text-muted-foreground mb-8">
            I am proficient in the following programming languages and always eager to explore new ones: 🚀
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {programmingLanguages.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} color={skill.color} />
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-2 text-foreground">Frameworks</h3>
          <p className="text-center text-muted-foreground mb-8">
            I am a fast learner, able to quickly adapt to new frameworks across various tech stacks. Here are some I've worked with: 🚀
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {frameworks.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} color={skill.color} />
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-2 text-foreground">Databases</h3>
          <p className="text-center text-muted-foreground mb-8">
            I have experience working with various databases and data technologies:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {databases.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} color={skill.color} />
            ))}
          </div>
        </div>

        {/* Others */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-2 text-foreground">Others</h3>
          <p className="text-center text-muted-foreground mb-8">
            I have experience working with various other tools and technologies. Here are some of them: 🚀
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {others.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} color={skill.color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
