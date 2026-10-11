import React, { useState } from 'react';
import { CASE_STUDIES, type CaseStudy } from '../data/notionData';
import { ArrowUpRight, BarChart3, Share2, Eye, Sparkles, X } from 'lucide-react';

interface SelectedWorkProps {
  onOpenContact: (defaultType?: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenContact }) => {
  const [filter, setFilter] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<CaseStudy | null>(null);

  const categories = ['ALL', 'CREATOR CAMPAIGN', 'EVENT CAMPAIGN', 'FILM & TELEVISION'];

  const filteredProjects = filter === 'ALL'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((p) => p.category === filter);

  return (
    <section id="work" className="relative w-full py-20 lg:py-32 bg-[#09090B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 lg:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#AAE41B] mb-3">
              <span className="w-8 h-px bg-[#AAE41B]" />
              <span>CURATED ARCHIVE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-bold uppercase tracking-tight leading-[0.9] text-white">
              THE WORK SPEAKS.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-3 max-w-xl font-normal">
              Culture moves quickly. The right ideas move with it.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-[#AAE41B] text-black border-[#AAE41B] font-bold shadow-md'
                    : 'bg-white/[0.03] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Card 1: Franky Rizardo (Featured Hero Card - 12 columns) */}
          {filteredProjects.find(p => p.id === 'franky-rizardo') && (
            <div
              onClick={() => setActiveModalProject(CASE_STUDIES.find(p => p.id === 'franky-rizardo') || null)}
              className="md:col-span-12 group relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 cursor-pointer shadow-2xl transition-all duration-500 hover:border-[#AAE41B]/50"
            >
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[360px] sm:min-h-[460px]">
                <img
                  src={CASE_STUDIES[0].image}
                  alt={CASE_STUDIES[0].title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase font-bold tracking-widest bg-black/80 backdrop-blur-md text-[#AAE41B] border border-[#AAE41B]/30">
                    {CASE_STUDIES[0].category}
                  </span>
                </div>

                {/* Bottom Card Content */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-heading uppercase text-white font-bold leading-none">
                      {CASE_STUDIES[0].title}
                    </h3>
                    <div className="text-lg sm:text-xl font-heading text-[#AAE41B] uppercase font-semibold mt-1">
                      {CASE_STUDIES[0].subtitle}
                    </div>
                    <p className="text-zinc-300 text-xs sm:text-sm max-w-xl mt-2 line-clamp-2">
                      {CASE_STUDIES[0].summary}
                    </p>
                  </div>

                  {/* Verified Stats Block */}
                  <div className="flex items-center gap-6 sm:gap-8 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 shrink-0">
                    <div>
                      <div className="text-2xl sm:text-3xl font-heading font-bold text-white leading-none">
                        {CASE_STUDIES[0].reach}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase mt-0.5">Total Reach</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AAE41B] leading-none">
                        {CASE_STUDIES[0].engagement}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase mt-0.5">Engagement</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <div className="text-2xl sm:text-3xl font-heading font-bold text-white leading-none">
                        {CASE_STUDIES[0].shares}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase mt-0.5">Organic Shares</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Remaining Project Cards (Asymmetric Grid) */}
          {filteredProjects.filter(p => p.id !== 'franky-rizardo').map((project, idx) => {
            const isWide = idx % 3 === 0 || idx === 3;
            const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className={`${colSpan} group relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 cursor-pointer shadow-xl transition-all duration-500 hover:border-[#AAE41B]/50 flex flex-col justify-between`}
              >
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest bg-black/80 backdrop-blur-md text-[#AAE41B] border border-[#AAE41B]/30">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#AAE41B] group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content & Stats */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-heading uppercase text-white font-bold leading-tight">
                      {project.title}
                    </h3>
                    <div className="text-sm font-heading uppercase text-[#AAE41B] font-semibold">
                      {project.subtitle}
                    </div>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-2 line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Micro stats */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-zinc-300">
                      <Eye className="w-3.5 h-3.5 text-[#AAE41B]" />
                      <span>{project.reach} Reach</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-300">
                      <BarChart3 className="w-3.5 h-3.5 text-[#AAE41B]" />
                      <span>{project.engagement} Rate</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-300">
                      <Share2 className="w-3.5 h-3.5 text-[#AAE41B]" />
                      <span>{project.shares} Shares</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenContact()}
            className="group inline-flex items-center gap-3 bg-white/5 border border-white/20 text-white font-heading text-base uppercase tracking-wider font-bold px-8 py-4 rounded-full hover:bg-[#AAE41B] hover:text-black hover:border-[#AAE41B] transition-all duration-300 cursor-pointer shadow-lg"
          >
            <span>DISCUSS YOUR RELEASE OR EVENT CAMPAIGN</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-300"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111115] border border-white/20 p-6 sm:p-10 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-[#AAE41B] hover:text-black flex items-center justify-center transition-all cursor-pointer z-30"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden mb-8 border border-white/10">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase font-bold tracking-widest bg-black/80 backdrop-blur-md text-[#AAE41B] border border-[#AAE41B]/30">
                  {activeModalProject.category}
                </span>
              </div>
            </div>

            {/* Modal Title & Stats */}
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl sm:text-5xl font-heading uppercase text-white font-bold">
                  {activeModalProject.title}
                </h3>
                <div className="text-xl font-heading text-[#AAE41B] uppercase font-semibold mt-1">
                  {activeModalProject.subtitle}
                </div>
              </div>

              {/* Verified Performance Metrics */}
              <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <div>
                  <div className="text-3xl font-heading font-bold text-white">{activeModalProject.reach}</div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase mt-0.5">Verified Reach</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-[#AAE41B]">{activeModalProject.engagement}</div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase mt-0.5">Engagement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-white">{activeModalProject.shares}</div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase mt-0.5">Organic Shares</div>
                </div>
              </div>

              {/* Strategy Breakdown */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-[#AAE41B] uppercase tracking-widest">
                  CAMPAIGN STRATEGY &amp; EXECUTION:
                </div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {activeModalProject.detailedStrategy}
                </p>
              </div>

              {/* Highlight Callout */}
              <div className="p-4 rounded-xl bg-[#AAE41B]/10 border border-[#AAE41B]/30 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#AAE41B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-zinc-200">
                  <strong className="text-[#AAE41B]">KEY IMPACT: </strong>
                  {activeModalProject.highlight}
                </div>
              </div>

              {/* Platforms */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono text-zinc-400 uppercase mr-2">Platforms Activated:</span>
                {activeModalProject.platforms.map((p) => (
                  <span key={p} className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    {p}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenContact(activeModalProject.title);
                  }}
                  className="inline-flex items-center gap-2 bg-[#AAE41B] text-black font-heading text-sm uppercase tracking-wider font-bold px-7 py-3.5 rounded-full hover:bg-white transition-all cursor-pointer"
                >
                  <span>START A SIMILAR CAMPAIGN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="text-xs font-mono text-zinc-500">
                  VERIFIED ARCHIVE CASE STUDY
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
