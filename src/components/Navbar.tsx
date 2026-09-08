import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onHireClick: () => void;
  onResumeClick?: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onHireClick, onResumeClick, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c10]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-white focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-black font-black text-lg shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            B
          </div>
          <span>
            BuildWith<span className="text-amber-400">Bhumi</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#13151f]/80 border border-white/5 px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-amber-400 bg-amber-400/10 font-semibold'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onResumeClick || (() => window.open(PERSONAL_INFO.resumeUrl, '_blank'))}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-amber-400 bg-white/5 hover:bg-amber-400/10 border border-white/10 hover:border-amber-400/30 rounded-xl transition-all cursor-pointer"
            title="View & Download Bhumi's Updated Resume"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={onHireClick}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onHireClick}
            className="px-3 py-1.5 text-xs font-bold text-black bg-amber-400 rounded-lg"
          >
            Hire Me
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white bg-white/5 border border-white/10 rounded-xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0c0d14]/95 border-b border-white/10 backdrop-blur-xl px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-amber-400/15 text-amber-400 font-semibold'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onResumeClick) onResumeClick();
                else window.open(PERSONAL_INFO.resumeUrl, '_blank');
              }}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>View & Download Resume (PDF)</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onHireClick();
              }}
              className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 rounded-xl shadow-lg shadow-amber-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start a Project with Bhumi</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
