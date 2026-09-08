import React from 'react';
import { MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 left-6 z-40">
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/25 hover:scale-110 active:scale-95 transition-all"
        aria-label="Direct Chat on WhatsApp with Bhumi"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
        <div className="absolute left-16 px-3 py-1.5 rounded-xl bg-[#13151f] text-white border border-white/10 text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp: +91 7875742032 💬
        </div>
      </a>
    </aside>
  );
};
