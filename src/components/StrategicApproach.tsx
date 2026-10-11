import React, { useState } from 'react';
import { STRATEGIC_APPROACH } from '../data/notionData';
import { ArrowUpRight, Compass, Lightbulb, Radio, TrendingUp, CheckCircle2 } from 'lucide-react';

interface StrategicApproachProps {
  onOpenContact: (defaultType?: string) => void;
}

export const StrategicApproach: React.FC<StrategicApproachProps> = ({ onOpenContact }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [Compass, Lightbulb, Radio, TrendingUp];

  return (
    <section id="approach" className="relative w-full py-20 lg:py-32 bg-[#09090B] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#AAE41B] mb-3">
            <span className="w-8 h-px bg-[#AAE41B]" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-bold uppercase tracking-tight leading-[0.9] text-white">
            FROM THE FIRST SPARK{" "}
            <span className="text-[#AAE41B] block">TO CULTURAL IMPACT.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            Our framework turns fleeting impressions into durable fan demand
            through four interconnected, strategic phases.
          </p>
        </div>

        {/* Interactive Step Switcher Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {STRATEGIC_APPROACH.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? 'bg-white/[0.08] border-[#AAE41B] shadow-lg'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${
                    isCurrent ? 'text-[#AAE41B]' : 'text-zinc-500'
                  }`}>
                    {step.number}
                  </span>
                  <Icon className={`w-4 h-4 ${
                    isCurrent ? 'text-[#AAE41B]' : 'text-zinc-500'
                  }`} />
                </div>
                <div className={`font-heading uppercase text-lg sm:text-xl font-bold tracking-tight ${
                  isCurrent ? 'text-white' : 'text-zinc-400'
                }`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#111115] border border-white/15 relative overflow-hidden shadow-2xl mb-14">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#AAE41B]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase font-bold tracking-widest bg-[#AAE41B]/15 text-[#AAE41B] border border-[#AAE41B]/30">
                  STAGE {STRATEGIC_APPROACH[activeStep].number} OF 04
                </span>
                <span className="text-zinc-500 font-mono text-xs">•</span>
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  STRATEGIC CAPABILITY
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading uppercase text-white font-bold leading-tight">
                {STRATEGIC_APPROACH[activeStep].headline}
              </h3>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                {STRATEGIC_APPROACH[activeStep].description}
              </p>

              {/* Specific Tactics */}
              <div className="pt-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2.5">
                  CORE METHODOLOGY:
                </div>
                <div className="flex flex-wrap gap-2">
                  {STRATEGIC_APPROACH[activeStep].tactics.map((tactic) => (
                    <span
                      key={tactic}
                      className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-zinc-300"
                    >
                      {tactic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Deliverables Column */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-4">
              <div className="text-xs font-mono text-[#AAE41B] uppercase tracking-widest font-bold">
                KEY OUTPUTS &amp; DELIVERABLES
              </div>

              <div className="space-y-3">
                {STRATEGIC_APPROACH[activeStep].deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#AAE41B] shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300 leading-snug">{d}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenContact(`Strategy - ${STRATEGIC_APPROACH[activeStep].title}`)}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#AAE41B] text-black font-heading text-sm uppercase tracking-wider font-bold py-3.5 rounded-xl hover:bg-white transition-all cursor-pointer shadow-md"
              >
                <span>INITIATE {STRATEGIC_APPROACH[activeStep].title} STAGE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Connected Process Cards (Full View Sequence) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STRATEGIC_APPROACH.map((step, idx) => (
            <div
              key={step.number}
              className={`p-6 rounded-2xl border transition-all ${
                activeStep === idx
                  ? 'border-[#AAE41B]/40 bg-white/[0.04]'
                  : 'border-white/10 bg-white/[0.01]'
              }`}
            >
              <div className="text-2xl font-mono text-zinc-600 font-bold mb-2">
                {step.number}
              </div>
              <h4 className="text-xl font-heading uppercase text-white font-bold mb-2">
                {step.title}
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {step.description.split('.')[0]}.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
