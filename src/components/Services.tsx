import React from 'react';
import { Code2, Smartphone, GraduationCap, Cpu, Sparkles, Palette, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What I Deliver</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Specializations</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Tailored digital solutions built from ground up — from production web applications to academic research prototypes and hardware automation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative flex flex-col justify-between p-7 rounded-2xl bg-[#13151f] border transition-all duration-300 group hover:-translate-y-1 ${
                service.popular
                  ? 'border-amber-400/40 shadow-lg shadow-amber-500/5'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-black text-[11px] font-extrabold uppercase tracking-wide shadow-md">
                  Most Requested
                </div>
              )}

              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-8">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 hover:border-amber-400 transition-all cursor-pointer"
              >
                <span>Request Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
