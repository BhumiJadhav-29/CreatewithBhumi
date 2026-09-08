import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles, FolderCode } from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories: { key: ProjectCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Projects', count: PROJECTS.length },
    { key: 'web', label: 'Web Apps', count: PROJECTS.filter((p) => p.category === 'web').length },
    { key: 'ai', label: 'AI & ML', count: PROJECTS.filter((p) => p.category === 'ai').length },
    { key: 'iot', label: 'IoT & Hardware', count: PROJECTS.filter((p) => p.category === 'iot').length },
    { key: 'java', label: 'Java & Desktop', count: PROJECTS.filter((p) => p.category === 'java').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Works & Research</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            From deployed commercial applications to university research award winners and AI systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20 font-bold'
                  : 'bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedCategory === cat.key ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-[#13151f] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/40 shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13151f] via-transparent to-transparent opacity-80" />

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide backdrop-blur-md shadow-md ${
                      project.status === 'Research Award'
                        ? 'bg-amber-400 text-black border border-amber-300'
                        : project.status === 'Completed'
                        ? 'bg-emerald-500/90 text-white border border-emerald-400/30'
                        : 'bg-blue-500/90 text-white border border-blue-400/30'
                    }`}
                  >
                    {project.status === 'Research Award' ? '🏆 Research Award' : project.status}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-400/90 mb-3">
                    {project.type}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-400/10 text-amber-300">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-amber-400/10 text-zinc-400 hover:text-amber-400 border border-white/10 hover:border-amber-400/30 transition-all"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 px-3.5 py-2 rounded-xl shadow-md shadow-amber-500/20 transition-all"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-medium text-zinc-500 px-2">
                        {project.status === 'In Progress' ? 'Coming Soon' : 'Academic Repo'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Link Callout */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/BhumiJadhav-29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#13151f] hover:bg-[#181b28] border border-white/10 hover:border-amber-400/40 text-zinc-200 hover:text-white transition-all shadow-xl group"
          >
            <FolderCode className="w-5 h-5 text-amber-400 group-hover:rotate-6 transition-transform" />
            <span className="text-sm font-semibold">Explore more open-source code on GitHub (@BhumiJadhav-29)</span>
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
