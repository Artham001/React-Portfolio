// src/components/Skills.jsx

import SkillCard from './SkillCard'; // <-- 1. IMPORT our new component

function Skills() {
  const skillsList = [
    { name: "React" },
    { name: "JavaScript (ES6+)" },
    { name: "Node.js" },
    { name: "Tailwind CSS" },
    { name: "HTML5 & CSS3" },
    { name: "Git & GitHub" },
    { name: "Java" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "GCP" },
    { name: "Docker" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Tech Stack
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* 2. USE SkillCard and PASS the prop */}
          {skillsList.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;