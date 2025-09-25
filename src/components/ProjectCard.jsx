// src/components/ProjectCard.jsx
import { Github, ExternalLink } from 'lucide-react';

function ProjectCard({ title, description, tags, liveUrl, repoUrl }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        {/* Render the list of tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-indigo-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Render the links */}
        <div className="flex items-center space-x-4">
          {liveUrl && ( // This is conditional rendering: only show if liveUrl exists
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
              <ExternalLink size={18} className="mr-2" />
              Live Demo
            </a>
          )}
          {repoUrl && ( // Only show if repoUrl exists
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
              <Github size={18} className="mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;