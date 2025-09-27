// src/components/Projects.jsx
import ProjectCard from './ProjectCard';

function Projects() {
  // Replace this with your actual project data
  const projectsList = [
    {
      title: "CollabSketch",
      description: "A full-featured e-commerce website with product listings, a shopping cart, and a checkout process. Built with the MERN stack.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://collabsketch-lhw2.onrender.com", // Link to the live demo
      repoUrl: "https://github.com/Artham001/CollabSketch"  // Link to the GitHub repo
    },
    {
      title: "BookMarking API service",
      description: "A secure, multi-user bookmarking API with user authentication and a dedicated PostgreSQL database.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://bookmarking-app.onrender.com",
      repoUrl: "https://github.com/Artham001/Bookmarking-API"
    },
    {
      title: "This Portfolio Website",
      description: "A responsive portfolio website built from scratch to showcase my skills and projects, made with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "https://artham.netlify.app/",
      repoUrl: "https://github.com/Artham001/React-Portfolio"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects I've Built
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;