import React from 'react';
import { X, Download, Printer, ExternalLink, GraduationCap, Briefcase, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0f111a] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#141624]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold text-sm">
              CV
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-none">
                Bhumi Jadhav — Curriculum Vitae
              </h3>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                BSc IT Graduate • Mumbai • Updated 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Bhumi-Jadhav-Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-lg shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-red-500/20 hover:text-red-300 rounded-lg transition-colors cursor-pointer"
              title="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content (Formatted clean like the original PDF) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-zinc-900 font-sans print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-zinc-800 pb-3 mb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 uppercase">
              Bhumi Jadhav
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-600 mt-1.5 font-medium">
              <a href="mailto:jadhavbhumi02@gmail.com" className="hover:text-amber-600">
                jadhavbhumi02@gmail.com
              </a>
              <span>•</span>
              <a href="tel:+917875742032" className="hover:text-amber-600">
                7875742032
              </a>
              <span>•</span>
              <span>Mumbai</span>
              <span>•</span>
              <a
                href="https://createwithbhumi.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>createwithbhumi.netlify.app/</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify">
              Motivated and curious BSc IT graduate with a strong interest in web development and application development. Seeking an entry-level opportunity to apply Java, Python, React, SQL, HTML and CSS skills, learn from real-world projects, and contribute to building reliable, user-friendly digital solutions.
            </p>
          </div>

          {/* Education */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between text-xs">
                <div>
                  <div className="font-bold text-zinc-900 text-sm">BSc IT, Dnyansadhana College</div>
                  <div className="text-zinc-600 font-medium">University of Mumbai • CGPA: 8.60</div>
                </div>
                <div className="text-zinc-600 font-semibold sm:text-right mt-0.5 sm:mt-0">
                  <div>2026</div>
                  <div className="text-[11px] text-zinc-500 font-normal">Thane</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between text-xs">
                <div>
                  <div className="font-bold text-zinc-900">Higher Secondary, Thirani College</div>
                </div>
                <div className="text-zinc-600 font-semibold sm:text-right">
                  <div>2023</div>
                  <div className="text-[11px] text-zinc-500 font-normal">Thane</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between text-xs">
                <div>
                  <div className="font-bold text-zinc-900">Secondary Education, Little Flower High School</div>
                </div>
                <div className="text-zinc-600 font-semibold sm:text-right">
                  <div>2021</div>
                  <div className="text-[11px] text-zinc-500 font-normal">Thane (W)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
              <div>
                <span className="font-bold text-zinc-900">Languages: </span>
                <span className="text-zinc-700">C, C++, Java, Python</span>
              </div>
              <div>
                <span className="font-bold text-zinc-900">Database: </span>
                <span className="text-zinc-700">MySQL</span>
              </div>
              <div>
                <span className="font-bold text-zinc-900">Web: </span>
                <span className="text-zinc-700">HTML, CSS, JavaScript, React</span>
              </div>
              <div>
                <span className="font-bold text-zinc-900">Concepts: </span>
                <span className="text-zinc-700">OOP, JDBC, Advanced Java</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Projects
            </h2>
            <div className="space-y-3.5 text-xs text-zinc-700">
              {/* Project 1 */}
              <div>
                <div className="font-bold text-zinc-900 text-sm">Smart Traffic System</div>
                <p className="mt-1 leading-relaxed">
                  Designed an intelligent traffic-management concept to monitor and optimize vehicle flow using sensors and data analytics. Proposed dynamic traffic-signal adjustment based on road conditions to reduce congestion and intersection waiting time. Focused on improving road safety and enabling smoother, more efficient urban transportation.
                </p>
              </div>

              {/* Project 2 */}
              <div>
                <div className="font-bold text-zinc-900 text-sm">
                  AI Resume Analyzer{' '}
                  <span className="font-normal italic text-zinc-600 text-xs">
                    (Python, Flask, Gemini AI, HTML, CSS, JavaScript)
                  </span>
                </div>
                <p className="mt-1 leading-relaxed">
                  Developed an AI-powered web application that evaluates resumes against specific job roles. Implemented ATS-style scoring, technical-skill extraction, missing-keyword identification, and personalized improvement recommendations. Built a responsive interface for resume upload and analysis, and deployed the application on Render.
                </p>
              </div>

              {/* Project 3 */}
              <div>
                <div className="font-bold text-zinc-900 text-sm">
                  JavaQuest – Gamified Learning Platform{' '}
                  <span className="font-normal italic text-zinc-600 text-xs">
                    (Java, Web Development, AI)
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 mt-1 space-y-1">
                  <li>Developed a Duolingo-inspired platform for learning Java and other programming technologies through interactive lessons and quizzes.</li>
                  <li>Designed structured learning paths to make programming education engaging and beginner-friendly.</li>
                  <li>Deployed a user-friendly web application with an interactive learning experience.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Soft Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-zinc-800">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                <span>Problem Solving</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                <span>Decision Making</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                <span>Teamwork</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                <span>Communication</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Languages
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-zinc-800">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                <span>English</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                <span>French</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                <span>Hindi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                <span>Marathi</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-[#141624] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-400">
            Official PDF verified • Open for Entry-Level, Full-Time & Freelance Roles
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Bhumi-Jadhav-Resume.pdf"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
