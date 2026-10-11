import React from 'react';
import { ArrowUpRight, Mail, Flame, MessageSquare } from 'lucide-react';

interface FinalCTAProps {
  onOpenContact: (defaultType?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#060608] text-white overflow-hidden border-t border-white/10">
      {/* Background ambient electric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-[#AAE41B]/10 rounded-full blur-[200px] pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 xl:px-10 text-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#AAE41B]/10 border border-[#AAE41B]/30 text-[#AAE41B] text-xs font-mono uppercase tracking-widest mb-8">
          <Flame className="w-3.5 h-3.5 text-[#AAE41B] animate-pulse" />
          <span>NOW ACCEPTING Q1/Q2 PARTNERSHIPS</span>
        </div>

        {/* Oversized Impact Headline */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-extrabold uppercase tracking-tight leading-[0.88] text-white mb-8 max-w-5xl mx-auto">
          LET’S MAKE <br />
          <span className="text-[#AAE41B] inline-block hover:scale-[1.02] transition-transform duration-300">
            IT MOVE.
          </span>
        </h2>

        {/* Narrative Subtitle */}
        <p className="text-lg sm:text-2xl text-[#FAF8F5]/80 font-sans font-normal max-w-2xl mx-auto mb-12 sm:mb-14 leading-relaxed">
          Have an artist, brand, release, or cultural campaign in mind? Let’s create work that interrupts the feed and drives real cultural momentum.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-xl mx-auto mb-16">
          <button
            onClick={() => onOpenContact('Creator campaign')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#AAE41B] text-black font-sans font-bold text-base sm:text-lg tracking-wide hover:bg-[#b8f029] hover:shadow-[0_0_35px_rgba(170,228,27,0.4)] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-black" />
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="mailto:info@notionmgmt.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white/5 hover:bg-white/10 text-white font-sans font-medium text-base sm:text-lg border border-white/15 hover:border-white/30 transition-all duration-300 group cursor-pointer"
          >
            <Mail className="w-5 h-5 text-[#AAE41B]" />
            <span>EMAIL DIRECTLY</span>
            <ArrowUpRight className="w-4 h-4 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
        </div>

        {/* Footer Badges & Metadata */}
        <div className="pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase text-white/40 tracking-wider">RESPONSE TIME</span>
            <span className="text-sm font-sans font-semibold text-[#FAF8F5] mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#AAE41B]" />
              Within 24 Hours
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase text-white/40 tracking-wider">HEADQUARTERS</span>
            <span className="text-sm font-sans font-semibold text-[#FAF8F5] mt-1">
              London NW7, UK
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase text-white/40 tracking-wider">OPERATING SCOPE</span>
            <span className="text-sm font-sans font-semibold text-[#FAF8F5] mt-1">
              UK, Europe &amp; Global
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase text-white/40 tracking-wider">FOUNDED</span>
            <span className="text-sm font-sans font-semibold text-[#AAE41B] mt-1 font-mono">
              EST. 2023
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
