// src/components/Skills.jsx

import SkillCard from './SkillCard.jsx';
// Import the icons you need
import { Code, GitBranch, Terminal, Database, Cloud, Cog } from 'lucide-react'; 

function Skills() {
  // 1. UPDATED DATA STRUCTURE: An array of category objects.
  // Each object has a title and a list of skills within that category.
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <Code size={24} /> },
        { name: "JavaScript (ES6+)", icon: <Code size={24} /> },
        { name: "HTML5 & CSS3", icon: <Code size={24} /> },
        { name: "Tailwind CSS", icon: <Code size={24} /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <Terminal size={24} /> },
        { name: "Java", icon: <Code size={24} /> },
        { name: "PostgreSQL", icon: <Database size={24} /> },
        { name: "MongoDB", icon: <Database size={24} /> },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub", icon: <GitBranch size={24} /> },
        { name: "Docker", icon: <Cog size={24} /> },
        { name: "GCP", icon: <Cloud size={24} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My Tech Stack
        </h2>
        
        {/* 2. UPDATED RENDERING LOGIC: Use a nested map. */}
        {/* First, map over the categories. */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              {/* Render the category title */}
              <h3 className="text-2xl font-semibold text-center text-indigo-400 mb-6">{category.title}</h3>
              
              {/* Then, map over the skills within that category to create the grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
