import React from 'react';
import { ArrowUp, Github, Linkedin, MessageSquare, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNavLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#08090d] border-t border-white/10 pt-16 pb-12 relative text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-black font-black text-sm shadow-md shadow-amber-500/20">
                B
              </div>
              <span>
                BuildWith<span className="text-amber-400">Bhumi</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-sm">
              Crafting modern responsive websites, Java software architecture, AI prompt solutions, and IoT assistive innovations.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-400/10 text-zinc-400 hover:text-amber-400 border border-white/10 hover:border-amber-400/30 transition-all"
                aria-label="Bhumi's GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-400/10 text-zinc-400 hover:text-amber-400 border border-white/10 hover:border-amber-400/30 transition-all"
                aria-label="Bhumi's LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/15 text-zinc-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all"
                aria-label="WhatsApp with Bhumi"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {footerNavLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1 text-zinc-500">
            <span>© 2026 BuildWithBhumi. Designed & Engineered by</span>
            <span className="text-zinc-300 font-medium">{PERSONAL_INFO.name}</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
