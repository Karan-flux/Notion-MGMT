import React from 'react';
import { ArrowUpRight, Flame, Users, Zap } from 'lucide-react';

interface BrandManifestoProps {
  onOpenContact: (defaultType?: string) => void;
}

export const BrandManifesto: React.FC<BrandManifestoProps> = ({ onOpenContact }) => {
  return (
    <section id="manifesto" className="relative w-full py-20 lg:py-32 bg-[#09090B] overflow-hidden text-white">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#AAE41B]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Top Section Header Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-10 mb-16 lg:mb-24">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#AAE41B] mb-4">
          <span className="w-8 h-px bg-[#AAE41B]" />
          <span>OUR MANIFESTO</span>
        </div>

        {/* Asymmetric Grid: Oversized Headline + Narrative Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-bold uppercase tracking-tight leading-[0.9] text-white">
              ATTENTION IS TEMPORARY.{" "}
              <span className="text-[#AAE41B] block">
                COMMUNITY CREATES DEMAND.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:pt-4">
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              <p>
                We connect creators, communities, content, and culture to build
                campaigns that reach beyond the feed.
              </p>
              <p className="text-[#FAF8F5] font-medium">
                Not just more visibility. More relevance. More conversation.
                More reasons for people to care.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenContact()}
                className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#AAE41B] hover:text-white transition-colors cursor-pointer"
              >
                <span>EXPLORE STRATEGIC PHILOSOPHY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* The Recurring Signature Visual Motif: Dual Angled Counter-Rotating Marquee Tickers */}
      <div className="relative py-12 lg:py-20 my-6 overflow-hidden select-none">
        {/* Upper Lime Ribbon */}
        <div className="w-full transform -rotate-1.5 bg-[#AAE41B] py-3.5 sm:py-5 shadow-2xl relative z-10 overflow-hidden">
          <div className="animate-marquee-left flex items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-8 shrink-0 pr-8">
                <span className="text-black font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight">
                  DON’T FOLLOW THE FEED. INTERRUPT IT.
                </span>
                <span className="text-black/40 font-heading text-4xl sm:text-6xl font-black">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lower White Ribbon Counter-Rotating */}
        <div className="w-full transform rotate-1 bg-white py-3.5 sm:py-5 shadow-2xl relative z-20 -mt-3 sm:-mt-5 overflow-hidden">
          <div className="animate-marquee-right flex items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-8 shrink-0 pr-8">
                <span className="text-black font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight">
                  DON’T FOLLOW THE FEED. INTERRUPT IT.
                </span>
                <span className="text-black/40 font-heading text-4xl sm:text-6xl font-black">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deep-Dive Strategic Pillars */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-10 mt-16 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#AAE41B]/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#AAE41B]/15 text-[#AAE41B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-[#AAE41B] uppercase tracking-wider mb-2">
              01 // CULTURAL FRICTION
            </div>
            <h3 className="text-2xl font-heading uppercase text-white font-bold mb-3">
              RELEVANCE OVER REACH
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Anyone with an ad budget can buy generic impressions. We design
              moments that spark debate, organic remixes, and emotional buy-in.
              If it doesn't cause people to comment, it's invisible.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#AAE41B]/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#AAE41B]/15 text-[#AAE41B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-[#AAE41B] uppercase tracking-wider mb-2">
              02 // FAN ECOSYSTEMS
            </div>
            <h3 className="text-2xl font-heading uppercase text-white font-bold mb-3">
              DECENTRALIZED CHANNELS
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We build fan-page networks and community hubs that surround an
              artist with multiple points of algorithmic discovery. Followers
              convert to active community members.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#AAE41B]/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#AAE41B]/15 text-[#AAE41B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-[#AAE41B] uppercase tracking-wider mb-2">
              03 // REPEATABLE MOMENTUM
            </div>
            <h3 className="text-2xl font-heading uppercase text-white font-bold mb-3">
              COMPOUNDING VALUE
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              One-off viral spikes evaporate by Monday morning. We construct
              repeatable systems of content capture, distribution, and sound
              propagation that grow stronger with every release.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
