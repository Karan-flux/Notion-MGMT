import React, { useState } from 'react';
import { SERVICES } from '../data/notionData';
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: (defaultType?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const handleMobileToggle = (id: string) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
    setSelectedServiceId(id);
  };

  return (
    <section id="services" className="relative w-full py-20 lg:py-32 bg-[#0C0C0F] text-white overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-10">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#AAE41B] mb-3">
              <span className="w-8 h-px bg-[#AAE41B]" />
              <span>CAPABILITIES &amp; OFFERINGS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-bold uppercase tracking-tight leading-[0.9] text-white">
              WE DON'T JUST REACH AUDIENCES.{" "}
              <span className="text-[#AAE41B] block">WE MOVE THEM.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We build creator-first campaigns, social strategies, and digital
              communities that put brands and artists at the center of culture —
              not on the sidelines.
            </p>
          </div>
        </div>

        {/* Desktop Split Editorial View (Visible on lg+) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* Left Services List */}
          <div className="col-span-6 xl:col-span-6 space-y-2">
            {SERVICES.map((service) => {
              const isCurrent = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setSelectedServiceId(service.id)}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`group p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isCurrent
                      ? 'bg-white/[0.06] border-[#AAE41B]/40 shadow-xl'
                      : 'bg-transparent border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm tracking-widest transition-colors ${
                        isCurrent ? 'text-[#AAE41B] font-bold' : 'text-zinc-500'
                      }`}>
                        {service.number}
                      </span>
                      <h3 className={`text-2xl xl:text-3xl font-heading uppercase font-bold tracking-tight transition-colors ${
                        isCurrent ? 'text-white' : 'text-zinc-400 group-hover:text-white'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isCurrent
                        ? 'bg-[#AAE41B] text-black rotate-45'
                        : 'bg-white/5 text-zinc-500 group-hover:bg-white/10 group-hover:text-white'
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm font-light pl-10 pr-6 line-clamp-2">
                    {service.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Sticky Visual Display Panel */}
          <div className="col-span-6 xl:col-span-6 sticky top-28">
            <div className="p-8 rounded-3xl bg-[#121216] border border-white/10 shadow-2xl relative overflow-hidden">
              
              {/* Media Preview Stage */}
              <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden mb-8 border border-white/10 group">
                <img
                  src={activeService.image}
                  alt={activeService.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest bg-black/80 backdrop-blur-md text-[#AAE41B] border border-[#AAE41B]/30">
                    {activeService.focusArea}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span>SERVICE REF: #{activeService.number}</span>
                  <span className="text-[#AAE41B]">VERIFIED CAPABILITY</span>
                </div>
              </div>

              {/* Service Meta Content */}
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-[#AAE41B] uppercase tracking-widest mb-1">
                    {activeService.number} // CORE SERVICE
                  </div>
                  <h3 className="text-3xl font-heading uppercase text-white font-bold leading-tight">
                    {activeService.title}
                  </h3>
                  <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Key Deliverables Pills */}
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
                    KEY CAMPAIGN DELIVERABLES:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((deliv, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#AAE41B] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <button
                    onClick={() => onOpenContact(activeService.title)}
                    className="group inline-flex items-center gap-2.5 bg-[#AAE41B] text-black font-heading text-sm uppercase tracking-wider font-bold px-6 py-3.5 rounded-full hover:bg-white transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <span>INQUIRE ABOUT {activeService.title}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="hidden xl:flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <Sparkles className="w-3.5 h-3.5 text-[#AAE41B]" />
                    <span>BESPOKE BRIEFING</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Mobile & Tablet Interactive Accordion View (Visible on < lg) */}
        <div className="lg:hidden space-y-4">
          {SERVICES.map((service) => {
            const isExpanded = expandedMobileId === service.id;
            return (
              <div
                key={service.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-white/[0.06] border-[#AAE41B]/40'
                    : 'bg-white/[0.02] border-white/10'
                }`}
              >
                {/* Accordion Row Header */}
                <button
                  onClick={() => handleMobileToggle(service.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs text-[#AAE41B] font-bold">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading uppercase text-white font-bold leading-tight">
                        {service.title}
                      </h3>
                      <div className="text-xs text-zinc-400 font-normal mt-0.5 line-clamp-1">
                        {service.tagline}
                      </div>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-2 transition-transform duration-300 ${
                    isExpanded ? 'bg-[#AAE41B] text-black rotate-90' : 'bg-white/10 text-white'
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-white/5 space-y-5 animate-in fade-in duration-300">
                    <div className="w-full aspect-16/9 rounded-xl overflow-hidden mt-3 border border-white/10">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                        KEY DELIVERABLES:
                      </div>
                      <div className="space-y-1.5">
                        {service.deliverables.map((d, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#AAE41B] shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenContact(service.title)}
                      className="w-full flex items-center justify-center gap-2 bg-[#AAE41B] text-black font-heading text-sm uppercase font-bold py-3.5 rounded-xl hover:bg-white transition-all cursor-pointer shadow-md"
                    >
                      <span>INQUIRE ABOUT {service.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
