import React, { useState } from 'react';
import { Sparkles, Terminal, Code, Cpu, Database } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & Languages', 'AI & IoT', 'Database & Tools'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code className="w-4 h-4 text-amber-400" />;
      case 'Backend & Languages':
        return <Terminal className="w-4 h-4 text-amber-400" />;
      case 'AI & IoT':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'Database & Tools':
        return <Database className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#0e1017]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Proficiency</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            A comprehensive suite of programming languages, frameworks, computer vision libraries, and database management systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20 font-bold'
                  : 'bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-[#13151f] border border-white/10 hover:border-amber-400/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {skill.name}
                  </h4>
                  {skill.description && (
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {skill.description}
                    </p>
                  )}
                </div>
                <span className="text-sm font-extrabold text-amber-400 shrink-0 ml-3">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/5 mt-3">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Tech Badges */}
        <div className="mt-14 p-6 rounded-2xl bg-[#13151f]/60 border border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Core Architectural Focus:
          </div>
          <div className="flex flex-wrap gap-2">
            {['React 19', 'Java 17 / Swing', 'Python 3', 'Gemini AI API', 'MySQL', 'OpenCV', 'MediaPipe', 'Arduino C++', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-amber-400/10 text-amber-300 border border-amber-400/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
