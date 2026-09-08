import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Sparkles, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#13151f] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Status & Category */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-amber-400/15 text-amber-300 border border-amber-400/30">
            {project.category.toUpperCase()}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === 'Research Award'
                ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 font-bold'
                : project.status === 'Completed'
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
            }`}
          >
            {project.status === 'Research Award' ? '🏆 Avishkar Research Project' : project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-amber-400 mb-6">
          {project.type}
        </p>

        {/* Image Preview */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Highlights Banner */}
        {project.highlights && (
          <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-sm font-medium text-amber-200">
              {project.highlights}
            </span>
          </div>
        )}

        {/* Detailed Description */}
        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2">
            Project Overview
          </h4>
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {/* Key Features Checklist */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">
              Key Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Technologies Used</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-500/20 transition-all"
            >
              <span>Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 transition-all"
            >
              <Github className="w-4 h-4 text-amber-400" />
              <span>Source Repository</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="flex-1 sm:flex-initial px-5 py-3 rounded-xl font-medium text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors ml-auto cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
