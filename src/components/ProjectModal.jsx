import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#12131c] border border-[#a855f7]/40 rounded-lg overflow-hidden shadow-2xl text-gray-200 font-mono max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#26283b] bg-[#0b0c10]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7]" />
            <span className="text-xs text-[#c084fc]">project_details.json</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-gray-400 hover:text-white hover:bg-[#26283b] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Banner Image */}
          <div className="relative h-56 rounded border border-[#26283b] overflow-hidden bg-[#0b0c10]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12131c] via-transparent to-transparent" />
          </div>

          {/* Title & Tags */}
          <div>
            <span className="text-xs text-[#a855f7] bg-[#a855f7]/10 border border-[#a855f7]/30 px-2.5 py-1 rounded">
              {project.tech}
            </span>
            <h2 className="text-2xl font-bold text-white mt-3">{project.title}</h2>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-[#c084fc] flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Overview & Business Objective
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">{project.fullDescription || project.description}</p>
          </div>

          {/* Key Achievements & Bullet Points */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-[#c084fc] flex items-center gap-2">
              <BarChart2 className="w-4 h-4" /> Key Insights & Results
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#a855f7] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-2">
            <h4 className="text-xs text-gray-400 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded bg-[#0b0c10] border border-[#26283b] text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#26283b] bg-[#0b0c10]">
          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-white"
          >
            Close Modal [Esc]
          </button>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded border border-[#a855f7] bg-[#a855f7]/10 text-[#c084fc] hover:bg-[#a855f7] hover:text-white transition-all text-xs flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Repository &rarr;</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
