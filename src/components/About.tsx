import React from 'react';
import { Code, Cpu, Award, Sparkles, CheckCircle2, UserCheck, ShieldCheck, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const pillars = [
    {
      icon: Code,
      title: 'Full Stack & Web Dev',
      description: 'Crafting responsive, high-speed web apps with modern React, JavaScript, and Tailwind CSS.',
    },
    {
      icon: Cpu,
      title: 'IoT & Hardware Innovation',
      description: 'Engineering assistive smart devices with Arduino, ultrasonic sensors, and microcontrollers.',
    },
    {
      icon: Award,
      title: 'Avishkar Research Convention',
      description: 'Honored participant and research project creator for assistive blind navigation devices.',
    },
    {
      icon: Sparkles,
      title: 'AI & Prompt Engineering',
      description: 'Integrating Google Gemini LLMs for automated resume screening, intelligent agents, and smart tools.',
    },
  ];

  const highlights = [
    'BSc IT Graduate from Dnyansadhana College, University of Mumbai (CGPA: 8.60)',
    'Specialist in Academic & Final Year Capstone Projects (BSc IT, BCA, MCA, B.E., Diploma)',
    'End-to-end Project Delivery: Source code, IEEE Black Book documentation & Viva preparation',
    'Experience building production web platforms for retail and food businesses',
    'Specialist in Java desktop software architecture, MySQL database design & Gemini AI tools',
    'Creator of Smart Traffic System, JavaQuest learning platform & AI Resume Analyzer',
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0e1017]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">BuildWithBhumi</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            A digital solution studio driven by passion, engineering precision, and user-centric craftsmanship.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Bio & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-[#13151f] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Transforming Ideas into High-Impact Software
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                At <strong className="text-amber-400 font-semibold">BuildWithBhumi</strong>, I bridge the gap between creative visual design and robust software engineering. Whether building production-grade web applications for retail businesses, authoring desktop systems in Java, or fabricating embedded IoT devices for assistive accessibility, I approach every build with curiosity and dedication.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                My work spans commercial client websites (such as <span className="text-zinc-200 font-medium">Chopstix</span> and <span className="text-zinc-200 font-medium">Raju Sandwich</span>), research-recognized hardware projects like the <span className="text-zinc-200 font-medium">Smart Blind Stick</span> presented at the Avishkar Research Convention, and cutting-edge generative AI software like the <span className="text-zinc-200 font-medium">AI Resume Analyzer</span>.
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Quote / Philosophy Card */}
            <div className="flex items-center justify-between p-5 rounded-2xl bg-amber-400/5 border border-amber-400/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Have a unique idea or final year project?</div>
                  <div className="text-xs text-zinc-400">From concept wireframes to deployed code, let's make it happen.</div>
                </div>
              </div>
              <button
                onClick={onContactClick}
                className="hidden sm:inline-flex px-4 py-2 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer shrink-0"
              >
                Discuss Now
              </button>
            </div>
          </div>

          {/* Right Column: 4 Strategic Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#13151f]/80 border border-white/10 hover:border-amber-400/40 hover:bg-[#161926] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Guiding Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-start">
            <UserCheck className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="text-base font-bold text-white mb-2">Student & Peer Friendly</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Transparent, approachable mentorship for BSc IT, Diploma, and Engineering students preparing academic capstones and research demonstrations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-start">
            <Zap className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="text-base font-bold text-white mb-2">Agile & Fast Turnaround</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Rapid prototyping without cutting corners on software hygiene, code formatting, and component reusability.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-start">
            <ShieldCheck className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="text-base font-bold text-white mb-2">Production Quality</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              From responsive touch targets to database security and clean REST endpoints, everything is built to scale smoothly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
