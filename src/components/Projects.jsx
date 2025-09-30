// src/components/Projects.jsx
import ProjectCard from './ProjectCard';

function Projects() {
  // Replace this with your actual project data
  const projectsList = [
    {
      title: "CollabSketch",
      description: "An interactive web application that allows multiple users to draw and chat together in real time.",
      tags: ["JavaScript", "Node.js", "Express", "MongoDB","WebSockets"],
      liveUrl: "https://collabsketch-lhw2.onrender.com", // Link to the live demo
      repoUrl: "https://github.com/Artham001/CollabSketch"  // Link to the GitHub repo
    },
    {
      title: "BookMarking API service",
      description: "A secure, multi-user bookmarking API with user authentication and a dedicated PostgreSQL database.",
      tags: ["JavaScript", "Postgres", "Tailwind CSS","Node.js","Express"],
      liveUrl: "https://bookmarking-app.onrender.com",
      repoUrl: "https://github.com/Artham001/Bookmarking-API"
    },
    {
      title: "This Portfolio Website",
      description: "A responsive portfolio website built from scratch to showcase my skills and projects, made with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "https://artham.netlify.app/",
      repoUrl: "https://github.com/Artham001/React-Portfolio"
    },
    {
      title: "Rate Limiter Middleware using Redis",
      description: "Custom middleware that uses a high-speed Redis database to enforce rate limiting on incoming user requests by tracking user IP addresses and enforcing request limits",
      tags: ["Node.js", "Redis", "JavaScript","Express","Tailwind CSS"],
      liveUrl: "https://rate-limiter.netlify.app/",
      repoUrl: "https://github.com/Artham001/Rate-Limiter-Middleware"
    }
    {
      title: "Serverless URL-Shortener",
      description: "Custom middleware that uses a high-speed Redis database to enforce rate limiting on incoming user requests by tracking user IP addresses and enforcing request limits",
      tags: ["Node.js", "Redis", "JavaScript","Express","Tailwind CSS"],
      liveUrl: "https://serverless-url-shortener-onhjij5fx-artham1503-6988s-projects.vercel.app/",
      repoUrl: "https://github.com/Artham001/ServerLess-URL-Shortener"
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