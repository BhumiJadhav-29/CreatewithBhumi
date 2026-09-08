import React from 'react';
import { ArrowRight, Download, Send, Sparkles, MapPin, Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
  onResumeClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onProjectsClick, onResumeClick }) => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
                  Available for Freelance & Roles
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-amber-400/30 text-xs font-semibold text-zinc-200">
                <span className="text-amber-400">🎓</span>
                <span>Academic & Final Year Projects Made</span>
              </div>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-3">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Bhumi Jadhav</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
              <span>{PERSONAL_INFO.tagline}</span>
              <Sparkles className="w-5 h-5 text-amber-400 inline" />
            </h2>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {PERSONAL_INFO.roles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-zinc-200"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Summary Bio */}
            <p className="text-base sm:text-lg text-zinc-400 mb-8 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.summary} From high-performance business web applications to research-grade IoT devices, AI resume tools, and complete academic projects with documentation and viva coaching.
            </p>

            {/* Quick Location & Direct Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-400 mb-8">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="h-3.5 w-px bg-white/10 hidden sm:block" />
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onProjectsClick}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onResumeClick || (() => window.open(PERSONAL_INFO.resumeUrl, '_blank'))}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-400/40 hover:-translate-y-0.5 transition-all cursor-pointer"
                title="View & Download Updated Resume"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>View & Download CV</span>
              </button>

              <button
                onClick={onContactClick}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-400/10 text-zinc-400 hover:text-amber-400 border border-white/10 hover:border-amber-400/30 transition-all"
                aria-label="Bhumi's GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-400/10 text-zinc-400 hover:text-amber-400 border border-white/10 hover:border-amber-400/30 transition-all"
                aria-label="Bhumi's LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/15 text-zinc-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Image & Interactive Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80 md:w-96">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/30 via-yellow-400/20 to-amber-600/10 blur-xl opacity-75 animate-pulse" />

              {/* Profile Card Container */}
              <div className="relative bg-[#13151f] border border-white/15 rounded-3xl p-3 shadow-2xl overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Bhumi Jadhav"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Metric Pill 1 */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0e1017]/90 backdrop-blur-md border border-white/15 rounded-2xl p-3 shadow-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs text-zinc-400">Education</div>
                    <div className="text-sm font-bold text-white">BSc IT Graduate</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-xs text-zinc-400">Research</div>
                    <div className="text-sm font-bold text-amber-400">Avishkar Awardee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Stats Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-zinc-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
