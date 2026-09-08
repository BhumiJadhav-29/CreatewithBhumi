import React from 'react';
import { Check, Sparkles, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/portfolioData';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 relative bg-[#0e1017]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Low & Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Affordable <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Plans for Everyone</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Budget-friendly pricing crafted for college students, local shops, and emerging startups. High quality engineering without heavy agency rates.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#1c1e30] to-[#121422] border-2 border-amber-400 shadow-2xl shadow-amber-500/15 lg:-translate-y-2'
                  : 'bg-[#13151f] border border-white/10 hover:border-white/20 shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-black text-[10px] font-black uppercase tracking-wider shadow-lg whitespace-nowrap">
                  Most Popular • Student Choice
                </div>
              )}

              <div>
                {/* Plan Name & Tagline */}
                <h3 className="text-xl font-bold text-white mb-1.5">
                  {plan.name}
                </h3>
                <p className="text-xs text-zinc-400 mb-5 min-h-[34px] leading-relaxed">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-5 pb-5 border-b border-white/10">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium">
                    ({plan.usdPrice})
                  </span>
                </div>

                {/* Suitable For */}
                <div className="text-[11px] font-semibold text-amber-300/90 mb-5">
                  Target: <span className="text-zinc-300 font-normal">{plan.suitableFor}</span>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-amber-400/15 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-black shadow-lg shadow-amber-500/25'
                    : 'bg-white/5 hover:bg-amber-400 hover:text-black text-zinc-200 border border-white/15 hover:border-amber-400'
                }`}
              >
                <span>Select {plan.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Academic / IoT Project Banner */}
        <div className="p-8 rounded-3xl bg-[#13151f] border border-amber-400/25 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Looking for an Academic Capstone, Final Year, or Research Project?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                I assist students with BSc IT, Engineering, and Diploma final-year projects, IoT circuit integration, Java backend architecture, and technical documentation at student-friendly rates.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectPlan('Academic Project')}
            className="shrink-0 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            Custom Student Quote
          </button>
        </div>

      </div>
    </section>
  );
};
